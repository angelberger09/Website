# Feedback State Alignment Model

The Website repo uses feedback as a turn-based alignment loop, not as passive note storage.

## Loop

1. Observe the current external Website state.
2. Receive feedback.
3. Extract the correction signal.
4. Update the internal project state in `.agent/`.
5. Use that state to guide later implementation.
6. Validate the next Website state against the updated goal.

## Internal state

Internal state is the `.agent/` folder: feedback, lessons, matrices, metrics, memory, references, maps, and change history.

## External state

External state is the public Website: live output, `app/`, `public/`, styling, routes, components, copy, and assets.

Feedback changes internal state first. Implementation changes external state later. Validation compares external state against internal state.

## Feedback-first default

Treat visual critique, screenshots, wording critique, vibe notes, design corrections, layout corrections, and requests to add or save feedback as feedback intake by default. Do not edit public Website source unless implementation is explicitly requested.

## Required state alignment fields

New reusable feedback records should include:

```md
### State alignment
- Current observed state:
- Desired target state:
- Correction signal:
- Internal state impact:
- Future implementation guidance:
```

Also include:

```md
Priority: low / medium / high / blocking
Scope: local / pattern / system-wide
Target confidence: confirmed / likely / needs validation / needs clarification
```

## Goal-correction question

Every reusable feedback entry should answer: what part of the project goal does this correct?

## Targeting categories

Target feedback to at least one category: page, component, design language, typography, copy/content, interaction, navigation, asset, quality metric, process/workflow, public safety, or validation/source.

If the target is unclear, mark it as `needs validation` or `needs clarification` and use the feedback inbox.

## Implementation bridge

Implementation runs should read the feedback log, active lessons, semantic index, and quality metrics before changing Website source. They should apply the internal state to the external Website state, then update `.agent/` afterward.

## Cumulative behavior

Feedback is cumulative. Append new feedback, update active lessons when the goal changes, update matrices when relationships change, and retire older lessons only when a newer confirmed rule replaces them.
