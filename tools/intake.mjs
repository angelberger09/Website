#!/usr/bin/env node

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const USAGE = `Usage:
  node tools/intake.mjs --title "Homepage direction" --code "<!doctype html>..." --review "raw review document"
  node tools/intake.mjs --title "Homepage direction" --code-stdin --review "review text"
  node tools/intake.mjs --title "Homepage direction" --code "<!doctype html>..." --review-stdin

Options:
  --title VALUE       Required packet title.
  --code VALUE        Raw single-file HTML.
  --code-stdin        Read single-file HTML from stdin.
  --review VALUE      Raw review document text.
  --review-stdin      Read review document text from stdin.
  --help              Show this help text.
`;

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

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
    review: null,
    reviewStdin: false,
    help: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];

    if (arg === "--help" || arg === "-h") {
      args.help = true;
      continue;
    }

    if (arg === "--code-stdin" || arg === "--script-stdin") {
      args.codeStdin = true;
      continue;
    }

    if (arg === "--review-stdin") {
      args.reviewStdin = true;
      continue;
    }

    if (arg === "--title" || arg === "--code" || arg === "--script" || arg === "--review") {
      const value = argv[index + 1];
      if (value === undefined || value.startsWith("--")) {
        fail(`${arg} requires a value.`);
      }

      if (arg === "--title") args.title = value;
      if (arg === "--code" || arg === "--script") args.codeHtml = value;
      if (arg === "--review") args.review = value;
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

export async function readStdin() {
  const chunks = [];

  for await (const chunk of process.stdin) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  return Buffer.concat(chunks).toString("utf8");
}

export function validateArgs(args) {
  if (args.help) return;
  if (!args.title) fail("--title is required.");
  if (args.codeHtml !== null && args.codeStdin) {
    fail("Use either --code or --code-stdin, not both.");
  }
  if (args.review !== null && args.reviewStdin) {
    fail("Use either --review or --review-stdin, not both.");
  }
  if (args.codeStdin && args.reviewStdin) {
    fail("Use stdin for only one input at a time.");
  }
  if (args.codeHtml === null && !args.codeStdin) {
    fail("Code input is required. Use --code or --code-stdin.");
  }
  if (args.review === null && !args.reviewStdin) {
    fail("Review input is required. Use --review or --review-stdin.");
  }
}

export function packetMarkdown({ title, createdAt, codeMode, reviewMode, sourceEntry }) {
  const sourceLine = sourceEntry ? `- Selected entry: ${sourceEntry}\n` : "";

  return `# ${title}

- Created: ${createdAt}
- Workflow: Entry / Play / Review
- Code input: ${codeMode}
- Review input: ${reviewMode}
${sourceLine}- Code: [code.html](code.html)
- Review document: [review.md](review.md)

## Observations

## Lessons To Extract

## Website-V1 Implications
`;
}

export async function createPacket({
  title,
  codeHtml,
  review,
  codeMode,
  reviewMode,
  sourceEntry = null,
  createdAt = new Date(),
}) {
  if (!title) fail("--title is required.");
  if (!codeHtml) fail("Code input cannot be empty.");
  if (!review) fail("Review input cannot be empty.");

  const folderName = `${timestampForPath(createdAt)}-${slugify(title)}`;
  const packetDir = path.join(repoRoot, "intake", folderName);

  await mkdir(packetDir, { recursive: true });
  await writeFile(path.join(packetDir, "code.html"), codeHtml, "utf8");
  await writeFile(path.join(packetDir, "review.md"), review, "utf8");
  await writeFile(
    path.join(packetDir, "packet.md"),
    packetMarkdown({
      title,
      createdAt: createdAt.toISOString(),
      codeMode,
      reviewMode,
      sourceEntry,
    }),
    "utf8",
  );

  return packetDir;
}

export async function main(argv = process.argv.slice(2)) {
  try {
    const args = parseArgs(argv);
    validateArgs(args);

    if (args.help) {
      console.log(USAGE);
      return;
    }

    const stdinText = args.codeStdin || args.reviewStdin ? await readStdin() : null;
    const codeHtml = args.codeStdin ? stdinText : args.codeHtml;
    const review = args.reviewStdin ? stdinText : args.review;
    const packetDir = await createPacket({
      title: args.title,
      codeHtml,
      review,
      codeMode: args.codeStdin ? "stdin" : "flag",
      reviewMode: args.reviewStdin ? "stdin" : "flag",
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
