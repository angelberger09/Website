# Feedback Extraction Rubric

Use this rubric to turn small feedback points into useful `.agent/` lessons.

## 1. What changed emotionally?

Identify the felt quality the feedback points toward.

Examples:

| Feedback phrase | Felt quality |
|---|---|
| too technical | needs warmth / human orientation |
| too busy | needs calm / hierarchy |
| too empty | needs grounding / context |
| confusing | needs clearer information architecture |
| not soft enough | needs gentler visual language |

## 2. What semantic item is affected?

Map the feedback to one or more IDs.

Examples:

- homepage → PAGE-001
- floating header → COMP-001
- folder menu → COMP-002
- scroll intro → COMP-003
- page cards → COMP-004
- copy tone → DESIGN-006
- public memory → LESSON-004

## 3. Is this a lesson, decision, or task?

- Lesson: reusable rule learned from feedback.
- Decision: chosen project direction with alternatives.
- Task: concrete implementation step.

Feedback can create all three, but store them separately.

## 4. Write the lesson in reusable form

Good lesson:

> Use human-facing copy for public homepage navigation.

Bad lesson:

> Angel hated the link cards.

## 5. Attach a metric

Every lesson should have a way to check whether it is working.

Example:

- Lesson: use human-facing copy.
- Metric: visible UI should avoid raw endpoint/deployment language.

## 6. Update relationships

If the feedback changes how items connect, update:

- `.agent/web/relationship-map.md`
- `.agent/matrices/semantic-index.md`
- the relevant matrix file
