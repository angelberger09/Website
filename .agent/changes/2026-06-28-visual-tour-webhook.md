# 2026-06-28 11:35 ET — Visual tour webhook notification

## Changed

- Updated `.github/workflows/visual-tour.yml`.
- Added optional webhook notification support through `VISUAL_TOUR_WEBHOOK_URL`.
- Added optional bearer-token support through `VISUAL_TOUR_WEBHOOK_TOKEN`.
- Added artifact IDs and artifact URLs for the video and receipt uploads to the webhook JSON payload.
- Added commit, ref, run, workflow, status, and manifest data to the webhook JSON payload.
- Added optional video archive upload when repository variable `VISUAL_TOUR_WEBHOOK_SEND_FILES` is set to `true`.

## Why

Angel wanted the visual tour video to be sent to a webhook. The safest default is to send artifact links and manifest metadata, then make raw video upload opt-in because MP4 payloads can be large.

## Satisfaction state

Partially satisfied. The workflow can now notify a webhook after each visual tour run. Actual delivery requires adding `VISUAL_TOUR_WEBHOOK_URL` as a repository secret. Sending the MP4 archive itself requires also setting `VISUAL_TOUR_WEBHOOK_SEND_FILES=true`.

## Related items

- PROC-004
- TOOL-001
- METRIC-033
- METRIC-034

## Validation guidance

Add a repository secret named `VISUAL_TOUR_WEBHOOK_URL`. Optionally add `VISUAL_TOUR_WEBHOOK_TOKEN` and set repository variable `VISUAL_TOUR_WEBHOOK_SEND_FILES` to `true` if the receiver can handle a multipart tar archive of the MP4 files. Then run the Visual Tour workflow and confirm the receiver gets the JSON payload or the video archive upload.
