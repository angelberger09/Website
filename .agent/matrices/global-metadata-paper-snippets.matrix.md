# Global Metadata Paper Snippets Matrix

| ID | Type | Name | Location | Purpose | Related Lesson | Status |
|---|---|---|---|---|---|---|
| COMP-004 | Component | Studio Page Cards | `app/page.jsx`, shared `.page-card__label` styling | Ensures page-card labels read as small clipped paper notes instead of rounded metadata pills | LESSON-022, LESSON-024 | refined |
| COMP-005 | Component | Shared Site Chrome / Global Styling | `app/layout.jsx`, `app/global-metadata-paper-snippets-pass.css` | Loads the global metadata paper-snippet pass after recent shared label refinements | LESSON-019, LESSON-022 | refined |
| COMP-006 | Component | Notes Reader Client | generic `.tag-row span` fallback | Keeps current and future Notes metadata tags from reverting to smooth pill chips | LESSON-022, LESSON-024 | refined |
| COMP-007 | Component | Post Reader Client | generic `.tag-row span` fallback | Keeps reader metadata aligned with the paper-note language even outside the Notes-post-specific tag pass | LESSON-022, LESSON-024 | refined |
| COMP-008 | Component | Filled Page Sections | `.source-link em`, `.page-card__label`, `.tag-row span` | Makes repeated supporting labels/cues behave like paper snippets across filled routes | LESSON-019, LESSON-022 | refined |
| DESIGN-019 | Design Pattern | Paper Material Authenticity | `app/global-metadata-paper-snippets-pass.css` | Adds grain, scratch texture, pin dots, clipped edges, and lifted shadows to metadata labels | LESSON-019 | refined |
| DESIGN-022 | Design Pattern | Paper Piece Card Surfaces | `app/global-metadata-paper-snippets-pass.css` | Removes smooth rounded-chip language from shared labels and cue snippets | LESSON-022 | refined |
| DESIGN-024 | Design Pattern | Torn Edge Card Silhouettes | `app/global-metadata-paper-snippets-pass.css` | Uses clip-path paper cuts and staggered rotation for small metadata slips | LESSON-024 | refined |
| DESIGN-030 | Design Pattern | Text Paper Snippets | `app/global-metadata-paper-snippets-pass.css` | Moves labels/cues into readable clipped snippets rather than app-like pills | FEEDBACK-016 | refined |
| METRIC-018 | Metric | Paper Material Reads First | `.agent/matrices/quality-metrics.matrix.md` | Check shared metadata labels for paper texture before UI-chip language | LESSON-019 | partially satisfied |
| METRIC-021 | Metric | Paper Cards Not UI Cards | `.agent/matrices/quality-metrics.matrix.md` | Check page-card/source/tag metadata no longer feels like rounded UI chips | LESSON-022 | partially satisfied |
| METRIC-023 | Metric | Torn Edge Card Silhouette | `.agent/matrices/quality-metrics.matrix.md` | Check metadata slips use uneven cut silhouettes and readable edge shadows | LESSON-024 | partially satisfied |
| METRIC-029 | Metric | Text Lives In Paper Snippets | `.agent/matrices/quality-metrics.matrix.md` | Check supporting labels, cues, and tags render as paper fragments | FEEDBACK-016 | partially satisfied |

## Satisfaction note

The target is partially satisfied because this pass corrects global metadata/cue fallbacks, but deployed visual review should still confirm no newer route-specific component creates fresh rounded-pill metadata outside the shared selector set.
