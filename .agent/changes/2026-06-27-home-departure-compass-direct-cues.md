# 2026-06-27 — Home departure compass direct cues

## Summary

Refined the homepage closing `home-next-path-room` departure compass so the visible labels read more like direct room-navigation cues instead of generic trail labels.

## Interface change

- Updated `app/home-next-path-departure-compass-pass.css`.
- Changed the large backing stamp from `departure compass` to `neighboring rooms`.
- Changed the trail label from `follow the thread` to `choose the next room`.
- Added a stronger abstract paper/photo map surface inside the shared continuity trail.
- Added clipped cue slips on the homepage continuity steps, including `soft door`, `read more`, and `public shelf`.
- Preserved reduced-motion and mobile fallbacks.

## Why

The homepage closing path was already bound into a paper departure surface, but part of the visible language still scanned as generic navigation decoration. This pass keeps the existing structure and makes the final homepage exit read as a clearer room-to-room handoff.

## Satisfaction state

Partially satisfied. The closing path already met the broad paper/continuity direction, and this pass makes the cue language more direct and visible.

## Affected items

- PAGE-001
- COMP-004
- COMP-008
- COMP-009
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
