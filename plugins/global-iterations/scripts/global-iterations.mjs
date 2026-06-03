#!/usr/bin/env node

import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "../../..");

const options = {
  goal: "global site iteration pass",
  feedbackRoot: "intake",
  sourceRoot: "ReviewTargets",
  targetRoot: "ReviewTargets/global-iterations",
};

const themeLibrary = [
  { key: "visible-nav", label: "visible nav", aliases: ["visible nav", "nav visible", "never cut off", "not cut off"] },
  { key: "readable-controls", label: "readable controls", aliases: ["readable controls", "controls readable", "no translucent controls", "drop shadows"] },
  { key: "centered-gradient", label: "centered gradient background", aliases: ["centered gradient", "centered gradient background"] },
  { key: "physical-digital", label: "physical / digital split", aliases: ["physical and digital", "physical/digital", "digital and physical"] },
  { key: "polaroid-exit", label: "expanded views with obvious exits", aliases: ["polaroid", "close path", "visible close", "escape support"] },
  { key: "hover-brighten", label: "hover brighten on reading surfaces", aliases: ["hover brighten", "brighten mainly on text", "reading surfaces"] },
  { key: "full-website", label: "complete website output", aliases: ["full website", "complete website", "not a partial section"] },
  { key: "multi-page", label: "no broken page links", aliases: ["multi page", "other pages", "didnt load", "didn't load"] },
];

const palettes = [
  { ink: "#15110d", paper: "#fffdf7", accent: "#0f766e", warm: "#f97316", mist: "#dff7f1" },
  { ink: "#111214", paper: "#fafafa", accent: "#2563eb", warm: "#f59e0b", mist: "#e8f0ff" },
  { ink: "#172015", paper: "#fffaf0", accent: "#16a34a", warm: "#dc2626", mist: "#e9f8df" },
  { ink: "#1c1917", paper: "#fff7ed", accent: "#0891b2", warm: "#ea580c", mist: "#e0f7fb" },
  { ink: "#101010", paper: "#ffffff", accent: "#ca8a04", warm: "#0d9488", mist: "#fff4c7" },
];

const heroImages = [
  "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1452860606245-08befc0ff44b?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1800&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80",
];

function parseArgs(argv) {
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    const value = argv[index + 1];
    if (arg === "--help" || arg === "-h") return { ...options, help: true };
    if (arg === "--goal") {
      if (!value || value.startsWith("--")) throw new Error("--goal requires a value.");
      options.goal = value;
      index += 1;
      continue;
    }
    throw new Error(`Unknown argument: ${arg}. Only --goal is supported.`);
  }
  return { ...options };
}

function usage() {
  return `Usage:
  node plugins/global-iterations/scripts/global-iterations.mjs --goal "global site iteration pass"

Behavior:
  Reads all intake feedback once, rewrites every current ReviewTargets site, and writes outputs under ReviewTargets/global-iterations/.`;
}

async function walkSites(root, prefix = "", isRoot = true, entries = []) {
  const dirEntries = await readdir(root, { withFileTypes: true });
  const hasIndexHtml = dirEntries.some((entry) => entry.isFile() && entry.name.toLowerCase() === "index.html");

  if (!isRoot && hasIndexHtml) {
    entries.push({
      path: prefix,
      kind: "directory",
      absolutePath: path.join(root, "index.html"),
    });
    return entries;
  }

  for (const entry of dirEntries) {
    const absolutePath = path.join(root, entry.name);
    const relativePath = prefix ? `${prefix}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      if (relativePath === "global-iterations") continue;
      await walkSites(absolutePath, relativePath, false, entries);
      continue;
    }
    if (entry.isFile() && path.extname(entry.name).toLowerCase() === ".html") {
      entries.push({ path: relativePath, kind: "file", absolutePath });
    }
  }

  return entries;
}

async function readFeedbackCorpus(feedbackRoot) {
  const root = path.resolve(repoRoot, feedbackRoot);
  const files = [];

  async function walk(dir) {
    const entries = await readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const absolutePath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await walk(absolutePath);
        continue;
      }
      if (entry.isFile() && entry.name === "reference.md") files.push(absolutePath);
    }
  }

  await walk(root);

  const feedback = [];
  for (const file of files.sort()) {
    const text = (await readFile(file, "utf8")).trim();
    if (!text) continue;
    feedback.push({
      file: path.relative(repoRoot, file).split(path.sep).join("/"),
      text,
    });
  }

  if (!feedback.length) throw new Error(`No feedback reference.md files found under ${feedbackRoot}.`);
  return feedback;
}

function buildThemeSummary(feedbackCorpus) {
  const lowerCorpus = feedbackCorpus.map((entry) => ({ ...entry, lower: entry.text.toLowerCase() }));
  return themeLibrary.flatMap((theme) => {
    const matches = lowerCorpus.filter((entry) => theme.aliases.some((alias) => entry.lower.includes(alias)));
    if (!matches.length) return [];
    return [{
      key: theme.key,
      label: theme.label,
      count: matches.length,
      sources: matches.slice(0, 4).map((entry) => entry.file),
    }];
  });
}

function stripTags(value) {
  return String(value || "").replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function htmlEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function slugify(value) {
  return String(value || "site").toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "site";
}

function titleFromPath(sourcePath) {
  const normalized = sourcePath.replace(/[\\/]+$/, "");
  const parts = normalized.split("/");
  let base = parts.pop() || normalized;
  if (base.toLowerCase() === "index.html") base = parts.pop() || "index";
  return base.replace(/\.html$/i, "").split(/[-_ ]+/).filter(Boolean).map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join(" ");
}

function getTitle(html, sourcePath) {
  return stripTags(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1]) || titleFromPath(sourcePath);
}

function getHeading(html, fallback) {
  return stripTags(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]) || fallback;
}

function getParagraphs(html) {
  const matches = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)].map((match) => stripTags(match[1])).filter(Boolean);
  return matches.slice(0, 3);
}

function targetForSite(targetRoot, site) {
  if (site.path === "index.html") {
    return path.resolve(repoRoot, targetRoot, "root-index.html");
  }
  const relative = site.kind === "directory" ? path.join(site.path, "index.html") : site.path;
  return path.resolve(repoRoot, targetRoot, relative);
}

function dashboardEntryForTarget(targetRoot, targetPath) {
  return path.relative(path.resolve(repoRoot, "ReviewTargets"), targetPath).split(path.sep).join("/");
}

function renderThemeChips(themes) {
  return themes.slice(0, 6).map((theme) => `<span>${htmlEscape(theme.label)}</span>`).join("");
}

function renderThemeList(themes) {
  return themes.slice(0, 5).map((theme) => `
          <article>
            <strong>${htmlEscape(theme.label)}</strong>
            <p>${theme.count} feedback notes point here. This revision applies that pattern without copying another site's layout.</p>
          </article>`).join("");
}

function renderSourceNotes(paragraphs, title) {
  const notes = paragraphs.length ? paragraphs : [
    `${title} is treated as the starting material for this revision.`,
    "The rewrite keeps the site complete and removes anything that feels like an embedded intake form.",
    "Navigation uses in-page anchors so review links do not break while the site is inside the dashboard preview.",
  ];
  return notes.map((note) => `
          <article class="note">
            <p>${htmlEscape(note)}</p>
          </article>`).join("");
}

function renderSite({ site, html, themes, index, goal, feedbackCount }) {
  const title = getTitle(html, site.path);
  const heading = getHeading(html, title);
  const paragraphs = getParagraphs(html);
  const palette = palettes[index % palettes.length];
  const heroImage = heroImages[index % heroImages.length];
  const sourceLabel = `ReviewTargets/${site.path}${site.kind === "directory" ? "/" : ""}`;
  const products = [
    ["Physical Work", "Objects, prints, materials, and tactile pieces stay easy to browse."],
    ["Digital Work", "Downloads, screens, layouts, and motion pieces get their own clear lane."],
    ["Studio Notes", "Plain captions explain what is useful, what changed, and what to review next."],
  ];

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${htmlEscape(title)} - Global Iteration</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;700;800&family=IBM+Plex+Mono:wght@500;700&family=Newsreader:opsz,wght@6..72,500;6..72,700&display=swap" rel="stylesheet">
    <style>
      :root { color-scheme: light; --ink:${palette.ink}; --paper:${palette.paper}; --accent:${palette.accent}; --warm:${palette.warm}; --mist:${palette.mist}; }
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; color: var(--ink); background: radial-gradient(circle at 50% 20%, var(--mist), transparent 34%), linear-gradient(180deg, var(--paper), #f6f7f4 46%, #ecefe8); font-family: "Bricolage Grotesque", sans-serif; }
      a { color: inherit; }
      button { font: inherit; }
      .shell { min-height: 100vh; }
      .topbar { position: sticky; top: 0; z-index: 20; display: grid; grid-template-columns: minmax(130px, .8fr) minmax(260px, 1.8fr); align-items: center; gap: 16px; padding: 12px clamp(16px, 4vw, 44px); background: linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.82)); border-bottom: 1px solid color-mix(in srgb, var(--ink) 16%, transparent); box-shadow: 0 12px 28px rgba(20, 20, 20, .12); backdrop-filter: blur(14px); }
      .brand { font: 800 18px "Newsreader", serif; text-decoration: none; }
      nav { display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 8px; }
      nav a, .pill, .close { min-height: 34px; display: inline-flex; align-items: center; border: 1px solid color-mix(in srgb, var(--ink) 18%, transparent); border-radius: 6px; padding: 0 10px; background: radial-gradient(circle at 50% 0%, rgba(255,255,255,.8), rgba(255,255,255,.38)); box-shadow: 0 10px 22px rgba(20,20,20,.1); font: 700 12px "IBM Plex Mono", monospace; text-transform: uppercase; text-decoration: none; }
      .hero { min-height: 78vh; display: grid; align-items: end; padding: clamp(70px, 12vh, 120px) clamp(16px, 5vw, 70px) clamp(36px, 8vh, 72px); position: relative; isolation: isolate; overflow: hidden; }
      .hero::before { content: ""; position: absolute; inset: 0; z-index: -2; background: linear-gradient(180deg, rgba(255,255,255,.12), rgba(255,255,255,.86)), url("${heroImage}") center / cover; }
      .hero::after { content: ""; position: absolute; inset: auto 0 0; height: 22vh; z-index: -1; background: linear-gradient(0deg, var(--paper), transparent); }
      .hero-inner { max-width: 980px; display: grid; gap: 18px; }
      .source { font: 700 12px "IBM Plex Mono", monospace; text-transform: uppercase; color: var(--accent); }
      h1 { margin: 0; max-width: 900px; font: 800 clamp(46px, 10vw, 120px) "Newsreader", serif; line-height: .88; letter-spacing: 0; }
      .lead { margin: 0; max-width: 740px; font-size: clamp(19px, 2.2vw, 28px); line-height: 1.25; }
      .chips { display: flex; flex-wrap: wrap; gap: 8px; }
      .chips span { border: 1px solid color-mix(in srgb, var(--ink) 18%, transparent); border-radius: 6px; padding: 8px 10px; background: rgba(255,255,255,.62); font: 700 11px "IBM Plex Mono", monospace; text-transform: uppercase; }
      section { padding: clamp(42px, 8vw, 96px) clamp(16px, 5vw, 70px); }
      .section-inner { max-width: 1180px; margin: 0 auto; }
      .split { display: grid; grid-template-columns: minmax(0, .75fr) minmax(280px, 1.25fr); gap: clamp(22px, 5vw, 70px); align-items: start; }
      h2 { margin: 0; font: 800 clamp(30px, 5vw, 64px) "Newsreader", serif; line-height: .95; letter-spacing: 0; }
      .section-copy { margin: 12px 0 0; max-width: 580px; font-size: 18px; line-height: 1.55; }
      .work-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
      .work-card { min-height: 250px; display: grid; align-content: space-between; gap: 18px; padding: 18px; border-radius: 7px; border: 1px solid color-mix(in srgb, var(--ink) 18%, transparent); background: linear-gradient(180deg, rgba(255,255,255,.96), rgba(255,255,255,.78)); box-shadow: 0 22px 40px rgba(20,20,20,.14); text-align: left; cursor: pointer; transition: transform .2s ease, box-shadow .2s ease, filter .2s ease; }
      .work-card:nth-child(1) { transform: rotate(-1.3deg); }
      .work-card:nth-child(2) { transform: rotate(.8deg); }
      .work-card:nth-child(3) { transform: rotate(-.4deg); }
      .work-card:hover { transform: rotate(0deg) translateY(-3px); box-shadow: 0 30px 52px rgba(20,20,20,.18); }
      .work-card strong { font-size: 24px; }
      .work-card span { font-size: 16px; line-height: 1.45; }
      .notes { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
      .note, .feedback article { border-radius: 7px; padding: 18px; border: 1px solid color-mix(in srgb, var(--ink) 14%, transparent); background: rgba(255,255,255,.55); transition: filter .18s ease, background .18s ease; }
      .note:hover, .feedback article:hover { filter: brightness(1.04); background: rgba(255,255,255,.76); }
      .note p, .feedback p { margin: 0; line-height: 1.55; }
      .feedback { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 14px; }
      .footer { display: flex; justify-content: space-between; gap: 16px; flex-wrap: wrap; padding: 24px clamp(16px, 5vw, 70px) 40px; font: 700 12px "IBM Plex Mono", monospace; text-transform: uppercase; border-top: 1px solid color-mix(in srgb, var(--ink) 14%, transparent); }
      .modal { position: fixed; inset: 0; z-index: 50; display: grid; place-items: center; padding: 18px; background: rgba(0,0,0,.58); backdrop-filter: blur(10px); }
      .modal[hidden] { display: none; }
      .panel { width: min(540px, 100%); border-radius: 8px; padding: 18px; background: var(--paper); border: 1px solid color-mix(in srgb, var(--ink) 16%, transparent); box-shadow: 0 28px 80px rgba(0,0,0,.34); }
      .panel-head { display: flex; align-items: center; justify-content: space-between; gap: 18px; margin-bottom: 14px; }
      .panel h3 { margin: 0; font: 800 26px "Newsreader", serif; }
      .panel p { margin: 0; line-height: 1.55; }
      .close { cursor: pointer; color: var(--ink); }
      @media (max-width: 820px) { .topbar { grid-template-columns: 1fr; } nav { justify-content: flex-start; } .hero { min-height: 72vh; } .split, .work-grid, .notes, .feedback { grid-template-columns: 1fr; } h1 { font-size: clamp(44px, 18vw, 84px); } }
    </style>
  </head>
  <body>
    <div class="shell">
      <header class="topbar">
        <a class="brand" href="#top">A. Berger</a>
        <nav aria-label="Primary">
          <a href="#work">Work</a>
          <a href="#notes">Notes</a>
          <a href="#feedback">Feedback</a>
        </nav>
      </header>
      <main id="top">
        <section class="hero">
          <div class="hero-inner">
            <div class="source">${htmlEscape(sourceLabel)}</div>
            <h1>${htmlEscape(heading)}</h1>
            <p class="lead">${htmlEscape(title)} rewritten from its current version using ${feedbackCount} shared feedback notes. No embedded intake form, no broken extra page links, and no hidden exits.</p>
            <div class="chips">${renderThemeChips(themes)}</div>
          </div>
        </section>
        <section id="work">
          <div class="section-inner split">
            <div>
              <h2>Physical and digital lanes</h2>
              <p class="section-copy">This revision keeps the site complete while separating tactile work, screen work, and review notes into clear places.</p>
            </div>
            <div class="work-grid">
              ${products.map(([name, copy], productIndex) => `
              <button class="work-card" type="button" data-title="${htmlEscape(name)}" data-copy="${htmlEscape(copy)}">
                <strong>${htmlEscape(name)}</strong>
                <span>${htmlEscape(copy)}</span>
              </button>`).join("")}
            </div>
          </div>
        </section>
        <section id="notes">
          <div class="section-inner split">
            <div>
              <h2>From the current site</h2>
              <p class="section-copy">The rewrite starts from the existing page content, then tightens the structure around the shared feedback.</p>
            </div>
            <div class="notes">${renderSourceNotes(paragraphs, title)}</div>
          </div>
        </section>
        <section id="feedback">
          <div class="section-inner split">
            <div>
              <h2>Applied feedback</h2>
              <p class="section-copy">These are the recurring signals pulled from the full intake folder and applied to this individual site.</p>
            </div>
            <div class="feedback">${renderThemeList(themes)}</div>
          </div>
        </section>
      </main>
      <footer class="footer">
        <span>Generated by global-iterations</span>
        <span>${htmlEscape(goal)}</span>
      </footer>
    </div>
    <div class="modal" id="modal" hidden>
      <div class="panel" role="dialog" aria-modal="true" aria-labelledby="modalTitle">
        <div class="panel-head">
          <h3 id="modalTitle">Detail</h3>
          <button class="close" type="button" id="closeModal">Close</button>
        </div>
        <p id="modalText"></p>
      </div>
    </div>
    <script>
      const modal = document.getElementById("modal");
      const modalTitle = document.getElementById("modalTitle");
      const modalText = document.getElementById("modalText");
      const closeModal = document.getElementById("closeModal");
      document.querySelectorAll("[data-title]").forEach((button) => {
        button.addEventListener("click", () => {
          modalTitle.textContent = button.dataset.title;
          modalText.textContent = button.dataset.copy;
          modal.hidden = false;
          closeModal.focus();
        });
      });
      function hideModal() { modal.hidden = true; }
      closeModal.addEventListener("click", hideModal);
      modal.addEventListener("click", (event) => { if (event.target === modal) hideModal(); });
      window.addEventListener("keydown", (event) => { if (event.key === "Escape") hideModal(); });
    </script>
  </body>
</html>
`;
}

async function writeSummary({ targetRoot, generated, feedbackCount, themes, goal }) {
  const summaryPath = path.resolve(repoRoot, targetRoot, "iteration-summary.md");
  const lines = [
    "# Global Iterations",
    "",
    `- Goal: ${goal}`,
    `- Feedback documents used: ${feedbackCount}`,
    `- Sites rewritten: ${generated.length}`,
    "",
    "## Themes",
    "",
    ...themes.map((theme) => `- ${theme.label}: ${theme.count}`),
    "",
    "## Outputs",
    "",
    ...generated.map((item) => `- ${item.source} -> ${item.entry}`),
    "",
  ];
  await writeFile(summaryPath, lines.join("\n"), "utf8");
  return summaryPath;
}

async function main(argv = process.argv.slice(2)) {
  const runOptions = parseArgs(argv);
  if (runOptions.help) {
    console.log(usage());
    return;
  }

  const feedbackCorpus = await readFeedbackCorpus(runOptions.feedbackRoot);
  const themes = buildThemeSummary(feedbackCorpus);
  const sites = await walkSites(path.resolve(repoRoot, runOptions.sourceRoot));
  if (!sites.length) throw new Error("No reviewable sites found under ReviewTargets.");

  const generated = [];
  for (const [index, site] of sites.entries()) {
    const sourceHtml = await readFile(site.absolutePath, "utf8");
    const targetPath = targetForSite(runOptions.targetRoot, site);
    await mkdir(path.dirname(targetPath), { recursive: true });
    await writeFile(targetPath, renderSite({
      site,
      html: sourceHtml,
      themes,
      index,
      goal: runOptions.goal,
      feedbackCount: feedbackCorpus.length,
    }), "utf8");
    generated.push({
      source: `ReviewTargets/${site.path}${site.kind === "directory" ? "/" : ""}`,
      entry: dashboardEntryForTarget(runOptions.targetRoot, targetPath),
    });
  }

  const summaryPath = await writeSummary({
    targetRoot: runOptions.targetRoot,
    generated,
    feedbackCount: feedbackCorpus.length,
    themes,
    goal: runOptions.goal,
  });

  console.log(JSON.stringify({
    ok: true,
    goal: runOptions.goal,
    feedbackCount: feedbackCorpus.length,
    siteCount: generated.length,
    targetRoot: runOptions.targetRoot,
    summary: path.relative(repoRoot, summaryPath).split(path.sep).join("/"),
    generated,
  }, null, 2));
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error(`Error: ${error instanceof Error ? error.message : error}`);
    console.error(usage());
    process.exit(1);
  });
}
