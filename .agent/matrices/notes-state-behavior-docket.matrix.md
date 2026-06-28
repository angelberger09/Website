# Notes State Behavior Docket Matrix

## Semantic item

- ID: `NOTES-STATE-BEHAVIOR-DOCKET-2026-06-28`
- Scope: Notes and Blog compatibility reader-state section
- Public source files: `app/notes/NotesPageClient.jsx`, `app/notes-state-terminal-budget-pass.css`, `app/layout.jsx`
- Agent ledger: `.agent/changes/2026-06-28-notes-state-behavior-docket.md`

## Source-of-truth support

- `LESSON-018`: Filled public pages should behave like useful rooms, not placeholders.
- `LESSON-019`: Paper material should read first.
- `LESSON-022`: Shared card surfaces should read as paper pieces rather than generic UI cards.
- `LESSON-024`: Use torn-edge/cut-paper silhouettes instead of rounded card language.
- `LESSON-025`: Photo centers should contain route-relevant visual material.

## Mismatch classified

- Target: Notes `Reader behavior` state board.
- State before this pass: partially satisfied.
- Reason: the reader-state CSS existed but was not loaded from `app/layout.jsx`, and the visible state slips could still read as separate neighboring scraps instead of one reliability docket.

## Visible correction

- Load the Notes state terminal budget pass from `app/layout.jsx`.
- Strengthen the shared docket backing behind `.notes-state-board`.
- Add a `reader behavior docket` label, public-state slip, stitched thread, connector dots, calmer state-card shadows, and responsive/reduced-motion fallbacks.

## Quality metrics affected

- `METRIC-002`: human-facing copy remains intact.
- `METRIC-018`: paper material reads first.
- `METRIC-021`: state cards read as paper, not generic UI.
- `METRIC-023`: cut/torn card silhouette remains visible.
- `METRIC-027`: state papers feel lightly handled.
- `METRIC-028`: hierarchy is flatter and more editorial.
- `METRIC-029`: labels and cues live on paper snippets.
- `METRIC-030`: photo-like state centers remain content-bearing.

## Boundary check

- No private content added.
- Existing public-safe state copy and route behavior are preserved.
