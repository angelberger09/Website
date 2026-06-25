# FEEDBACK-013 — Make the page root feel like grainy paper

Timestamp: 2026-06-25 00:21 ET  
Status: active  
Source: Screenshot review of current Store page root/background material

## Validation

- Validation source used: screenshot showing `/Website/store/` plus current repo source for `app/globals.css`, `app/site-chrome.jsx`, and existing atmosphere assets in `public/atmosphere/`.
- Screenshot status: current Website screenshot of the Store route.
- Matched semantic items: PAGE-005, COMP-005, DESIGN-001, DESIGN-019, ASSET-001, METRIC-018.
- Implementation boundary: feedback-only record; future implementation should read this file and apply the smallest useful in-bounds change.

## Public-safe summary

The page root should read more clearly as grainy paper, not a smooth digital pastel background.

## Extracted signal

The root surface needs a stronger tactile base material. Paper grain and fiber should be visible enough that the page environment reads as paper before cards or polaroids are considered.

## State alignment

- Current observed state: the root background is warm and soft but still too smooth.
- Desired target state: the root/background surface reads as visible paper/fiber.
- Correction signal: increase root-level paper grain presence without harming text contrast.
- Internal state impact: strengthens DESIGN-019 and METRIC-018 at the global page-shell level.
- Future implementation guidance: tune existing grain/fiber layers on `body` and `.atmosphere-layer` before adding unrelated decorative assets.

Priority: medium  
Scope: system-wide  
Target confidence: confirmed
