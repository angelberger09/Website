# 2026-06-28 — Homepage room choice pocket

## Satisfaction check

- Target: active wordless homepage hero / first visible room-choice surface.
- State before this pass: partially satisfied.
- Reason: the homepage had removed visible hero wording and kept only room choices, but the route choice contact sheet could still read as a floating mini-card cluster rather than one calm, left-docked paper pocket.

## Changed

- Added `app/home-room-choice-pocket-pass.css`.
- Loaded it from `app/layout.jsx` immediately after `app/home-room-choice-left-depth-pass.css` and before the terminal render budget.
- Tightened the wordless hero room-choice board width, clipped paper silhouette, bottom contact shadow, and two-column route-slip rhythm.
- Strengthened the route slips as content-bearing paper/photo cards without restoring visible hero wording or adding fake content.

## Why

The active `.agent` direction asks the homepage to stay wordless above the fold, human-readable, organized, left-docked, paper-first, and not scattered. This pass keeps the semantic screen-reader title and existing route data while making the first visible choice surface feel more like one bound paper entry pocket.

## Public-safety notes

- No private context was added.
- No fake products, posts, portfolio assets, or screenshots were invented.
- Existing public route labels and room cues were preserved.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-014
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
