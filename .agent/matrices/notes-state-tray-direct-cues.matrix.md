# Notes State Tray Direct Cues Matrix

| Item | Type | Location | Purpose | Related lessons | Related metrics | Status |
|---|---|---|---|---|---|---|
| Notes state cue slips | Design refinement | `app/notes-state-tray-direct-cues-pass.css` | Make Loading, Unavailable, and Published-only reader states readable at scan scale as clipped paper state slips rather than only card headings. | LESSON-002, LESSON-018, LESSON-019, LESSON-022, LESSON-024 | METRIC-002, METRIC-017, METRIC-018, METRIC-021, METRIC-023, METRIC-028, METRIC-029 | active |
| Notes state intro cue | Text snippet | `app/notes-state-tray-direct-cues-pass.css` | Summarize the state tray as `loading / pause / public` so visitors understand the room behavior before reading every card. | LESSON-002, LESSON-018, LESSON-022 | METRIC-002, METRIC-017, METRIC-021, METRIC-029 | active |

## Boundary

This pass does not change the Blog feed contract, fetch behavior, post data, routes, status logic, or reader copy. It only makes existing public-safe reader-state information visibly clearer.

## Satisfaction check

- Previous state: partially satisfied, because the Notes state cards were papery but still needed direct state labels.
- Current state: improved, because each card now carries a visible clipped state cue tied to its existing state meaning.
