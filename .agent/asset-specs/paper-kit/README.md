# Paper Kit Asset Specifications

Status: spec-only planning layer  
Created: 2026-06-24  
Purpose: define every planned paper/collage image before generating or pushing image files.

## Why this exists

Instead of generating every image immediately, this folder describes the missing asset kit in exact enough detail that each image can be generated, reviewed, masked, and pushed later without re-inventing the direction.

Each spec includes:

- intended repo path
- visual purpose
- recommended aspect ratio
- approximate output size
- transparent/black-background masking guidance
- color palette
- edge treatment
- site usage
- acceptance checklist

## Black background rule

For generation previews, a black background is useful because it makes torn edges, transparency, and soft shadows easier to inspect.

For final website assets:

- collage pieces should be exported as transparent PNG whenever possible
- black should be treated as a temporary matte/mask preview, not part of the final visible asset
- soft shadows may stay inside the PNG only when they are intended to travel with the object
- assets that are overlays may use white/gray marks on transparency
- paper pieces should have alpha-clipped torn edges, not rectangular black boxes

## Folder mapping

```txt
public/paper/
  headers/
  cards/
  notes/
  polaroids/
  fasteners/
  botanicals/
  decals/
  textures/
  backgrounds/
  shadows/
```

## Spec files

- `headers.md`
- `paper-panels.md`
- `torn-cards.md`
- `notes.md`
- `polaroids.md`
- `fasteners.md`
- `botanicals.md`
- `decals.md`
- `textures.md`
- `backgrounds.md`
- `shadows.md`
- `card-icons.md`
- `generation-batches.md`

## Global style requirements

- handmade paper collage
- warm cream base
- soft strange studio tone
- lightly imperfect torn edges
- visible paper fiber
- soft shadows, not harsh drop shadows
- no clean digital rectangles unless the asset is specifically a crop window
- no stock-photo realism
- no high-contrast grunge
- no busy clutter
- designed to layer over a warm pastel website background
