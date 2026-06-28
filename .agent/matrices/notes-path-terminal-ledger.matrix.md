# Notes Path Terminal Ledger Matrix

## Scope

This matrix tracks the pass that refines the existing Notes local next-path board into a clearer terminal paper ledger.

| Item | Location | Change | Purpose | Related IDs | Status |
|---|---|---|---|---|---|
| Notes closing path board | `app/notes/NotesPageClient.jsx`, `app/notes-path-photo-board-pass.css`, `app/notes-path-terminal-ledger-pass.css` | Keeps existing Notes path cards and adds a terminal ledger styling layer | Make the closing Notes room path scan as one guided paper ledger instead of three tall standalone cards | PAGE-003, PAGE-003B, COMP-008, COMP-009, DESIGN-018, DESIGN-029, METRIC-017, METRIC-028 | active |
| Reader exit label | `app/notes-path-terminal-ledger-pass.css` | Adds a clipped `reader exit ledger` label through CSS | Give the section an immediate paper-snippet purpose cue without changing visitor copy or route data | DESIGN-030, LESSON-022, METRIC-029 | active |
| Left path cue | `app/notes-path-terminal-ledger-pass.css` | Adds a left `next path` paper/photo cue to the section intro | Strengthen the content-bearing paper/photo rhythm while keeping it honest and abstract | DESIGN-021, DESIGN-031, LESSON-021, LESSON-025, METRIC-020, METRIC-024, METRIC-030 | active |
| Paper thread | `app/notes-path-terminal-ledger-pass.css` | Adds a subtle dashed line across the three cards | Connect read-next, archive, and front-room cards into a single readable path | DESIGN-018, LESSON-018, METRIC-017 | active |
| Render budget | `app/notes-path-terminal-ledger-pass.css` | Uses static CSS, gradients, shadows, and existing texture variables; adds mobile and reduced-motion fallbacks | Improve visibility without adding scripts, image fetches, fake assets, or heavy animation | METRIC-018, METRIC-021, METRIC-023 | active |

## Satisfaction check

- Target state before this pass: partially satisfied.
- This pass makes one bounded visible refinement to the already-supported Notes local path board.
- The Blog feed contract, note data, public routes, and link targets remain unchanged.
