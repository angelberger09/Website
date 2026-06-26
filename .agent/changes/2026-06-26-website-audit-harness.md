# 2026-06-26 01:35 ET — Website audit harness

## Changed

- Added `scripts/audit-website.mjs`.
- Added `npm run audit:website`, `npm run audit:website:live`, and `npm run audit:website:local`.
- Added Playwright as a development dependency.
- Added `logs/.gitkeep` and `logs/README.md`.
- Updated `.gitignore` so generated audit logs are not committed by default.
- Added `docs/website-audit-harness.md`.
- Added a manual GitHub Actions workflow at `.github/workflows/audit-website.yml` that uploads generated logs as an artifact.
- Added `.agent/diagnostics/website-audit-harness.md` and `.agent/matrices/diagnostics.matrix.md`.

## Why

Screenshot feedback alone does not show enough about the live Website. The audit harness gives future implementation passes browser evidence: loaded HTML, screenshots, trace files, light interaction behavior, console and network issues, layout summaries, animation counts, accessibility snapshots, and selected CDP events and performance metrics.

## Related items

- DIAG-001
- PROC-visual-validation
- METRIC-016
- METRIC-017
- METRIC-018
