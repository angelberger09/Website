# 2026-06-27 — Notes state reader docket

## Source-of-truth read

Read in order before implementation:

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
16. `.agent/changes/change-log.md`
17. Relevant current Website source: `app/layout.jsx`, `app/notes/NotesPageClient.jsx`, `app/notes-state-tray-spine-pass.css`, and `app/store/page.jsx` / Store promise CSS for cross-page comparison.

## Target classification

- Target: Notes reader behavior state tray.
- Satisfaction state: partially satisfied.
- Reason: the Notes reader behavior section already used paper notes, a state tray label, direct state cues, and route-specific photo labels, but the three state notes could still scan as detached cards rather than one composed reader-state docket.

## Visible Website change

- Added `app/notes-state-reader-docket-pass.css`.
- Loaded it after `app/notes-state-tray-direct-cues-pass.css` in `app/layout.jsx`.
- Strengthened the Notes reader behavior section into a clearer `reader docket` surface with a clipped board field, stitched vertical thread, an explicit loading/unavailable/public-only intro slip, state-card labels, larger image-like centers, and mobile-safe stacking.

## Why

The active lessons and matrices continue to prioritize calm-room structure, flattened paper hierarchy, paper-snippet labels, and content-bearing photo/paper surfaces. This pass keeps the existing honest reader-state content and makes the visible structure read as one reader behavior tray rather than another set of separate UI cards.

## Public-safety boundary

No private content, fake notes, fake products, fake screenshots, routes, or data were added. The pass is CSS-only plus layout import wiring.

## Affected semantic items

- PAGE-003
- PAGE-003B
- COMP-006
- COMP-008
- DESIGN-019
- DESIGN-021
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- DESIGN-031
- LESSON-002
- LESSON-004
- LESSON-018
- LESSON-019
- LESSON-021
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-002
- METRIC-017
- METRIC-018
- METRIC-020
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-030
