# Notes Post Title Folio Matrix

| Field | Value |
|---|---|
| Pattern ID | DESIGN-040 Notes Post Title Folio |
| Routes | `/Website/notes/post/?slug=...`, `/Website/blog/post/?slug=...` |
| Source files | `app/notes-post-title-folio-pass.css`, `app/layout.jsx`, `app/notes/post/PostReaderClient.jsx` |
| Purpose | Make the live post profile title cluster read as a placed paper folio before the body writing strips begin. |
| Visible behavior | The public note kicker, title, and subtitle render as separate clipped paper sheets with grain, scratch, contact shadow, and a tape cue. |
| Satisfaction state | partially satisfied -> refined |
| Public-safety boundary | Do not alter Blog content, invent post artwork, imply private writing, or change public note metadata. |
| Related pages | PAGE-003A, PAGE-003B |
| Related components | COMP-007 |
| Related design IDs | DESIGN-019, DESIGN-022, DESIGN-024, DESIGN-030, DESIGN-040 |
| Related lessons | LESSON-019, LESSON-022, LESSON-024, LESSON-025, LESSON-026 |
| Related metrics | METRIC-018, METRIC-021, METRIC-023, METRIC-028, METRIC-029 |
| Risk | Late-loaded paper passes can accumulate too much visual noise; keep the title folio calmer than the body sheet and preserve mobile readability. |
| Status | active |

## Metric check

- METRIC-018: the post title area now reads as paper material before plain document text.
- METRIC-021 / METRIC-023: the title, kicker, and subtitle are individual clipped paper pieces rather than rounded UI panels.
- METRIC-028: the treatment avoids adding a new nested board and instead uses the existing title cluster.
- METRIC-029: shadows and texture are visible but limited to the existing reader header hierarchy.
