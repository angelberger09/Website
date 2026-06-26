# Header Shadow Depth Reference — 2026-06-25

Timestamp: 2026-06-25 22:14 ET  
Related feedback: `.agent/feedback/2026-06-25-header-shadow-depth-feedback.md`

## Reference summary

Screenshot feedback pointed at the live homepage header. The header labels are present and the paper-tab direction is visible, but the whole top section does not cast enough visible shadow to feel like paper laid over the page.

## Reusable visual read

The desired read is a top-attached paper strip with clear material depth:

- the full header casts a soft, readable drop shadow below the lower edge,
- paper texture and label pieces remain visible,
- direct nav labels stay simple and readable,
- the strip still feels tucked into the top of the viewport,
- the shadow is validated in the browser, not assumed from CSS declarations.

## Implementation cue

A future pass should prefer a dedicated contact-shadow layer or `filter: drop-shadow(...)` around the clipped paper shape over relying only on ordinary `box-shadow` attached to a clipped header surface.
