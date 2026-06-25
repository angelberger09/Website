# Store hierarchy flattening matrix note

Timestamp: 2026-06-25 01:51 ET

## Scope

This note records the narrow Store hierarchy refinement applied for FEEDBACK-015 / METRIC-028.

## Affected semantic items

- PAGE-005 Store
- COMP-008 Filled Page Sections
- DESIGN-029 Flattened Paper Hierarchy
- METRIC-028 Hierarchy Is Flat And Editorial
- FEEDBACK-015 Flatten page hierarchy away from nested app panels

## Source change

- `app/store/page.jsx` changes the Store promise section from `link-card wide-card` to `store-editorial-section store-promise-section`.
- `app/store-hierarchy-pass.css` gives that section a paper-field backdrop and light stagger on its existing detail cards.
- `app/layout.jsx` imports `app/store-hierarchy-pass.css` after the other material passes.

## Satisfaction state

Partially satisfied.

The Store launch checklist had already moved into the editorial paper-section pattern. This pass applies the same bounded pattern to the Store promise section only, reducing one remaining broad app-like panel without changing Store copy, availability meaning, feed rules, or product truthfulness.

## Boundary for future runs

Do not keep flattening Store sections by default. Future runs should visually validate the deployed Store page and only choose another narrow hierarchy correction if `METRIC-028` remains visibly unsatisfied.
