# FEEDBACK-018 — Availability rows still read too much like UI strips

Timestamp: 2026-06-25 00:21 ET  
Status: active  
Source: Screenshot review of current Store page availability-state rows

## Validation

- Validation source used: screenshot showing `/Website/store/` plus current repo source for `app/store/page.jsx`, `app/store-readiness.js`, `app/globals.css`, and `app/paper-card-pass.css`.
- Screenshot status: current Website screenshot of the Availability states section on the Store route.
- Matched semantic items: PAGE-005, COMP-008, DESIGN-022, DESIGN-024, METRIC-021, METRIC-023.
- Implementation boundary: feedback-only record; future implementation should read this file and apply the smallest useful in-bounds change.

## Public-safe summary

The horizontal availability rows still read like UI strips. They should feel more like placed paper strips, snippets, or collage pieces.

## Extracted signal

Wide repeated bars should not default to app-row language. Even when they use cut edges, their composition should feel physically placed and editorial, not like a list component with styling applied.

## State alignment

- Current observed state: the Store availability states are repeated wide horizontal rows.
- Desired target state: availability states read as placed paper snippets or collage strips.
- Correction signal: move away from UI-row repetition toward physical paper-strip composition.
- Internal state impact: creates a Store-specific component refinement target under the existing paper-piece card lessons.
- Future implementation guidance: consider staggered paper strips, smaller snippet cards, varied placement, stronger paper edges, or pairing each state with image/photo surfaces; preserve readable labels and descriptions.

Priority: high  
Scope: local / pattern  
Target confidence: confirmed
