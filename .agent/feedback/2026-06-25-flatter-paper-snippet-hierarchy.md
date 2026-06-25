# FEEDBACK-015 — Flatten the UI hierarchy

Timestamp: 2026-06-25 00:21 ET  
Status: active  
Source: Screenshot review of current Store page hierarchy

## Validation

- Validation source used: screenshot showing `/Website/store/` plus current repo source for `app/store/page.jsx`, `app/globals.css`, and `app/paper-card-pass.css`.
- Screenshot status: current Website screenshot of the Store route showing wide section cards and availability rows.
- Matched semantic items: PAGE-005, COMP-008, COMP-009, DESIGN-003, DESIGN-019, DESIGN-022, METRIC-018, METRIC-021.
- Implementation boundary: feedback-only record; future implementation should read this file and apply the smallest useful in-bounds change.

## Public-safe summary

The UI should feel flatter and less like nested interface panels. It should read more like editorial paper pieces arranged in a collage.

## Extracted signal

The hierarchy should come from paper placement, snippets, spacing, and content rhythm rather than stacked app-like panels inside wider panels.

## State alignment

- Current observed state: filled sections still include wide card containers with repeated row components.
- Desired target state: the page feels like a flatter paper spread with less boxed nesting.
- Correction signal: reduce nested panel hierarchy and rely more on paper snippets and composition.
- Internal state impact: sharpens the anti-UI side of LESSON-019, LESSON-022, and METRIC-021.
- Future implementation guidance: flatten visible containers, reduce card-within-card language, and use editorial grouping, spacing, and paper-strip placement instead of obvious nested UI shells.

Priority: high  
Scope: system-wide  
Target confidence: confirmed
