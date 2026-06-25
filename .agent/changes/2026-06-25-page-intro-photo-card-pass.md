# PageIntro photo-card pass

Timestamp: 2026-06-25 07:18 ET

## Intent

Make the shared route intro polaroid centers visibly behave as content-bearing paper/photo cards instead of quiet decorative backing pieces.

## Source-of-truth signal

Current `.agent` state says photo/polaroid centers should render meaningful route-specific visual material, not empty decals or blank backing plates. The shared `PageIntro` already had route-specific text data, but the center card could still read too much like a subdued background layer because it sat behind the torn frame stack.

## Satisfaction check

State: partially satisfied.

The data and markup existed, but the visible composition needed a stronger foreground read.

## Website source changed

- `app/page-intro-photo-card-pass.css`
- `app/layout.jsx`

## Visible result

- Route intro photo cards now sit between the dark polaroid backing and torn frame.
- The center card has stronger paper/photo texture, clipped edges, route label treatment, tape detail, and a soft stamp-like accent.
- Mobile layout keeps the photo card visible below the intro copy instead of relying on an offscreen decorative stack.

## Agent records changed

- `.agent/matrices/components.matrix.md`
- `.agent/changes/2026-06-25-page-intro-photo-card-pass.md`

## Related items

- PAGE-002 About
- PAGE-003 Notes
- PAGE-003B Blog compatibility routes
- PAGE-004 Portfolio
- PAGE-005 Store
- COMP-005 Shared Site Chrome
- DESIGN-017 Polaroid Frame Core Motif
- DESIGN-021 Content-Bearing Polaroid Cards
- DESIGN-025 Route Photo-Center Cards
- LESSON-021 Make polaroid frames carry content
- LESSON-025 Render photo centers instead of background decals
- METRIC-020 Content-Bearing Polaroids
- METRIC-024 Photo Centers Not Empty

## Boundary notes

No fake screenshots, fake products, fake portfolio pieces, or private content were added. The pass only strengthens the visual treatment of already-public route labels, titles, and notes from `app/site-chrome.jsx`.
