# Detail Card Binding Thread Load Matrix

Timestamp: 2026-06-29 04:49 ET

| ID | Type | Name | Location | Change | Related Lessons | Metrics | Status |
|---|---|---|---|---|---|---|---|
| COMP-005 | Component | Shared Site Chrome | `app/layout.jsx`, `app/site-chrome.jsx`, `app/detail-card-binding-thread-pass.css` | Loaded the existing shared DetailCard binding-thread pass after the title-ticket pass so the authored thread/label/eyebrow treatment participates in the rendered Website bundle. | LESSON-019, LESSON-022, LESSON-024 | METRIC-018, METRIC-021, METRIC-023 | active |
| COMP-008 | Component | Filled Page Sections | Route files using `DetailCard` | Remaining route sections that still use shared DetailCards now receive the bound-paper note cue instead of stopping at separate face/title/body/status paper layers. | LESSON-019, LESSON-022, LESSON-024 | METRIC-018, METRIC-021, METRIC-023, METRIC-029 | active |
| DESIGN-019 | Design Pattern | Paper Material Authenticity | `app/detail-card-binding-thread-pass.css` | Makes the shared DetailCard surface feel more physically assembled with a visible paper note label and connection thread. | LESSON-019 | METRIC-018 | active |
| DESIGN-022 | Design Pattern | Paper Piece Card Surfaces | `app/detail-card-binding-thread-pass.css` | Connects the existing paper-face marker, eyebrow, and card contents into one composed paper object rather than separate UI decorations. | LESSON-022 | METRIC-021 | active |
| DESIGN-024 | Design Pattern | Torn Edge Card Silhouettes | `app/detail-card-binding-thread-pass.css` | Adds a clipped Room note strip and thread cue to strengthen the handmade card silhouette without adding fake content. | LESSON-024 | METRIC-023 | active |
| DESIGN-030 | Design Pattern | Text Paper Snippets | `app/detail-card-binding-thread-pass.css` | Turns the DetailCard eyebrow into a small clipped note surface that supports the existing title and body snippets. | LESSON-022, LESSON-024 | METRIC-029 | active |

## Satisfaction state

Partially satisfied before this pass: the CSS file already existed, but it was not imported, so the authored binding-thread treatment did not affect the rendered Website.

Refined by this pass: the pass is now loaded from `app/layout.jsx`, making the DetailCard binding cues visible wherever the selectors match.