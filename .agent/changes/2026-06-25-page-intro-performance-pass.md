# PageIntro performance pass

Timestamp: 2026-06-25 07:40 ET

## Intent

Keep the shared route intro photo-center card visibly paper-like while bringing it under the same render budget as the larger paper/collage system.

## Satisfaction state

Partially satisfied.

The Website already had a broad `app/performance-budget-pass.css` loaded last, but the later shared PageIntro photo-card pass still carried extra decorative pseudo-elements, transform-heavy layer offsets, and a multi-layer paper/photo background on every major route intro.

## Website source changed

- `app/page-intro-performance-pass.css`
- `app/layout.jsx`

## Visible interface change

The PageIntro polaroid/photo center on About, Notes, Portfolio, Store, and Blog compatibility routes now uses a simpler cut-paper card surface:

- shared fast paper cut shape,
- cheaper shared paper shadow,
- fewer layered background effects,
- no decorative tape/dot pseudo-elements,
- reduced rotation/offset transforms,
- reduced-motion fallback that removes remaining transform styling.

The card should still look like a foreground paper/photo center, but it should feel calmer and less visually busy than the previous pass.

## Why this was in bounds

Current `.agent` state keeps the paper/collage direction active while also recording that performance is a primary interface constraint. This change does not invent content, products, posts, portfolio work, or private material. It refines a shared rendered surface that appears across public Website routes.

## Related items

- COMP-005 Shared Site Chrome
- DESIGN-019 Paper Material Authenticity
- DESIGN-021 Content-Bearing Polaroid Cards
- DESIGN-025 Route Photo-Center Cards
- METRIC-007 Alive But Not Busy
- METRIC-018 Paper Material Reads First
- METRIC-020 Content-Bearing Polaroids
- METRIC-024 Photo Centers Not Empty
