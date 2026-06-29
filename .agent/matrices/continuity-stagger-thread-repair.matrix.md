# Continuity Stagger Thread Repair Matrix

Timestamp: 2026-06-28 20:39 ET

| Item | Relationship | Effect |
|---|---|---|
| COMP-009 Next Step Band | Uses `app/next-step-band.jsx` markup plus `app/continuity-stagger-thread-repair-pass.css` | The thread label can sit before the links without stealing the first-card stagger target. |
| COMP-005 Shared Site Chrome | Loads the repair through `app/layout.jsx` | Every major route that uses `NextStepBand` receives the same shared continuity repair. |
| DESIGN-018 Visitor Continuity Bands | Requires calm next-room rhythm | The two next-room cards regain alternating placement so the exit path reads as a designed trail. |
| DESIGN-019 Paper Material Authenticity | Requires paper read before UI read | The thread label becomes a clipped paper slip instead of loose text in the grid. |
| DESIGN-021 / DESIGN-031 | Requires content-bearing route/photo surfaces | Existing next-room photo cards keep their intended route-photo hierarchy without new fake imagery. |
| DESIGN-022 / DESIGN-024 | Requires paper pieces and torn-edge surfaces | The visible step cards keep staggered paper offsets even with the thread label present. |
| METRIC-017 | Checks filled page continuity | Shared exits remain easy to follow across routes. |
| METRIC-020 / METRIC-024 | Checks filled photo centers | The repair preserves existing photo-center route initials and labels. |
| METRIC-021 / METRIC-023 | Checks cards are not generic UI cards | The cards regain uneven placement and lifted paper rhythm. |
| METRIC-030 | Checks honest image-like surfaces | The repair changes only abstract route-photo styling, not content claims. |

## Satisfaction classification

Partially satisfied. The underlying continuity system was present and loaded, but the child-indexed stagger selectors could miss the link cards once the thread label appeared before them. The repair targets `.continuity-paper-step` by type and also styles the thread label as a small paper slip.
