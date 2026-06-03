---
name: intake-loop
description: Generate full sibling website variants from existing intake feedback. Use when the user asks to loop website variants, create multiple review targets, or produce several full website options from one feedback brief.
---

# Intake Loop

## Purpose
Create multiple complete website variants from the same feedback corpus. A loop is a set of sibling variants, not a chain of refinements.

## Required Behavior
- Read feedback from `intake/**/reference.md` once at the start.
- Generate a distinct brief for each requested variant.
- Create one complete HTML website per pass in `ReviewTargets/messages/`.
- Keep existing review targets and packets untouched.
- Use the intake dashboard preview routes for validation when the server is running.
- Write an intake note for each variant so later review can trace the goal, constraints, and validation result.

## Command
Run from the repo root:

```bash
node plugins/intake-loop/scripts/intake-loop.mjs --loop 5 --mode variants --goal "new Angel Berger website variants"
```

## Loop Meaning
`--loop N` means produce N different full websites from the same feedback brief.

Each variant must include:
- first-viewport brand signal
- visible navigation
- full hero section with a real image
- physical and digital content areas where relevant
- product or work tiles with names, prices or metadata, and summaries
- journal or article content where relevant
- contact or inquiry area
- any expanded state must have a clear close path

## Shared Feedback Rules
- No academic, rigid, renaissance, or romance-coded language.
- Nav must never be cut off or too translucent to read.
- Hover brighten belongs mainly on text or article surfaces.
- Polaroid interactions must include visible close, outside click, and Escape exits.
- Vignette and gradient treatments must not damage readability.
- Each output is a complete website, not a component experiment.

## Stop Conditions
Stop and report instead of continuing if:
- the mode is not `variants`
- the target root is outside `ReviewTargets/messages`
- a generated target would overwrite an existing file
- the script cannot read feedback from the configured feedback root
