# Homepage Room Choice Pocket Matrix

## Semantic IDs

| ID | Role | Status | Notes |
|---|---|---|---|
| PAGE-001 | Homepage | active | The first visible homepage surface now stays wordless while presenting the four top-level room choices as a tighter paper pocket. |
| COMP-003 | Scroll Title Sequence | active | Keeps the screen-reader title but removes visible hero text from the above-fold experience. |
| COMP-004 | Studio Page Cards | active | The four route slips are the visible first-screen interaction and now have stronger paper/photo card depth. |
| DESIGN-014 | Paper List Hero Lockup | refined | The old visible title list remains suppressed by the wordless entry pass; this pass only refines the room-choice surface. |
| DESIGN-019 | Paper Material Authenticity | refined | Stronger clipping, shadow, and handled-paper gradients make the room-choice board read as paper first. |
| DESIGN-021 | Content-Bearing Polaroid Cards | refined | Route slips keep filled center previews and readable copy instead of acting as blank decoration. |
| DESIGN-022 | Paper Piece Card Surfaces | refined | Route slips use cut-paper silhouettes and physical shadows instead of smooth UI-card treatment. |
| DESIGN-024 | Torn Edge Card Silhouettes | refined | The pocket and cards use uneven `clip-path` silhouettes. |
| DESIGN-029 | Flattened Paper Hierarchy | refined | The first-screen route choices now sit as one composed paper pocket instead of competing nested panels. |
| DESIGN-030 | Text Paper Snippets | supported | Existing route labels and room cues remain small readable slips inside each route card. |
| DESIGN-031 | Photo-Led Content Surfaces | supported | Existing abstract photo centers continue to carry page information without fake screenshots. |

## Lessons and metrics

| ID | Connection |
|---|---|
| LESSON-001 | Keeps the homepage authored and visitor-facing. |
| LESSON-002 | Preserves human-facing route labels and room cues. |
| LESSON-018 | Keeps the public rooms filled and connected. |
| LESSON-019 | Makes paper material the primary read. |
| LESSON-021 | Keeps polaroid/photo centers content-bearing. |
| LESSON-022 | Avoids generic rounded UI cards. |
| LESSON-024 | Uses cut/torn silhouettes for card edges. |
| LESSON-025 | Keeps photo centers filled with honest route-specific visual material. |
| METRIC-001 | Homepage should feel authored rather than like a demo shell. |
| METRIC-002 | Copy remains human-facing. |
| METRIC-017 | Route choices keep visitor continuity visible. |
| METRIC-018 | Paper material should read first. |
| METRIC-020 | Polaroid/photo centers should be filled and readable. |
| METRIC-021 | Cards should read as paper pieces rather than UI cards. |
| METRIC-023 | Card silhouettes should feel cut/torn. |
| METRIC-028 | Hierarchy should stay flat and editorial. |
| METRIC-029 | Supporting text should live in small paper snippets. |
| METRIC-030 | Content should use honest image-like surfaces. |

## Validation note

This pass was traced to active `.agent` homepage direction and current source. It should produce a visible first-screen change on `/Website/` after deployment because `app/layout.jsx` now imports `app/home-room-choice-pocket-pass.css`.
