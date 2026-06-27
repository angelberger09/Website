# Store preview proof rail

Timestamp: 2026-06-27 05:10 ET

## Read before change

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
- `app/store/page.jsx`
- `app/store-preview-collage-pass.css`

## Target classification

- Target: Store preview board / staged shot strip.
- Satisfaction state before this pass: partially satisfied.
- Underlying goal: Store preview material should feel like honest photo-led proof surfaces, not loose app cards or fake product listings.
- Boundary: do not invent product photos, inventory, public shop links, private planning, or unavailable products.
- Quality metric: `METRIC-030` and `METRIC-028`; preview content should read as one authored paper/photo sequence with clear public-safe labels and flat editorial hierarchy.

## Visible interface change

Added `app/store-preview-proof-rail-pass.css` and loaded it from `app/layout.jsx` after the existing Store gallery/paper passes. The pass groups the Store preview board with a clipped `preview proof` paper slip, a vertical stitch on the intro, a horizontal thread over the preview strip, numbered `proof 01` card stamps, and small `honest preview` receipt slips in the captions.

## Why

The Store preview board already had public-safe staged visual centers and copy that explicitly says the pieces are not product photos or live inventory. It still could read as three nearby preview cards instead of one guided proof rail. This pass makes the section more human-readable, paper-first, and honest without changing copy, links, routes, data, accessibility labels, or claiming products are available.

## Public files changed

- `app/store-preview-proof-rail-pass.css`
- `app/layout.jsx`

## Related semantic items

- `PAGE-005`
- `COMP-008`
- `DESIGN-019`
- `DESIGN-021`
- `DESIGN-022`
- `DESIGN-024`
- `DESIGN-029`
- `DESIGN-030`
- `DESIGN-031`
- `LESSON-019`
- `LESSON-021`
- `LESSON-022`
- `LESSON-024`
- `LESSON-025`
- `LESSON-026`
- `METRIC-018`
- `METRIC-020`
- `METRIC-021`
- `METRIC-023`
- `METRIC-028`
- `METRIC-029`
- `METRIC-030`
- `METRIC-032`
