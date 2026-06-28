# 2026-06-28 10:47 ET — Homepage UX entry board

## Changed

- Added `app/home-hero-ux-entry-board-pass.css`.
- Loaded it from `app/layout.jsx` after `app/home-hero-scale-guard-pass.css` and before `app/terminal-room-render-budget-pass.css`.
- Tightened the homepage first screen into a flow-based entry board: the hero no longer behaves like a sticky poster, the title scale is reduced again, the welcome slip is smaller and clearer, the route choices sit higher, and the Open rooms card is bound into the same desktop grid.
- Added a short-viewport desktop rule so the arrival ticket drops out before the room choices are pushed below the fold.
- Preserved homepage copy, routes, data, paper assets, no-fake-content boundaries, and reduced-motion behavior.

## Why

Angel approved the full fix plan and asked to implement it. The next in-bounds target was the homepage hero UX orientation problem: the page should communicate where the visitor is and where they can go before it acts like a large decorative composition.

## Satisfaction state

Partially satisfied moving toward satisfied for the first pass of the plan. The homepage hero should be visibly calmer and more reliably above-fold on laptop-sized screens. The later paper-shell, page-room, copy, and cleanup passes remain separate future steps.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-002
- DESIGN-014
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-029
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-028
- METRIC-029
- METRIC-032

## Validation guidance

After deployment, check `/Website/` around 1280×720 and 1440×800. The visitor should see the studio identity, welcome slip, entry choices, and Open rooms card without the title swallowing the page.
