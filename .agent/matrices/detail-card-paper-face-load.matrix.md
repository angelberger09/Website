# Detail Card Paper Face Load Matrix

| Field | Value |
|---|---|
| Change | Load and strengthen the shared `detail-card__paper-face` styling pass |
| Satisfaction state | Partially satisfied |
| Public source files | `app/layout.jsx`, `app/detail-card-paper-face-pass.css` |
| Agent records | `.agent/changes/2026-06-28-detail-card-paper-face-load.md`, `.agent/changes/change-log.md`, `.agent/matrices/components.matrix.md` |
| Primary components | COMP-005 Shared Site Chrome, COMP-008 Filled Page Sections |
| Design patterns | DESIGN-019 Paper Material Authenticity, DESIGN-021 Content-Bearing Polaroid Cards, DESIGN-022 Paper Piece Card Surfaces, DESIGN-024 Torn Edge Card Silhouettes, DESIGN-030 Paper/Photo Content Cues |
| Lessons | LESSON-019, LESSON-021, LESSON-022, LESSON-024 |
| Metrics | METRIC-018, METRIC-021, METRIC-023, METRIC-028, METRIC-029 |
| Public-safety boundary | Uses existing DetailCard status/eyebrow/title text only; does not invent products, posts, portfolio screenshots, private notes, or unavailable source material |

## Implementation note

This is a load-and-refine repair. The shared `DetailCard` component already emitted a `detail-card__paper-face` element, and `app/detail-card-paper-face-pass.css` existed in the repo, but `app/layout.jsx` did not import it. The pass now loads globally and has stronger taped paper/photo treatment so remaining shared detail cards have a visible content-bearing marker instead of blending into broad generic card surfaces.

## Render expectation

Routes that still rely on shared `DetailCard` surfaces should show stronger clipped paper/photo markers with tactile tape, paper grain, creases, and shadow depth while preserving the existing visitor-facing copy.