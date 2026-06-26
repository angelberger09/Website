# 2026-06-26 — Footer exit room faces

## Changed

- Updated `app/site-chrome.jsx` so the shared footer exit receipt photo faces use route-specific visual cues: `map room`, `latest note`, `work shelf`, and `shop prep`.
- Added `app/footer-exit-room-faces-pass.css` so each footer receipt photo face gets a distinct paper/photo tint, texture blend, and readable route label treatment.
- Loaded the pass in `app/layout.jsx` after the four-room footer exit shelf styling.

## Why

The footer exit shelf already exposed all four active Website rooms, but several receipt photo faces still reused generic or visually similar abstract cues. Current direct-label, content-bearing photo-surface, paper-card, and anti-accumulation guidance supports making the existing footer shelf more specific rather than adding another footer route system.

## Satisfaction state

Partially satisfied: the shared footer now has clearer route-distinct receipt faces, but deployed visual review should confirm the four small cards stay readable across desktop and mobile.

## Related items

- COMP-005
- COMP-009
- DESIGN-015
- DESIGN-018
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-030
- DESIGN-031
- LESSON-002
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-025
- METRIC-014
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-029
- METRIC-030
