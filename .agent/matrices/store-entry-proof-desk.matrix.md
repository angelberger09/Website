# Store Entry Proof Desk Matrix

| Field | Value |
|---|---|
| Matrix date | 2026-06-27 |
| Primary target | PAGE-005 Store |
| Public source | `app/store/page.jsx`, `app/store-entry-receipts-pass.css`, `app/store-entry-proof-desk-pass.css`, `app/layout.jsx` |
| Satisfaction state | Partially satisfied → refined |
| Interface mismatch | Store entry trust receipts had honest content and paper/photo centers, but still read as adjacent receipt cards instead of one guided opening proof desk. |
| Visible correction | Added a Store entry proof desk pass that groups the opening trust notes with a clipped desk label, connector line, stronger backing sheet, paper-depth shadows, and direct prep/trust/open-later stamps. |
| Boundary | Do not invent fake products, fake listings, fake photos, live inventory, private planning, or purchase paths. Keep the Store page in honest preparation mode until real public source paths exist. |
| Accessibility | No route, link, heading, or interactive behavior changes. Added decoration is CSS-generated and does not alter reading order. |
| Responsive behavior | Mobile layout keeps the receipt stack vertical and turns the connector into a vertical rail. |

## Related IDs

| ID | Relationship |
|---|---|
| PAGE-005 | Store route being refined. |
| COMP-008 | Filled page section pattern. |
| DESIGN-019 | Paper material authenticity. |
| DESIGN-022 | Paper piece card surfaces. |
| DESIGN-024 | Torn/cut card silhouettes. |
| DESIGN-028 | Crinkled/handled paper material. |
| DESIGN-029 | Flattened paper hierarchy. |
| DESIGN-030 | Text paper snippets. |
| DESIGN-031 | Photo-led content surfaces. |
| LESSON-002 | Human-facing copy remains intact. |
| LESSON-018 | Store remains a useful public room before launch. |
| LESSON-019 | Paper material should read first. |
| LESSON-022 | Shared cards should read as placed paper pieces. |
| LESSON-024 | Avoid rounded UI-card language. |
| LESSON-025 | Photo/polaroid centers should carry honest route-relevant material. |
| METRIC-002 | Visible copy remains human-facing. |
| METRIC-017 | Store keeps continuity as a filled room. |
| METRIC-018 | Paper material reads before generic UI. |
| METRIC-021 | Receipts read as paper pieces rather than UI cards. |
| METRIC-023 | Card silhouettes keep cut-paper edges. |
| METRIC-028 | Section hierarchy is flatter and editorial. |
| METRIC-029 | Support text appears in smaller paper snippets/stamps. |
| METRIC-030 | Entry receipt photos remain honest image-like surfaces. |

## Future check

When reviewing the live Store page, check that the entry receipt group reads as one preparation/trust desk at desktop and mobile widths without overpowering the PageIntro or implying the store is live.
