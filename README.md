# Glade website

The Astro marketing site for [Glade](https://github.com/styltsou/glade), a file-first desktop Markdown viewer and editor.

```sh
bun install --frozen-lockfile
bun run dev
bun run build
```

The React integration is pinned to the Astro 5-compatible 4.x line. Keeping the integration and Astro on compatible major versions avoids development-server transform errors.

The page follows the product's README and `docs/PRD.md`: open existing files and folders in place, preserve untouched Markdown, and coexist with external editors, Git, and sync tools. Glade is available from source; the site does not advertise platform installers or built-in sync.

The site uses monochrome white/black themes, compact controls, 10px action corners, 12–16px product surfaces, and 22px feature panels. It defaults to light regardless of the operating system. The header's icon toggle persists an explicit choice under `glade-website-theme`; a generic `theme` value from older versions is ignored. Storage restrictions do not prevent the control from switching the current page.

The desktop images show the current app with illustrative documents. Narrow screens use a readable single-pane HTML illustration instead of shrinking or cutting through the desktop screenshot. The smaller compositions illustrate individual product behaviors; Rich/Raw is an interactive preview. Card and Kbd primitives are adapted from Benji Taylor's Stageshow, with the MIT notice alongside them. See `src/components/stageshow/REHEARSAL.md` for design and verification notes.

FAQ uses native disclosure elements. No scroll hijacking or entrance animation is used. Hover feedback is limited to 100ms color changes and respects reduced motion.
