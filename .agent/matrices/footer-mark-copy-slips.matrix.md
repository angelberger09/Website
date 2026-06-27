# Footer Mark Copy Slips Matrix

| Field | Value |
|---|---|
| Semantic item | COMP-005 Shared Site Chrome; COMP-009 Next Step Band / continuity-adjacent footer path |
| Public source | `app/footer-mark-copy-slips-pass.css`, `app/layout.jsx`, `app/site-chrome.jsx` |
| Affected pattern | Shared footer studio mark copy |
| Goal | Keep footer identity copy visually inside the paper/collage language instead of letting it fall back to plain text on a paper card. |
| Boundary | Use existing public footer copy only; do not add new routes, fake content, private details, product claims, or extra helper text. |
| Visible proof | The footer mark copy appears as two stacked clipped paper slips with grain, uneven cuts, tape, and small lifted shadows next to the existing footer mark photo. |
| Accessibility proof | Text remains real selectable text; the pass does not alter links, footer navigation, focus states, or route labels. |
| Performance proof | The pass uses static backgrounds, clip-paths, and light shadows only; no filters, animations, or extra DOM are added. |
| Related lessons | LESSON-002, LESSON-019, LESSON-022, LESSON-024 |
| Related metrics | METRIC-018, METRIC-021, METRIC-023, METRIC-029 |
| Status | active |

## Satisfaction check

Partially satisfied. The footer is already strongly paper-led, but this pass closes a remaining plain-copy fallback inside the footer identity mark.
