# Store Return Path Terminal Budget Matrix

| Field | Value |
|---|---|
| Change | Store return path terminal budget |
| Timestamp | 2026-06-27 18:19 ET |
| Public source | `app/terminal-preview-surface-budget-pass.css` |
| Primary page | PAGE-005 Store |
| Components | COMP-008 Filled Page Sections; COMP-009 Next Step Band / route continuity pattern |
| Satisfaction state | partially satisfied → refined |
| Interface mismatch | Store local return/path surfaces were visually guided but not covered by the terminal preview budget, risking heavier shadows, filters, connector marks, and transforms than nearby Store paper surfaces. |
| Visible correction | Folded Store return path board, grid, cards, bridge slips, stamps, cue slips, connector thread, and image centers into the terminal budget selectors. |
| Boundary | Preserve existing Store copy, public-safe readiness framing, no-fake-inventory rule, routes, accessibility, and mobile readability. |
| Quality check | `/Website/store/` should still show the return docket / return compass, but it should feel calmer, lighter, less over-stacked, and more consistent with surrounding terminal-budget Store surfaces. |

## Related semantic IDs

- PAGE-005
- COMP-008
- COMP-009
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
- METRIC-032

## Implementation notes

- The correction updates the existing terminal preview budget file instead of adding a new visual pass.
- `content-visibility` and `contain-intrinsic-size` now cover Store return path containers.
- Filters are neutralized on late path pseudo-elements and cue surfaces.
- Shadows use existing terminal budget variables.
- Reduced-motion and mobile rules now include Store return path transforms.
