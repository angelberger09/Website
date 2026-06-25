# Feedback Form — Polaroid/photo surfaces are not decals

Timestamp: 2026-06-24 23:49 ET  
Status: converted to active lesson target  
Source: screenshot feedback of the current homepage/polaroid material treatment

## Validation

- Validation source used: screenshot plus current repo source for `app/page.jsx`, `app/hero-polaroid-card-pass.module.css`, `app/globals.css`, and the polaroid atmosphere assets.
- Live visual validation was unavailable during this pass, so this form uses repo-source matching and screenshot matching.
- Screenshot status: appears to show the current Website paper/polaroid layer with cream frame, dark photo/backing center, translucent paper overlays, and surrounding page copy.

## Public-safe summary

The polaroid/photo material should not sit behind the page as an empty decorative decal. When the Website uses a photo frame, dark photo center, or paper-photo surface, it needs to behave like intentional content structure.

## Extracted signal

Photo/polaroid centers should carry something meaningful: a rendered placeholder image, a page preview, an artwork/product/project cue, or a staged shot background. Empty gray centers should not be accepted as a finished card or gallery state.

## Implementation target for later runs

- Treat photo/polaroid centers as content areas, not scenery behind the UI.
- Replace blank/dark middles with placeholder shot imagery or route-specific visual previews.
- Keep the cream paper frame and tactile edge treatment, but make the center feel intentionally authored.
- Leave purely decorative background polaroids only when they are clearly secondary and not pretending to be content cards.

## Do

- Use layered paper/photo composition.
- Put real visual material inside the frame center.
- Make photo surfaces help visitors understand the page or gallery.

## Avoid

- Blank gray centers.
- Polaroid assets used only as background decals.
- Empty photo frames that look like unfinished placeholders.

## Related items

- PAGE-001
- COMP-003
- COMP-004
- COMP-008
- DESIGN-017
- DESIGN-021
- DESIGN-025
- ASSET-006
- ASSET-007
- METRIC-024
- LESSON-025
