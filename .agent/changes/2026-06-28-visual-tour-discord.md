# 2026-06-28 11:43 ET — Visual tour Discord channel updates

## Changed

- Updated `.github/workflows/visual-tour.yml`.
- Added Discord webhook support through repository secret `DISCORD_WEBHOOK_URL`.
- Added a Discord text update after each visual-tour run with branch, commit, run ID, status, route/viewports summary, video artifact link, and receipt artifact link.
- Added optional direct Discord MP4 upload when repository variable `DISCORD_SEND_VIDEOS` is set to `true`.
- Added optional size guard through repository variable `DISCORD_VIDEO_MAX_MB` so large MP4s are skipped instead of failing the whole notification path.
- Kept the existing generic `VISUAL_TOUR_WEBHOOK_URL` notification path for non-Discord receivers.

## Why

Angel has a Discord channel for updates and wanted the visual tour evidence plus a proof/preview text update sent there. Discord receives a lightweight text update by default; direct video upload is opt-in because generated MP4s may be too large for a Discord webhook upload.

## Satisfaction state

Partially satisfied. The workflow is wired for Discord, but delivery requires adding the channel webhook URL as the `DISCORD_WEBHOOK_URL` repository secret. Direct MP4 upload requires setting `DISCORD_SEND_VIDEOS=true`; otherwise Discord receives artifact links and run evidence text only.

## Related items

- PROC-004
- TOOL-001
- METRIC-033
- METRIC-034

## Validation guidance

Create a Discord channel webhook and add it as the Website repo secret `DISCORD_WEBHOOK_URL`. Run the Visual Tour workflow. The Discord channel should receive a text update with artifact links. If direct MP4 upload is desired, set repository variable `DISCORD_SEND_VIDEOS=true` and optionally `DISCORD_VIDEO_MAX_MB` to match the receiver's accepted file size.
