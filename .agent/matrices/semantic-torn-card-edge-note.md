# Semantic note — torn card edge feedback

Timestamp: 2026-06-24 22:45 ET

## New semantic items

| ID | Type | Name | Location | Purpose | Related Lesson | Status |
|---|---|---|---|---|---|---|
| DESIGN-024 | Design Pattern | Torn Edge Card Silhouettes | `app/paper-card-pass.css` | Shared cards look like cut or torn paper sheets instead of rounded UI panels | LESSON-024 | active |
| METRIC-023 | Metric | Torn Edge Card Silhouette | `.agent/matrices/quality-metrics.matrix.md` | Check shared card surfaces for no rounded corners, cut-paper silhouettes, and edge shadows | LESSON-024 | active |
| LESSON-024 | Lesson | Use Torn-Edge Card Silhouettes Instead Of Rounded Corners | `.agent/lessons/lesson-log.md` | Remove rounded-card language from shared paper surfaces | METRIC-023 | active |

## Updated semantic relationships

`COMP-004`, `COMP-005`, `COMP-006`, `COMP-007`, `COMP-008`, and `COMP-009` should now treat `LESSON-024`, `DESIGN-024`, and `METRIC-023` as active for shared card-surface work.

## Related feedback

- `FEEDBACK-010` remains active as the broader paper-card direction.
- `FEEDBACK-011` refines it by making the no-rounded-corners rule explicit.
