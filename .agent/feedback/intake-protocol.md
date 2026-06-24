# Feedback Intake Protocol

Use this when Angel gives short feedback points like:

- "this feels too technical"
- "make this softer"
- "the nav feels confusing"
- "this should feel more like a studio"
- "less dashboard, more cozy"

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

## Step 2 — Extract the signal

Ask: what reusable rule is hidden inside the feedback?

Example:

- Feedback: "this feels like a demo shell"
- Signal: the visible homepage should feel authored and human-facing before it explains technical structure.

## Step 3 — Decide whether to store it

Store it if it changes future behavior. Do not store it if it is only a one-time preference with no reusable value.

## Step 4 — Public-safety filter

Before writing to `.agent/`, remove:

- raw private context
- medical or financial details
- vulnerable drafts
- identifiable personal details that are not already intentionally public
- emotional specifics that are not needed for the design lesson

## Step 5 — Update project memory

Use `feedback-to-lesson-workflow.md` to choose the correct files.

## Step 6 — Confirm what changed

When reporting back, summarize:

- the feedback signal extracted
- the lesson created or updated
- the files changed
- any follow-up needed
