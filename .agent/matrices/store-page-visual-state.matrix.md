# Store Page Visual State Matrix

This matrix tracks Store-specific visual targets that are too granular for the global semantic index.

| ID | Store surface | Current visual state | Related feedback / lesson / metric | Status |
|---|---|---|---|---|
| STORE-VIS-001 | Preview board | Uses honest image-like paper/photo lane cards with staged inner paper pieces, tactile tape, and material tags from existing lane details without implying product photos or live inventory | FEEDBACK-017, DESIGN-031, METRIC-030 | closer to satisfied; needs visual review on deployed page |
| STORE-VIS-002 | Launch checklist | Uses `store-editorial-section` with a paper-field backdrop instead of one broad nested panel | FEEDBACK-015, DESIGN-026, DESIGN-029, METRIC-025, METRIC-028 | partially satisfied |
| STORE-VIS-003 | Availability states | Uses placed snippet classes and cut-paper treatment rather than only long UI rows | FEEDBACK-018, DESIGN-032, METRIC-031 | partially satisfied; needs visual review before more styling |
| STORE-VIS-004 | Promise section | Uses the editorial section pattern and hierarchy pass instead of a broad `link-card wide-card` panel | FEEDBACK-015, DESIGN-029, METRIC-028 | partially satisfied |
| STORE-VIS-005 | Future feed shape | Now uses `store-feed-contract-section`, `store-feed-field-snippets`, `store-feed-field-snippet`, and `store-feed-rule-notes` with `app/store-feed-contract-pass.css` so the contract reads as a paper field with placed snippets rather than a generic UI card | FEEDBACK-015, FEEDBACK-016, DESIGN-019, DESIGN-022, DESIGN-026, DESIGN-029, DESIGN-030, METRIC-018, METRIC-025, METRIC-028, METRIC-029 | partially satisfied |

## Current implementation note

The 2026-06-25 Store preview collage pass keeps Store copy and lane data honest while making the preview board more visibly content-bearing. It adds `store-shot-card__staged-pieces` and `store-shot-card__materials` in `app/store/page.jsx` plus `app/store-preview-collage-pass.css` so the rendered preview board reads less like abstract background cards and more like staged paper/photo pieces.
