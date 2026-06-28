# 2026-06-28 11:58 ET — Workflow YAML hotfix

## Changed

- Fixed `.github/workflows/website-workflow-recovery-packet.yml` by adding explicit `workflow_run.workflows` targets for `Deploy Website` and `Visual Tour`.
- Reworked the recovery packet writer to avoid YAML-breaking raw heredoc-style packet content.
- Fixed `.github/workflows/visual-tour.yml` by replacing raw multiline packet content in the auditor-fetch failure step with safe shell `echo` writes.

## Why

GitHub rejected both workflows before job execution. The recovery workflow did not name any workflows for `workflow_run`, and the visual-tour workflow had YAML syntax breakage around the failure-packet text block.

## Satisfaction state

Partially satisfied. Both workflow files now parse as normal YAML source in the repo and should be able to start on the next push. The next Actions run still needs to validate runtime behavior, especially whether the configured auditor URL is reachable from GitHub Actions.

## Related items

- PROC-003
- PROC-004
- TOOL-001
- METRIC-033
- METRIC-034
