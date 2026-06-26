# 2026-06-25 — Portfolio process direct labels

## Changed

- Replaced the visible numeric `01` / `02` / `03` / `04` chips in the Portfolio publishing-rhythm cards with direct paper phase labels: `Read signal`, `Shape card`, `Add preview`, and `Open path`.
- Added `app/portfolio-process-direct-labels-pass.css` so those process labels render as clipped, handled paper cues instead of small numeric UI markers.
- Loaded the pass from `app/layout.jsx` immediately after the Portfolio state/process photo pass.
- Updated `.agent/matrices/pages.matrix.md` to record the Portfolio process-label refinement.

## Why

The Portfolio publishing-rhythm cards were already paper/photo-led, but the copy strip still used decorative step numbers. Current direct-label and paper-snippet lessons prefer readable labels over numeric markers when the surface is a visitor-facing route or process cue. This pass keeps the honest public process steps while making the visible cards more directly legible and less UI-like.

## Satisfaction state

Partially satisfied. The specific Portfolio process-number mismatch is corrected in source; deployed visual review should confirm the new paper labels are readable across desktop and mobile.

## Related items

- PAGE-004
- COMP-008
- DESIGN-015
- DESIGN-016
- DESIGN-019
- DESIGN-022
- DESIGN-030
- LESSON-015
- LESSON-019
- LESSON-022
- LESSON-026
- METRIC-014
- METRIC-021
- METRIC-029
- METRIC-030
