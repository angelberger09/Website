# Homepage Arrival Ticket Room Budget

Timestamp: 2026-06-28 02:21 ET

## Satisfaction check

- Target: homepage first-screen arrival/front-door receipt.
- State before change: partially satisfied.
- In-bounds mismatch: `home-arrival-ticket-terminal-pass.css` made the opening receipt more intentional, but it loaded late and still risked reading as an extra loose chip rather than part of the calm left-docked homepage entry desk.
- Boundary: keep existing honest public copy and navigation; do not add fake rooms, fake assets, or private material.

## Visible Website change

- Added `app/home-arrival-ticket-room-budget-pass.css`.
- Loaded it from `app/layout.jsx` after `home-arrival-ticket-terminal-pass.css`.
- Calmed the first-screen title board and arrival receipt by reducing heavy shadow/filter feel, tightening width and margins, softening the gloss layer, cutting the board edge more intentionally, and renaming the visible receipt slip from `front-door receipt` to `arrival desk`.
- Preserved the three existing visitor cues: `Front door`, `Four rooms`, and `Soft map`.
- Added mobile and reduced-motion coverage so the first-screen receipt remains readable and does not become a separate noisy layer.

## Why

The homepage already has a long calm-room sequence and multiple terminal-budget passes. This pass keeps the hero arrival cues visible while making them feel more like part of one organized entry desk, supporting the human-readable left-docked editorial path and paper-material goals.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- DESIGN-014
- DESIGN-019
- DESIGN-022
- DESIGN-024
- DESIGN-028
- DESIGN-029
- DESIGN-030
- LESSON-001
- LESSON-002
- LESSON-018
- LESSON-019
- LESSON-022
- LESSON-024
- LESSON-025
- METRIC-001
- METRIC-002
- METRIC-018
- METRIC-021
- METRIC-023
- METRIC-027
- METRIC-028
- METRIC-029
- METRIC-030
