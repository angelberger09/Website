# Notes post Markdown heading paper tabs

Timestamp: 2026-06-26 20:20 ET

## Changed

- Added `app/notes-post-markdown-heading-tabs-pass.css`.
- Loaded the pass after `app/notes-post-markdown-list-scraps-pass.css` in `app/layout.jsx`.
- Styled `.notes-post-markdown h2` and `.notes-post-markdown h3` as clipped paper heading tabs with tape, grain, pin dots, uneven silhouettes, and lifted shadows.
- Kept the implementation CSS-only so it works with existing public Markdown content without changing the Blog feed, creating fake writing, or altering reader data contracts.

## Why

The Notes post reader already had paper-treated states, metadata, support cards, path shelves, and Markdown lists. Post Markdown headings still inherited plain document-heading behavior, so the reading sheet could snap back into generic article styling between paper scraps. Current paper-material, paper-snippet, torn-edge, and calm-room guidance supports making Markdown section headings visible paper tabs while preserving readability and honest public note content.

## Satisfaction state

Partially satisfied. This pass improves the shared Notes post reader Markdown surface, but deployed review should still confirm real posts with multiple heading levels remain readable on desktop and mobile.

## Related items

- PAGE-003A
- PAGE-003B
- COMP-007
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-029
