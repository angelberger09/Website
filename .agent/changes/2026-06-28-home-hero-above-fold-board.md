# 2026-06-28 09:50 ET — Homepage hero above-fold board

## Changed

- Added `app/home-hero-above-fold-board-pass.css`.
- Loaded it from `app/layout.jsx` immediately before `terminal-room-render-budget-pass.css` so it wins over the accumulated homepage hero/path layers while still respecting the final render-budget pass.
- Shortened the homepage first-screen hero, reduced the welcome title scale, tightened the title spacing, raised and compacted the welcome slip, entry cue ticket, and room-choice contact sheet, and increased the main paper-board shadow.
- Repositioned the hero polaroid/card so it feels attached to the composed board instead of floating as a disconnected sticker.
- Kept homepage copy, route links, public-safe data, and the existing CSS-only material system unchanged.

## Why

The active `.agent` state asks the homepage to stay human-readable, left-docked, paper-first, and organized. The rendered homepage hero could still be partially satisfied because the title dominated the viewport and the entry choices were pushed too low on a normal desktop browser window. This pass keeps the current composition but makes the front-door board easier to scan above the fold.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-014
- DESIGN-018
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-012
- LESSON-014
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-011
- METRIC-013
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-032
