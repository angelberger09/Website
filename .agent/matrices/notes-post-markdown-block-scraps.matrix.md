# Notes Post Markdown Block Scraps Matrix

| ID | Type | Name | Location | Purpose | Related Lessons | Status |
|---|---|---|---|---|---|---|
| COMP-007-BLOCK-001 | Reader subpattern | Post Markdown quote and code blocks | `app/notes/post/PostReaderClient.jsx`, `app/notes-post-markdown-block-scraps-pass.css` | Preserve public Markdown quote and fenced-code blocks as semantic reader blocks and render them as clipped paper scraps inside the Notes post sheet | LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024 | active |
| DESIGN-039 | Design pattern | Notes Post Markdown Block Scraps | `app/notes-post-markdown-block-scraps-pass.css` | Make blockquotes and code blocks read as placed paper scraps with tape, grain, uneven cuts, and lifted shadows instead of plain paragraphs or browser-default blocks | LESSON-019, LESSON-022, LESSON-024 | active |

## Metrics

- METRIC-018: Quote and code blocks should read as part of the paper reader sheet, not as generic browser blocks.
- METRIC-021: Quote/code containers should avoid rounded UI-panel language.
- METRIC-023: Edges should use clipped paper silhouettes and lifted shadows.
- METRIC-029: Supporting Markdown block text should live in readable paper snippets when the source supplies quote/code structure.

## Public-safety boundary

This pass only changes how already-public Markdown content is parsed and rendered. It does not add note content, invent writing, expose drafts, imply private material, or change the public Blog feed contract.
