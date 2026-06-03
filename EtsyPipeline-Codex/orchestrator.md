# Etsy Pipeline Orchestrator

## Purpose

Coordinate the modular Etsy workflow across Codex-driven stages.

## Stage Order

1. `MediaGeneration-V1`
2. `ContentReview-V1`

## Orchestration Contract

- The orchestrator owns the sequence and the handoff between stages.
- Each stage should be replaceable without changing the top-level pipeline shape.
- Each stage should publish a clear output that the next stage can consume.
- If a stage is overridden, the orchestrator should still preserve the same input/output boundary.

## Inputs

- Raw media inventory from `media/rawMedia.md`
- Raw media pairs from `media/raw/`
- Any stage-specific prompt, brief, or review criteria

## Outputs

- Media generation candidates
- Review decisions or content feedback
- Stage-by-stage notes that preserve why a choice was made

## Override Points

- Replace a stage directory with a new versioned stage folder.
- Add new stage folders as the pipeline expands.
- Keep the orchestrator stable unless the stage order itself changes.
