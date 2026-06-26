# Assets Matrix

| Asset ID | File | Purpose | Used By | Related Lesson | Status |
|---|---|---|---|---|---|
| ASSET-001 | `public/atmosphere/grain-noise.svg` | Adds subtle paper/film texture so flat backgrounds feel less empty | Homepage atmosphere, cards, reader panels, header material, paper asset shell/card blend fields | LESSON-006, LESSON-010, LESSON-019, LESSON-020 | active |
| ASSET-002 | `public/atmosphere/dust-specks.svg` | Adds delicate photo-surface dust and scanned-material imperfections | Homepage atmosphere | LESSON-010, LESSON-019 | active |
| ASSET-003 | `public/atmosphere/fine-scratches.svg` | Adds hairline glossy-surface scratches | Homepage atmosphere, page cards | LESSON-010 | active |
| ASSET-004 | `public/atmosphere/soft-scratches.svg` | Adds larger glass/photo scuffs for tactile depth | Reader panels, cards, atmosphere | LESSON-010 | active |
| ASSET-005 | `public/atmosphere/gloss-sweep.svg` | Adds a diagonal glossy light sweep for photo/polaroid material feel | Header, atmosphere, page cards | LESSON-009, LESSON-010, LESSON-020 | active |
| ASSET-006 | `public/atmosphere/polaroid-frame-alpha.svg` | Torn cream polaroid/photo frame with transparent clipping area that should become a filled card center when used as a content component | Hero polaroid stack, potential header paper mask/reference, content-bearing card surfaces | LESSON-010, LESSON-014, LESSON-019, LESSON-020, LESSON-021 | active |
| ASSET-007 | `public/atmosphere/polaroid-backing-alpha.svg` | Dark charcoal torn-paper backing plate for depth behind the frame and content-filled card centers | Hero polaroid stack, content-bearing card surfaces | LESSON-010, LESSON-014, LESSON-021 | active |
| ASSET-008 | `public/assets/paper/paper-torn-tape-wide.svg` | Wide torn cream paper with tape and strong shadow for large composed boards | `app/paper-asset-shell-pass.css` homepage hero, PageIntro, major route boards, and wide calm section anchors | LESSON-019, LESSON-021, LESSON-022 | active |
| ASSET-009 | `public/assets/paper/paper-aged-deckle-sheet.svg` | Warm aged deckle paper with visible fiber and crease lines for slower studio notes | `app/paper-asset-shell-pass.css` About boards and quiet notes; `app/paper-asset-card-pass.css` note cards | LESSON-019, LESSON-022 | active |
| ASSET-010 | `public/assets/paper/paper-grid-clip-stack.svg` | Layered grid-backed paper stack with a paperclip for structured but human-facing readiness information | `app/paper-asset-shell-pass.css` Notes/source/readiness/checklist/ledger boards and `app/paper-asset-card-pass.css` stack cards | LESSON-019, LESSON-022, LESSON-026 | active |
| ASSET-011 | `public/assets/paper/paper-torn-tape-deckled.svg` | Deckled taped paper piece for smaller feature cards and route callouts | `app/paper-asset-shell-pass.css` Store/Portfolio feature boards and `app/paper-asset-card-pass.css` content-bearing feature cards | LESSON-019, LESSON-021, LESSON-022 | active |
| ASSET-012 | `public/assets/paper/paper-lilac-polaroid-frame.svg` | Cream polaroid frame over muted yarn-purple backing with black center for future masking/replacement | `app/paper-asset-shell-pass.css` gallery boards and `app/paper-asset-card-pass.css` photo/window surfaces | LESSON-019, LESSON-021, LESSON-026 | active |

## Use rule

These assets should support flat, tactile atmosphere without becoming busy. Use low opacity, blend modes, and reduced-motion support when animated.

Polaroid assets should be layered as a core material motif: dark backing below, cream torn frame above, with text or page content allowed to pass around/over the stack.

Paper/collage authenticity should be evaluated before adding more gloss or softness. Existing grain, dust, and torn-frame assets should be strengthened or supplemented in future implementation when surfaces still read as generic translucent UI rather than paper.

For the shared header, prefer reusing existing paper/material assets before adding new ones. Grain, gloss, and torn-frame alpha cues can be combined with CSS masks, pseudo-elements, or shader-like gradients to make the top bar read as paper over the page with a visible soft shadow.

When a polaroid frame is used as a card, the transparent center should not stay empty. Fill the inner area with readable route text, preview art, project/product material, or other meaningful page content so the frame acts as a card rather than background decoration.

The `public/assets/paper/` pieces are stronger than generic texture overlays. Use them as intentional section/card source art, not as repeated background decals. The black backdrops are intentional for later alpha clipping or masking workflows; live implementation should either mask/replace the black areas, use them where the black matte is part of the composition, or blend them through a controlled cream field so the matte is not visible as a rectangle.
