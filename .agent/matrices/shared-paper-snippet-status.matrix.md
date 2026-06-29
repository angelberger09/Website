# Shared Paper Snippet Status Matrix

## Item

- Name: Shared paper snippet status pass
- Public source: `app/shared-paper-snippet-status-pass.css`, `app/layout.jsx`
- Change record: `.agent/changes/2026-06-29-shared-paper-snippet-status.md`
- Status: active

## Purpose

Make repeated small label surfaces read as clipped paper snippets rather than smooth digital pills.

## Satisfaction classification

- Before: partially satisfied
- After: refined

## Mapped semantic IDs

| ID | Relationship |
|---|---|
| COMP-004 | Page cards use label/cue snippets. |
| COMP-005 | Shared site chrome loads the visual treatment. |
| COMP-006 | Notes index tags/source cues inherit the shared status treatment where applicable. |
| COMP-007 | Post reader tags inherit the shared status treatment where applicable. |
| COMP-008 | Filled sections use status and tag fragments as smaller paper text pieces. |
| DESIGN-019 | Strengthens paper material authenticity. |
| DESIGN-022 | Reduces generic card/pill language. |
| DESIGN-024 | Adds clipped/torn-edge silhouettes to small surfaces. |
| DESIGN-030 | Moves supporting text into paper snippets. |
| LESSON-019 | Applies paper material as the primary visual read. |
| LESSON-022 | Makes shared cards and chips read as paper pieces. |
| LESSON-024 | Uses torn/cut silhouettes over rounded UI corners. |
| METRIC-018 | Paper material reads first. |
| METRIC-021 | Paper cards, not UI cards. |
| METRIC-023 | Torn edge card silhouette. |
| METRIC-029 | Text lives in paper snippets. |

## Validation notes

- This pass avoids new content and only changes shared CSS presentation.
- Mobile fallback keeps the clipped shape simpler to preserve readability.
- Focus and hover outlines remain controlled by existing shared rules.
