#!/usr/bin/env node

import { createServer } from "node:http";
import { mkdir, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createPacket, fail } from "../tools/intake.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const reviewTargetsDir = path.join(repoRoot, "ReviewTargets");
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

async function listHtmlEntries(dir = reviewTargetsDir, prefix = "") {
  await mkdir(reviewTargetsDir, { recursive: true });
  const entries = await readdir(dir, { withFileTypes: true });
  const htmlEntries = [];

  for (const entry of entries) {
    const absolutePath = path.join(dir, entry.name);
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      htmlEntries.push(...(await listHtmlEntries(absolutePath, relativePath)));
      continue;
    }

    if (entry.isFile() && path.extname(entry.name).toLowerCase() === ".html") {
      htmlEntries.push(relativePath);
    }
  }

  function priority(entry) {
    if (entry === "index.html") return 0;
    if (entry.startsWith("messages/")) return 1;
    return 2;
  }

  return htmlEntries.sort((a, b) => {
    if (a === "index.html") return -1;
    if (b === "index.html") return 1;
    return priority(a) - priority(b) || a.localeCompare(b, undefined, { numeric: true });
  });
}

function resolveReviewEntry(entryPath) {
  const rawEntry = String(entryPath || "").trim();
  if (!rawEntry) fail("Entry is required.");
  if (path.extname(rawEntry).toLowerCase() !== ".html") fail("Only .html entries can be reviewed.");

  const absolutePath = path.resolve(reviewTargetsDir, rawEntry);
  const relativePath = path.relative(reviewTargetsDir, absolutePath);
  if (relativePath.startsWith("..") || path.isAbsolute(relativePath)) {
    fail("Entry must be inside ReviewTargets.");
  }

  return {
    absolutePath,
    relativePath: relativePath.split(path.sep).join("/"),
  };
}

async function servePreview(response, entryPath) {
  const entry = resolveReviewEntry(entryPath);
  const html = await readFile(entry.absolutePath, "utf8");
  const entryDir = path.posix.dirname(entry.relativePath);
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

createServer(async (request, response) => {
  try {
    const url = new URL(request.url, "http://127.0.0.1");

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/") {
      await serveIndex(response);
      return;
    }

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/api/entries") {
      const entries = await listHtmlEntries();
      json(response, 200, {
        ok: true,
        root: "ReviewTargets",
        entries: entries.map((entry) => ({ path: entry, label: entry })),
      });
      return;
    }

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname === "/preview") {
      await servePreview(response, url.searchParams.get("entry"));
      return;
    }

    if ((request.method === "GET" || request.method === "HEAD") && url.pathname.startsWith("/preview-assets/")) {
      await servePreviewAsset(response, decodeURIComponent(url.pathname.slice("/preview-assets/".length)));
      return;
    }

    if (request.method === "POST" && url.pathname === "/api/intake") {
      const body = await readJson(request);
      const entry = resolveReviewEntry(body.entry);
      const codeHtml = await readFile(entry.absolutePath, "utf8");
      const title = String(body.title || entry.relativePath.replace(/\.html$/i, "")).trim();
      const review = String(body.review || "").trimEnd();

      if (!review) fail("Review input cannot be empty.");

      const packetDir = await createPacket({
        title,
        codeHtml,
        review,
        codeMode: "ReviewTargets",
        reviewMode: "dashboard",
        sourceEntry: `ReviewTargets/${entry.relativePath}`,
      });

      json(response, 200, { ok: true, packetDir, entry: entry.relativePath });
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
}).listen(port, () => {
  console.log(`IntakeDashboard-V1 running at http://127.0.0.1:${port}`);
});
