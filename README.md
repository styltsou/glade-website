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

The spring and autumn hero paintings share one scene and crossfade with the theme. Hero, feature, and walkthrough images are direct captures of the sibling app's current Glade theme, including separately captured compact views. The Rich text/Markdown preview switches between real app captures. See `VISUAL-ASSETS.md` for artwork prompts and capture provenance. The Stageshow MIT notice remains alongside its original primitives.

FAQ uses native disclosure elements. No scroll hijacking or entrance animation is used. Hover feedback is limited to 100ms color changes and respects reduced motion.
