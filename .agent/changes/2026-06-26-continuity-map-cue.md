# 2026-06-26 — Continuity map cue

## Interface change

- Added a `continuity-paper-trail__map` visual cue inside `app/next-step-band.jsx` so every shared next-step band begins with a content-bearing abstract paper/photo route-map object.
- Added `app/continuity-map-cue-pass.css` and loaded it from `app/layout.jsx` after the continuity photo-step pass.

## Why

The shared continuity band already had route-photo next-step cards, but its lead copy sheet still read as a mostly text-only paper note. Current paper/collage, content-bearing photo center, direct path, and calm-room lessons support making the whole exit surface visibly map-like and tactile before the visitor reaches the individual links.

## Safety and boundaries

- Uses only abstract paper/photo styling and existing continuity copy.
- Does not change route suggestions, external links, source data, products, posts, portfolio records, or private content.
- Keeps the cue `aria-hidden` so it adds visible structure without creating redundant screen-reader text.

## Related items

- COMP-009
- COMP-005
- DESIGN-018
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-030
- LESSON-002
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
- METRIC-029
- METRIC-030
