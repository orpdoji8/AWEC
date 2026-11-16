> Release status, 2026-11-16: The owner approved the final interaction design for official publication. The current source includes shared green surface lighting, green About chapter tabs, and monochrome About reading sections with underline-only hover. The entries below preserve the local research history; superseded experiments and historical draft-only notes do not describe the final approved behavior. Firebase publication results are recorded in DAILY_LOG.md.

# AWEC interaction study - 2026-11-16

Local experiment in Desktop visualtest; not published. The approved editorial composition, dark green, warm off-white, photographs, content and destinations remain intact.

## Direction and research

The direction is tactile editorial: light across printed green paper, clear directional actions and photograph links that announce their purpose. Reviewed the vGPU gallery, Holographic Card preview/source UI, Adaptive Quality description, Transmission example, Uiverse animated/hover collections and an individual button's live CSS. Reviewed https://meixiedu.org in the browser against the draft baseline.

| Source | Evaluation | Decision |
| --- | --- | --- |
| [vGPU Holographic Card](https://vgpu.labs.vercel.dev/examples/holographic-card) | Pointer-responsive surface lighting offers depth. Full foil shaders, engraving, rainbow diffraction and a continuously rendered canvas compete with authentic photos; implementation and GPU cost are high. | Reinterpreted the light response as one soft, masked CSS sheen behind the YES content. No photo filters, tilt or canvas. |
| [vGPU Adaptive Quality](https://vgpu.labs.vercel.dev/examples/adaptive-quality) | Adapting effect cost to device constraints is valuable, but a full GPU quality controller is excessive for this page. | Small pointer handler only updates on demand, once per animation frame. Touch, reduced-motion and Save-Data users retain the static surface. |
| [vGPU Transmission](https://vgpu.labs.vercel.dev/examples/transmission) | Refraction has high visual impact but can distort imagery/text and needs multi-pass GPU rendering. | Evaluated, not implemented. Solid readable navigation and unaltered photos fit AWEC better. |
| [Uiverse animated buttons](https://uiverse.io/ui/animated-buttons), [hover effects](https://uiverse.io/ui/button-hover-effects), [cssbuttons-io button](https://uiverse.io/cssbuttons-io/nice-walrus-6) | Feedback makes actions easier to identify. The inspected button uses a cyan gooey fill with an SVG filter; its style and 700ms transition are too playful here. | Original CSS reinterpretation: short directional fill, restrained circular arrow and corresponding keyboard focus. No copied component code or SVG filter. Also applied simple, always-visible corner arrows to the existing activity photo links. |

No dependency or third-party source code was added; links document inspiration rather than bundled implementations. No analytics, remote scripts or font requests were added.

## Implementation and fallbacks

- `src/components/ui/FeatureLight.tsx`: new small client-only enhancement, mounted inside the existing YES section. The section's content remains server-rendered. One cached geometry read per interaction; pointer events coalesce into one pending frame. Pointer leave, media/connection changes, resize, blur, visibility changes and unmount reset/cancel work. No idle frame loop.
- `src/app/globals.css`: static green tonal background, optional pointer sheen with softened boundaries, action fill/arrow states, activity photo badges/title underlines and explicit reduced-motion handling. CSS transforms/opacity drive motion; no animated layout, blur or photograph distortion.
- `src/app/page.tsx`: mounts the decorative light; wraps existing button labels/arrows and adds aria-hidden activity arrows. No new content claims, controls or destinations.
- WebGPU is not used or requested. Browsers without it use exactly the same implementation. Without JavaScript or with reduced motion/coarse pointer/Save-Data, the text, links and static background remain usable. Reduced motion also stops the existing activity zoom and new arrow movement. Focus outlines remain visible; the YES outline is inset to avoid clipping.
- CSS feedback lasts 200-280ms. Photographs retain their source files, crops and aspect ratios, including the aligned YES pair. The previous hero layout is preserved; only its existing action treatment changes.

## Verification

- Final `corepack pnpm build`: passed, including TypeScript and 34 generated pages (32 index routes).
- Final `corepack pnpm lint`: passed.
- Browser review: 1440px desktop, 768px tablet, 390px mobile; no horizontal overflow or unloaded images in reviewed Home views. Reviewed YES, About transition, archive and primary action. Fixed a supporting photo badge stretching to its text-row height; all badges now sit at the image's bottom edge.
- Pointer movement visibly updates the light position; verified DOM style values. Keyboard focus highlights YES action and photo links; Enter on YES opens the unchanged December page. Mobile menu opens/focuses first link; Escape closes it and returns focus. Browser error log empty.
- Isolated execution test against the actual transpiled FeatureLight component passed: event coalescing, geometry cache, edge clamping, preference changes, reduced-motion gating, Save-Data, touch fallback, visibility reset and cleanup. This test used mocked browser signals, not OS preference changes.
- Source scope comparison against current production found only page.tsx, globals.css and the new FeatureLight.tsx differing. All public assets, other source files, hrefs, image sources/alt text, package/lockfile and Next/Firebase configuration are unchanged.
- Motion remained responsive in browser review; implementation has no continuous GPU/render loop. No hardware FPS, battery benchmark, physical mobile-device test or cross-browser matrix was performed. Preference fallbacks were checked in code/isolated execution rather than by changing the user's OS settings.

Preview: http://127.0.0.1:3011/ (running). Screenshots: `.visual-backups/interaction-study-desktop.jpg` and `interaction-study-mobile.jpg`. Pre-edit source backup: `.visual-backups/before-interaction-study-20261116.zip`. Build regenerated ignored caches/export files. No deployment, commit, push or production modification.


## Shared lighting and About Us follow-up - 2026-11-16

Owner requested extending the approved lighting to the green top/bottom sections and historical showcase, then experimenting on About Us. This remains local-only.

### Research and direction

Revisited the [vGPU gallery](https://vgpu.labs.vercel.dev/examples), including [Matcap Shading](https://vgpu.labs.vercel.dev/examples/matcap), and the [Uiverse glass-card collection](https://uiverse.io/ui/glassmorphism-cards), including [Smit-Prajapati's green 3D card](https://uiverse.io/Smit-Prajapati/smart-liger-5). Matcap's precomputed lighting suggests inexpensive material depth; the Uiverse example suggests layered surfaces and responsive elevation. Adapted those visual principles into original CSS paper mounts with small elevation and a finite reflection pass. No GPU shading, refraction, strong tilt, social controls or original component code was imported. A scrolling chapter index is an original usability addition following the same short-feedback approach as the Uiverse button collection.

The About direction is an editorial exhibition: existing text in a clear reading column, a prominent dark-green mission panel, ruled education entries and unobstructed historical certificates on paper mounts. No content or recognition claims were added.

### Implementation

- Shared header/footer and Home's Historical Activities now mount FeatureLight and use the same light-surface treatment as YES. About's mission also uses it. Four light surfaces on Home; three on About.
- FeatureLight now contains its animated span in a dedicated clipped overlay. The section/header itself remains unclipped, preserving the mobile dropdown and focus rings. Content stacks above the non-interactive lighting; existing on-demand scheduling, Save-Data, reduced-motion and touch fallbacks remain.
- AboutSectionNavigation preserves the four existing native fragment anchors and updates aria-current=location as the reading position changes. Uses IntersectionObserver and disconnects on unmount; native links remain functional without observer support or JavaScript. Desktop navigation is sticky; mobile is a two-column index with equal row borders. No scroll hijacking or mandatory smooth scrolling.
- The existing mission copy is now a green editorial panel; education items use a ruled definition list. Certificate source images retain their aspect ratios and open in a new tab at their original URLs. Arrow badges are below the images with at least 6px clearance, preserving all source detail. Short hover elevation and reflection have a reduced-motion override; keyboard focus remains explicit.

### Files and verification

Modified existing source: src/app/page.tsx, src/app/about/page.tsx, src/app/globals.css, src/components/layout/SiteHeader.tsx, src/components/layout/SiteFooter.tsx and src/components/ui/FeatureLight.tsx. Created src/components/ui/AboutSectionNavigation.tsx. Updated INTERACTION_STUDY.md, CODEBASE_MAP.md and DAILY_LOG.md. Created .visual-backups/before-shared-light-about-20261116.zip and shared-light-about-desktop.jpg / shared-light-about-mobile.jpg. Generated build/export caches refreshed; no dependencies or configuration changes.

Final build and lint passed (34 generated pages, including TypeScript). All 32 exported index pages preserve text, link destinations/order and image sources/alt text against approved production, excluding aria-hidden decorative spans. All public assets remain byte-identical. Browser reviewed About at 1440px, 768px and 390px and Home at desktop/mobile. No horizontal overflow or broken About images; error log empty. Pointer tests confirmed styles updating on header, footer and archive. About fragment clicks and manual scrolling updated the reading index; certificate focus outline was visible. Mobile header menu remained above the content, opened and closed with Escape. The certificate arrows do not cover the images. Screenshots are saved in .visual-backups.

Isolated actual-component execution passed shared-light coalescing, reduced-motion changes, Save-Data, touch and cleanup, plus reading-index position/hash updates, observer cleanup and unsupported-observer fallback. These mocked signal tests do not constitute physical-device, browser-matrix, hardware FPS or battery profiling. No WebGPU requirement; the CSS/static fallback is always available. Preview left at http://127.0.0.1:3011/about/ with temporary viewport reset. No deployment, commit, push or production writes.


## Larger About chapter tabs - 2026-11-16

Owner requested larger dark-green Overview/Our mission/Education & exchange/Recognition links with Triangle LED Hero-inspired text backlighting (reference: https://vgpu.labs.vercel.dev/examples). Changed only AboutSectionNavigation.tsx and appended scoped globals.css rules. Desktop type is 26.4px with 104px minimum tab height; mobile type is 20px with 84px minimum height in two columns. Reused the already-existing FeatureLight heading variant for localized pointer radiance, plus CSS hover/keyboard glow. Native fragment links, observer/current marker, and all pre-existing About content/headings are preserved. No canvas or WebGPU requirement; existing touch/reduced-motion/Save-Data gating remains. No dependencies or assets changed.

Final corepack pnpm build passed (34 pages including TypeScript); lint passed. Browser review at actual 1440px/768px/390px found no overflow or clipped chapter text. Mission fragment/current marker works; keyboard focus shows a solid outline and light behind the label. Browser error log empty. Scope verification passed after normalizing backup CRLF line endings. Local dev server was restarted on port 3011; a fresh About tab is retained because the old tab held a connection-refused page. Viewport reset. No hardware FPS profiling or physical-device testing.

Created .visual-backups/before-about-led-index-20261116.zip and about-led-index-desktop.jpg. Updated this report, CODEBASE_MAP.md and DAILY_LOG.md. No deployment, commit, push or production changes.


## Monochrome About reading sections - 2026-11-16

Owner requested restoring the right column to its former typography/stacked layout, then referencing [0xnihilism's Uiverse card](https://uiverse.io/0xnihilism/nasty-husky-13). Inspected its actual CSS: hard border/offset shadow and section-hover title underline. Restored original right-column markup from the pre-shared-light backup, including 30px mobile/36px desktop section headings, original font classes, stacked activity descriptions and plain certificates. The approved left navigation is unchanged. Original scoped CSS adapts the reference's monochrome card treatment with a 2px black border and static 6px offset shadow; spans draw a 2px heading underline when any part of the section is hovered or a contained link has keyboard focus. Per the owner's follow-up, removed the proposed green inversion and hover lift: the final section stays white/black and stationary. Certificates are presented in grayscale via CSS for the monochrome request; source files and original-color image links remain intact. No form controls or template copy was imported. Credit: 0xnihilism / 0xNihilist, Uiverse, MIT-licensed reference; implementation uses original adapted CSS.

Modified src/app/about/page.tsx and src/app/globals.css; updated this report, CODEBASE_MAP.md and DAILY_LOG.md. Created .visual-backups/before-about-section-cards-20261116.zip and about-section-underline-desktop.jpg. No dependencies, assets or destinations changed. Build/cache/export refreshed.

Final build and lint passed (34 generated pages including TypeScript). Browser reviewed at 1440px/768px/390px: no overflow or broken About images. Desktop hover reports white background, dark text, transform none and 100% 2px underline; heading sizes match the earlier layout. Mission anchor/current marker still work. Certificate keyboard focus has a solid outline and starts the same heading underline while remaining monochrome. Browser error log empty; viewport reset and local About preview retained. No deploy/commit/push/production writes. No blockers; physical-device/FPS profiling not performed.
