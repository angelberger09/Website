# Header Room Ledger Strip Matrix

## Semantic items touched

| ID | Type | Relationship |
|---|---|---|
| PAGE-001 | Page | Homepage receives the shared header ledger treatment through `app/layout.jsx`. |
| PAGE-002 | Page | About receives the shared header ledger treatment through `app/layout.jsx`. |
| PAGE-003 | Page | Notes receives the shared header ledger treatment through `app/layout.jsx`. |
| PAGE-003B | Page | Blog compatibility routes receive the same Notes-aware active nav header treatment. |
| PAGE-004 | Page | Portfolio receives the shared header ledger treatment through `app/layout.jsx`. |
| PAGE-005 | Page | Store receives the shared header ledger treatment through `app/layout.jsx`. |
| COMP-001 | Component | Floating header now has an additional late paper-ledger strip pass. |
| COMP-002 | Component | Direct navigation labels keep their behavior while gaining stronger cut-paper tab surfaces. |
| COMP-005 | Component | Shared site chrome carries the system-wide material refinement. |
| DESIGN-004 | Design pattern | Floating header stays top-attached while gaining a clearer paper ledger silhouette. |
| DESIGN-011 | Design pattern | Offscreen/top-edge emergence remains supported by the clipped paper strip. |
| DESIGN-015 | Design pattern | Direct unnumbered navigation remains unchanged in copy and behavior. |
| DESIGN-019 | Design pattern | Paper material authenticity is strengthened across the shared header. |
| DESIGN-020 | Design pattern | Paper header surface gains a spine, receipt notches, heavier contact shadow, and active-room depth. |
| DESIGN-022 | Design pattern | Header nav chips move further away from rounded UI pills toward paper pieces. |
| DESIGN-024 | Design pattern | Header surface and nav labels use cut-paper silhouettes instead of smooth rounded corners. |

## Lessons applied

| Lesson | Applied as |
|---|---|
| LESSON-002 | Keeps human-facing direct labels without technical helper copy. |
| LESSON-011 | Preserves top-edge, tucked paper strip behavior. |
| LESSON-015 | Keeps direct nav labels without numbers, helper text, or a Pages button. |
| LESSON-019 | Makes paper material read before generic soft UI. |
| LESSON-020 | Strengthens top bar as tactile layered paper. |
| LESSON-022 | Makes header chips read as paper pieces instead of rounded UI cards. |
| LESSON-024 | Uses cut/torn silhouettes and edge shadows for the shared header cards. |

## Metrics affected

| Metric | Expected visible result |
|---|---|
| METRIC-014 | Direct nav remains label-only with stronger contrast and active-state clarity. |
| METRIC-018 | Shared header reads as paper/collage before translucent UI. |
| METRIC-019 | Top bar visibly reads as tactile paper over the page with texture, shadow, and readable nav. |
| METRIC-021 | Header labels feel like paper pieces, not smooth UI chips. |
| METRIC-023 | Header silhouettes use cut-paper edges instead of uniform rounded pills. |

## Implementation files

- `app/header-room-ledger-strip-pass.css`
- `app/layout.jsx`

## Validation guidance

Review the live shared header on Home, About, Notes, Portfolio, and Store. The header should appear as one bound paper ledger strip with direct paper-tab labels, not a smooth floating capsule or unrelated chip row. Navigation behavior and active-room state should remain unchanged.
