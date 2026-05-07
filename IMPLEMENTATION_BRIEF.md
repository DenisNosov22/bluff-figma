# Implementation Brief

## Stack

- React 19
- TypeScript
- Vite
- Plain CSS

## Build Scope

- New project created in `projects/bluff-figma`.
- Desktop layout targets the provided 1440px Figma frame.
- Mobile layout uses responsive sections with the same content, assets, hierarchy, interactive states, and motion.
- GitHub Pages compatibility is prepared with `vite.config.ts` `base: './'`.

## Implemented Features

- Hero with exported BLUFF logo, city/fire backgrounds, green blend, CTA hover state, and subtle logo animation.
- Navigation anchors for all major sections.
- About section with benefits glass card.
- Animated ticker.
- Chat/value section with message bubbles and sticker asset.
- Team section with exported image crop and green blend.
- Vacancies section with Telegram links and hover state.
- Structure section with interactive department pills.
- Footer contact block with social assets.

## Known Fidelity Notes

- The exact commercial Figma fonts are referenced by family name in CSS, but local font files were not provided. Browser fallback fonts are used if the visitor does not have those fonts installed.
- Figma MCP access is now confirmed for the current source frame `1625:455`; screenshots should be refreshed after any layout changes.
