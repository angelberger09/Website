# Notes post support paper cues

Timestamp: 2026-06-26 10:40 ET

## Changed

- Added source-level `paperCue` labels to the Notes/Blog post support cards in `app/notes/post/PostReaderClient.jsx`.
- Added `app/notes-post-support-cues-pass.css` so the support cards render visible clipped paper cues: `Studio room`, `Public only`, `Back path`, and `Paper sheet`.
- Loaded the new styling pass from `app/layout.jsx`.

## Why

The Notes/Blog post reader already had a paper reader desk, intro receipt slips, metadata snippets, route path shelf, and section-spine labels, but the support cards still leaned on generic Context / Boundary / Path / Material pins. Current direct-label, paper-snippet, calm-room, and paper-card guidance supports making those support surfaces visibly read as direct room cues instead of generic metadata.

## Satisfaction state

Partially satisfied. This pass improves one remaining Notes post support pattern while preserving the public Blog feed contract, the existing route copy, and reader accessibility.

## Related items

- PAGE-003A
- PAGE-003B
- COMP-007
- COMP-008
- DESIGN-015
- DESIGN-019
- DESIGN-022
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-022
- METRIC-014
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-028
- METRIC-029
