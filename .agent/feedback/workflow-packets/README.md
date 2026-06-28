# Workflow Packets

This folder stores public-safe recovery packets written by the Website workflow recovery action.

## Purpose

When a Website workflow fails or needs a manual recovery check, the recovery action writes a small markdown packet here so the next agent run can see the issue inside repo memory.

## Packet rules

- Append new packets; do not overwrite old ones.
- Store only public repository workflow metadata.
- Do not store raw action logs, credentials, private drafts, or unrelated personal context.
- Read the newest packet before starting another broad implementation pass.
- Repair workflow or process problems before continuing repeated Website edits.

## Related project memory

- FEEDBACK-019
- LESSON-029
- PROC-003
- METRIC-033
