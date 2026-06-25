# 2026-06-25 Store path direct paper cues

## Changed

- Updated `app/store/page.jsx` so the local Store path photo cards show `Open room` as a direct navigational cue instead of a large decorative numeric marker.
- Added `app/store-path-direct-labels-pass.css` to style the cue as a clipped paper label inside the existing route-photo center.
- Imported the pass from `app/layout.jsx` after `app/store-path-photo-pass.css`.
- Updated `.agent/matrices/pages.matrix.md`, `.agent/matrices/quality-metrics.matrix.md`, and `.agent/changes/change-log.md`.

## Why

The local Store path photo board was already a public-safe, useful next-room surface, but it still carried large numeric markers inside navigation cards. Current active lessons favor direct unnumbered navigation cues with enough paper/material definition. This refinement keeps the existing honest photo-card treatment while removing a remaining navigation-number mismatch.

## Satisfaction state

Partially satisfied: the Store local path cards now match the direct-label rule better, while deployed visual review should still check for any other navigational surfaces that reintroduce decorative numbering.

## Related items

- PAGE-005
- COMP-008
- DESIGN-015
- DESIGN-016
- DESIGN-019
- DESIGN-022
- DESIGN-030
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-022
- METRIC-014
- METRIC-017
- METRIC-021
- METRIC-029
