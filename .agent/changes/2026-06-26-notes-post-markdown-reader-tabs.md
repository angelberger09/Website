# Notes post markdown reader tabs

Timestamp: 2026-06-26 18:11 ET

## Changed

- Added `app/notes-post-markdown-tabs-pass.css`.
- Loaded the pass in `app/layout.jsx` after the Notes post margin rail styling.
- Styled `notes-post-markdown` `h2` and `h3` headings as clipped paper reader tabs with a small reader-tab slip, binding edge, paper grain, scratch texture, and lifted shadow.

## Why

The individual Notes/Blog post reader already uses a paper desk, lined reader sheet, metadata scraps, and support rails, but Markdown section headings inside the live note content still inherited plain text heading treatment. Current paper-material, paper-card, torn-edge, text-snippet, and calm-room guidance supports making those in-sheet section breaks visibly papery without changing the public Blog source content, inventing note material, or altering reader routing.

## Satisfaction state

Partially satisfied. This pass refines one remaining in-sheet reader typography surface; deployed review should confirm that live post headings now read as placed reader tabs while body text stays calm and readable.

## Related items

- PAGE-003A
- PAGE-003B
- COMP-007
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-030
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-029
