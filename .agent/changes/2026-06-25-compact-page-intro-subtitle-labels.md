# Compact PageIntro subtitle labels

Timestamp: 2026-06-25 08:11 ET

## Intent

Make shared route intro titles visibly behave like supportive subtitles instead of secondary hero headlines.

## Satisfaction check

- Target: LESSON-023 / METRIC-022
- State before change: partially satisfied
- Reason: `PageIntro` titles already used the shared `page-hero__subtitle` class and paper label pass, but the display-family sizing could still read as a route headline at screenshot scale.

## Website source changed

- `app/page-intro-subtitle-pass.css`

## Visible interface change

The shared PageIntro title treatment is now:

- smaller,
- body-family instead of display-family,
- uppercase label-like,
- narrower,
- still clipped as paper,
- marked with a short underline stroke,
- kept on one line on mobile where possible.

This applies across the major public routes that use `PageIntro`, including About, Notes, Blog compatibility, Portfolio, and Store.

## Public-safe boundary

No new public content, products, portfolio work, posts, images, private details, or source claims were added. The change only refines the shared rendered page-intro styling.

## Agent files updated

- `.agent/matrices/quality-metrics.matrix.md`
- `.agent/changes/change-log.md`
- `.agent/changes/2026-06-25-compact-page-intro-subtitle-labels.md`

## Related items

- PAGE-002
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- DESIGN-006
- DESIGN-023
- LESSON-023
- METRIC-022
