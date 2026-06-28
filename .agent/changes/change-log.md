# Change Log

This log uses local project time in `America/New_York`.

## 2026-06-28 11:43 ET — Visual notification channel update

### Changed

- Updated `.github/workflows/visual-tour.yml`.
- Added channel update support using a repository secret for the destination URL.
- Added a text update with branch, commit, run ID, status, routes/viewports summary, video artifact link, and receipt artifact link.
- Added opt-in direct MP4 upload when enabled by repository variable.
- Added a configurable size guard for direct MP4 upload.
- Added `.agent/changes/2026-06-28-visual-tour-discord.md`.
- Updated `.agent/matrices/visual-tour-workflow.matrix.md`.

### Why

Angel wanted the visual-tour evidence and a proof/preview text update sent to the project update channel. The workflow now posts the review summary by default when configured, while keeping large video upload optional.

### Related items

- PROC-004
- TOOL-001
- METRIC-033
- METRIC-034
