# 2026-06-26 — PageIntro room key card

## Changed

- Added a visible `page-hero__room-key` card to the shared `PageIntro` stack in `app/site-chrome.jsx`.
- Added `app/page-intro-room-key-card-pass.css` so the key reads as a clipped paper note attached to the route photo stack.
- Imported the pass from `app/layout.jsx` after the PageIntro room-rhythm/thread passes.

## Why

Shared route intros already had paper/photo centers, tags, and room-rhythm slips, but the main route photo-card content was still marked decorative and the route stack did not expose one concise readable room key beside the visual material. This pass keeps the existing honest route-specific copy and makes the room state visible as a public paper key without adding fake photos, fake work, or private content.

## Satisfaction state

Partially satisfied. The shared route intro system now gives About, Notes, Blog compatibility, Portfolio, and Store a visible room key tied to the paper/photo card. Deployed visual review should still confirm overlap, mobile wrapping, and readability.

## Related semantic items

- PAGE-002
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-023
- DESIGN-030
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-023
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-022
- METRIC-029
- METRIC-030
