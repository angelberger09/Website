# Homepage Room Trail Binding

Timestamp: 2026-06-28 18:41 ET

## Target

- PAGE-001 Homepage
- COMP-003 Scroll Title Sequence
- COMP-008 Filled Page Sections
- DESIGN-018 Visitor Continuity Bands
- DESIGN-019 Paper Material Authenticity
- DESIGN-022 Paper Piece Card Surfaces
- DESIGN-024 Torn Edge Card Silhouettes
- DESIGN-029 Flattened Paper Hierarchy
- DESIGN-030 Paper Snippet Labels

## Satisfaction state

Partially satisfied. The homepage had a left-docked reading path and per-section spine cues, but the top reading map could still read as separate ticket stops rather than a single bound trail into the long front page.

## Public Website change

Added a small `home-path-map__binding` paper slip to the homepage reading map and loaded `app/home-room-trail-binding-pass.css`. The new pass adds a visible binding label, a paper-thread rail behind the chapter cards, and hover/focus lift so the path reads as one human-scannable room trail.

## Files changed

- `app/page.jsx`
- `app/layout.jsx`
- `app/home-room-trail-binding-pass.css`

## Public-safety note

This pass uses existing public homepage structure and generic studio-room wording only. It does not add private details, fake project material, fake product data, or unavailable imagery.
