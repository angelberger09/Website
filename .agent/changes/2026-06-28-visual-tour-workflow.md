# 2026-06-28 11:24 ET — Visual tour workflow setup

## Changed

- Added `.github/workflows/visual-tour.yml`.
- The workflow builds the exact branch or pull request commit under test.
- It serves the static export locally from `out/` on port `4173`.
- It fetches the reusable `SoftStrange-WebsiteAuditor` ESM tool from a configurable URL, defaulting to the Software repo CDN path.
- It runs the auditor against the local `/Website` build at 4fps.
- It captures scroll walkthrough videos for Home, About, Notes, Portfolio, and Store.
- It captures a clickthrough and interaction-simulation video using header links, nav links, homepage route cards, door cards, tabs, buttons, and form controls as targets.
- It uploads MP4 videos plus visual receipts and recovery packets as GitHub Actions artifacts.

## Why

The Website needs a visual receipt loop so every branch or push can show what the rendered interface actually does while scrolling and interacting. This supports the recovery harness by reducing guesswork after CSS and layout changes.

## Satisfaction state

Partially satisfied. The Website workflow is installed. The auditor URL must be reachable by GitHub Actions for videos to render. If the auditor fetch fails, the workflow writes a public-safe recovery packet and stops the visual-tour job.

## Related items

- PROC-004
- TOOL-001
- INT-010
- INT-011
- PAGE-001
- PAGE-002
- PAGE-003
- PAGE-004
- PAGE-005
- METRIC-033
- METRIC-034

## Validation guidance

Run the `Visual Tour` workflow from GitHub Actions. On success, download the `visual-tour-videos-*` artifact to review the scroll walkthrough and interaction simulation MP4s. If the auditor fetch fails, publish or expose a pinned auditor URL and set the `SOFTSTRANGE_AUDITOR_URL` repository variable to that reachable ESM file.
