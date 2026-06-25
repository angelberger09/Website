# About human copy cleanup

Timestamp: 2026-06-25 10:18 ET

## Intent

Remove remaining implementation-facing language from the rendered About page while preserving the current paper/collage interface structure.

## Mismatch

The active copy lessons and METRIC-002 require the visible Website to use human-facing studio language. The About page had already gained a paper room-map and contact sheet, but the public copy still explained the implementation by naming a `generic card grid`, `existing studio copy`, and `public orientation material already on this page`.

That wording described the build process instead of welcoming visitors into the studio room.

## Website source changed

- `app/about/page.jsx`

## Visible change

The About opening board now introduces the studio as a public room with front-door, tone, boundary, and movement cues instead of explaining the removal of generic cards.

The About contact-sheet intro now describes the small frames as public studio-room pieces instead of naming page material or implementation constraints.

## Agent records changed

- `.agent/matrices/pages.matrix.md`
- `.agent/matrices/quality-metrics.matrix.md`
- `.agent/changes/change-log.md`
- `.agent/changes/2026-06-25-about-human-copy-cleanup.md`

## Related items

- PAGE-002
- DESIGN-006
- LESSON-001
- LESSON-002
- LESSON-018
- METRIC-002
- METRIC-017

## Follow-up

Continue checking visible route copy for words that explain implementation mechanics to visitors. Keep the underlying source contracts honest in code and `.agent`, but render them as calm studio-room language in the public interface.
