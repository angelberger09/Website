# Source Review Active Lessons — 2026-06-28

Timestamp: 2026-06-28 21:58 ET  
Status: active lesson supplement and documentation implementation record  
Source: Source review of uploaded Soft Strange Studio workflow/design discussion and current `.agent` docs.

Read this with `.agent/lessons/active-lessons.md` before checking, editing, recovering, or reporting on the Website.

## Implementation record

This pass promoted recurring source-review findings into reusable active lessons. It intentionally changed documentation only; public Website source files were not edited.

## LESSON-029 — Layout before material

Do not add more paper, collage, shader, texture, or decorative depth before hierarchy, grid, viewport fit, and navigation clarity are working.

## LESSON-030 — Hero must be viewport-safe

The homepage hero must work as a front door, not as a poster. On a normal laptop viewport, visitors should see the studio title, orientation copy, entry route slips, and open-rooms card without scrolling just to find the doors.

## LESSON-031 — Paper texture must not scale with viewport

Large paper surfaces should reveal more of the same paper material, not zoom the folds, wrinkles, frame thickness, shadows, or texture density.

## LESSON-032 — Use real paper assets as shells

Use real paper assets for shell shape, torn/deckled edges, folds, tape, clip/frame character, and fixed material cues. Use CSS for layout, fixed shadow, tint, hover, motion safety, and responsiveness.

## LESSON-033 — No stacked override passes

Do not solve visual drift by repeatedly adding final override files. Consolidate repeated card, paper, layout, and motion rules into shared contracts, then retire conflicting old rules.

## LESSON-034 — Pages are rooms, not piles of cards

Homepage, About, Notes, Portfolio, and Store should each behave like a coherent studio room: composed hero board, featured area, secondary shelf, readiness/source note, and next-path navigation.

## LESSON-035 — One notification boundary

Deploy, Visual Tour, and Recovery should not all post normal standalone updates. Individual workflows can build, render, upload artifacts, or write recovery logs; one reporter should create the human-facing status summary.

## LESSON-036 — One run identity

Workflow output must group related events by run id, commit SHA, branch, workflow group, status, artifact/log links, and recovery state so overlapping pushes do not look disconnected.

## LESSON-037 — Visual Tour base path must be detected

Visual Tour cannot assume the production path is valid for a local static preview. Serve the built output, test `/` and `/Website/`, store the resolved local base URL, and pass that URL to the auditor/reporter.

## LESSON-038 — Data manifests over hardcoded cards

Repeated public card content should come from structured data manifests, not scattered hardcoded component entries. Portfolio/project records should be defined once and rendered by mapping over that data.

## LESSON-039 — Visible change required for implementation runs

Implementation runs should materially improve the rendered Website unless the task is feedback-only, blocked, unclear, or explicitly process-only.

## LESSON-040 — Reports must be packetized

Human-facing reports should use clean sections for status, changed files, validation, and next risk. Avoid duplicated prose, malformed code fences, and mixed raw tool/status noise.

## Matrix mapping

| Lesson | Applies to | Check |
|---|---|---|
| LESSON-029 | PAGE-001, COMP-003, DESIGN-019 | Layout is readable before more paper effects are added. |
| LESSON-030 | PAGE-001, COMP-003 | Hero entry path is visible at laptop size. |
| LESSON-031 | DESIGN-019, DESIGN-022 | Paper density stays fixed across surface sizes. |
| LESSON-032 | ASSET-006, ASSET-007, DESIGN-019 | Assets provide paper shape/material; CSS handles layout/tint/shadow. |
| LESSON-033 | COMP-005, DESIGN-022 | Repeated override passes are consolidated. |
| LESSON-034 | PAGE-001 through PAGE-005 | Pages follow room structure. |
| LESSON-035 | workflow docs | One reporter owns normal status output. |
| LESSON-036 | workflow docs | Reports group by run identity. |
| LESSON-037 | visual-tour workflow | Local base path is detected. |
| LESSON-038 | DATA, PAGE-004 | Repeated records render from manifests. |
| LESSON-039 | implementation workflow | Implementation produces visible site change unless scoped otherwise. |
| LESSON-040 | reporting workflow | Reports use status, files, validation, and next risk. |
