# Website Repo Memory

## Purpose

This repo separates reference intake, durable lessons, review tooling, and the future website build.

## Architecture

- `ReviewTargets/` contains reviewable website artifacts. `IntakeDashboard-V1` scans this folder recursively for `.html` entry points.
- `IntakeDashboard-V1/` is the local website review dashboard. It previews selected HTML entries and writes intake packets from review feedback.
- `intake/` stores generated review packets and raw intake material.
- `lessons/` stores durable decisions extracted from intake.
- `Website-V1/` is reserved for the future website implementation and should stay empty until the website build starts.

## Conventions

- Website review targets are added as `.html` files under `ReviewTargets/`.
- Intake review packets preserve the reviewed HTML as `code.html`, the feedback as `review.md`, and metadata in `packet.md`.
- Dashboard changes should preserve the review flow: choose entry, play preview, write review, create packet.
- The review dashboard UI should stay compact and workbench-like: top entry picker, left sandbox preview, right review and feedback panel.
- UI sizing should use constraint-based responsive layout with CSS Grid/Flexbox, `clamp()`, viewport units, and min/max constraints rather than fixed desktop-only dimensions.
