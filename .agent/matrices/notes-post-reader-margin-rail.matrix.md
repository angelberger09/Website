# Notes Post Reader Margin Rail Matrix

| ID | Type | Location | Purpose | Related Lessons | Related Metrics | Status |
|---|---|---|---|---|---|---|
| PAGE-003A | Page | `app/notes/post/PostReaderClient.jsx` | Individual note reader now includes a visible three-slip reader-margin rail before the note sheet, making the post route read as a guided paper room rather than a direct article jump. | LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-017, METRIC-018, METRIC-021, METRIC-023, METRIC-028, METRIC-029 | active |
| PAGE-003B | Page | `app/blog/post/page.jsx` via shared post reader | Blog compatibility post routes inherit the same reader-margin rail while preserving the existing public Blog route compatibility. | LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-017, METRIC-018, METRIC-021, METRIC-023, METRIC-028, METRIC-029 | active |
| COMP-007 | Component | `app/notes/post/PostReaderClient.jsx` | Adds `postReaderMarginRail` and `notes-post-margin-rail` markup for Open sheet / Read quietly / Return softly reader orientation. | LESSON-018, LESSON-022 | METRIC-017, METRIC-021, METRIC-029 | active |
| DESIGN-030 | Design pattern | `app/notes-post-margin-rail-pass.css` | Turns the reader entrance into clipped paper snippet slips with a visible margin label and connector thread. | LESSON-019, LESSON-022, LESSON-024 | METRIC-018, METRIC-021, METRIC-023, METRIC-029 | active |

## Notes

This pass is public-safe because it uses existing reader-route concepts and generic orientation language only. It does not create new posts, imply private drafts, or add unavailable note content.
