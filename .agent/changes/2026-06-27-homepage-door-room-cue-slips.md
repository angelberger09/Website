# 2026-06-27 — Homepage door room cue slips

## Satisfaction check

- Target: Homepage studio-door cards in `PAGE-001` / `COMP-004`.
- State before: partially satisfied.
- Mismatch: the first-screen hero cards used source-backed direct room cues, but the larger `Studio rooms` door cards still ended with generic `Enter About`, `Enter Notes`, `Enter Portfolio`, and `Enter Store` labels. That left the larger door board less aligned with the direct-label, honest room-status, and paper-snippet goals already active in `.agent`.
- Boundary: keep existing destinations, public copy, and data; do not invent new pages, products, posts, images, or private material.

## Visible Website change

- Updated `app/page.jsx` so each `.home-door-card` now renders a real `.home-door-card__cue-stack` with:
  - `.home-door-card__room-cue` from `page.roomCue`
  - the existing enter cue as a secondary slip
- Added `app/home-door-room-cue-slips-pass.css` so the cue stack reads as two small clipped paper slips, with the room cue visually stronger than the generic enter action.
- Loaded the new pass in `app/layout.jsx` after the homepage hero route cue pass.

## Why

The homepage already had the right data-backed room cues in `app/site-data.js`, and the hero route cards already used them. The larger door board is a more prominent homepage decision point, so it should carry the same honest room-status cues instead of flattening every destination into one generic enter action.

## Affected items

- `PAGE-001`
- `COMP-003`
- `COMP-004`
- `COMP-008`
- `DESIGN-006`
- `DESIGN-015`
- `DESIGN-019`
- `DESIGN-021`
- `DESIGN-022`
- `DESIGN-024`
- `DESIGN-029`
- `DESIGN-030`
- `LESSON-001`
- `LESSON-002`
- `LESSON-015`
- `LESSON-019`
- `LESSON-021`
- `LESSON-022`
- `LESSON-024`
- `LESSON-025`
- `METRIC-001`
- `METRIC-002`
- `METRIC-014`
- `METRIC-018`
- `METRIC-020`
- `METRIC-021`
- `METRIC-023`
- `METRIC-028`
- `METRIC-029`
- `METRIC-030`
