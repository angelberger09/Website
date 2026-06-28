# Visual Tour Workflow Matrix

| Field | Value |
|---|---|
| Matrix ID | MATRIX-VISUAL-TOUR-WORKFLOW |
| Date | 2026-06-28 11:24 ET |
| Workflow file | `.github/workflows/visual-tour.yml` |
| Agent files | `.agent/changes/2026-06-28-visual-tour-workflow.md`, `.agent/matrices/visual-tour-workflow.matrix.md` |
| Tool dependency | `SoftStrange-WebsiteAuditor` ESM file from the Software repo |
| Primary process | PROC-004 Visual tour receipt workflow |
| Primary tool | TOOL-001 SoftStrange Website Auditor |
| Pages covered | PAGE-001, PAGE-002, PAGE-003, PAGE-004, PAGE-005 |
| Interactions covered | INT-010, INT-011 |
| Metrics | METRIC-033, METRIC-034 |
| Satisfaction state | partially satisfied; workflow installed and awaiting Actions validation |

## Implementation notes

The workflow checks out the branch under test, installs dependencies, installs the browser runner, installs FFmpeg, builds the static Website, serves `out/` locally, fetches the auditor, and runs a 4fps visual tour against the local `/Website` build.

The workflow uploads MP4 videos as Actions artifacts and uploads the generated manifest, README, poster frame, and any recovery packets. It does not commit MP4 files into the repository.

## Coverage

Configured routes: Home, About, Notes, Portfolio, and Store.

Configured viewports: laptop `1280x720` and mobile `390x844`.

Configured interaction targets: header links, navigation links, homepage route cards, page door cards, tabs, buttons, and form fields.

## Dependency note

The default auditor URL is outside the Website repo. If that URL is unavailable during GitHub Actions, the workflow writes a recovery packet so the next implementation run can repair the process before broad visual work continues.
