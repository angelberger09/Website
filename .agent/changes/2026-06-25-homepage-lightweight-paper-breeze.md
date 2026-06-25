# Homepage lightweight paper breeze

Timestamp: 2026-06-25 06:08 ET

## Intent

Restore a visible sense of calm homepage motion after the performance budget pass removed the expensive full-screen atmosphere layer.

## Satisfaction classification

Partially satisfied.

The site still needs to feel alive, but the previous global fixed atmosphere and animated overlays were too expensive. The supported target is not to reintroduce heavy full-screen effects; it is to preserve the alive-but-not-busy lesson with a cheaper, localized surface treatment.

## Website source changed

- `angelberger09/Website/app/home-paper-collage-pass.css`

## What changed visibly

The homepage now adds small clipped paper scraps around the hero lockup and main homepage paper fields. They use the existing paper grain asset, subtle shadows, and a slow vertical breathing animation.

The treatment is intentionally local to homepage surfaces rather than global or fixed to the viewport. It also includes a reduced-motion fallback and hides the extra scraps on narrow screens.

## Why this is in bounds

This implements the active lessons and metric around subtle purposeful atmosphere while respecting the newer performance budget feedback. It does not add fake content, routes, products, posts, portfolio material, private details, or new external dependencies.

## Related items

- PAGE-001
- COMP-003
- COMP-008
- DESIGN-009
- DESIGN-019
- METRIC-007
- LESSON-006
- LESSON-009

## Follow-up

Review the deployed homepage for whether the new local motion is visible enough without looking busy or causing scroll/render cost. Do not restore the old full-screen atmosphere layer unless a future performance review proves it is safe.
