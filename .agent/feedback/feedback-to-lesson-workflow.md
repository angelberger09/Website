# Feedback-to-Lesson Workflow

Use this workflow when Angel gives small feedback and asks to store it in `.agent/`.

## Quick path

1. Read the feedback.
2. Extract the public-safe lesson.
3. Identify affected semantic items.
4. Decide whether this creates or updates a lesson.
5. Update the correct files.
6. Push to `main` when asked.

## Files to update by feedback type

### New reusable lesson

Update:

- `.agent/lessons/lesson-log.md`
- `.agent/lessons/active-lessons.md`
- `.agent/matrices/feedback-lessons.matrix.md`
- `.agent/matrices/quality-metrics.matrix.md`
- `.agent/memory.md` if the lesson should persist broadly
- `.agent/changes/change-log.md`

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

## If feedback is private or sensitive

Do not store the private content. Store only a general project rule if one exists.
