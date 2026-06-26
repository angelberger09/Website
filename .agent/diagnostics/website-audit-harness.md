# Website audit diagnostics

The repo now has a browser audit harness:

```txt
scripts/audit-website.mjs
```

## Purpose

Use this harness before visual implementation passes when the live Website needs evidence beyond a screenshot. It loads the Website in Chromium with Playwright, collects screenshots, saves loaded HTML, records light interaction evidence, and writes selected Chrome DevTools Protocol evidence to `logs/`.

## Run

```bash
npm run audit:website:live
```

Local:

```bash
npm run dev
npm run audit:website:local
```

## Evidence produced

- full-page screenshots before and after interaction
- loaded HTML through `page.content()`
- console messages
- failed network requests
- selected CDP page/runtime/log/network events
- CDP performance metrics
- optional DOM snapshot
- layout summary including overflow, headings, links, sections, large elements, and text sample
- animation summary
- accessibility snapshot
- Playwright trace zip

## Agent use rule

When a visual issue is unclear from screenshots alone, run or request this audit and inspect `logs/latest-summary.json` plus the per-route `layout.json`, `performance.json`, screenshots, and trace before making broad styling changes.

Generated logs are ignored by git unless a specific artifact is intentionally preserved for review.
