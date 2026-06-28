# Store Feed Article Rule Slips Matrix

## Scope

This matrix records the Store feed boundary rule-slip implementation pass.

## Target

- Page: PAGE-005 Store
- Component: COMP-008 Filled Page Sections
- Source surface: Store future feed contract / boundary rules
- Public source file: `app/store-feed-shelf-docket-pass.css`

## Satisfaction state before pass

Partially satisfied.

The Store future feed boundary rules were source-backed in `app/store/page.jsx`, but the loaded paper styling still primarily targeted the previous list-item selector. The visible Website could therefore show the right content without the intended clipped paper-slip surface.

## Visible correction

`app/store-feed-shelf-docket-pass.css` now targets both:

- `.store-feed-rule-slip`
- `.store-feed-rule-tape li`

This keeps older fallback selectors safe while making the current article slips visibly render as clipped, labeled paper rules with texture, edge cues, lifted shadows, mobile fallbacks, and reduced-motion safeguards.

## Affected IDs

| ID | Relationship |
|---|---|
| PAGE-005 | Store page future shelf boundary rules |
| COMP-008 | Filled page section surface refinement |
| DESIGN-015 | Direct human labels on source-backed rules |
| DESIGN-019 | Paper material reads first |
| DESIGN-022 | Rule slips are paper pieces, not UI rows |
| DESIGN-024 | Cut-paper silhouette applied to current markup |
| DESIGN-028 | Light handled-paper texture remains present |
| DESIGN-029 | Feed boundary stays flat/editorial |
| DESIGN-030 | Rule copy lives in labeled paper snippets |
| LESSON-002 | Human-facing copy preserved |
| LESSON-004 | Public/private boundary preserved |
| LESSON-015 | Direct labels preserved without numbering |
| LESSON-019 | Paper material primary |
| LESSON-022 | Card-like surfaces read as paper pieces |
| LESSON-024 | Torn/cut silhouettes over rounded UI cards |
| METRIC-002 | Copy remains visitor-facing |
| METRIC-014 | Rule labels remain direct |
| METRIC-018 | Paper material visible |
| METRIC-021 | Rule slips avoid generic UI-card read |
| METRIC-023 | Torn-edge silhouette applied |
| METRIC-027 | Handled/crinkled paper cue preserved |
| METRIC-028 | Flattened editorial hierarchy preserved |
| METRIC-029 | Text paper snippets strengthened |

## Public-safety note

The pass does not add products, inventory, fake product photos, private plans, or external shop links. It only styles the existing public-safe Store feed contract rules.
