# Notes Support Terminal Budget Matrix

## Scope

This matrix tracks the final terminal-budget refinement added to the Notes support strip in `app/notes-support-room-docket-pass.css`.

## Interface target

| Field | Value |
|---|---|
| Route | `/Website/notes/`, `/Website/blog/` |
| Source file | `app/notes/NotesPageClient.jsx` |
| Public style file | `app/notes-support-room-docket-pass.css` |
| Visible section | `notes-support-strip` / `notes-support-note` reader support docket |
| Satisfaction state | partially satisfied → refined |

## Affected semantic items

| ID | Role in this pass |
|---|---|
| PAGE-003 | Notes route receives the visible support-strip refinement. |
| PAGE-003B | Blog compatibility route reuses the Notes reader client and receives the same support-strip refinement. |
| COMP-006 | Notes Reader Client owns the rendered support strip. |
| COMP-008 | Filled Page Sections guidance applies to the support surface. |
| DESIGN-019 | Paper material remains primary but calmer. |
| DESIGN-022 | Support notes remain paper pieces rather than rounded UI cards. |
| DESIGN-024 | Cut/torn silhouettes remain while shadows are reduced. |
| DESIGN-028 | Handled paper feel is preserved with quieter texture. |
| DESIGN-029 | Section hierarchy is flattened into one receipt-like board. |
| DESIGN-030 | Pins and labels stay as paper snippets with lower visual noise. |

## Lessons and metrics

| ID | Application |
|---|---|
| LESSON-002 | Keeps support copy human-facing and unchanged. |
| LESSON-018 | Keeps Notes useful and connected as a filled room. |
| LESSON-019 | Keeps paper material visible without noisy overbuild. |
| LESSON-022 | Keeps support cards reading as paper pieces. |
| LESSON-024 | Keeps torn-edge silhouettes and physical paper offsets. |
| LESSON-025 | Keeps photo-like support centers visible and honest. |
| LESSON-026 | Supports composed visual rhythm without fake imagery. |
| METRIC-002 | Visitor-facing language stays clear. |
| METRIC-018 | Paper material still reads first. |
| METRIC-021 | Support notes avoid generic UI-card feel. |
| METRIC-023 | Torn-edge silhouettes remain visible. |
| METRIC-027 | Paper still feels lightly handled. |
| METRIC-028 | Notes support section reads as one flatter paper board. |
| METRIC-029 | Pins and labels remain small paper snippets. |
| METRIC-030 | Photo-like support centers stay content-bearing. |
| METRIC-032 | Notes room visual rhythm remains calm and accessible. |

## Boundary notes

- No new posts, products, photos, portfolio work, or private content were invented.
- Existing route copy, links, and data contracts were preserved.
- The pass changes only rendered styling for an already-public Website section.
