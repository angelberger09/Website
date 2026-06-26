# Website audit harness

The Website repo includes a Playwright audit harness at:

```txt
scripts/audit-website.mjs
```

It loads the live or local Website, interacts with the rendered pages, saves screenshots, saves loaded HTML, writes selected Chrome DevTools Protocol evidence, and records layout/performance summaries into `logs/`.

## Commands

```bash
npm install
npx playwright install chromium
npm run audit:website:live
```

For local development:

```bash
npm run dev
npm run audit:website:local
```

Custom base URL:

```bash
node scripts/audit-website.mjs --base http://localhost:3000/Website/
```

Custom routes:

```bash
node scripts/audit-website.mjs --routes /,/notes/,/store/
```

## Outputs

Generated folders look like:

```txt
logs/<timestamp>/
  summary.json
  routes/<route-viewport>/
    summary.json
    layout.json
    performance.json
    animations.json
    accessibility-snapshot.json
    interaction.json
    console.ndjson
    network.ndjson
    cdp-events.ndjson
    dom-snapshot.json
    html/document.html
    screenshots/initial.png
    screenshots/after-interaction.png
    traces/trace.zip
```

`logs/latest-summary.json` is also written for quick review.

## What the harness checks

- whether each route loads
- whether the rendered document has horizontal overflow
- heading, link, section, card, and body text counts
- large visible elements that may be overpowering the page
- console messages and failed network requests
- selected CDP page, runtime, log, network, and performance events
- loaded HTML through `page.content()`
- basic accessibility tree snapshot
- active animations and timing information
- screenshots before and after lightweight interaction
- Playwright traces for deeper review

## Interaction behavior

The script uses safe page interaction only:

- moves the mouse
- hovers visible links
- tabs through focusable elements
- scrolls through the page
- returns to the top

It does not click route links by default, so the per-route evidence stays tied to the route being audited.

## Log policy

Generated logs are ignored by git. Commit the harness and docs, not routine browser output. If an audit artifact is useful for a specific issue, attach or preserve that artifact intentionally.
