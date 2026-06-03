# Raw Media Index

`media/raw/` stores raw media as folder pairs:

- `asset.*` for the media file itself
- `manifest.json` for the reason the asset exists and how it should be used

## Contract

- Keep one media item per folder.
- Keep the asset and manifest together so the item can be overridden cleanly.
- Treat the manifest as the durable description of utility, constraints, and intended workflow.
- Use this index as the human-readable inventory for raw media.

## Current Samples

- `sample-01/` - warm placeholder background for layout and pipeline checks.
- `sample-02/` - framed placeholder variant for alternate composition checks.
- `sample-03/` - accent placeholder variant for contrast and review tests.

## Update Rule

- Add a new folder for each new media item.
- Include a matching `manifest.json` in the same folder.
- Keep this file current as the inventory changes.
