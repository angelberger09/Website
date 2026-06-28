# Notes Post State Cue Slips Matrix

## Semantic items affected

| ID | Item | Relationship |
|---|---|---|
| PAGE-003A | Notes Post Reader | Loading, missing-slug, and error states now render as labeled paper cue slips inside the reader sheet. |
| PAGE-003B | Blog Compatibility Routes | Blog post compatibility readers inherit the same state cue treatment through the shared post reader component. |
| COMP-007 | Post Reader Client | The state UI now has source-backed cue data instead of relying on plain status copy alone. |
| COMP-008 | Filled Page Sections | The individual reader state surface joins the same paper-room system as the index, source, and support boards. |
| DESIGN-018 | Visitor Continuity Bands | Missing/error states keep a clear return path to the Notes shelf. |
| DESIGN-019 | Paper Material Authenticity | State messages now read as placed paper material rather than flat status panels. |
| DESIGN-022 | Paper Piece Card Surfaces | The state cue becomes a distinct paper piece inside the reader sheet. |
| DESIGN-024 | Torn Edge Card Silhouettes | The state cue and action use clipped paper shapes and lifted shadows. |
| DESIGN-029 | Flattened Paper Hierarchy | The state area uses a cue-slip plus copy rhythm instead of a nested app-style alert block. |
| DESIGN-030 | Text Paper Snippets | The state label, title, and return action live in compact paper snippets. |

## Lessons and metrics

| ID | Effect |
|---|---|
| LESSON-002 | Keeps state messages human-facing and visitor-readable. |
| LESSON-004 | Preserves the public-only Blog source boundary. |
| LESSON-018 | Keeps the post reader useful even when a note is missing or unavailable. |
| LESSON-019 | Makes paper material the primary read for reader states. |
| LESSON-022 | Avoids generic rounded status-card styling. |
| LESSON-024 | Uses clipped/torn silhouettes for the state cue and action. |
| METRIC-002 | State copy remains readable and non-technical. |
| METRIC-004 | No private drafts, fake posts, or fake data are exposed. |
| METRIC-017 | Missing and error states keep clear route continuity. |
| METRIC-018 | The post state should read as paper first. |
| METRIC-021 | The state surface should not feel like a generic UI alert. |
| METRIC-023 | Torn-edge treatment should be visible but calm. |
| METRIC-028 | The state area should stay editorial, not nested-panel heavy. |
| METRIC-029 | Supporting state text should appear as paper snippets where appropriate. |

## Implementation note

`app/notes/post/PostReaderClient.jsx` owns the state cue copy for loading, missing, and error states. `app/notes-post-state-cue-slips-pass.css` owns only visual material and layout treatment, and `app/layout.jsx` loads the pass into the rendered Website bundle.
