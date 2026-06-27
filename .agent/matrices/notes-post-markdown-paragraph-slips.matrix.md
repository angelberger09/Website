# Notes Post Markdown Paragraph Slips Matrix

| ID | Type | Name | Location | Purpose | Related lessons | Metrics | Status |
|---|---|---|---|---|---|---|---|
| PAGE-003A | Page | Notes Post Reader | `app/notes/post/PostReaderClient.jsx`, `app/notes-post-markdown-paragraph-slips-pass.css` | Keeps individual public notes readable while giving ordinary Markdown paragraphs a visible paper-slip rhythm inside the reader sheet. | LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-018, METRIC-021, METRIC-023, METRIC-029 | refined |
| PAGE-003B | Page | Blog Compatibility Routes | `app/blog/post/page.jsx`, `app/notes/post/PostReaderClient.jsx`, `app/notes-post-markdown-paragraph-slips-pass.css` | Receives the same reader paragraph slip treatment through the shared post reader without changing compatibility routing. | LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-018, METRIC-021, METRIC-023, METRIC-029 | refined |
| COMP-007 | Component | Post Reader Client | `app/notes/post/PostReaderClient.jsx` | Renders public Blog Markdown into a Website-owned paper reader; ordinary paragraph blocks now have a paper-scrap presentation like headings, lists, quotes, and code. | LESSON-002, LESSON-004, LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-018, METRIC-021, METRIC-023, METRIC-029 | refined |
| DESIGN-030 | Design Pattern | Text Paper Snippets | `app/notes-post-markdown-paragraph-slips-pass.css` | Treats reader body copy as readable paper slips when appropriate, not broad plain text flowing across a generic sheet. | LESSON-019, LESSON-022, LESSON-024 | METRIC-029 | active |

## Boundary

The paragraph slip pass does not edit note Markdown, generate fake note art, change Blog feed behavior, or add private content. It only changes the public Website presentation of already-public paragraph text.

## Check

A note post with ordinary Markdown paragraphs should visibly show clipped paper paragraph slips with subtle grain/scratch texture, pin-dot cues, and lifted shadows while remaining readable on mobile and honoring reduced-motion preferences.
