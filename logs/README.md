# Website audit logs

This folder is the local output target for `npm run audit:website`.

Generated audit runs are intentionally ignored by git. Keep this folder in the repo so local and CI runs have a predictable place to write browser evidence.

## Run commands

```bash
npm run audit:website
npm run audit:website:live
npm run audit:website:local
```

Use the local command while `npm run dev` is running.

## What gets written

Each run creates a timestamped folder under `logs/` with:

- `summary.json`
- per-route `layout.json`
- per-route `performance.json`
- per-route `animations.json`
- per-route `accessibility-snapshot.json`
- per-route `interaction.json`
- per-route `html/document.html`
- per-route screenshots
- per-route Playwright trace files
- selected CDP events in NDJSON form

The script also writes `logs/latest-summary.json` for quick inspection. That file is ignored by git.

## Why this exists

The Website often receives screenshot-based visual feedback. This harness gives future implementation passes browser evidence: loaded HTML, screenshots, console messages, failed requests, layout metrics, animation counts, accessibility snapshots, trace files, and CDP performance data.

Do not commit generated logs unless a specific audit artifact is intentionally being preserved for review.
