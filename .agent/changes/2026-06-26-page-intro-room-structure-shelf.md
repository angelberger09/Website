# 2026-06-26 — PageIntro room-structure shelf

## Change

Added a shared readable room-structure shelf to `PageIntro` in `app/site-chrome.jsx` and styled it with `app/page-intro-room-shelf-pass.css`, loaded from `app/layout.jsx`.

The shelf names the calm room sequence directly in each major route intro:

- Hero board
- Featured shelf
- Source note
- Next path

## Why

The active calm-room lesson asks every major page to feel like a composed room with a hero board, featured content, readiness/source note, and next-path rhythm. The shared PageIntro already had paper/photo material, room tags, and room rhythm, but the structural sequence was still implied rather than readable. This pass makes the room structure visible without inventing fake posts, fake products, fake portfolio work, or private content.

## Satisfaction state

Partially satisfied. The shared route intros now expose the calm-room structure more clearly, but deployed visual review should still confirm that the additional paper shelf improves orientation without crowding smaller screens.

## Public source files changed

- `app/site-chrome.jsx`
- `app/page-intro-room-shelf-pass.css`
- `app/layout.jsx`

## Agent files changed

- `.agent/matrices/pages.matrix.md`
- `.agent/changes/2026-06-26-page-intro-room-structure-shelf.md`

## Affected IDs

- PAGE-002
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- DESIGN-019
- DESIGN-022
- DESIGN-023
- DESIGN-029
- DESIGN-030
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-023
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-022
- METRIC-028
- METRIC-029
