# 2026-06-27 — Notes state tray direct cues

## Changed

- Added `app/notes-state-tray-direct-cues-pass.css`.
- Loaded it after `app/notes-state-tray-spine-pass.css` in `app/layout.jsx`.
- Added direct clipped paper cue slips to each Notes reader state card: `Gather notes`, `Pause shelf`, and `Public only`.
- Added a small intro cue strip for the state sequence: `loading / pause / public`.
- Refined the state-card eyebrow and body text into smaller clipped paper snippets so the reader-state area reads less like generic support cards.

## Why

The Notes reader-state section already had a tray/spine board and abstract paper/photo centers, but the state cards could still scan as generic notes unless the visitor read the full headings. This pass makes the Loading, Unavailable, and Published-only states visibly identifiable at scan scale while preserving the existing public Blog feed contract, no-fake-content boundary, routes, and accessible text.

## Satisfaction state

Partially satisfied: the section already used paper material, but direct state cueing was still weak.

## Related items

- PAGE-003
- PAGE-003B
- COMP-006
- COMP-008
- DESIGN-006
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-004
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
