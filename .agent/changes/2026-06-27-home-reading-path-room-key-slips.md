# Homepage reading path room key slips

Timestamp: 2026-06-27 17:29 ET

## Satisfaction check

- Target: homepage `Read this page` rail.
- State: partially satisfied.
- Mismatch: the rail already read as a stitched ledger, but the visible chapter cards still leaned on repeated generic labels instead of clear source-backed room-key slips.

## Interface change

- Updated `app/page.jsx` so each `homepagePathSteps` entry includes `chapter` and `roomKey` text.
- Rendered those values inside the reading-path cards as real markup through `home-path-map__chapter-slip` and `home-path-map__room-key`.
- Refined `app/home-reading-path-stitch-ledger-pass.css` so the path reads as a `room index` with clipped paper chapter slips, room-key labels, and a slightly taller mobile-safe intrinsic size.

## Why

The homepage should stay human-readable and left-docked as an editorial path. The stitch ledger was visually unified, but the repeated labels did not yet give visitors enough quick room context. This pass keeps the calm paper budget while making the path cues direct, source-backed, and easier to scan.

## Related semantic items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
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
