# Design direction

The user selected Khaled Mehran's Behance cover and confirmed the spelling **एकाग्र**. Use the white canvas, deep red typography, centered monochrome childhood photo, flanking name labels, and quiet year. Continue with the reference's black introduction panel and open project galleries, using Aikagra's own work.

The single job is to let employers and collaborators see the work, understand Aikagra's contribution, and try or watch it.

## Review

- High, craft judgment: archive labels crowded the work. Use real screenshots and expandable details. `layout.md › Visual hierarchy`: “Use progressive disclosure to make layouts cleaner and easier to interact with.”
- High, readability: previous labels were 0.55–0.68rem (8.8–10.88 CSS px at default sizing). Use 14px metadata, 17px body, and larger responsive headings. `typography.md › Ensuring legibility`: “Use font sizes that most people can read easily.” Apply browser scaling rather than native point tables.
- `branding.md › Best practices`: “Ensure branding always defers to content.” Spend the expressive typography in the cover; use familiar web controls throughout the work.
- `playing-video.md › Best practices`: “Always display video content at its original aspect ratio.” Use native HTML video controls, original-file links, and click-to-play viewing.

## Tokens and layout

Canvas #f8f8f8, surface #ffffff, text #161616, secondary #595959, accent #b41418, divider #dddddd. Dark sections: #141414 canvas, #f8f8f8 text, #c2c2c2 secondary, #ef6b6e accent, #414141 divider. Calculated contrast: accent/canvas 6.47:1; secondary/canvas 6.60:1; dark accent/dark canvas 6.14:1; dark secondary/dark canvas 10.34:1.

Noto Serif Devanagari for the name; Inter and system UI for content. Body 1.0625rem, metadata .875rem, project headings 1.625rem; section headings clamp(2.8rem, 5.6vw, 4.5rem).

Regular: flanking labels / central photo and name / year; two-column introduction and projects. Compact: stacked cover, introduction, and projects; native menu button. Film and photo archives use progressive disclosure. One short entrance animation, disabled for reduced motion. Native dialogs provide focus containment, Escape, and explicit dismissal.


## Film direction update — October 9, 2026

### Summary

Good. The site presents a builder who also observes and makes films. Its signature combines the user's archival childhood photograph and the name एकाग्र with a red, distressed "WHO AM I?" print. This is a responsive HTML portfolio: Apple's principles and foundations apply; native app menu bars and tab conventions do not.

### Content corrections

- Featured films: Dreamcatcher, Herald, Digex 2024.
- The secondary archive excludes all featured IDs and repeated source URLs. Seven additional films remain. This follows `layout.md › Visual hierarchy`: "Use progressive disclosure to make layouts cleaner and easier to interact with." Removing repeated entries is a craft decision.
- Six selected VSCO images lead to eight additional photographs. Their captions describe what is in the images without assuming locations. `writing.md › Best practices` emphasizes clear, consistent language.
- The specific Build with Gemma callout was replaced with learning, hackathons, prototypes, and side projects, as requested.

### Visual direction and research

The user's supplied second-page reference is the main source: charcoal panel, red archival portrait crop, black oversized WHO AM I lettering, white Devanagari identity question, and readable white biography.

Additional references:
- [Ronin161's own making-of](https://tympanus.net/codrops/2024/02/20/case-study-ronin161s-portfolio-2024/): grain, vignette, bloom, and text integrated with the image treatment. Adapted here as light SVG grain, restrained halation, and distressed print, without adding a heavy rendering engine.
- [Naked City Films, by SavoirFaire](https://tympanus.net/codrops/2026/01/19/naked-city-films-designing-and-building-a-website-that-refuses-to-stand-still/): typography, scale, editorial cuts, and continuity between scenes. Adapted as condensed display typography, one-time entrances, and light/dark pacing.
- [Marwan Mursyid, by QZentrix](https://qzentrix.com/case-studies/marwanmursyid-portfolio), [live portfolio](https://www.marwanmursyid.com/): film-grain and editorial photography direction. Inspected the live presentation.
These adaptations are design judgments rather than HIG requirements.

### Tokens and narrative

Retain #f8f8f8 paper, #b41418 ink, and #101010 dark film panels. Dark display accent #ef6b6e, body #f8f8f8, secondary #c2c2c2. Base contrast figures: red/paper 6.47:1, secondary/paper 6.60:1, light red/#141414 6.14:1, secondary/#141414 10.34:1. Grain and gradients vary rendered pixels slightly; these are base-token measurements.

Barlow Condensed is reserved for cinematic headings, Inter for reading and controls, and Noto Serif Devanagari for Hindi. `typography.md › Conveying hierarchy` recommends minimizing typefaces and distinguishing important information. Each face has one role. Body remains 16–17 px, metadata 14 px.

The story moves from childhood curiosity to building useful products, then to motion and observation: "A builder's mind. A filmmaker's eye." It uses existing project and biography facts rather than inventing personal history.

Regular:
```text
archival portrait + एकाग्र
-------------------------
builder's mind | red WHO AM I print
biography      | experience
-------------------------
products / dark film / VSCO stills / contact
```

Compact:
```text
archival portrait + एकाग्र
biography and story
red WHO AM I print
experience
products / film / stills / contact
```

### Interaction and scope

Keep native buttons, details, dialog, and video controls. `playing-video.md › Best practices` says "Always display video content at its original aspect ratio." The original ratios remain in the player. `modality.md › Best practices` requires an obvious dismissal: Close and Escape remain available, and focus returns to the opening control.

`motion.md › Best practices`: "Make motion optional." Grain uses small stepped position changes, never brightness flashes or moving text. Scene entrances respect reduced motion; higher contrast and reduced transparency remove the grain. `branding.md › Best practices`: "Ensure branding always defers to content." Project descriptions and controls keep straightforward language.

Visual review covered regular and compact layouts. There is no claim of a complete assistive-technology audit or caption coverage for every film.


## October 9 refinement: minimal film treatment

User direction supersedes the earlier slogan and condensed type choices. Dark sections now use #000000, with visible grain and no colored background gradients. Bodoni Moda supplies large cinematic titles; Inter keeps controls and small text readable. Removed slogans, repeated section descriptions, and experience detail paragraphs. Project summaries are one line with contribution details still available on demand. All em dashes were removed from the HTML.

HIG foundations applied for this static website: typography.md > Ensuring legibility and Conveying hierarchy; writing.md > Getting started (Be clear); layout.md > Visual hierarchy (progressive disclosure); motion.md > Best practices (Make motion optional); collections.md > Best practices (standard grid). Grain remains optional under reduced transparency and increased contrast, and animation stops under reduced motion. Pure black is the user’s explicit palette choice. White #f8f8f8 on black is approximately 19.8:1 before the decorative grain layer.

Loaded the complete public VSCO gallery of 28 photographs through the visible Load more control, imported every file to the local working archive, and selected 22 city/travel/environment photographs. Six appear initially, including the Shanghai clock tower, waterfront, river boat, market, hillside, and misty gateway. Six unwanted portrait/cat/object images are excluded from the published gallery. The broader selection retains all relevant destinations without limiting the gallery heading to a place.


## October 9 portrait and palette refinement

The user accepted the layout and requested a return to the earlier subtle grain, darker reds, and a Since 2007 cover. Restored the global noise opacity to .075 and the SVG contrast curve to its earlier value. Pure black #000000 remains the foundation; no background gradients lift it. The red on paper is #8f0d17, while large display text on black uses #bc2a36. The monochrome hero is a built-in image_gen artistic pose/background reconstruction: seated upright against black ink washes. The original and earlier restored photograph remain intact. The portrait prompt is saved in design/ink-portrait-prompt.md.

Applied color.md > Inclusive color and image-views.md > Content to preserve readable image overlays. The face crop now centers on the upright portrait, with lighter added texture.


## Restore the leaning portrait

User rejected the reconstructed seated pose. The cover and About now use the previous restored leaning photograph again. The underlying asset is unchanged, with original 1481 by 1062 dimensions and full aspect ratio. Added only a separate generated transparent ink-edge overlay at 30% opacity on the cover. The central image is not regenerated. Restored the About face crop for the leaning pose. Since 2007, the accepted minimal layout, deeper reds, pure black, and reduced grain remain in place. Prompt saved in design/ink-edge-prompt.md.


## Honors and photo selection update

Replaced the general learning milestone with HPE CodeWars, Winner, 2023, as supplied by the user. Featured the dragon, red bird, and white bird photographs alongside Shanghai, the skyline, and the street market. Removed the boat, misty gateway, and Shimla hillside photograph from the gallery. Nineteen photographs remain: six featured and thirteen under More photographs, without duplicates.

## October 9 cover finish: sharp lettering and photograph-only texture

Applied the apple-design foundations to this static web portfolio. Relevant guidance: typography.md > Ensuring legibility and Conveying hierarchy; color.md > Inclusive color; image-views.md > Content; layout.md > Visual hierarchy; accessibility.md > Vision. Platform translation remains web-specific.

Removed the title's soft text shadows and kept real Noto Serif Devanagari at weight 900, with no image rasterization or filter. Cover red is #b71b29, lighter than the previous #8f0d17. Calculated contrast is 6.17:1 on #f8f8f8 and 3.20:1 on black. Actual image backgrounds vary; the title mostly crosses the lighter wooden rail and continues onto the pale canvas. Tiny camera caption retains dark #8f0d17 on paper.

The accepted 1481 by 1062 leaning portrait file is unchanged. All focus treatment uses separate CSS layers: corner shading, a feathered edge mask, a stronger transparent ink border, and one SVG color shape registered to the little embroidered sweater detail. No generated face, reconstructed pose, blur, or changed facial pixels. Photo stays centered at its original aspect ratio.

Removed both global grain/scratch overlays and film/gallery noise overlays. Texture is confined to the cover and About photographs. The Devanagari and page canvas stay clean. Added a generated transparent black-and-ivory engraved Sony A7 III with a thin red ring, using Sony's official front-side shape diagram as reference. Caption is real text: a7iii and a dream. Prompt saved in design/a7iii-ink-prompt.md.

Added a 12px edge feather between pale and black sections. Black interiors remain #000000. Higher contrast/reduced transparency disable decorative texture, masks, and section feathers. Local visual inspection covered the cover and About section. No automated tests were run.


## Minimal front camera and irregular print edges

User requested a very minimal front view of the camera and uneven ink borders, while keeping the current grain. Replaced the generated engraved camera with a small native SVG: black body, front lens circles, one crimson ring and indicator, no shading or perspective. Applied icons.md > Best practices (highly simplified design, vector format) and images.md > Formats. The caption remains real text. Replaced the linear feather mask and rectangular border overlay with a separate SVG alpha mask: asymmetric irregular brush perimeter with localized fractal displacement and subpixel softening. Grain, photograph, face, pose, title and section transitions are unchanged.


## Vintage manual drawing and fluid ink dissolve

Replaced the flat camera glyph with original generated front-facing camera art: airy ivory and charcoal linework, sparse stipple and a red glass reflection. Researched vintage camera ink/print examples (sources in design/vintage-camera-and-ink-wash.md) before generating. Replaced the dry jagged brush cutout with an opaque grayscale ink wash luminance mask. Its solid white center keeps the accepted portrait and face unchanged, while peripheral gray pools, blooms and detached droplets make the photo dissolve into the pale canvas. Existing grain and vignette settings remain unchanged. HIG images.md > Resolution and Formats; image-views.md > Content guide responsive asset sizing and title legibility. Organic ink shape and camera print treatment are art-direction choices.


## Black camera variant

User requested black. Recolored the vintage front camera with imagegen: solid black body and lens, fine ivory engraved outlines, and the retained small crimson reflection. Source and previous variants are preserved. Portrait, grain, ink-wash mask and layout remain unchanged. Asset: assets/a7iii-vintage-black.png.


## Center cover composition and remove descriptor

Centered the portrait, Devanagari title and Since 2007 as one group horizontally and vertically in the viewport. Header-aware cover padding balances the space above and below the group. Left name and right camera align with the group; the Selected work link is independently pinned near the lower right. Removed the Websites / Films / Photography bottom-left descriptor from the HTML. Image, grain and ink treatment are unchanged. Applied layout.md > Visual hierarchy (group related items and align elements) and Adaptability.
