# Feedback Intake Protocol

Use this when Angel gives short feedback points like:

- "this feels too technical"
- "make this softer"
- "the nav feels confusing"
- "this should feel more like a studio"
- "less dashboard, more cozy"
- "this screenshot is not right"
- "add this as feedback for the next run"

## Step 0 — Validate the source when needed

If feedback includes a screenshot, references visible UI, mentions the current Website, or corrects an implementation goal, read `.agent/feedback/live-website-validation.md` first.

Before creating a lesson, identify whether the feedback maps to:

- the live Website,
- current repo source,
- an older site pass,
- an external inspiration/reference image,
- or an unclear source.

If the source cannot be validated, use `.agent/feedback/feedback-inbox.md` instead of inventing a lesson.

## Step 1 — Identify the feedback type

Classify the feedback as one or more of:

- visual design
- copy tone
- navigation/IA
- component behavior
- data/content structure
- accessibility
- performance/build
- public-safety concern
- workflow/process
- source validation

## Step 2 — Extract the signal

Ask: what reusable rule is hidden inside the feedback?

Example:

- Feedback: "this feels like a demo shell"
- Signal: the visible homepage should feel authored and human-facing before it explains technical structure.

## Step 3 — Decide whether to store it

Store it if it changes future behavior. Do not store it if it is only a one-time preference with no reusable value.

If Angel asks to add, save, or store feedback, treat that as a feedback-only pass unless Angel explicitly asks to implement the change on the Website now.

## Step 4 — Public-safety filter

Before writing to `.agent/`, remove:

- raw private context
- medical or financial details
- vulnerable drafts
- identifiable personal details that are not already intentionally public
- emotional specifics that are not needed for the design lesson
- private browser or desktop details from screenshot context

## Step 5 — Update project memory

Use `feedback-to-lesson-workflow.md` to choose the correct files.

Feedback-only updates should stay inside `.agent/`.

## Step 6 — Confirm what changed

When reporting back, summarize:

- the validation source checked when applicable
- the feedback signal extracted
- the lesson created or updated
- the files changed
- whether the public Website was intentionally left unchanged
- any follow-up needed