# Notes Post Markdown List Scraps Matrix

| ID | Type | Name | Location | Purpose | Related Lessons | Status |
|---|---|---|---|---|---|---|
| COMP-007-LIST-001 | Reader subpattern | Post Markdown list scraps | `app/notes/post/PostReaderClient.jsx`, `app/notes-post-markdown-list-scraps-pass.css` | Preserve public Markdown list blocks as semantic lists and render them as clipped paper list boards inside the Notes post reader | LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024 | active |
| DESIGN-030-LIST-001 | Design refinement | Reader list paper snippets | `app/notes-post-markdown-list-scraps-pass.css` | Keep bullets and ordered steps from flattening into paragraph sheets by giving each item a readable paper-scrap row with pin and tape cues | LESSON-019, LESSON-022, LESSON-024 | active |

## Metrics

- METRIC-018: The list block should read as part of the paper reader surface, not a browser-default list or smooth app panel.
- METRIC-021: The list container and list rows should avoid rounded UI-card language.
- METRIC-023: Edges should use clipped paper silhouettes and lifted shadows.
- METRIC-029: Supporting list text should live in small readable paper scraps when Markdown supplies bullet or numbered groups.

## Public-safety boundary

This pass only changes how already-public Markdown content is rendered. It does not add note content, invent writing, expose drafts, or imply private material.
