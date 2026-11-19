# Rehearsal: Glade product details

Gold: Stageshow `examples/static-card`, Benji Taylor, v1.1.1. The reference folder was copied into the temporary working directory before implementation. Kept the pinned product crop, a single overlapping detail surface, compact controls, and readable focal content. Replaced the billing interface with Glade's document, folder, Markdown diff, and command-palette concepts. Card and Kbd primitives are vendored under `kit/parts`, with the MIT license retained.

These are still illustrations. The document's Rich/Raw switch uses native radio inputs and CSS; there is no animated loop, entrance animation, fake cursor, or client React hydration. The desktop hero uses screenshots of the actual app. Narrow screens use an HTML single-pane illustration so the text stays readable and no neighboring pane is clipped.

Final design follows the requested white/black palette, restrained rounded surfaces, compact borderless navbar, single icon theme toggle, single-color descriptive hero, and no decorative eyebrow or numbered section labels. The app screenshot begins below the hero rather than competing with its title.

Captured and visually inspected: Chrome at 1440, 768, and 390px; complete page in light and dark; phone layout; the four product scenes. The reference gold was reviewed from source rather than rendered in this project.

Gate (each of 1440, 768, and 390px):

```
film: no-issues-detected; still capture only, motion was not judged
rehearsal passed (necessary, not sufficient: references/verify.md and the fresh eye in review.md still stand)
```

Corrections from rehearsal: cleared the selected file from the terminal overlay; aligned document and list text; kept all Rich/Raw controls and command-palette keycaps visible; removed near-tangent edges; used a deliberate right-edge crop; adjusted tablet spacing. Production CSS bundles the kit styles together, so the gate was run against Astro's development preview, where kit styles retain their source identity.

Production browser checks: default light under a dark OS setting and legacy storage; icon theme toggle by mouse and keyboard; preference after reload; operation when storage is unavailable; Rich/Raw mouse and keyboard operation; native FAQ disclosures; no horizontal overflow at 320, 390, 600, 768, 800, 1024, and 1440px; loaded images and valid local anchors; reduced motion; no browser errors. The static page does not request the React runtime.

The local preview originally failed with transform errors because the React integration used Vite 8 while Astro 5 used Vite 6. The React integration is pinned to the Astro 5-compatible 4.4.2 release. The rebuilt production page and repaired development preview both passed browser checks.

Not checked: Safari, Firefox, native app behavior, or motion between animated states (there are no animated scenes). No deployment was performed.

Fresh-eye review: the independent reviewer found no visible defects in the desktop/dark and product-detail frames, and identified unreadable mobile screenshot text plus a clipped second-pane strip. Replaced that mobile image crop with a responsive single-pane illustration and a matching caption. Final user refinements also removed all decorative section labels and replaced the hero with “Read and edit your Markdown,” in one color, with the preview lower on the page.
