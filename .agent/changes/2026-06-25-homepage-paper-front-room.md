# Homepage paper front room

Timestamp: 2026-06-25 05:21 ET

## Intent

Make a visible Website interface change from current `.agent` state by applying the paper/collage direction to the homepage itself, not only the interior routes.

## Satisfaction state

Partially satisfied before this pass.

The homepage had a content-bearing hero polaroid and shared paper-card treatment, but its filled front-room sections still leaned on generic `DetailCard` grids and the main route doors still used the broad shared `page-card` pattern. That made the public front door less specific than the About, Notes, Portfolio, and Store paper/collage rooms.

## Website source changed

- `app/page.jsx`
- `app/home-paper-collage-pass.css`
- `app/layout.jsx`

## Visible change

`app/page.jsx` now renders homepage-specific structures:

- `home-paper-field`
- `home-note-board`
- `home-note-piece`
- `home-room-board`
- `home-room-slip`
- `home-door-board`
- `home-door-card`
- `home-pillar-strip`
- `home-pillar-note`

`app/home-paper-collage-pass.css` gives those structures visible paper/collage treatment:

- large paper-field backdrops,
- clipped paper note silhouettes,
- taped/pinned highlight pieces,
- staggered room-status slips,
- image-like route door centers,
- clipped labels and visible route cues,
- responsive two-column and single-column fallbacks.

The change uses existing public-safe homepage data and does not invent fake projects, fake product images, fake screenshots, or private content.

## Related items

- PAGE-001
- COMP-004
- COMP-005
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-026
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-024
- METRIC-028
- METRIC-029
- METRIC-030

## Follow-up

Validate the deployed homepage visually after GitHub Pages updates. The intended visible result is that `/Website/` reads as a paper/collage front room before visitors choose About, Notes, Portfolio, or Store.
