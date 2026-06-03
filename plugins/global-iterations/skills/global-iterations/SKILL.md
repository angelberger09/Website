---
name: global-iterations
description: Rewrite all current sites from the combined intake corpus into ReviewTargets/global-iterations. Use when the user wants a repeatable collective iteration pass across every site.
---

# Global Iterations

## Purpose
Use the full intake corpus once, then rewrite every current site into `ReviewTargets/global-iterations/`. This is a repeatable collective pass, not a refinement chain.

## Required Behavior
- Read feedback from `intake/**/reference.md` once at the start.
- Inventory every reviewable site under `ReviewTargets/`.
- Build one collective feedback summary shared by all sites.
- Rewrite each site from its current state into `ReviewTargets/global-iterations/`.
- Keep each site identity separate. Do not chain site B off site A unless explicitly asked.
- Preserve existing review targets and intake packets.

## Command
Run from the repo root:

```bash
node plugins/global-iterations/scripts/global-iterations.mjs --goal "global site iteration pass"
```

## Loop Meaning
The command always:
- reviews the whole site set together
- gathers the full feedback corpus once
- writes one revised output per current site
- treats each output as a fresh site revision from its current state

## Shared Rules
- Visible nav stays visible.
- Language stays loose and non-academic.
- Controls must remain readable.
- Feedback about split panes, centered gradients, and vignette shadows should carry into the revised site directions when relevant.
- Each site gets one collective iteration pass, not a chain of micro-edits.
- Generated sites must not include embedded intake forms or links to missing pages.

## Output
- Rewritten site files under `ReviewTargets/global-iterations/`.
- `ReviewTargets/global-iterations/iteration-summary.md`.
- Console JSON listing every source and generated review entry.

## Stop Conditions
Stop and report instead of continuing if:
- the feedback corpus cannot be read
- the target inventory is empty
- the fixed source or target roots cannot be resolved inside this repo
