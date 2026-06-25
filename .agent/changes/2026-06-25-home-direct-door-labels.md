# Homepage direct door labels

Timestamp: 2026-06-25 08:39 ET

## Intent

Bring the homepage room-door links closer to the current direct-navigation and paper-snippet rules without changing the site routes or inventing new content.

## Satisfaction state

Partially satisfied.

The homepage already had visible paper/collage room doors, but each route door still carried a decorative `01` / `02` / `03` / `04` marker. That marker worked as ornament, but it added extra navigation metadata to a route-choice surface. Current project direction favors direct labels and clear paper slips over edge numbers or helper metadata.

## Website source changed

- `app/page.jsx`
- `app/performance-budget-pass.css`

## Visible change

- Removed the decorative number marker from each homepage room-door link.
- Kept the existing direct `Enter {page.title}` cue.
- Promoted that cue into a clipped paper-slip treatment inside the performance-budget layer so it stays visible, tactile, and cheap to render.
- Hid any leftover `.home-door-card__number` styling defensively so older CSS does not reintroduce visible numeric door markers.

## Why this is in bounds

The change is inside `angelberger09/Website`, uses existing public route data, does not add fake content, and aligns with the active rules for direct labels, human-facing navigation, paper snippets, and performant paper surfaces.

## Related items

- PAGE-001 Homepage
- COMP-004 Studio Page Cards
- DESIGN-015 Direct Unnumbered Navigation
- DESIGN-016 Soft/Sharp Balance
- DESIGN-021 Content-Bearing Polaroid Cards
- DESIGN-030 Text Paper Snippets
- LESSON-015 Use direct nav labels without extra markers
- LESSON-021 Make polaroid frames carry content
- METRIC-014 Direct Nav With Contrast
- METRIC-020 Content-Bearing Polaroids
- METRIC-029 Text Lives In Paper Snippets
