# Feedback implementation batch — 2026-06-26

This pass consolidates the strongest reusable Website feedback into one visible implementation batch.

## Feedback applied

- Reduce static bordered structure.
- Add intentional atmosphere without visual noise.
- Keep depth flat and tactile.
- Make paper material read first.
- Make shared cards feel like paper pieces, not generic rounded UI panels.
- Make the header read as a paper strip with stronger shadow and less pill language.
- Use polaroid and photo-like surfaces as content structure instead of decoration.
- Organize the homepage into a clearer editorial path.
- Make Notes feel like a reading shelf instead of a loud card wall.
- Keep About, Portfolio, and Store sections aligned to the same calmer room rhythm.
- Use reduced-motion support and transform/opacity-only motion.

## Website files changed

- Added `app/feedback-consolidated-room-reset-pass.css`.
- Imported it last from `app/layout.jsx`.
- Updated `.github/workflows/audit-website.yml` so the Playwright/CDP audit also runs on pushes to `main` that touch app, public, script, package, or workflow files.

## What the visual pass does

- Adds shared sizing tokens for room width, copy width, paper shadows, paper cuts, and muted plum yarn accents.
- Gives the shared header a stronger clipped paper-strip surface.
- Reduces the visual force of page hero titles.
- Makes the homepage hero and Start Here area more compact and structured.
- Grounds sections as paper fields instead of floating cream-on-cream panels.
- Turns Notes into a clearer pattern: intro, latest note, note grid, source/state boards, and next path.
- Unifies About, Portfolio, and Store board surfaces with calmer paper fields and fewer random rotations.
- Keeps animations compositor-friendly and supports reduced motion.

## Audit behavior

The Website audit workflow now runs on relevant pushes to `main` and uploads generated logs as a workflow artifact. It still supports manual runs through `workflow_dispatch`.

Generated logs remain ignored by git.
