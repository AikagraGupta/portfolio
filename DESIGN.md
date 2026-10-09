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
