# Feedback System

This folder teaches future assistants and contributors how to turn small feedback points into public-safe project lessons.

## Purpose

When Angel gives feedback, the assistant should:

1. validate screenshot or visible-site feedback against the live/current Website,
2. extract the useful design/content/structure signal,
3. remove private or raw context,
4. decide whether it is a one-time fix or reusable lesson,
5. update the right `.agent/` files,
6. record the feedback with a timestamp,
7. push the updated project memory to `main` when asked.

## Core files

- `live-website-validation.md` explains how to verify screenshot or visual feedback against the actual Website before storing or applying it.
- `feedback-log.md` records timestamped public-safe feedback signals.
- `intake-protocol.md` explains how to receive small feedback points.
- `extraction-rubric.md` explains how to turn feedback into lessons.
- `public-safety-filter.md` explains what cannot be stored publicly.
- `feedback-to-lesson-workflow.md` explains exactly which files to update.
- `feedback-inbox.md` is a lightweight holding area for feedback that has not been turned into a lesson yet.
- `examples.md` shows sample feedback transformations.

## Timestamp rule

Use local project time in `America/New_York` and write timestamps as `YYYY-MM-DD HH:mm ET`.

## Golden rule

Store the lesson, not the vulnerable moment.

## Live/current site rule

When feedback comes from a screenshot or points at visible site behavior, validate what part of the Website it belongs to before creating a lesson. If Angel only asks to store feedback, update `.agent/` and leave public site code unchanged for the next implementation run.