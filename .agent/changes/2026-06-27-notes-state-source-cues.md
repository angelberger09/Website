# 2026-06-27 — Notes state source cues

## Summary

The Notes reader-state tray now renders its visible state cue slips from `app/notes/NotesPageClient.jsx` instead of relying on CSS-only `::after` labels.

## Visible interface change

- Added source-backed cue text for the three reader states: `Gathering shelf`, `Pause note`, and `Public only`.
- Added `app/notes-state-direct-cues-pass.css` to style those cues as clipped paper slips and suppress the older pseudo-element stamps.
- Loaded the new pass in `app/layout.jsx` after the existing Notes state docket styling so the rendered tray visibly changes on `/Website/notes/` and `/Website/blog/`.

## Why

The Notes state tray had already become a unified paper docket, but its top-right state labels were still generated only by CSS. That partially satisfied the direct-label and content-bearing paper-surface goals, but it left visible cues less durable and less tied to source markup. This pass keeps the same public-safe reader states while making the paper slips real rendered content.

## Affected items

- PAGE-003
- PAGE-003B
- COMP-006
- DESIGN-015
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-015
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-014
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
