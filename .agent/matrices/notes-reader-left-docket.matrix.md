# Notes Reader Left Docket Matrix

| ID | Type | Location | Change | Related lessons | Metrics | Status |
|---|---|---|---|---|---|---|
| PAGE-003 | Page | `app/notes/NotesPageClient.jsx`, `app/notes-reader-left-docket-pass.css` | Opening Notes reader board now reads as a left-docked paper reading desk with a clipped shell and visible reader-path tab. | LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-017, METRIC-018, METRIC-021, METRIC-023, METRIC-028 | active |
| COMP-006 | Component | `app/notes/NotesPageClient.jsx`, `app/notes-reader-left-docket-pass.css` | Existing Notes reader copy, state stamp, source stamp, and published-note stack receive a clearer docket/desk hierarchy without changing Blog data. | LESSON-002, LESSON-018, LESSON-019, LESSON-022 | METRIC-017, METRIC-018, METRIC-021, METRIC-028 | active |
| COMP-008 | Component | `app/notes-reader-left-docket-pass.css` | Filled Notes section keeps honest public notes content while gaining stronger paper placement and more visible physical depth. | LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-018, METRIC-021, METRIC-023, METRIC-028 | active |
| DESIGN-019 | Design pattern | `app/notes-reader-left-docket-pass.css` | Paper material authenticity is strengthened on the opening Notes board through grain, clipped edges, and grounded shadows. | LESSON-019 | METRIC-018 | active |
| DESIGN-022 | Design pattern | `app/notes-reader-left-docket-pass.css` | Notes card and board surfaces read more like placed paper pieces than generic UI panels. | LESSON-022 | METRIC-021 | active |
| DESIGN-024 | Design pattern | `app/notes-reader-left-docket-pass.css` | The Notes reader board uses cut-paper silhouettes and softened contact shadows. | LESSON-024 | METRIC-023 | active |
| DESIGN-028 | Design pattern | `app/notes-reader-left-docket-pass.css` | Subtle handled-paper variation is added through layered grain, tape, and pressure-like shadows. | LESSON-019 | METRIC-027 | active |
| DESIGN-029 | Design pattern | `app/notes-reader-left-docket-pass.css` | Notes hierarchy becomes flatter and more editorial: one left docket plus a note stack, not nested panels. | LESSON-018, LESSON-022 | METRIC-028 | active |
| DESIGN-030 | Design pattern | `app/notes-reader-left-docket-pass.css` | Reader state and source stamps remain small paper snippets inside the left docket. | LESSON-022 | METRIC-029 | active |

## Implementation note

This pass intentionally avoids source/data changes. It only styles existing public Notes markup already produced by `app/notes/NotesPageClient.jsx`.
