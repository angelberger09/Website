# Store path return stamps

Timestamp: 2026-06-27 05:31 ET

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
- `.agent/matrices/pages.matrix.md`
- `.agent/changes/change-log.md`
- `app/store/page.jsx`
- `app/layout.jsx`
- `app/store-path-return-compass-pass.css`

## Satisfaction check

- Target: Store local `Shop path` return compass.
- State: partially satisfied.
- Mismatch: The Store return compass had direct route cues and bridge slips, but the card-level footer labels were still generic pseudo-element labels (`return` / `anchor`) instead of source-backed human-readable paper stamps.

## Visible interface change

- Added data-backed Store return stamp labels in `app/store/page.jsx`.
- Added `app/store-path-return-stamps-pass.css` to render `Return to archive` and `Studio anchor` as clipped paper stamps inside the return compass.
- Hid the older generic pseudo-element labels so the visible cues come from route-specific source text instead of repeated CSS-only stamps.
- Loaded the new pass in `app/layout.jsx` after the existing return compass pass.

## Boundary notes

- No fake products, listings, screenshots, portfolio work, or private content were added.
- Existing route links, copy, and accessibility labels were preserved.
- The change stays inside the Website repo and is a visual refinement supported by active `.agent` Store, direct-label, paper-snippet, and room-continuity guidance.

## Related items

- PAGE-005
- COMP-008
- COMP-009
- DESIGN-015
- DESIGN-018
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-015
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-026
- METRIC-002
- METRIC-014
- METRIC-017
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029
- METRIC-032
