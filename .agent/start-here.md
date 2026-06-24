# Agent Start Here

## Read order

1. `../agent.md`
2. `../start-here.md`
3. `.agent/memory.md`
4. `.agent/matrices/semantic-index.md`
5. `.agent/lessons/active-lessons.md`
6. `.agent/web/relationship-map.md`
7. `.agent/feedback/README.md`
8. `.agent/feedback/live-website-validation.md`

## What counts as a semantic item

A semantic item is any project element that carries meaning or teaches a reusable rule.

Examples:

- page
- component
- content source
- interaction
- design pattern
- copy rule
- feedback lesson
- decision
- metric
- validation protocol

## Required updates after meaningful changes

- Add a change entry in `.agent/changes/change-log.md`.
- Update `.agent/matrices/semantic-index.md`.
- Update the specific matrix for the changed item.
- Add or update lessons if user feedback created a reusable rule.
- Update `.agent/memory.md` only with public-safe distilled facts.

## Required workflow after feedback

When Angel gives small feedback points:

1. Read `.agent/feedback/live-website-validation.md` when the feedback mentions or includes a screenshot, visible UI, current site behavior, or implementation goal.
2. Read `.agent/feedback/intake-protocol.md`.
3. Use `.agent/feedback/extraction-rubric.md` to extract the reusable signal.
4. Run the public-safety check in `.agent/feedback/public-safety-filter.md`.
5. Use `.agent/feedback/feedback-to-lesson-workflow.md` to decide which files to update.
6. Put unclear feedback in `.agent/feedback/feedback-inbox.md` instead of inventing a lesson.

## Feedback-only guardrail

If Angel asks to add, save, or store feedback, update `.agent/` only unless Angel explicitly asks to implement the change on the public Website in the same pass.