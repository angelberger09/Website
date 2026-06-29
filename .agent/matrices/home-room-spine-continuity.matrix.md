# Homepage Room Spine Continuity Matrix

Timestamp: 2026-06-29 06:31 ET

| ID | Type | Name | Location | Role | Related lessons | Metrics | Status |
|---|---|---|---|---|---|---|---|
| PAGE-001 | Page | Homepage | `app/page.jsx`, `app/home-room-spine-continuity-pass.css` | Long front-room page now has a stronger left-bound paper-spine cue across each room section so the page reads as one calm editorial path instead of disconnected boards. | LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-017, METRIC-018, METRIC-021, METRIC-023, METRIC-025, METRIC-028, METRIC-029 | refined |
| COMP-003 | Component | Scroll Title / Homepage Path Sequence | `app/page.jsx` | The existing path rail is visually reinforced by matching room-level binding accents down the page. | LESSON-018, LESSON-019 | METRIC-017, METRIC-018, METRIC-028 | refined |
| COMP-004 | Component | Studio Page Cards | `app/page.jsx`, homepage pass CSS | The room-door card section now sits inside a more explicit bound paper path. | LESSON-019, LESSON-022, LESSON-024 | METRIC-018, METRIC-021, METRIC-023 | refined |
| COMP-005 | Component | Shared Site Chrome / Loaded Passes | `app/layout.jsx` | Loads the new homepage spine continuity pass after the existing homepage section-spine pass. | LESSON-019, LESSON-022 | METRIC-018, METRIC-021 | active |
| DESIGN-018 | Pattern | Visitor Continuity Bands | `app/page.jsx` | Homepage continuity now starts before the final NextStepBand by binding room sections into one trail. | LESSON-018 | METRIC-017 | refined |
| DESIGN-019 | Pattern | Paper Material Authenticity | `app/home-room-spine-continuity-pass.css` | Adds grain-backed binding strips, docket shadows, and connector tabs. | LESSON-019 | METRIC-018 | refined |
| DESIGN-022 | Pattern | Paper Piece Card Surfaces | `app/home-room-spine-continuity-pass.css` | Strengthens the paper-piece read around homepage room labels and opening boards. | LESSON-022, LESSON-024 | METRIC-021, METRIC-023 | refined |
| DESIGN-026 | Pattern | Section Paper Fields | `app/home-room-spine-continuity-pass.css` | Reinforces large homepage sections as placed paper fields with a visible left spine. | LESSON-019 | METRIC-025 | refined |
| DESIGN-029 | Pattern | Flattened Paper Hierarchy | `app/home-room-spine-continuity-pass.css` | Supports one editorial route through section placement and binding instead of nested app-panel hierarchy. | LESSON-018, LESSON-019 | METRIC-028 | refined |
| DESIGN-030 | Pattern | Text Paper Snippets | `app/home-room-spine-continuity-pass.css` | Docket notes gain connector tabs and stronger paper-slip treatment. | LESSON-022 | METRIC-029 | refined |

## Implementation notes

- No copy, route, data, or private content changed.
- Mobile fallbacks disable the extra connector/side binding accents where space is tight.
- This is a narrow refinement pass layered after the existing homepage section-spine CSS to avoid introducing another competing homepage system.
