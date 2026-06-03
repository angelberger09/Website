# Website Repo Memory

## Purpose

This repo separates reference intake, durable lessons, review tooling, and the future website build.

## Architecture

- `ReviewTargets/` contains reviewable website artifacts. `IntakeDashboard-V1` scans this folder recursively for `.html` files and folder-based site roots that contain `index.html`.
- `ReviewTargets/index.html` is the top-priority review target and should appear first in the intake dashboard without changing the dashboard sort.
- `IntakeDashboard-V1/` is the local website review dashboard. It previews selected HTML entries and writes intake packets from review feedback.
- `plugins/intake-loop/` is the repo-local Codex plugin for generating sibling full-website variants from the same intake feedback corpus with `--loop N --mode variants`.
- `plugins/global-iterations/` is the repo-local Codex plugin for one collective feedback pass across all current sites, then generated rewritten site outputs under `ReviewTargets/global-iterations/`.
- `intake/` stores generated review packets and raw intake material.
- `lessons/` stores durable decisions extracted from intake.
- `Website-V1/` is the current Angels public site build. It is a static multi-page Vite site with a compact sticky top bar that keeps the `Angel Berger` text brand on the left, a docked menu button on the right, and page-owned intro banners that use a parallax image plus the page title only.
- `Market-V1/` is the standalone storefront workspace for handmade/digital product-line pages, with a static catalog, reusable collection/detail pages, shared vanilla JS render helpers, and a responsive inset-polaroid gallery that scales from 1 to 4 columns.
- `media/` is the raw-media workspace. `media/rawMedia.md` is the inventory index and each raw media item lives as a folder pair with `asset.*` plus `manifest.json`.
- `EtsyPipeline-Codex/` is the Codex-driven Etsy pipeline workspace. `orchestrator.md` owns stage order and handoff rules, while `MediaGeneration-V1/` and `ContentReview-V1/` are modular stage folders.

## Conventions

- Website review targets are added as `.html` files or site-root folders under `ReviewTargets/`.
- Intake loop variants are full sibling websites, not chained refinements or partial-section experiments.
- Global iterations are collective-pass rewrites: one shared feedback corpus, one generated output per site under `ReviewTargets/global-iterations/`, no chaining between sites unless explicitly requested.
- Intake review packets preserve the reviewed HTML as `code.html`, the review document as `reference.md`, inline image assets under `references/`, and metadata in `packet.md`.
- Existing packets are migrated in place to the `reference.md` packet shape so old and new packets match.
- Dashboard changes should preserve the review flow: choose entry, play preview, edit `reference.md`, autosave packet.
- The review dashboard UI should stay low-radius and split-pane: a left live preview, a right multiline review field, and a device aspect-ratio picker for previewing site layouts. Keep the review flow compact, but do not remove the aspect control or reduce it to a single pane unless explicitly requested.
- The review dashboard should fill the viewport top-to-bottom, use a centered page gradient, and give controls vignette-style gradients with subtle drop shadows.
- The Angels site should keep a dark cinematic lighting palette with image-led page banners, a top-level docked brand/menu bar, and route-owned intro banners. No hero text: use a parallax image and the page title only, with a soft center-weighted transparent gradient title surface and no border.
- The Angels site should use dark page-specific color fields, subtle ambient particles, flatter full-width content bands, image-led rows/strips, and footer email plus social icons instead of left-side footer labels.
- The Angels page selector should be a full-screen overlay with full-width horizontal route rows.
- UI sizing should use constraint-based responsive layout with CSS Grid/Flexbox, `clamp()`, viewport units, and min/max constraints rather than fixed desktop-only dimensions.
- The marketplace build should keep the browsing shell focused on the gallery; no top action rail, category rail, search bar, or filter block unless explicitly requested.
- `Market-V1` collection pages should show exactly five offerings and product cards should link to individual offering detail pages.
- `Market-V1` browsing cards should use inset-polaroid framing, square-radius corners, fixed aspect ratios, subtle reveal/hover motion, and centered CSS Grid `auto-fit` columns based on an ideal card width.
- Raw media items should stay in paired folders so the asset and manifest can be overridden together without changing the inventory contract.
- The Etsy pipeline should stay modular and stage-based so lower-level folders can be swapped without rewriting the top-level orchestrator.
