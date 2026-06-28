# Store Feed Boundary Rule Slips Matrix

## Semantic items affected

| ID | Item | Relationship |
|---|---|---|
| PAGE-005 | Store | The Store future shelf contract now renders its public boundary rules as direct paper slips. |
| COMP-008 | Filled Page Sections | The Store feed contract section gains source-backed rule-slip markup instead of list-only rule rows. |
| DESIGN-015 | Direct Unnumbered Navigation | Labels stay direct, short, and human-readable without helper numbering. |
| DESIGN-019 | Paper Material Authenticity | The rule boundary reads more like handmade paper/collage. |
| DESIGN-022 | Paper Piece Card Surfaces | Each rule becomes a placed paper piece rather than a generic list row. |
| DESIGN-024 | Torn Edge Card Silhouettes | The slips use clipped paper silhouettes and lifted shadows. |
| DESIGN-029 | Flattened Paper Hierarchy | The boundary remains a flat editorial docket instead of nested app-panel hierarchy. |
| DESIGN-030 | Text Paper Snippets | Rule copy now lives inside labeled paper snippets. |

## Lessons and metrics

| ID | Effect |
|---|---|
| LESSON-002 | Keeps Store boundary language visitor-facing and non-technical. |
| LESSON-004 | Preserves the no-private-planning / public-safe source boundary. |
| LESSON-015 | Uses direct labels without decorative numbering. |
| LESSON-019 | Strengthens paper as the primary material read. |
| LESSON-022 | Converts shared/section rule surfaces away from generic UI rows. |
| LESSON-024 | Uses cut-paper silhouette and shadow cues. |
| METRIC-002 | Rule text remains human-facing and readable. |
| METRIC-014 | Labels are direct and unnumbered. |
| METRIC-018 | Store feed boundary should read as paper first. |
| METRIC-021 | Rule slips should not read as rounded UI cards/list rows. |
| METRIC-023 | Torn-edge silhouettes should be visible but calm. |
| METRIC-028 | The feed boundary should stay flat/editorial. |
| METRIC-029 | Rule copy should be carried by paper snippets. |

## Implementation note

The rule labels are now source-backed in `app/store/page.jsx`, while `app/store-feed-boundary-rule-slips-pass.css` owns only the visual material treatment. This avoids CSS-only pseudo-labels becoming the only visible source of meaning.
