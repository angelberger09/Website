# Feedback-to-Lesson Workflow

Use this workflow when Angel gives small feedback and asks to store it in `.agent/`.

## Quick path

1. Validate the source when feedback includes a screenshot, visual UI, current Website behavior, or an implementation correction.
2. Read the feedback.
3. Extract the public-safe lesson.
4. Identify affected semantic items.
5. Decide whether this creates or updates a lesson.
6. Update the correct `.agent/` files.
7. Push to `main` when asked.

## Feedback-only implementation boundary

If Angel asks to add, save, record, or store feedback, do not edit public Website source files in the same pass unless Angel explicitly asks to implement it now.

Feedback-only passes may update:

- `.agent/feedback/*`
- `.agent/lessons/*`
- `.agent/matrices/*`
- `.agent/web/*`
- `.agent/references/*`
- `.agent/changes/change-log.md`
- `.agent/memory.md`

Implementation passes may update `app/`, `public/`, config, or other public site files only when the task says to apply, implement, change, fix, or update the Website itself.

## Files to update by feedback type

### New reusable lesson

Update:

- `.agent/lessons/lesson-log.md`
- `.agent/lessons/active-lessons.md`
- `.agent/matrices/feedback-lessons.matrix.md`
- `.agent/matrices/quality-metrics.matrix.md`
- `.agent/memory.md` if the lesson should persist broadly
- `.agent/changes/change-log.md`

### Screenshot or visible Website feedback

Update:

- `.agent/feedback/feedback-log.md` or `.agent/feedback/feedback-inbox.md`
- `.agent/references/*` when a public-safe reference note is useful
- `.agent/lessons/lesson-log.md` if the feedback creates a reusable rule
- `.agent/lessons/active-lessons.md` if the rule should guide future work
- `.agent/matrices/semantic-index.md`
- the matching page, component, design, interaction, asset, metric, or feedback matrix
- `.agent/changes/change-log.md`

Do not update public Website source files unless implementation is explicitly requested.

### Affected page or component

Update:

- `.agent/matrices/semantic-index.md`
- `.agent/matrices/pages.matrix.md` or `.agent/matrices/components.matrix.md`
- `.agent/web/relationship-map.md`
- `.agent/changes/change-log.md`

### Affected data source

Update:

- `.agent/matrices/content-sources.matrix.md`
- `.agent/web/information-map.md`
- `.agent/web/dependency-map.md`
- `.agent/changes/change-log.md`

### Affected wording or style rule

Update:

- `.agent/matrices/design-language.matrix.md`
- `.agent/lessons/active-lessons.md`
- `.agent/memory.md` if it becomes a persistent rule
- `.agent/changes/change-log.md`

## If feedback is unclear

Do not invent a lesson. Put a short public-safe note in `.agent/feedback/feedback-inbox.md` with status `needs clarification`.

If screenshot feedback cannot be validated against the live/current Website or clearly framed as a site reference, use status `needs validation`.

## If feedback is private or sensitive

Do not store the private content. Store only a general project rule if one exists.