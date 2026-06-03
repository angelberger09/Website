#!/usr/bin/env node

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createPacket } from "../../../tools/intake.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../../..");

const defaultOptions = {
  loop: 1,
  goal: "new Angel Berger website variants",
  mode: "variants",
  feedbackRoot: "intake",
  targetRoot: "ReviewTargets/messages",
  startAfter: "existing",
  dashboardUrl: "http://127.0.0.1:3011",
};

const variantLibrary = [
  {
    slug: "playful-studio-catalog",
    title: "Playful Studio Catalog",
    signal: "physical and digital shelves",
    palette: ["#0f172a", "#f7efe4", "#22c55e", "#ef4444"],
    heroImage: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80",
    lead: "A lively studio catalog where objects, downloads, and working notes sit in the same room.",
    sections: ["Physical Things", "Digital Things", "Tiny Notes"],
    products: [
      ["Painted Tile", "$82", "A small square object with a bright edge and a calm center."],
      ["Folded Print", "$64", "A paper piece with a crease, a mark, and enough white space."],
      ["Motion Set", "$120", "Looping screen pieces for shop pages, headers, and quiet announcements."],
      ["Archive Kit", "$96", "A small digital bundle for arranging images, captions, and notes."],
    ],
    journalTitle: "Shelf Notes",
    journalCopy: "Loose captions, favorite materials, quick price tags, and small summaries keep the page useful without turning it into a pitch deck.",
  },
  {
    slug: "polaroid-archive",
    title: "Polaroid Archive",
    signal: "tilted cards with exits",
    palette: ["#111111", "#f2f7ff", "#facc15", "#38bdf8"],
    heroImage: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1800&q=80",
    lead: "A full-site archive built around tilted photographs, quick captions, and expanded views that always close cleanly.",
    sections: ["Pinned Work", "Screen Work", "Open Notes"],
    products: [
      ["Room Study", "$140", "A photo-led card for atmosphere, color, and object placement."],
      ["Blue Proof", "$88", "A printed study with a crisp border and a short caption."],
      ["Hover Deck", "$150", "A screen set with gentle brightening on article-style surfaces."],
      ["Index Stack", "$75", "A browseable stack of captions, scans, and small references."],
    ],
    journalTitle: "Archive Captions",
    journalCopy: "The good part is the tilt and the little straighten-up moment. The hard rule is that every expanded card has a visible close button and Escape support.",
  },
  {
    slug: "craft-journal",
    title: "Craft Journal",
    signal: "favorite materials and captions",
    palette: ["#132a13", "#fff7ed", "#06b6d4", "#f43f5e"],
    heroImage: "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1800&q=80",
    lead: "A journal-shaped website with material notes, short captions, and language that stays casual.",
    sections: ["Favorite Materials", "Digital Sketches", "Journal Pages"],
    products: [
      ["Clay Morning", "$210", "A hand-built object with an uneven rim and a warm glaze."],
      ["Thread Sheet", "$48", "A stitched sample with soft color blocks and a useful label."],
      ["Layout Notes", "$70", "A digital notebook for arranging captions, cards, and reference images."],
      ["Material List", "$36", "A printable set of favorites: paper, clay, cloth, glass, light."],
    ],
    journalTitle: "Favorite Materials",
    journalCopy: "Use material words instead of formal discipline labels. Paper, clay, cloth, glass, pixels, light. Keep the writing close to how someone would actually talk in the studio.",
  },
  {
    slug: "interactive-parallax-studio",
    title: "Interactive Parallax Studio",
    signal: "light motion with readable controls",
    palette: ["#07111f", "#f8fafc", "#f97316", "#14b8a6"],
    heroImage: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
    lead: "A motion-forward studio page with light parallax, fade-ins, and controls that stay readable.",
    sections: ["Moving Objects", "Screen Loops", "Process Notes"],
    products: [
      ["Light Pass", "$160", "A small motion scene with slow shifts and a clear edge."],
      ["Object Drift", "$190", "A physical display direction with photographed materials and movement notes."],
      ["Soft Interface", "$230", "A screen concept with visible nav and no hidden escape route."],
      ["Fade Pack", "$90", "A digital motion kit that fades in without turning the background into clutter."],
    ],
    journalTitle: "Motion Notes",
    journalCopy: "Motion should help the page feel alive. It should not look like dust, cover the edges, or make the nav harder to read.",
  },
  {
    slug: "high-readability-storefront",
    title: "High Readability Storefront",
    signal: "clear browsing and square cards",
    palette: ["#101010", "#ffffff", "#3b82f6", "#f59e0b"],
    heroImage: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80",
    lead: "A sharp, readable storefront with obvious categories, square-ish cards, and calm product browsing.",
    sections: ["Physical Goods", "Digital Goods", "Shop Notes"],
    products: [
      ["Studio Print", "$58", "A clean print card with a visible price and a short summary."],
      ["Ceramic Mark", "$185", "A small handmade piece with plain-language details."],
      ["Digital Shelf", "$72", "A downloadable layout set for arranging shop and archive pages."],
      ["Caption Pack", "$42", "Short copy blocks for products, articles, and reference notes."],
    ],
    journalTitle: "Store Notes",
    journalCopy: "The storefront keeps the strongest contrast in the set. No clipped nav, no unreadable transparent controls, and no dramatic edge treatment that gets in the way.",
  },
];

function parseArgs(argv) {
  const options = { ...defaultOptions };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const value = argv[index + 1];
    if (arg === "--loop") {
      options.loop = Number(value);
      index += 1;
      continue;
    }
    if (arg === "--goal") {
      options.goal = value;
      index += 1;
      continue;
    }
    if (arg === "--mode") {
      options.mode = value;
      index += 1;
      continue;
    }
    if (arg === "--feedback-root") {
      options.feedbackRoot = value;
      index += 1;
      continue;
    }
    if (arg === "--target-root") {
      options.targetRoot = value;
      index += 1;
      continue;
    }
    if (arg === "--start-after") {
      options.startAfter = value;
      index += 1;
      continue;
    }
    if (arg === "--dashboard-url") {
      options.dashboardUrl = value;
      index += 1;
      continue;
    }
    if (arg === "--help" || arg === "-h") {
      options.help = true;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}`);
  }
  return options;
}

function usage() {
  return `Usage:
  node plugins/intake-loop/scripts/intake-loop.mjs --loop 5 --mode variants --goal "new Angel Berger website variants"

Options:
  --loop N
  --goal TEXT
  --mode variants
  --feedback-root intake
  --target-root ReviewTargets/messages
  --start-after existing
  --dashboard-url http://127.0.0.1:3011`;
}

function assertOptions(options) {
  if (!Number.isInteger(options.loop) || options.loop < 1) {
    throw new Error("--loop must be a positive integer.");
  }
  if (options.mode !== "variants") {
    throw new Error("--mode must be variants. This loop creates sibling website variants, not sequential refinements.");
  }
  const targetRoot = path.resolve(repoRoot, options.targetRoot);
  const allowedRoot = path.resolve(repoRoot, "ReviewTargets/messages");
  if (targetRoot !== allowedRoot) {
    throw new Error("--target-root must be ReviewTargets/messages for this repo workflow.");
  }
  if (options.loop > variantLibrary.length) {
    throw new Error(`This deterministic variant set currently supports up to ${variantLibrary.length} loops.`);
  }
}

async function walkFiles(root, matches, files = []) {
  const entries = await readdir(root, { withFileTypes: true });
  for (const entry of entries) {
    const absolute = path.join(root, entry.name);
    if (entry.isDirectory()) {
      await walkFiles(absolute, matches, files);
      continue;
    }
    if (entry.isFile() && matches(absolute)) files.push(absolute);
  }
  return files;
}

async function readFeedbackCorpus(feedbackRoot) {
  const root = path.resolve(repoRoot, feedbackRoot);
  const files = await walkFiles(root, (file) => path.basename(file) === "reference.md");
  const feedback = [];
  for (const file of files.sort()) {
    const text = await readFile(file, "utf8");
    if (!text.trim()) continue;
    feedback.push({
      file: path.relative(repoRoot, file),
      text: text.trim(),
    });
  }
  if (!feedback.length) {
    throw new Error(`No feedback reference.md files found under ${feedbackRoot}.`);
  }
  return feedback;
}

async function nextMessageNumbers(targetRoot, count) {
  await mkdir(targetRoot, { recursive: true });
  const entries = await readdir(targetRoot, { withFileTypes: true });
  const used = new Set();
  for (const entry of entries) {
    const match = entry.name.match(/^message-(\d+)\.html$/);
    if (entry.isFile() && match) used.add(Number(match[1]));
  }
  const start = Math.max(0, ...used) + 1;
  return Array.from({ length: count }, (_, index) => start + index);
}

function htmlEscape(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function cssVars(variant) {
  const [ink, paper, accent, pop] = variant.palette;
  return `--ink:${ink};--paper:${paper};--accent:${accent};--pop:${pop};`;
}

function renderProducts(products) {
  return products.map(([name, price, copy], index) => `
          <button class="work-card" type="button" data-card="${index}" style="--tilt:${[-2, 1.4, -0.8, 2][index]}deg">
            <span class="work-price">${htmlEscape(price)}</span>
            <strong>${htmlEscape(name)}</strong>
            <span>${htmlEscape(copy)}</span>
          </button>`).join("");
}

function renderMeta(variant) {
  return variant.sections.map((section) => `<a href="#${section.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">${htmlEscape(section)}</a>`).join("");
}

function renderSite(variant, messageNumber, feedbackCount, goal) {
  const [sectionA, sectionB, sectionC] = variant.sections;
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>A. Berger - ${htmlEscape(variant.title)}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=IBM+Plex+Mono:wght@400;600&family=Space+Grotesk:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      :root { ${cssVars(variant)} color-scheme: dark; font-family: "Space Grotesk", system-ui, sans-serif; }
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; color: var(--paper); background: var(--ink); overflow-x: hidden; }
      a { color: inherit; text-decoration: none; }
      button, textarea { font: inherit; }
      .site { min-height: 100vh; background: linear-gradient(180deg, color-mix(in srgb, var(--ink), black 8%), var(--ink)); }
      .topbar { position: sticky; top: 0; z-index: 10; display: grid; grid-template-columns: 1fr auto 1fr; align-items: center; gap: 16px; min-height: 68px; padding: 12px clamp(16px, 4vw, 36px); background: linear-gradient(180deg, rgba(0,0,0,.82), rgba(0,0,0,.58)); border-bottom: 1px solid rgba(255,255,255,.18); backdrop-filter: blur(14px); box-shadow: 0 16px 36px rgba(0,0,0,.35); }
      .brand { font-family: "Bricolage Grotesque", sans-serif; font-size: 20px; font-weight: 800; }
      .nav { display: flex; gap: 8px; flex-wrap: wrap; justify-content: center; }
      .nav a, .tag, .close, .send { min-height: 36px; display: inline-flex; align-items: center; justify-content: center; border: 1px solid rgba(255,255,255,.2); background: radial-gradient(circle at 50% 0%, rgba(255,255,255,.16), rgba(255,255,255,.03)); color: var(--paper); box-shadow: 0 10px 22px rgba(0,0,0,.25); }
      .nav a { padding: 0 12px; font: 600 12px "IBM Plex Mono", monospace; text-transform: uppercase; }
      .loop-id { justify-self: end; color: color-mix(in srgb, var(--paper), transparent 28%); font: 600 12px "IBM Plex Mono", monospace; }
      .hero { min-height: 86vh; display: grid; align-content: end; padding: 0 clamp(18px, 5vw, 56px) 42px; position: relative; isolation: isolate; }
      .hero::before { content: ""; position: absolute; inset: 0; z-index: -2; background: linear-gradient(180deg, rgba(0,0,0,.08), rgba(0,0,0,.7)), url("${variant.heroImage}") center / cover; }
      .hero::after { content: ""; position: absolute; inset: auto 0 0; height: 38%; z-index: -1; background: linear-gradient(180deg, transparent, var(--ink)); }
      .hero-inner { width: min(1120px, 100%); display: grid; gap: 18px; }
      .kicker { color: var(--accent); font: 600 13px "IBM Plex Mono", monospace; text-transform: uppercase; }
      h1 { margin: 0; font-family: "Bricolage Grotesque", sans-serif; font-size: clamp(54px, 12vw, 132px); line-height: .9; letter-spacing: 0; max-width: 9ch; }
      .lead { margin: 0; max-width: 62ch; color: color-mix(in srgb, var(--paper), transparent 20%); font-size: clamp(17px, 2vw, 22px); line-height: 1.55; }
      .tags { display: flex; flex-wrap: wrap; gap: 10px; }
      .tag { padding: 0 12px; border-radius: 8px; font: 600 12px "IBM Plex Mono", monospace; }
      .section { padding: clamp(44px, 8vw, 92px) clamp(18px, 5vw, 56px); }
      .section-inner { width: min(1120px, 100%); margin: 0 auto; display: grid; gap: 24px; }
      .section-head { display: flex; justify-content: space-between; gap: 18px; flex-wrap: wrap; align-items: end; }
      h2 { margin: 0; font-family: "Bricolage Grotesque", sans-serif; font-size: clamp(34px, 6vw, 68px); line-height: .95; letter-spacing: 0; }
      .section-note { margin: 0; max-width: 56ch; color: color-mix(in srgb, var(--paper), transparent 27%); line-height: 1.65; }
      .work-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 14px; }
      .work-card { min-height: 248px; display: grid; align-content: space-between; gap: 18px; padding: 16px; border: 1px solid rgba(0,0,0,.18); border-radius: 8px; background: var(--paper); color: #111; text-align: left; cursor: pointer; transform: rotate(var(--tilt)); transition: transform .24s ease, box-shadow .24s ease, filter .24s ease; box-shadow: 0 18px 36px rgba(0,0,0,.28); }
      .work-card:hover { transform: rotate(0deg) translateY(-5px); box-shadow: 0 26px 48px rgba(0,0,0,.34); }
      .work-card strong { font-family: "Bricolage Grotesque", sans-serif; font-size: 28px; line-height: 1; letter-spacing: 0; }
      .work-card span { color: rgba(17,17,17,.68); line-height: 1.45; }
      .work-price { justify-self: end; font: 600 12px "IBM Plex Mono", monospace; }
      .journal { display: grid; grid-template-columns: 1.15fr .85fr; gap: 18px; align-items: stretch; }
      .article { padding: 22px; border-left: 3px solid var(--accent); background: rgba(255,255,255,.06); box-shadow: 0 16px 34px rgba(0,0,0,.2); transition: filter .22s ease, background .22s ease; }
      .article:hover { filter: brightness(1.14); background: rgba(255,255,255,.09); }
      .article h3 { margin: 0 0 12px; font-family: "Bricolage Grotesque", sans-serif; font-size: 30px; letter-spacing: 0; }
      .article p { margin: 0; color: color-mix(in srgb, var(--paper), transparent 20%); line-height: 1.7; }
      .contact { display: grid; gap: 14px; padding-bottom: 84px; }
      textarea { width: min(720px, 100%); min-height: 132px; resize: vertical; padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,.22); color: var(--paper); background: rgba(0,0,0,.24); box-shadow: inset 0 1px 0 rgba(255,255,255,.08), 0 12px 24px rgba(0,0,0,.22); }
      .send { width: fit-content; padding: 0 16px; border-radius: 8px; cursor: pointer; }
      .modal { position: fixed; inset: 0; z-index: 50; display: grid; place-items: center; padding: 18px; background: rgba(0,0,0,.68); backdrop-filter: blur(12px); }
      .modal[hidden] { display: none; }
      .panel { width: min(680px, 100%); padding: 22px; border-radius: 8px; border: 1px solid rgba(255,255,255,.2); background: color-mix(in srgb, var(--ink), black 10%); box-shadow: 0 32px 80px rgba(0,0,0,.55); }
      .panel-head { display: flex; justify-content: space-between; gap: 16px; align-items: start; }
      .panel h3 { margin: 0; font-family: "Bricolage Grotesque", sans-serif; font-size: 42px; line-height: 1; letter-spacing: 0; }
      .panel p { color: color-mix(in srgb, var(--paper), transparent 22%); line-height: 1.7; }
      .close { min-width: 40px; border-radius: 8px; cursor: pointer; }
      @media (max-width: 920px) { .topbar { grid-template-columns: 1fr; } .loop-id { justify-self: start; } .work-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .journal { grid-template-columns: 1fr; } }
      @media (max-width: 620px) { .work-grid { grid-template-columns: 1fr; } .hero { min-height: 78vh; } .nav { justify-content: start; } }
    </style>
  </head>
  <body>
    <div class="site">
      <header class="topbar">
        <a class="brand" href="#top">A. BERGER</a>
        <nav class="nav" aria-label="Primary">${renderMeta(variant)}</nav>
        <div class="loop-id">message-${String(messageNumber).padStart(2, "0")} / ${htmlEscape(variant.slug)}</div>
      </header>
      <main id="top">
        <section class="hero">
          <div class="hero-inner">
            <div class="kicker">${htmlEscape(variant.signal)}</div>
            <h1>${htmlEscape(variant.title)}</h1>
            <p class="lead">${htmlEscape(variant.lead)}</p>
            <div class="tags">
              <span class="tag">Goal: ${htmlEscape(goal)}</span>
              <span class="tag">${feedbackCount} feedback notes used</span>
              <span class="tag">full variant</span>
            </div>
          </div>
        </section>
        <section class="section" id="${sectionA.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">
          <div class="section-inner">
            <div class="section-head">
              <h2>${htmlEscape(sectionA)}</h2>
              <p class="section-note">This variant keeps copy plain, controls visible, and each card readable before adding motion or personality.</p>
            </div>
            <div class="work-grid">${renderProducts(variant.products)}</div>
          </div>
        </section>
        <section class="section" id="${sectionB.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">
          <div class="section-inner journal">
            <article class="article">
              <h3>${htmlEscape(variant.journalTitle)}</h3>
              <p>${htmlEscape(variant.journalCopy)}</p>
            </article>
            <article class="article">
              <h3>${htmlEscape(sectionB)}</h3>
              <p>Digital pieces stay separate from physical pieces so the browsing path is obvious. Hover brightening is reserved for reading surfaces and notes.</p>
            </article>
          </div>
        </section>
        <section class="section" id="${sectionC.toLowerCase().replace(/[^a-z0-9]+/g, "-")}">
          <div class="section-inner contact">
            <h2>${htmlEscape(sectionC)}</h2>
            <p class="section-note">Write down what feels close, what feels stiff, and what should become the next selected direction.</p>
            <textarea placeholder="Leave review notes for this variant."></textarea>
            <button class="send" type="button" data-open="contact">Open review prompt</button>
          </div>
        </section>
      </main>
    </div>
    <div class="modal" id="modal" hidden>
      <div class="panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="panel-head">
          <h3 id="modalTitle">Variant note</h3>
          <button class="close" type="button" id="closeModal" data-close-modal aria-label="Close">Close</button>
        </div>
        <p id="modalText">This expanded view has a visible close button, outside click close, and Escape support.</p>
      </div>
    </div>
    <script>
      const modal = document.getElementById("modal");
      const closeModal = document.getElementById("closeModal");
      const modalTitle = document.getElementById("modalTitle");
      const modalText = document.getElementById("modalText");
      const details = ${JSON.stringify(variant.products.map(([name, price, copy]) => ({ name, price, copy })))};
      document.querySelectorAll("[data-card]").forEach((button) => {
        button.addEventListener("click", () => {
          const item = details[Number(button.dataset.card)];
          modalTitle.textContent = item.name + " " + item.price;
          modalText.textContent = item.copy + " Close this panel with the button, outside click, or Escape.";
          modal.hidden = false;
          closeModal.focus();
        });
      });
      document.querySelectorAll("[data-open]").forEach((button) => {
        button.addEventListener("click", () => {
          modalTitle.textContent = "Review this variant";
          modalText.textContent = "Check nav visibility, tone, section clarity, product readability, and whether any motion or vignette treatment gets in the way.";
          modal.hidden = false;
          closeModal.focus();
        });
      });
      function hideModal() { modal.hidden = true; }
      closeModal.addEventListener("click", hideModal);
      modal.addEventListener("click", (event) => { if (event.target === modal) hideModal(); });
      window.addEventListener("keydown", (event) => { if (event.key === "Escape") hideModal(); });
      window.addEventListener("pointermove", (event) => {
        const x = (event.clientX / window.innerWidth - .5) * 10;
        const y = (event.clientY / window.innerHeight - .5) * 10;
        document.querySelector(".hero").style.backgroundPosition = \`\${50 + x * .1}% \${50 + y * .1}%\`;
      });
    </script>
  </body>
</html>
`;
}

function buildReferenceNote({ variant, messageNumber, entryPath, feedback, validation, goal }) {
  const sources = feedback.slice(0, 12).map((item) => `- ${item.file}`).join("\n");
  return `# ${variant.title}

Status: Ready For Human Review

- Source entry: ReviewTargets/${entryPath}
- Goal: ${goal}
- Mode: sibling website variant
- Variant: ${variant.slug}

## Review Prompt

Review this as a complete website, not as a partial section test.

Check:
- nav visible and not cut off
- language loose and non-academic
- physical and digital split is understandable
- product/work tiles have name, price or metadata, and summary
- expanded states close with visible close, outside click, and Escape
- hover brightening helps reading surfaces without making shop tiles too loud

## Dashboard Validation

- Entries endpoint: ${validation.entriesOk ? "ok" : "unavailable"}
- Preview endpoint: ${validation.previewOk ? "ok" : "unavailable"}
- Dashboard URL: ${validation.previewUrl}

## Feedback Inputs

${sources}
`;
}

async function validateDashboard(dashboardUrl, entryPath) {
  const previewUrl = `${dashboardUrl.replace(/\/$/, "")}/preview?entry=${encodeURIComponent(entryPath)}`;
  const entriesUrl = `${dashboardUrl.replace(/\/$/, "")}/api/entries`;
  const result = { previewUrl, entriesOk: false, previewOk: false };
  try {
    const entries = await fetch(entriesUrl, { cache: "no-store" });
    const payload = await entries.json();
    result.entriesOk = Boolean(entries.ok && payload.ok && payload.entries?.some((entry) => entry.path === entryPath));
  } catch {
    result.entriesOk = false;
  }
  try {
    const preview = await fetch(previewUrl, { cache: "no-store" });
    const text = await preview.text();
    result.previewOk = Boolean(preview.ok && text.includes("<!doctype html>"));
  } catch {
    result.previewOk = false;
  }
  return result;
}

async function main(argv = process.argv.slice(2)) {
  const options = parseArgs(argv);
  if (options.help) {
    console.log(usage());
    return;
  }
  assertOptions(options);

  const feedback = await readFeedbackCorpus(options.feedbackRoot);
  const targetRoot = path.resolve(repoRoot, options.targetRoot);
  const numbers = await nextMessageNumbers(targetRoot, options.loop);
  const created = [];

  for (let index = 0; index < options.loop; index += 1) {
    const variant = variantLibrary[index];
    const messageNumber = numbers[index];
    const fileName = `message-${String(messageNumber).padStart(2, "0")}.html`;
    const entryPath = `messages/${fileName}`;
    const absoluteTarget = path.join(targetRoot, fileName);
    const html = renderSite(variant, messageNumber, feedback.length, options.goal);
    await writeFile(absoluteTarget, html, "utf8");

    const validation = await validateDashboard(options.dashboardUrl, entryPath);
    const referenceMd = buildReferenceNote({
      variant,
      messageNumber,
      entryPath,
      feedback,
      validation,
      goal: options.goal,
    });
    const packetDir = await createPacket({
      title: `${entryPath.replace(/\.html$/, "")}-${variant.slug}`,
      codeHtml: html,
      referenceMd,
      codeMode: "ReviewTargets",
      referenceMode: "intake-loop",
      sourceEntry: `ReviewTargets/${entryPath}`,
    });

    created.push({
      entry: entryPath,
      variant: variant.slug,
      packetDir: path.relative(repoRoot, packetDir),
      preview: validation.previewUrl,
      previewOk: validation.previewOk,
      entriesOk: validation.entriesOk,
    });
  }

  console.log(JSON.stringify({
    ok: true,
    mode: options.mode,
    loop: options.loop,
    goal: options.goal,
    feedbackCount: feedback.length,
    created,
  }, null, 2));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  console.error(usage());
  process.exit(1);
});
