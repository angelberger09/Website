# Diagnostics Matrix

| ID | Tool | Location | Purpose | Output | Status |
|---|---|---|---|---|---|
| DIAG-001 | Playwright Website Audit | `scripts/audit-website.mjs` | Load live/local Website routes, interact lightly with rendered pages, and collect browser evidence for visual/performance review | `logs/<timestamp>/`, `logs/latest-summary.json`, screenshots, loaded HTML, trace zips, CDP event logs, performance/layout/animation/accessibility summaries | active |

## Use rule

Use diagnostics when screenshots are not enough to understand a visible Website issue. Generated logs should remain uncommitted unless a specific artifact is intentionally preserved for review.
