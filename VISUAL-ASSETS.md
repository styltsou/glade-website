# Website visual assets

The seasonal paintings were made with built-in image generation. The autumn image is an edit of the final spring painting, preserving the viewpoint, tree trunks, riverbank, and foreground rocks for the theme crossfade. The first separately generated autumn composition was discarded.

- Light: `public/images/glade-spring.webp`
- Dark: `public/images/glade-autumn.webp`
- Both: 1536 × 1024, encoded as WebP from the selected generated PNGs.
- Transition: the seasonal image crossfades in 120ms with the app captures and site colors; the spring layer stays underneath. Reduced motion switches immediately. No filters, crop changes, zooms, or parallax are used during the switch.

## Final painting prompts

### Spring

Use case: stylized-concept. Asset type: wide 3:2 landscape oil painting used behind a centered desktop app screenshot on the Glade website. The supplied woodland river painting is a STYLE AND COMPOSITION REFERENCE, not an image to recolor. Paint a new, original spring companion in the same traditional naturalistic landscape oil-painting family: tall trees framing both edges, a quiet shallow river and mossy rocks across the foreground, soft distant woodland and a luminous open sky through the middle. Clearly spring: fresh varied leaf greens, young pale leaves on deciduous trees among the conifers, small touches of white woodland blossom near the riverbanks, clean light, soft blue and ivory sky. Elegant restrained greens rather than neon or cyan, warm late-morning light, tranquil fresh air. Keep the most beautiful foliage and textured brushwork along the top and side edges because an app window covers the central lower-middle. Visible nuanced oil paint texture, atmospheric perspective, rich natural detail, accomplished gallery landscape painting. Landscape composition approximately 1536x1024, edge to edge art, no canvas border, no app, no writing, no text, no watermarks. Do not make a digital fantasy wallpaper or a simple color filter of the reference.

### Autumn (spring image supplied as edit target)

Use case: lighting-weather. EDIT TARGET: the supplied spring landscape painting. Make its autumn / dark-mode companion. CRITICAL INVARIANTS: preserve the EXACT SAME SCENERY, framing, camera, proportions and spatial geometry. Do not repaint a different landscape. Every tree trunk must stay in precisely the same position and angle. Preserve the exact river shoreline and bend, each foreground rock's shape and position, the distant treeline, the gaps between trees, the sky cloud shapes, and all principal branches. The two images will be aligned pixel for pixel and crossfaded on a website; any movement of these forms breaks the effect. Change ONLY the season and its atmospheric color/light: turn the spring deciduous foliage to autumn copper, russet, muted ochre and subdued burgundy; keep the conifers evergreen but deeper; replace the small white spring blossoms by autumn leaves in the same local areas; add a restrained scattering of fallen leaves on the ground without relocating rocks or changing the river. Shift the light gently toward a darker autumn evening in smoky blue-gray and warm amber reflection, while maintaining the same illumination direction, clouds and contours. Keep textured traditional oil paint and all original brushwork detail. Rich dark-mode companion with readable edges, no crushed black, no blanket orange wash. Preserve exact input aspect ratio 3:2 and dimensions, no crop, no zoom, no pan, no frame, no writing, no app overlay, no watermarks. THIS IS AN EXACTLY REGISTERED SEASONAL EDIT OF THE EXISTING PAINTING, NOT A NEW COMPOSITION.

## App interface captures

The hero, narrow-screen preview, feature grid, and walkthrough use actual captures of the sibling Glade app, rather than independently drawn controls. Assets are under `public/images/product/`; their dimensions are recorded in `src/components/productCaptures.json`.

The captures use Glade themes with illustrative Markdown documents. The hero, feature, and note-view captures use black background and popover tokens in dark mode for contrast against the bento surfaces. The hero, feature, and note-view sources are captured at 3× resolution with the app’s bundled fonts loaded. Their source frames have square edges; the website supplies the single rounded clip so baked-in corners cannot show through. An isolated copy of the app source was rendered with its normal components, styles, icons, Mermaid renderer, CodeMirror editor, palette, theme picker, and note cards. Desktop APIs and file data were stubbed for capture. Hover-only editor helpers were allowed to mount after the editor view; no visual component or app stylesheet was redesigned for the captures. The sibling app checkout was not edited.

Wide and compact captures are separately composed by resizing the actual app. Theme pairs have matching dimensions. The walkthrough shows the folder, rich text editor, and Markdown source as three scroll-linked sheets. Desktop copy stays pinned while the screenshots rise to cover the preceding view. Mobile, short viewports, and reduced-motion views show the same steps in normal document flow. There is no view toggle.

The source and encoded UI images are lossless. App frames are not created with image generation.
