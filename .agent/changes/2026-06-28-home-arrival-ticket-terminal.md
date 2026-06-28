# 2026-06-28 — Homepage arrival ticket terminal pass

## Summary

Added a visible terminal paper treatment for the homepage `home-arrival-ticket` cue group.

## Interface change

- Added `app/home-arrival-ticket-terminal-pass.css`.
- Loaded it from `app/layout.jsx` after the late surface and Store sequence passes.
- Bound the first-screen `Front door / Four rooms / Soft map` cue snippets into one small front-door paper receipt.
- Added a readable `front-door receipt` slip, dashed receipt thread, shared backing sheet, calmer shadows, mobile stacking, and reduced-motion safeguards.

## Why

The homepage arrival cues were public-safe, useful orientation copy, but they still scanned as three neighboring chips on the first screen. The current `.agent` state asks for a human-readable left-docked editorial path, paper-first material, flattened hierarchy, stronger physical paper depth, and calm room sequencing. This pass keeps the same source-backed words while making the first-screen orientation feel like one intentional paper object.

## Satisfaction state

Partially satisfied → refined.

## Public source files changed

- `app/home-arrival-ticket-terminal-pass.css`
- `app/layout.jsx`

## Agent files changed

- `.agent/changes/change-log.md`
- `.agent/changes/2026-06-28-home-arrival-ticket-terminal.md`
- `.agent/matrices/home-arrival-ticket-terminal.matrix.md`

## Affected semantic items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-006
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
