# FEEDBACK-016 — Put text in paper snippets

Timestamp: 2026-06-25 00:21 ET  
Status: active  
Source: Screenshot review of current Store page text presentation

## Validation

- Validation source used: screenshot showing `/Website/store/` plus current repo source for `app/store/page.jsx`, `app/site-chrome.jsx`, and shared card styles.
- Screenshot status: current Website screenshot of the Store route.
- Matched semantic items: PAGE-005, COMP-005, COMP-008, DESIGN-006, DESIGN-019, DESIGN-022, METRIC-018, METRIC-021.
- Implementation boundary: feedback-only record; future implementation should read this file and apply the smallest useful in-bounds change.

## Public-safe summary

Text should feel like it lives on paper snippets, labels, or note pieces rather than in large generic UI panels.

## Extracted signal

The preferred text pattern is smaller authored paper fragments: clipped labels, pasted notes, short strips, and readable snippets placed in the composition.

## State alignment

- Current observed state: much of the Store content is carried by wide text panels and repeated rows.
- Desired target state: text blocks feel like arranged paper snippets or notes.
- Correction signal: present text as paper fragments where appropriate, not only as content inside broad UI cards.
- Internal state impact: creates a reusable text-surface rule for page sections, labels, detail copy, and route guidance.
- Future implementation guidance: break selected supporting copy into smaller paper labels/notes, keep headings readable, and avoid making every text block into a large container.

Priority: high  
Scope: system-wide  
Target confidence: confirmed
