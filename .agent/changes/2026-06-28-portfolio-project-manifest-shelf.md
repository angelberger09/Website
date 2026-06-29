# Portfolio Project Manifest Shelf

Timestamp: 2026-06-28 22:39 ET

## Source-of-truth read

- `agent.md`
- `start-here.md`
- `.agent/start-here.md`
- `.agent/memory.md`
- `.agent/feedback/state-alignment.md`
- `.agent/feedback/README.md`
- `.agent/feedback/live-website-validation.md`
- `.agent/feedback/intake-protocol.md`
- `.agent/feedback/extraction-rubric.md`
- `.agent/feedback/feedback-to-lesson-workflow.md`
- `.agent/feedback/feedback-log.md`
- `.agent/feedback/feedback-inbox.md`
- `.agent/feedback/workflow-packets/README.md`
- `.agent/lessons/active-lessons.md`
- `.agent/lessons/lesson-log.md`
- `.agent/lessons/source-review-test.md`
- `.agent/matrices/semantic-index.md`
- `.agent/matrices/components.matrix.md`
- `.agent/changes/change-log.md`
- `.agent/changes/2026-06-28-detail-card-paper-face-load.md`
- `app/layout.jsx`
- `app/portfolio/page.jsx`
- `app/site-data.js`

## Auto-heal precheck

Checked `.agent/feedback/workflow-packets/`. Search and direct README review found no unresolved packet files beyond the packet system README, so no workflow repair was required before implementation.

## Mismatch

The Portfolio page already had public archive pieces and future feed rules, but the newly promoted source-review lesson says repeated public card content should come from structured data manifests rather than scattered hardcoded entries. The named project shells were not represented as one visible manifest-backed shelf, so future archive cards could drift into disconnected hardcoded pieces.

## Satisfaction state

Partially satisfied.

## Visible Website change

Added `app/portfolio-projects.js` as a single public-safe manifest for named future project shells and rendered it on `/Website/portfolio/` as a `Project manifest` shelf. The shelf shows the names as honest `named shell` paper/photo cards and adds manifest rules that explain the source-of-truth boundary without pretending public screenshots, finished case studies, or private project details exist.

## Public source files changed

- `app/portfolio-projects.js`
- `app/portfolio/page.jsx`
- `app/portfolio-project-manifest-pass.css`
- `app/layout.jsx`

## Agent files changed

- `.agent/changes/2026-06-28-portfolio-project-manifest-shelf.md`
- `.agent/matrices/portfolio-project-manifest-shelf.matrix.md`
- `.agent/matrices/components.matrix.md`
- `.agent/changes/change-log.md`

## Affected IDs

- PAGE-004
- COMP-008
- DATA-011
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-029
- LESSON-032
- LESSON-034
- LESSON-038
- LESSON-039
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030

## Render expectation

The Portfolio page should visibly gain a new manifest-backed shelf near the top of the route, with ten paper/photo project-shell cards rendered from one data file instead of scattered hardcoded component cards.
