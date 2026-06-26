# 2026-06-26 — PageIntro route-specific shelf cues

## Interface change

- Updated `app/site-chrome.jsx` so each shared `PageIntro` room shelf uses route-specific paper/photo face cues instead of generic `door`, `page`, `source`, and `path` labels.
- Updated `app/page-intro-room-shelf-pass.css` so the longer direct cue labels fit inside the small photo faces with stronger readability and responsive wrapping.

## Why

The shared PageIntro shelf was structurally correct and visually papery, but its image cue faces still read like abstract component placeholders. Current lessons and metrics call for direct, content-bearing paper/photo centers, direct unnumbered labels, calm room structure, and no empty or generic decorative surfaces. This pass makes the route intro shelves read as real room-specific paper cues across About, Notes, Blog compatibility, Portfolio, and Store without changing routes, data contracts, or inventing fake content.

## Satisfaction state

Partially satisfied → refined.

## Related semantic items

- PAGE-002
- PAGE-003
- PAGE-003B
- PAGE-004
- PAGE-005
- COMP-005
- DESIGN-015
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-023
- DESIGN-030
- DESIGN-031
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-023
- LESSON-025
- METRIC-014
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-022
- METRIC-024
- METRIC-029
- METRIC-030
