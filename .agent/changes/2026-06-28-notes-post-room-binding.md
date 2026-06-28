# 2026-06-28 — Notes post room binding

## Interface change

Added `app/notes-post-room-binding-pass.css` and loaded it from `app/layout.jsx` after the existing Notes post Markdown terminal budget pass.

## Why

The individual Notes/Blog post route already had a paper desk, reader sheet, Markdown scraps, path shelf, and support cards. Those surfaces were individually styled, but the route could still read as separate paper islands after the reader sheet instead of one calm reader room. This pass makes the post route visibly scan as a bound reader-room folio.

## Visible result

- Adds a large clipped paper backing field behind the post reader room.
- Adds a `reader room folio` paper label to the reader desk.
- Adds a vertical stitched paper thread from the desk toward the lower reader surfaces.
- Adds a `read · return · continue` label and connector line over the path shelf.
- Adds a `support ledger` label and connector line over the support board.
- Lightly normalizes shadows on the reader sheet, path notes, source slip, and support cards so they feel related.
- Keeps all existing public note data, fallback states, and route copy intact.

## Satisfaction check

- Target: individual Notes/Blog post reader continuity.
- State before: partially satisfied.
- State after: partially satisfied, refined visibly.
- Public-safety boundary: no fake posts, fake images, private drafts, or unavailable content added.
- Accessibility boundary: source order and existing links remain unchanged; pseudo-labels are decorative and do not replace semantic headings.

## Related semantic items

- PAGE-003A
- PAGE-003B
- COMP-007
- COMP-008
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
