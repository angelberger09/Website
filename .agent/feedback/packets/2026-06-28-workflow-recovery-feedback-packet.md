# Workflow Recovery Feedback Packet

Timestamp: 2026-06-28 01:16 ET
Status: feedback-only packet
Source: workflow/process feedback

## FEEDBACK-019 — Reliable workflow recovery packets

### Validation

- Validation source used: current project workflow docs and repository memory.
- Screenshot status: no screenshot provided.
- Matched semantic items: PROC-001, PROC-003, LESSON-017, LESSON-029, METRIC-016, METRIC-033.

### Public-safe summary

The Website repo workflow system needs a more reliable fallback path for recording workflow problems. Future workflow work should add a second, minimal recovery workflow that can still run when the main update workflow is broken and write a small public-safe diagnostic packet into `.agent/feedback/workflow-packets/`.

### Extracted signal

Workflow failures should become durable repo-readable feedback packets instead of disappearing in action logs. The recovery path should be separate from the main implementation workflow, use minimal dependencies, and append timestamped packets without overwriting old records.

### Important correction

Do not use a top-level `.issues/` folder for this Website feedback system. Store these records inside `.agent/feedback/packets/` or `.agent/feedback/workflow-packets/` so they remain part of the existing public project-memory structure.

### Future implementation target

Add a separate recovery workflow that:

- runs independently from the main Website implementation workflow,
- supports manual dispatch and a safe recurring or after-failure trigger,
- checks out the repo with narrow write access,
- captures a short markdown packet with run id, workflow name, branch, commit, status, likely issue, evidence, and next action,
- commits the packet to `.agent/feedback/workflow-packets/YYYY-MM-DD-HHMM-ET-run-<id>.md`,
- never overwrites older packets,
- stores only public-safe summaries and short evidence,
- avoids changing public Website source files during diagnostic capture.

### Created or updated lessons

- LESSON-029 — Use workflow recovery packets, not external issue dumps

### Implementation boundary

Feedback stored in `.agent/` only. Public Website source and workflow files should not change until an implementation run is requested.

## LESSON-029 — Use workflow recovery packets, not external issue dumps

Timestamp: 2026-06-28 01:16 ET
Context: Workflow/process reliability feedback
Status: active

### Lesson

The Website repo should have a reliable recovery path for workflow failures that records public-safe diagnostic packets in the `.agent` memory system.

### Future rule

When adding workflow reliability improvements, create a minimal second workflow that writes timestamped recovery packets under `.agent/feedback/workflow-packets/`. Keep the packet format short, append-only, public-safe, and independent from the main implementation workflow. Do not create a separate `.issues/` folder for this feedback system.

## PROC-003 — Workflow recovery packet protocol

Location: future recovery workflow plus `.agent/feedback/workflow-packets/`
Purpose: preserve workflow failure context as public-safe repo memory when the main workflow is broken or unreliable.
Required when: Website automation, scheduled runs, or implementation workflows fail, loop, skip visible changes, or cannot leave enough context for the next turn.
Related lesson: LESSON-029
Related metric: METRIC-033
Status: proposed

## METRIC-033 — Workflow failures leave packets

Target: workflow failures create an append-only public-safe packet inside `.agent/feedback/workflow-packets/`.
How to check: inspect the recovery workflow output and confirm it committed a short markdown packet with run context, evidence, likely issue, and next action without touching public Website source.
Current status: proposed
Related lesson: LESSON-029
