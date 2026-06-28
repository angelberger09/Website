# Footer Exit Terminal Budget Matrix

## Semantic target

| Field | Value |
|---|---|
| Target | Shared footer exit path / lower chrome |
| Source file | `app/footer-exit-path-terminal-focus-pass.css` |
| Render scope | All public Website routes through shared footer chrome |
| Satisfaction state | partially satisfied → refined |

## Mismatch

The footer already had a paper exit receipt system, but accumulated passes could still read as multiple stacked receipt/shelf treatments. The active room model calls for each route to end with a calm guided path rather than extra visual noise.

## Visible correction

The footer terminal layer now binds the lower chrome into one quieter paper exit desk with a small label, stronger shared backing, reduced receipt depth, tighter spacing, smaller visual centers, and mobile/reduced-motion fallbacks.

## Affected IDs

| ID | Relationship |
|---|---|
| PAGE-001 | Homepage receives shared footer refinement |
| PAGE-002 | About receives shared footer refinement |
| PAGE-003 | Notes receives shared footer refinement |
| PAGE-003A | Notes post reader receives shared footer refinement |
| PAGE-003B | Blog compatibility routes receive shared footer refinement |
| PAGE-004 | Portfolio receives shared footer refinement |
| PAGE-005 | Store receives shared footer refinement |
| COMP-005 | Shared site chrome owns footer surface |
| COMP-009 | Continuity/exit path relationship stays aligned |
| DESIGN-018 | Visitor continuity remains a guided route path |
| DESIGN-019 | Paper material must read first |
| DESIGN-021 | Abstract photo centers remain content-bearing |
| DESIGN-022 | Footer receipts read as paper pieces |
| DESIGN-024 | Terminal silhouettes stay cut-paper, not rounded UI |
| DESIGN-028 | Paper keeps handled texture without heavy cost |
| DESIGN-029 | Hierarchy is flatter and less nested |
| DESIGN-030 | Supporting text remains in small paper snippets |
| LESSON-001 | Homepage/studio shell remains authored |
| LESSON-002 | Footer copy remains human-facing |
| LESSON-018 | Filled pages stay connected |
| LESSON-019 | Paper material is primary |
| LESSON-021 | Visual centers carry meaning |
| LESSON-022 | Card surfaces read as paper pieces |
| LESSON-024 | Torn/cut silhouettes replace rounded UI |
| LESSON-025 | Photo centers are not empty decals |
| LESSON-026 | Gallery/exit visual rhythm avoids fake assets |
| METRIC-017 | Filled page continuity |
| METRIC-018 | Paper material reads first |
| METRIC-020 | Content-bearing polaroids/photo centers |
| METRIC-021 | Paper cards not UI cards |
| METRIC-023 | Torn edge card silhouette |
| METRIC-027 | Paper feels crinkled/handled |
| METRIC-028 | Hierarchy is flat and editorial |
| METRIC-029 | Text lives in paper snippets |
| METRIC-030 | Content uses honest image/photo surfaces |
| METRIC-032 | Shared visual rhythm stays accessible and honest |

## Validation note

Live visual fetch was unavailable during this run, so validation used the current repository source and `.agent` state. The changed stylesheet is already imported by `app/layout.jsx`, so the rendered Website should pick up the visible footer refinement after deployment.
