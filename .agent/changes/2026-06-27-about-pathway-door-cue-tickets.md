# 2026-06-27 — About pathway door cue tickets

## Changed

- Added `app/about-pathway-door-cue-tickets-pass.css`.
- Loaded the pass in `app/layout.jsx` after the About departure-table pass.
- Updated `app/about/page.jsx` so the About next-door cards render source-backed `about-pathway-note__door-cue` text from `aboutPathwayFrames` instead of relying on generic CSS-only pseudo-element stamps.
- Added vertical clipped paper door tickets for `read next`, `open archive`, and `prep table`, with responsive horizontal fallbacks.

## Why

The About pathways departure table already read as one composed paper exit surface, but the actual next-door card cue labels were still mostly CSS-generated and included a generic first-card cue. This left the section partially satisfied against the source-backed, text-snippet, paper-first, flattened hierarchy, and room-continuity goals.

## Satisfaction state

Partially satisfied → refined.

## Boundary check

- Stayed inside `angelberger09/Website`.
- Did not add fake products, posts, images, portfolio work, private material, or unavailable links.
- Preserved existing About routes, link destinations, copy intent, accessible link text, and mobile readability.

## Related items

- PAGE-002
- COMP-008
- COMP-009
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
