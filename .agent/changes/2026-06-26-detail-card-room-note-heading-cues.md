# 2026-06-26 — DetailCard room-note heading cues

## Source-of-truth read

Read the required Website source-of-truth files in order before implementation:

1. `agent.md`
2. `start-here.md`
3. `.agent/start-here.md`
4. `.agent/memory.md`
5. `.agent/feedback/state-alignment.md`
6. `.agent/feedback/README.md`
7. `.agent/feedback/live-website-validation.md`
8. `.agent/feedback/intake-protocol.md`
9. `.agent/feedback/extraction-rubric.md`
10. `.agent/feedback/feedback-to-lesson-workflow.md`
11. `.agent/feedback/feedback-log.md`
12. `.agent/feedback/feedback-inbox.md`
13. `.agent/lessons/active-lessons.md`
14. `.agent/lessons/lesson-log.md`
15. `.agent/matrices/semantic-index.md`
16. `.agent/matrices/pages.matrix.md`
17. `.agent/changes/change-log.md`

Also read the relevant shared source files:

- `app/layout.jsx`
- `app/site-chrome.jsx`
- `app/paper-card-pass.css`
- `app/detail-card-paper-face-pass.css`

## Satisfaction check

- Target: remaining shared `DetailCard` surfaces.
- State: partially satisfied.
- Mismatch: shared `DetailCard` surfaces already had clipped paper faces and stronger paper-card treatment, but their main headings could still read as ordinary card headings rather than placed paper-room cues.

## Visible Website change

Added `app/detail-card-room-pin-pass.css` and loaded it after the existing DetailCard paper-face and status-pill passes.

The pass gives remaining `DetailCard h2` headings:

- a clipped `room note` paper slip before the heading,
- a small dashed binding/thread mark behind the heading,
- alternating subtle rotation,
- a mobile-safe single-column fallback.

This keeps the change at the shared pattern layer without changing copy, routing, data contracts, or inventing new content.

## Public source files changed

- `app/detail-card-room-pin-pass.css`
- `app/layout.jsx`

## Agent files changed

- `.agent/changes/change-log.md`
- `.agent/changes/2026-06-26-detail-card-room-note-heading-cues.md`
- `.agent/matrices/detail-card-room-note-heading-cues.matrix.md`

## Related semantic items

- `COMP-008`
- `DESIGN-019`
- `DESIGN-022`
- `DESIGN-024`
- `DESIGN-029`
- `DESIGN-030`
- `LESSON-019`
- `LESSON-022`
- `LESSON-024`
- `METRIC-018`
- `METRIC-021`
- `METRIC-023`
- `METRIC-028`
- `METRIC-029`
