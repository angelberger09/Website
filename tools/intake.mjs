#!/usr/bin/env node

import { mkdir, readFile, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const USAGE = `Usage:
  node tools/intake.mjs --title "Homepage direction" --code "<!doctype html>..." --reference "raw reference body"
  node tools/intake.mjs --title "Homepage direction" --code-stdin --reference "reference body"
  node tools/intake.mjs --title "Homepage direction" --code "<!doctype html>..." --reference-stdin
  node tools/intake.mjs --migrate-packets

Options:
  --title VALUE       Required packet title.
  --code VALUE        Raw single-file HTML.
  --code-stdin        Read single-file HTML from stdin.
  --reference VALUE   Raw reference document body text.
  --reference-stdin   Read reference document body text from stdin.
  --review VALUE      Alias for --reference.
  --review-stdin      Alias for --reference-stdin.
  --migrate-packets   Update existing packets to the current reference.md format.
  --help              Show this help text.
`;

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const intakeRoot = path.join(repoRoot, "intake");
const referencesDirName = "references";
const autosaveDirName = ".autosave";
const mimeExtensions = new Map([
  ["image/jpeg", ".jpg"],
  ["image/png", ".png"],
  ["image/gif", ".gif"],
  ["image/webp", ".webp"],
  ["image/svg+xml", ".svg"],
]);

export function fail(message) {
  const error = new Error(message);
  error.usage = USAGE;
  throw error;
}

export function parseArgs(argv) {
  const args = {
    title: null,
    codeHtml: null,
    codeStdin: false,
    referenceMd: null,
    referenceStdin: false,
    migratePackets: false,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--help" || arg === "-h") {
      args.help = true;
      continue;
    }

    if (arg === "--migrate-packets") {
      args.migratePackets = true;
      continue;
    }

    if (arg === "--code-stdin" || arg === "--script-stdin") {
      args.codeStdin = true;
      continue;
    }

    if (arg === "--reference-stdin" || arg === "--review-stdin") {
      args.referenceStdin = true;
      continue;
    }

    if (arg === "--title" || arg === "--code" || arg === "--script" || arg === "--reference" || arg === "--review") {
      const value = argv[index + 1];
      if (value === undefined || value.startsWith("--")) {
        fail(`${arg} requires a value.`);
      }

      if (arg === "--title") args.title = value;
      if (arg === "--code" || arg === "--script") args.codeHtml = value;
      if (arg === "--reference" || arg === "--review") args.referenceMd = value;
      index += 1;
      continue;
    }

    fail(`Unknown argument: ${arg}`);
  }

  return args;
}

export function slugify(value) {
  const slug = value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || "untitled";
}

export function timestampForPath(date) {
  return date.toISOString().replace(/\.\d{3}Z$/, "").replace(/:/g, "-");
}

export function autosaveKeyForEntry(entry) {
  return slugify(String(entry || "").replace(/\.html$/i, "").replace(/[\\/]/g, "-"));
}

export async function readStdin() {
  const chunks = [];

  for await (const chunk of process.stdin) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString("utf8");
}

export function validateArgs(args) {
  if (args.help) return;
  if (args.migratePackets) return;
  if (!args.title) fail("--title is required.");
  if (args.codeHtml !== null && args.codeStdin) {
    fail("Use either --code or --code-stdin, not both.");
  }
  if (args.referenceMd !== null && args.referenceStdin) {
    fail("Use either --reference or --reference-stdin, not both.");
  }
  if (args.codeStdin && args.referenceStdin) {
    fail("Use stdin for only one input at a time.");
  }
  if (args.codeHtml === null && !args.codeStdin) {
    fail("Code input is required. Use --code or --code-stdin.");
  }
  if (args.referenceMd === null && !args.referenceStdin) {
    fail("Reference input is required. Use --reference or --reference-stdin.");
  }
}

function normalizeText(value) {
  return String(value ?? "").replace(/\r\n/g, "\n");
}

function attachmentFileName(attachment, index) {
  const rawName = path.basename(String(attachment?.name || `reference-${index + 1}`));
  const parsedExt = path.extname(rawName).toLowerCase();
  const baseName = path.basename(rawName, parsedExt).trim();
  const safeBase = slugify(baseName || `reference-${index + 1}`);
  const mimeType = String(attachment?.mimeType || "").toLowerCase();
  const ext = parsedExt || mimeExtensions.get(mimeType) || ".png";
  return `${String(index + 1).padStart(2, "0")}-${safeBase}${ext}`;
}

function parseDataUrl(dataUrl) {
  const raw = String(dataUrl || "");
  const comma = raw.indexOf(",");
  if (!raw.startsWith("data:") || comma === -1) {
    fail("Attachment must be a data URL.");
  }

  const meta = raw.slice(5, comma);
  const payload = raw.slice(comma + 1);
  const mimeType = meta.split(";")[0] || "application/octet-stream";
  const isBase64 = /;base64/i.test(meta);
  const bytes = isBase64
    ? Buffer.from(payload, "base64")
    : Buffer.from(decodeURIComponent(payload), "utf8");

  return { mimeType, bytes };
}

function extractInlineImages(referenceMd) {
  const source = normalizeText(referenceMd);
  const assets = [];
  let inlineIndex = 0;

  const rewritten = source.replace(/<img\b([^>]*?)\ssrc=(["'])(data:[^"']+)\2([^>]*)>/gi, (match, before, quote, dataUrl, after) => {
    const { mimeType, bytes } = parseDataUrl(dataUrl);
    inlineIndex += 1;
    const fileName = attachmentFileName({
      name: `inline-${inlineIndex}`,
      mimeType,
    }, assets.length);

    assets.push({
      fileName,
      name: fileName,
      note: "",
      bytes,
    });

    return `<img${before} src="references/${fileName}"${after}>`;
  });

  return { referenceMd: rewritten, inlineAssets: assets };
}

async function writePacketFiles({
  packetDir,
  title,
  codeHtml,
  referenceMd,
  attachments = [],
  codeMode,
  referenceMode,
  sourceEntry = null,
  createdAt = new Date(),
}) {
  if (!title) fail("--title is required.");
  if (!codeHtml) fail("Code input cannot be empty.");

  const referencesDir = path.join(packetDir, referencesDirName);
  const savedAttachments = [];
  const { referenceMd: rewrittenReferenceMd, inlineAssets } = extractInlineImages(referenceMd);

  await mkdir(packetDir, { recursive: true });
  const allAssets = [...attachments, ...inlineAssets];
  if (allAssets.length) {
    await mkdir(referencesDir, { recursive: true });
  }

  for (const [index, attachment] of allAssets.entries()) {
    const bytes = attachment.bytes || parseDataUrl(attachment.dataUrl).bytes;
    const mimeType = attachment.bytes ? String(attachment.mimeType || "") : parseDataUrl(attachment.dataUrl).mimeType;
    const fileName = attachment.fileName || attachmentFileName({ ...attachment, mimeType }, index);
    await writeFile(path.join(referencesDir, fileName), bytes);
    savedAttachments.push({
      fileName,
      name: String(attachment.name || fileName),
      note: String(attachment.note || "").trim(),
    });
  }

  await writeFile(path.join(packetDir, "code.html"), codeHtml, "utf8");
  await writeFile(path.join(packetDir, "reference.md"), normalizeText(rewrittenReferenceMd), "utf8");
  await writeFile(
    path.join(packetDir, "packet.md"),
    packetMarkdown({
      title,
      createdAt: createdAt.toISOString(),
      codeMode,
      referenceMode,
      sourceEntry,
      attachments: savedAttachments,
    }),
    "utf8",
  );

  return {
    packetDir,
    attachments: savedAttachments,
    referenceMd: normalizeText(rewrittenReferenceMd),
  };
}

export function packetMarkdown({ title, createdAt, codeMode, referenceMode, sourceEntry, attachments }) {
  const sourceLine = sourceEntry ? `- Selected entry: ${sourceEntry}\n` : "";
  const attachmentLines = attachments.length
    ? attachments.map((attachment) => `  - ${attachment.fileName}${attachment.note ? ` — ${attachment.note}` : ""}`).join("\n") + "\n"
    : "  - None\n";

  return `# ${title}

- Created: ${createdAt}
- Workflow: Attach / Save
- Code input: ${codeMode}
- Reference input: ${referenceMode}
${sourceLine}- Code: [code.html](code.html)
- Reference document: [reference.md](reference.md)
- Attached references:
${attachmentLines}
## Observations

## Lessons To Extract

## Website-V1 Implications
`;
}

export async function createPacket({
  title,
  codeHtml,
  referenceMd,
  attachments = [],
  codeMode,
  referenceMode,
  sourceEntry = null,
  createdAt = new Date(),
}) {
  if (!title) fail("--title is required.");
  if (!codeHtml) fail("Code input cannot be empty.");

  const folderName = `${timestampForPath(createdAt)}-${slugify(title)}`;
  const packetDir = path.join(intakeRoot, folderName);
  const result = await writePacketFiles({
    packetDir,
    title,
    codeHtml,
    referenceMd,
    attachments,
    codeMode,
    referenceMode,
    sourceEntry,
    createdAt,
  });

  return result.packetDir;
}

export async function autosavePacket({
  entry,
  title,
  codeHtml,
  referenceMd,
  createdAt = new Date(),
}) {
  const packetDir = path.join(intakeRoot, autosaveDirName, autosaveKeyForEntry(entry));
  const result = await writePacketFiles({
    packetDir,
    title,
    codeHtml,
    referenceMd,
    attachments: [],
    codeMode: "ReviewTargets",
    referenceMode: "autosave",
    sourceEntry: `ReviewTargets/${entry}`,
    createdAt,
  });

  return result;
}

function parsePacketMetadata(packetText, fallbackTitle) {
  const title = packetText.match(/^#\s+(.+)$/m)?.[1]?.trim() || fallbackTitle;
  const createdAt = packetText.match(/^- Created:\s+(.+)$/m)?.[1]?.trim() || new Date().toISOString();
  const sourceEntry = packetText.match(/^- Selected entry:\s+(.+)$/m)?.[1]?.trim() || null;
  return { title, createdAt, sourceEntry };
}

async function listPacketDirectories(root = intakeRoot) {
  await mkdir(root, { recursive: true });
  const entries = await readdir(root, { withFileTypes: true });
  return entries.filter((entry) => entry.isDirectory()).map((entry) => path.join(root, entry.name));
}

async function listReferenceAttachments(packetDir) {
  const referencesDir = path.join(packetDir, referencesDirName);
  const attachments = [];

  try {
    const entries = await readdir(referencesDir, { withFileTypes: true });
    for (const entry of entries) {
      if (!entry.isFile()) continue;
      attachments.push({
        fileName: entry.name,
        name: entry.name,
        note: "",
      });
    }
  } catch {
    // No references directory yet.
  }

  return attachments;
}

async function migratePacketDirectory(packetDir) {
  const packetPath = path.join(packetDir, "packet.md");
  const reviewPath = path.join(packetDir, "review.md");
  const referencePath = path.join(packetDir, "reference.md");

  let packetText;
  try {
    packetText = await readFile(packetPath, "utf8");
  } catch {
    return false;
  }

  const { title, createdAt, sourceEntry } = parsePacketMetadata(packetText, path.basename(packetDir));

  let reviewText = "";
  try {
    reviewText = await readFile(reviewPath, "utf8");
  } catch {
    try {
      reviewText = await readFile(referencePath, "utf8");
    } catch {
      reviewText = "";
    }
  }

  const attachments = await listReferenceAttachments(packetDir);

  await writeFile(
    referencePath,
    reviewText || `# ${title}\n\n## Reference Notes\n`,
    "utf8",
  );

  try {
    await unlink(reviewPath);
  } catch {
    // Nothing to delete.
  }

  await writeFile(
    packetPath,
    packetMarkdown({
      title,
      createdAt,
      codeMode: "ReviewTargets",
      referenceMode: "dashboard",
      sourceEntry,
      attachments,
    }),
    "utf8",
  );

  return true;
}

export async function migratePackets() {
  const packetDirs = await listPacketDirectories();
  let migrated = 0;

  for (const packetDir of packetDirs) {
    const changed = await migratePacketDirectory(packetDir);
    if (changed) migrated += 1;
  }

  return migrated;
}

export async function main(argv = process.argv.slice(2)) {
  try {
    const args = parseArgs(argv);
    validateArgs(args);

    if (args.help) {
      console.log(USAGE);
      return;
    }

    if (args.migratePackets) {
      const migrated = await migratePackets();
      console.log(`Migrated ${migrated} packet(s).`);
      return;
    }

    const stdinText = args.codeStdin || args.referenceStdin ? await readStdin() : null;
    const codeHtml = args.codeStdin ? stdinText : args.codeHtml;
    const referenceMd = args.referenceStdin ? stdinText : args.referenceMd;
    const packetDir = await createPacket({
      title: args.title,
      codeHtml,
      referenceMd,
      codeMode: args.codeStdin ? "stdin" : "flag",
      referenceMode: args.referenceStdin ? "stdin" : "flag",
    });

    console.log(packetDir);
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : error}\n`);
    console.error(error && typeof error === "object" && "usage" in error ? error.usage : USAGE);
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
