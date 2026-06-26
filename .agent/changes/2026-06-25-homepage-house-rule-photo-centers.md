# 2026-06-25 — Homepage house-rule photo centers

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
- `.agent/lessons/active-lessons.md`
- `.agent/lessons/lesson-log.md`
- `.agent/matrices/semantic-index.md`
- `.agent/matrices/pages.matrix.md`
- `.agent/changes/change-log.md`

## Mismatch

Homepage house-rule cards were already public-facing receipt slips, but their repeated card bodies were still mostly text-first compared with the active paper/photo-center direction used across the rest of the homepage.

## Satisfaction state

Partially satisfied.

## Visible Website change

`app/page.jsx` now gives each house-rule card an explicit `home-check-note__photo` center with public-safe labels for paper material, human copy, and honest growth. `app/home-check-photo-pass.css` renders those centers as clipped abstract paper/photo surfaces with grain, scratches, layered shadows, and mobile fallback. `app/layout.jsx` loads the pass after the existing homepage paper styles.

## Public source files changed

- `app/page.jsx`
- `app/home-check-photo-pass.css`
- `app/layout.jsx`

## Agent files changed

- `.agent/matrices/pages.matrix.md`
- `.agent/changes/2026-06-25-homepage-house-rule-photo-centers.md`

## Related semantic items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-025
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-029
- METRIC-030

## Validation note

The change is source-visible and should render on `/Website/` once GitHub Pages deploys the latest main branch. No private content, fake work, fake product photos, or fake portfolio material was introduced.
