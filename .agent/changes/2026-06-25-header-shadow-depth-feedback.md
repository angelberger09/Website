# 2026-06-25 22:14 ET — Header shadow depth feedback

## Changed

- Added `.agent/feedback/2026-06-25-header-shadow-depth-feedback.md` with public-safe screenshot feedback about the live header shadow not reading clearly.
- Added `.agent/references/2026-06-25-header-shadow-depth-reference.md` as a reusable reference note for future implementation.

## Why

The live top section already has CSS shadow declarations, but the rendered header does not visually cast a strong enough shadow on the cream background. The next implementation pass should treat visible browser-rendered shadow depth as the success condition, not merely the presence of `box-shadow` in CSS.

## Related items

- FEEDBACK-008
- FEEDBACK-011
- LESSON-020
- PAGE-001
- COMP-001
- COMP-002
- COMP-005
- DESIGN-004
- DESIGN-011
- DESIGN-019
- DESIGN-020
- METRIC-019

## Boundary

Feedback-only change. Public Website source files were intentionally not changed in this pass.
