# 2026-06-27 — Terminal preview surface budget

## Summary

Added a final Store preview surface budget pass after the newest Store proof rail so later preview styling does not bypass the render and paper-surface constraints established by the prior late budget pass.

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
- `.agent/changes/change-log.md`
- `app/layout.jsx`
- `app/late-paper-surface-budget-pass.css`
- `app/store-preview-proof-rail-pass.css`

Live public validation was attempted against `https://angelberger09.github.io/Website/`, but the fetch was unavailable during this run, so validation used the current `main` source as allowed by the live validation protocol.

## Mismatch

The `late-paper-surface-budget-pass.css` comment and matrix intent say the budget should load last, but `app/layout.jsx` had newer Store preview styling loaded after it. That meant late Store preview/proof surfaces could reintroduce heavier shadows, filters, and pseudo-layer noise after the budget pass.

## Satisfaction state

Partially satisfied → refined.

## Visible Website change

- Added `app/terminal-preview-surface-budget-pass.css`.
- Loaded it after `app/store-preview-proof-rail-pass.css` in `app/layout.jsx`.
- Rebalanced Store preview, gallery, availability, checklist, promise, lane, and feed surfaces with a shared terminal paper background, calmer shadows, disabled filters, content visibility, mobile intrinsic sizing, and reduced-motion transform guards.

## Public source changed

- `app/terminal-preview-surface-budget-pass.css`
- `app/layout.jsx`

## Agent files changed

- `.agent/changes/2026-06-27-terminal-preview-surface-budget.md`
- `.agent/matrices/terminal-preview-surface-budget.matrix.md`

## Affected semantic items

- PAGE-005
- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-027
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- DESIGN-032
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-026
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-031
- METRIC-032

## Boundary notes

No copy, routes, product data, inventory claims, fake product photos, fake listings, private content, or connected repo contracts changed. The pass only refines existing public-safe Store preview surfaces and keeps the visual output inside the current paper/collage direction.
