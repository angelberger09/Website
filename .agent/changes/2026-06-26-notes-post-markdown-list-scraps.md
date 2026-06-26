# Notes post Markdown list scraps

Timestamp: 2026-06-26 19:22 ET

## Changed

- Updated `app/notes/post/PostReaderClient.jsx` so the simple public Markdown renderer now preserves unordered and ordered list blocks instead of flattening every non-heading block into a paragraph.
- Added `app/notes-post-markdown-list-scraps-pass.css` so rendered post lists appear as clipped paper list boards with individual scrap rows, tape, grain, pin dots, and lifted shadows.
- Loaded the new pass in `app/layout.jsx` immediately after `app/notes-post-markdown-tabs-pass.css` so it only refines the post-reader Markdown sheet after the existing heading/paragraph paper treatment.

## Why

The Notes post reader had a strong paper sheet and paper paragraph rhythm, but Markdown list blocks still collapsed into paragraph sheets with line breaks. Current reader, paper-material, paper-card, text-snippet, and calm-room lessons support preserving real list semantics and making those lists read as placed paper scraps inside the public reading sheet.

## Satisfaction check

- Target: Notes post Markdown list rendering inside the public reader.
- State before: partially satisfied; headings and paragraphs were paper-treated, but list blocks were not semantically or visually distinct.
- State after: partially satisfied but improved; list blocks now render as lists and receive a visible paper-scrap board treatment.

## Related items

- PAGE-003A
- PAGE-003B
- COMP-007
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-030
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-029
