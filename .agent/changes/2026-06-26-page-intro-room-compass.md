# 2026-06-26 — PageIntro room compass cues

## Changed

- Added `page-hero__room-compass` markup to the shared `PageIntro` stack in `app/site-chrome.jsx`.
- Added `app/page-intro-room-compass-pass.css` so every route intro gets three clipped paper cues: `Open`, `Look for`, and `Leave by`.
- Imported the new pass from `app/layout.jsx` after the shared room-key pass so it applies across the rendered Website.
- Updated `.agent/matrices/components.matrix.md` to record the shared chrome change.

## Why

The active room-structure and paper/card lessons were partially satisfied: shared PageIntro already had route-specific photo centers, a room key, room tags, and shelf notes, but the photo stack could still read as a decorative cluster rather than a navigable calm room. This pass strengthens the shared intro pattern with visible route cues without adding fake screenshots, fake portfolio work, fake product imagery, or private material.

## Related items

- COMP-005
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-025
- DESIGN-030
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-024
- METRIC-025
- METRIC-028
- METRIC-029
- METRIC-030
