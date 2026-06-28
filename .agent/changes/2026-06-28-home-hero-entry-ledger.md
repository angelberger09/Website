# 2026-06-28 — Homepage hero entry ledger

## Source-of-truth read

- `agent.md`
- `start-here.md`
- `.agent/start-here.md`
- `.agent/memory.md`
- `.agent/feedback/state-alignment.md`
- `.agent/feedback/README.md`
- `.agent/feedback/live-website-validation.md`
- `.agent/feedback/intake-protocol.md`
- `.agent/feedback/extraction-rubric.md`
- `.agent/feedback/feedback-to-lesson-workflow.md`
- `.agent/feedback/feedback-log.md`
- `.agent/feedback/feedback-inbox.md`
- `.agent/lessons/active-lessons.md`
- `.agent/lessons/lesson-log.md`
- `.agent/matrices/semantic-index.md`
- `.agent/matrices/quality-metrics.matrix.md`
- `.agent/changes/change-log.md`
- `app/page.jsx`
- `app/layout.jsx`
- `app/home-arrival-ticket-pass.css`
- `app/home-entry-contact-sheet-pass.css`

## Satisfaction check

- Target: homepage first-screen entry / Start here area.
- State: partially satisfied.
- Mismatch: the arrival cue slips and hero route contact sheet were both useful, but they still read as neighboring paper pieces instead of one clear front-door entry ledger.

## Visible interface change

- Added `app/home-hero-entry-ledger-pass.css`.
- Loaded it from `app/layout.jsx` after `app/home-entry-contact-sheet-pass.css`.
- Bound the homepage arrival ticket and Start here contact-sheet route strip into a single visible front-door ledger with a ledger label, entry-cue slip, stitched connector, stronger left binding edge, and a small `choose one room` cue.
- Preserved existing route copy, public-safe homepage content, native links, focusable anchors, and reduced-motion behavior.

## Why

The active `.agent` state says the homepage should be a human-readable, left-docked editorial path with paper material reading first. The first-screen entry already had route cards and arrival cues, but the hierarchy could still feel like separated paper notes. This pass makes the public entry feel more composed and easier to scan without inventing content or adding heavy effects.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-018
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- LESSON-026
- METRIC-001
- METRIC-002
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
