#!/usr/bin/env node

import { createServer } from "node:http";
import { mkdir, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";
import { autosaveKeyForEntry, autosavePacket, createPacket, fail } from "../tools/intake.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const reviewTargetsDir = path.join(repoRoot, "ReviewTargets");
const autosaveRootDir = path.join(repoRoot, "intake", ".autosave");
const port = Number(process.env.PORT || 3011);
const contentTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".gif", "image/gif"],
  [".html", "text/html; charset=utf-8"],
  [".jpeg", "image/jpeg"],
  [".jpg", "image/jpeg"],
  [".js", "text/javascript; charset=utf-8"],
  [".png", "image/png"],
  [".svg", "image/svg+xml"],
  [".webp", "image/webp"],
]);

function getLanAddresses() {
  const addresses = [];
  for (const interfaces of Object.values(os.networkInterfaces())) {
    for (const iface of interfaces || []) {
      if (!iface || iface.internal || iface.family !== "IPv4") continue;
      addresses.push(iface.address);
    }
  }
  return [...new Set(addresses)];
}

async function readJson(request) {
  const chunks = [];
  for await (const chunk of request) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }
  const raw = Buffer.concat(chunks).toString("utf8").trim();
  if (!raw) return {};
  return JSON.parse(raw);
}

async function serveIndex(response) {
  const html = await readFile(path.join(__dirname, "index.html"), "utf8");
  response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  response.end(html);
}

function json(response, statusCode, payload) {
  response.writeHead(statusCode, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function sortReviewEntries(entries) {
  function priority(entry) {
    if (entry.path === "index.html") return 0;
    if (entry.path.startsWith("messages/")) return 1;
    return 2;
  }

  return entries.sort((a, b) => {
    if (a.path === "index.html") return -1;
    if (b.path === "index.html") return 1;
    return priority(a) - priority(b) || a.path.localeCompare(b.path, undefined, { numeric: true });
  });
}

async function listReviewEntries(dir = reviewTargetsDir, prefix = "", isRoot = true) {
  await mkdir(reviewTargetsDir, { recursive: true });
  const entries = await readdir(dir, { withFileTypes: true });
  const reviewEntries = [];
  const hasIndexHtml = entries.some((entry) => entry.isFile() && entry.name.toLowerCase() === "index.html");

  if (!isRoot && hasIndexHtml) {
    reviewEntries.push({
      path: prefix,
      label: `${prefix}/`,
      kind: "directory",
    });
    return reviewEntries;
  }

  for (const entry of entries) {
    const absolutePath = path.join(dir, entry.name);
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      reviewEntries.push(...(await listReviewEntries(absolutePath, relativePath, false)));
      continue;
    }

    if (entry.isFile() && path.extname(entry.name).toLowerCase() === ".html") {
      reviewEntries.push({
        path: relativePath,
        label: relativePath,
        kind: "file",
      });
    }
  }

  return isRoot ? sortReviewEntries(reviewEntries) : reviewEntries;
}

function titleFromEntryPath(entryPath) {
  const rawEntry = String(entryPath || "").trim().replace(/[\\/]+$/, "");
  if (!rawEntry) return "";

  let baseName = rawEntry.split("/").pop() || rawEntry;
  if (rawEntry.toLowerCase().endsWith("/index.html")) {
    baseName = rawEntry.slice(0, -"index.html".length - 1).split("/").pop() || "index";
  } else if (baseName.toLowerCase().endsWith(".html")) {
    baseName = baseName.replace(/\.html$/i, "");
  }

  return baseName
    .split(/[-_ ]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

async function resolveReviewEntry(entryPath) {
  const rawEntry = String(entryPath || "").trim();
  if (!rawEntry) fail("Entry is required.");

  const absolutePath = path.resolve(reviewTargetsDir, rawEntry);
  const relativePath = path.relative(reviewTargetsDir, absolutePath);
  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    fail("Entry must be inside ReviewTargets.");
  }

  const normalizedRelativePath = relativePath.split(path.sep).join("/");
  const entryStat = await stat(absolutePath).catch(() => null);
  if (!entryStat) fail("Entry does not exist.");

  if (entryStat.isDirectory()) {
    const indexPath = path.join(absolutePath, "index.html");
    const indexStat = await stat(indexPath).catch(() => null);
    if (!indexStat || !indexStat.isFile()) fail("Directory entries must contain index.html.");

    return {
      absolutePath: indexPath,
      relativePath: normalizedRelativePath,
      previewRelativeDir: normalizedRelativePath,
      kind: "directory",
    };
  }

  if (!entryStat.isFile()) fail("Entry must be a file or directory.");
  if (path.extname(rawEntry).toLowerCase() !== ".html") fail("Only .html entries can be reviewed.");

  return {
    absolutePath,
    relativePath: normalizedRelativePath,
    previewRelativeDir: path.posix.dirname(normalizedRelativePath),
    kind: "file",
  };
}

async function resolveAutosaveEntry(entryPath) {
  const entry = await resolveReviewEntry(entryPath);
  return {
    ...entry,
    autosaveDir: path.join(autosaveRootDir, autosaveKeyForEntry(entry.relativePath)),
  };
}

async function readDraftPacket(entryPath) {
  const entry = await resolveAutosaveEntry(entryPath);
  const referencePath = path.join(entry.autosaveDir, "reference.md");
  const codePath = path.join(entry.autosaveDir, "code.html");

  try {
    const [referenceMd, codeHtml] = await Promise.all([
      readFile(referencePath, "utf8"),
      readFile(codePath, "utf8"),
    ]);
    return { entry: entry.relativePath, referenceMd, codeHtml };
  } catch {
    return null;
  }
}

async function servePreview(response, entryPath) {
  const entry = await resolveReviewEntry(entryPath);
  const html = await readFile(entry.absolutePath, "utf8");
  const entryDir = entry.previewRelativeDir;
  const basePath = entryDir === "."
    ? "/preview-assets/"
    : `/preview-assets/${entryDir}/`;
  const htmlWithBase = html.replace(/<head(\s[^>]*)?>/i, (match) => `${match}\n<base href="${basePath}">`);
  response.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" });
  response.end(htmlWithBase);
}

async function servePreviewAsset(response, assetPath) {
  const absolutePath = path.resolve(reviewTargetsDir, assetPath.replace(/^\/+/, ""));
  const relativePath = path.relative(reviewTargetsDir, absolutePath);
  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    fail("Asset must be inside ReviewTargets.");
  }

  const body = await readFile(absolutePath);
  const contentType = contentTypes.get(path.extname(absolutePath).toLowerCase()) || "application/octet-stream";
  response.writeHead(200, { "content-type": contentType, "cache-control": "no-store" });
  response.end(body);
}

function renderMarkdownBlock(text) {
  const lines = String(text || "").replace(/\r\n/g, "\n").split("\n");
  const html = [];
  let listOpen = false;

  const closeList = () => {
    if (listOpen) {
      html.push("</ul>");
      listOpen = false;
    }
  };

  for (const line of lines) {
    if (!line.trim()) {
      closeList();
      continue;
    }
    if (line.startsWith("### ")) {
      closeList();
      html.push(`<h3>${escapeHtml(line.slice(4))}</h3>`);
      continue;
    }
    if (line.startsWith("## ")) {
      closeList();
      html.push(`<h2>${escapeHtml(line.slice(3))}</h2>`);
      continue;
    }
    if (line.startsWith("# ")) {
      closeList();
      html.push(`<h1>${escapeHtml(line.slice(2))}</h1>`);
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      if (!listOpen) {
        html.push("<ul>");
        listOpen = true;
      }
      html.push(`<li>${escapeHtml(line.replace(/^[-*]\s+/, ""))}</li>`);
      continue;
    }
    closeList();
    html.push(`<p>${escapeHtml(line)}</p>`);
  }

  closeList();
  return html.join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildPacketHtml(referenceMd, packetRelativePath) {
  const baseHref = `/packet-assets/${packetRelativePath.replace(/\\/g, "/")}/`;
  const body = /<[a-z][\s\S]*>/i.test(referenceMd) ? referenceMd : renderMarkdownBlock(referenceMd);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <base href="${baseHref}">
    <style>
      :root { color-scheme: dark; }
      body { margin: 0; padding: 32px; background: #0b0b0b; color: #f5f5f5; font-family: Inter, system-ui, sans-serif; }
      .packet-doc { max-width: 1100px; margin: 0 auto; line-height: 1.6; }
      .packet-doc img { max-width: 100%; height: auto; display: block; margin: 16px 0; border-radius: 10px; }
      h1, h2, h3 { line-height: 1.15; }
      ul { padding-left: 1.4rem; }
      p { margin: 0 0 1rem; }
    </style>
  </head>
  <body>
    <main class="packet-doc">${body}</main>
  </body>
</html>`;
}

async function servePacketView(response, packetRelativePath) {
  const rawPath = String(packetRelativePath || "").trim();
  if (!rawPath) fail("Packet path is required.");

  const normalized = path.normalize(rawPath).replace(/^([\\/])+/, "");
  const absolutePath = path.resolve(path.join(repoRoot, "intake"), normalized);
  const relativePath = path.relative(path.join(repoRoot, "intake"), absolutePath);
  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    fail("Packet must be inside intake.");
  }

  const referenceMd = await readFile(path.join(absolutePath, "reference.md"), "utf8");
  response.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" });
  response.end(buildPacketHtml(referenceMd, relativePath.split(path.sep).join("/")));
}

async function servePacketAsset(response, assetPath) {
  const normalized = String(assetPath || "").replace(/^([\\/])+/, "");
  const absolutePath = path.resolve(path.join(repoRoot, "intake"), normalized);
  const relativePath = path.relative(path.join(repoRoot, "intake"), absolutePath);
  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    fail("Packet asset must be inside intake.");
  }

  const body = await readFile(absolutePath);
  const contentType = contentTypes.get(path.extname(absolutePath).toLowerCase()) || "application/octet-stream";
  response.writeHead(200, { "content-type": contentType, "cache-control": "no-store" });
  response.end(body);
}

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://127.0.0.1");

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/") {
      await serveIndex(response);
      return;
    }

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/api/entries") {
      const entries = await listReviewEntries();
      json(response, 200, {
        ok: true,
        root: "ReviewTargets",
        entries: entries.map((entry) => ({ path: entry.path, label: entry.label, kind: entry.kind })),
      });
      return;
    }

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/preview") {
      await servePreview(response, url.searchParams.get("entry"));
      return;
    }

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/api/draft") {
      const draft = await readDraftPacket(url.searchParams.get("entry"));
      json(response, 200, { ok: true, draft });
      return;
    }

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/packet") {
      const packet = url.searchParams.get("packet");
      if (packet) {
        await servePacketView(response, packet);
        return;
      }

      const entry = url.searchParams.get("entry");
      if (entry) {
        const draft = await resolveAutosaveEntry(entry);
        await servePacketView(response, path.relative(path.join(repoRoot, "intake"), draft.autosaveDir));
        return;
      }

      fail("Packet path or entry is required.");
    }

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname.startsWith("/preview-assets/")) {
      await servePreviewAsset(response, decodeURIComponent(url.pathname.slice("/preview-assets/".length)));
      return;
    }

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname.startsWith("/packet-assets/")) {
      await servePacketAsset(response, decodeURIComponent(url.pathname.slice("/packet-assets/".length)));
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/intake") {
      const body = await readJson(request);
      const entry = await resolveReviewEntry(body.entry);
      const codeHtml = await readFile(entry.absolutePath, "utf8");
      const title = String(body.title || titleFromEntryPath(entry.relativePath)).trim();
      const referenceMd = String(body.referenceMd || body.review || "").trimEnd();
      const attachments = Array.isArray(body.attachments) ? body.attachments : [];

      if (!referenceMd) fail("Reference input cannot be empty.");

      const packetDir = await createPacket({
        title,
        codeHtml,
        referenceMd,
        attachments,
        codeMode: "ReviewTargets",
        referenceMode: "dashboard",
        sourceEntry: `ReviewTargets/${entry.relativePath}${entry.kind === "directory" ? "/" : ""}`,
      });

      json(response, 200, { ok: true, packetDir, entry: entry.relativePath });
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/autosave") {
      const body = await readJson(request);
      const entry = await resolveAutosaveEntry(body.entry);
      const codeHtml = await readFile(entry.absolutePath, "utf8");
      const title = String(body.title || titleFromEntryPath(entry.relativePath)).trim();
      const referenceMd = String(body.referenceMd || "").trimEnd();

      if (!referenceMd) fail("Reference input cannot be empty.");

      const result = await autosavePacket({
        entry: entry.relativePath,
        title,
        codeHtml,
        referenceMd,
      });

      json(response, 200, { ok: true, packetDir: result.packetDir, entry: entry.relativePath, referenceMd: result.referenceMd });
      return;
    }

    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  } catch (error) {
    response.writeHead(400, { "content-type": "application/json; charset=utf-8" });
    response.end(
      JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.message : String(error),
      }),
    );
  }
}).listen(port, "0.0.0.0", () => {
  console.log(`IntakeDashboard-V1 running at http://127.0.0.1:${port}`);
  for (const address of getLanAddresses()) {
    console.log(`LAN: http://${address}:${port}`);
  }
});
