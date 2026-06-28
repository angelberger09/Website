# 2026-06-28 11:08 ET — Homepage room choice left-depth pass

## Changed

- Added `app/home-room-choice-left-depth-pass.css`.
- Loaded it from `app/layout.jsx` after `app/home-hero-wordless-entry-pass.css` and before the terminal render budget.
- Shifted the wordless homepage room-choice entry board into a clearer left-docked desktop position.
- Strengthened the first-screen backing paper sheet, contact-sheet shadow, tape tab, and individual route-slip depth.
- Added subtle per-room paper rotations on desktop, with mobile and reduced-motion fallbacks that remove the rotations for readability.
- Updated `.agent/matrices/home-hero-scale-guard.matrix.md`.

## Why

The active homepage hero direction is wordless, but the previous state was still only partially satisfied because the room-choice surface could feel centered, light, and less connected to the left-docked editorial path. Current `.agent` priorities ask the homepage to stay human-readable, organized, paper-first, physically layered, and left-docked where possible without restoring oversized hero wording.

## Satisfaction state

Partially satisfied → refined. The first-screen hero still has no visible poster wording, but the remaining room-choice surface should now read more like a deliberately placed left-side paper entry card with stronger depth.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-014
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-029
- DESIGN-030
- DESIGN-031
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
- METRIC-030
- METRIC-032

## Validation guidance

After deployment, validate `/Website/` on desktop and mobile. Desktop should show the compact four-room entry board as a left-docked paper surface with a visible tape tab and stronger shadow. Mobile should remain centered and readable without rotated cards.
