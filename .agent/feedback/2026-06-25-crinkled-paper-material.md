# FEEDBACK-014 — Add a crinkled paper feeling

Timestamp: 2026-06-25 00:21 ET  
Status: active  
Source: Screenshot review of current Store page material treatment

## Validation

- Validation source used: screenshot showing `/Website/store/` plus current repo source for `app/globals.css`, `app/paper-card-pass.css`, and existing atmosphere assets.
- Screenshot status: current Website screenshot of the Store route.
- Matched semantic items: PAGE-005, COMP-005, COMP-008, DESIGN-019, DESIGN-022, METRIC-018, METRIC-021.
- Implementation boundary: feedback-only record; future implementation should read this file and apply the smallest useful in-bounds change.

## Public-safe summary

Paper surfaces should feel gently crinkled or physically handled, not pristine and digitally flat.

## Extracted signal

The paper/collage material system needs soft evidence of handling: subtle creases, pressure variation, uneven tonal patches, and scanned imperfections that make the surfaces feel physical without becoming messy.

## State alignment

- Current observed state: paper treatments exist, but large surfaces can still read flat and too clean.
- Desired target state: shared paper surfaces feel lightly crinkled and handled.
- Correction signal: add soft crease/crinkle cues as part of the material system.
- Internal state impact: adds a material-quality sub-goal under LESSON-019 and DESIGN-019.
- Future implementation guidance: use subtle gradients, crease-like overlays, tonal wrinkles, and existing grain/scratch assets; avoid harsh realism or dirty textures that reduce readability.

Priority: medium  
Scope: system-wide  
Target confidence: confirmed
