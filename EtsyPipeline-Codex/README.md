# EtsyPipeline-Codex

This workspace holds the Codex-driven Etsy pipeline scaffold.

## Purpose

- Orchestrate modular pipeline stages.
- Keep stage responsibilities isolated so each stage can be swapped or overridden.
- Keep the pipeline additive and repo-local.

## Top-Level Structure

- `orchestrator.md` defines the stage order and handoff contract.
- `MediaGeneration-V1/` holds media generation logic and stage-level rules.
- `ContentReview-V1/` holds content review logic and stage-level rules.

## Conventions

- Prefer small, override-friendly stages over one large pipeline.
- Keep inputs and outputs explicit at each boundary.
- Treat stage README files as the local contract for each module.
