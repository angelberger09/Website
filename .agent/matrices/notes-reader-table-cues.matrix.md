# Notes Reader Table Cues Matrix

| Field | Value |
|---|---|
| ID | NOTES-READER-TABLE-CUES-001 |
| Type | Design / component refinement |
| Location | `app/notes-section-spine-labels-pass.css` |
| Affected page | PAGE-003 Notes, PAGE-003B Blog Compatibility Routes |
| Affected components | COMP-006 Notes Reader Client, COMP-008 Filled Page Sections |
| Affected design patterns | DESIGN-019 Paper Material Authenticity, DESIGN-022 Paper Piece Card Surfaces, DESIGN-024 Torn Edge Card Silhouettes, DESIGN-028 Crinkled Paper Material, DESIGN-029 Flattened Paper Hierarchy, DESIGN-030 Text Paper Snippets |
| Affected lessons | LESSON-018, LESSON-019, LESSON-022, LESSON-024, LESSON-026 |
| Affected metrics | METRIC-017, METRIC-018, METRIC-021, METRIC-023, METRIC-027, METRIC-028, METRIC-029, METRIC-032 |
| Satisfaction state | partially satisfied |
| Public-safe boundary | CSS-only visual refinement; no Blog feed behavior, note content, private writing, fake note art, route links, or source contract changes |

## Purpose

Strengthen the first Notes reader area as a composed reader table rather than a loose copy column beside a card stack.

## Visible checks

- The Notes reader board should show a small `reader table` paper label near the top edge.
- The published-note stack should sit on a subtle tray-like paper backing with a vertical binding rail.
- Featured and ordinary note cards should gain clearer left-edge binding cues without looking like app panels.
- Mobile layout should keep the label readable and avoid covering the note cards.

## Follow-up validation

Review the deployed `/Website/notes/` and `/Website/blog/` compatibility route after build/deploy. Confirm that the visual pass improves paper-room clarity without crowding the reader area or making source/readiness states harder to scan.
