# 2026-06-26 — Homepage chapter spine notes

## Changed

- Added `homepageChapterNotes` data to `app/page.jsx` for the six homepage chapters.
- Rendered a visible `home-docket-note` paper slip beside each major homepage section label.
- Added `app/home-chapter-spine-notes-pass.css` so the new chapter notes read as clipped paper scraps along the existing left-docked homepage path, with a mobile fallback that keeps the notes in flow.
- Loaded the pass from `app/layout.jsx` after the existing homepage reading-path rail.
- Updated `PAGE-001`, `METRIC-001`, `METRIC-028`, and `METRIC-029` records.

## Why

The homepage already had a left-docked docket rail, path map, and paper chapter fields, but each long section still relied mostly on its heading to explain why it belonged in the sequence. Active homepage guidance calls for a human-readable left-docked editorial path, grouped paper pieces, and text snippets that clarify the route. This pass makes the section-to-section reading path more visible without adding routes, fake work, fake images, private content, or heavier interaction chrome.

## Satisfaction state

Partially satisfied → refined.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-029
- DESIGN-030
- LESSON-001
- LESSON-018
- LESSON-019
- LESSON-022
- METRIC-001
- METRIC-018
- METRIC-021
- METRIC-025
- METRIC-028
- METRIC-029
