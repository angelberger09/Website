# Processes Matrix

| Process ID | Name | Location | Purpose | Required When | Related Lesson | Related Metric | Status |
|---|---|---|---|---|---|---|---|
| PROC-001 | Live Website Validation Protocol | `.agent/feedback/live-website-validation.md` | Check visual or current-site feedback against the live/current Website before mapping it to a lesson or implementation target | Screenshot, visible UI, current Website behavior, or implementation-goal feedback | LESSON-017 | METRIC-016 | active |
| PROC-002 | Branch Integration Audit | `.agent/changes/2026-06-25-branch-integration-audit.md` | Compare stale or temporary branches against `main`, verify whether their actual feature content is already present or superseded, and avoid force-moving `main` when a branch is behind current work | Branch cleanup, stale branch review, PR branch consolidation, or merge requests that could overwrite newer Website/source work | LESSON-018, LESSON-022 | METRIC-016 | active |
