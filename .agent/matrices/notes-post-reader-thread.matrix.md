# Notes Post Reader Thread Matrix

| ID | Type | Surface | Location | Purpose | Lessons | Metrics | Status |
|---|---|---|---|---|---|---|---|
| PAGE-003A | Page | Notes post reader | `app/notes/post/PostReaderClient.jsx`, `app/notes-post-reader-thread-pass.css` | Tie the Markdown reading body into one calm paper sheet with a visible reader thread instead of isolated paragraph scraps | LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-017, METRIC-018, METRIC-021, METRIC-023, METRIC-028, METRIC-029 | refined |
| PAGE-003B | Page | Blog compatibility post reader | `app/blog/post/page.jsx`, `app/notes-post-reader-thread-pass.css` | Carry the same reader-thread refinement through the compatibility route without changing Blog content or source contracts | LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-017, METRIC-018, METRIC-021, METRIC-023, METRIC-028, METRIC-029 | refined |
| COMP-007 | Component | Post Reader Client | `app/notes/post/PostReaderClient.jsx` | Keep the paper desk, paragraph scraps, and Markdown content visually connected as one reading sheet | LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-017, METRIC-018, METRIC-021, METRIC-023, METRIC-028, METRIC-029 | refined |
| DESIGN-030 | Design pattern | Text Paper Snippets | `app/notes-post-reader-thread-pass.css` | Add a direct clipped `reader thread` label and spine so supporting reader structure lives in paper snippets | LESSON-019, LESSON-022 | METRIC-018, METRIC-021, METRIC-029 | refined |

## Validation note

Live site fetch was unavailable during this pass, so the target was validated against current repo source plus `.agent` state. The change stays inside Website-owned CSS and does not alter public Blog post content, routing, or data contracts.
