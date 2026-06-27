# 2026-06-27 — About principles docket

## Source-of-truth read

Read the required run files in order:

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
16. `.agent/matrices/quality-metrics.matrix.md`
17. `.agent/changes/change-log.md`

Also reviewed `app/layout.jsx`, `app/about/page.jsx`, and the existing About paper-collage CSS.

## Mismatch found

The About page has many paper-room and contact-sheet refinements, but the `Working principles` heading area still behaved like a broad heading/copy block inside the paper board.

## Satisfaction state

Partially satisfied.

## Visible Website change

Added `app/about-principles-docket-pass.css` and loaded it from `app/layout.jsx` after the existing About principles trail pass. The pass turns the principles heading into a composed promise docket:

- clipped paper backing field,
- small paper eyebrow slip,
- separate title sheet,
- separate promise-copy note,
- tape/handled-paper cues,
- mobile fallback and reduced-motion safeguards.

This keeps the existing public-safe About copy and makes the intro read as placed paper snippets instead of a broad UI heading.

## Public source changed

- `app/about-principles-docket-pass.css`
- `app/layout.jsx`

## Agent files changed

- `.agent/changes/change-log.md`
- `.agent/changes/2026-06-27-about-principles-docket.md`
- `.agent/matrices/about-principles-docket.matrix.md`

## Related semantic items

- PAGE-002
- COMP-008
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-002
- LESSON-019
- LESSON-022
- LESSON-024
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-028
- METRIC-029

## Render expectation

The rendered Website should visibly change on `/Website/about/`, especially the `Working principles` board heading.