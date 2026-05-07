# QA Report

## Gates

- `npm run build`: passed
- `npm run lint`: passed
- `git diff --check`: passed

## Visual QA

- Desktop screenshot: captured locally with Playwright at `/tmp/bluff-desktop.png`.
- Mobile screenshot: captured locally with Playwright at `/tmp/bluff-mobile-fixed2.png`.
- Desktop viewport: `1440 x 1200`, full page
- Mobile viewport: `390 x 900`, full page

## Notes

- Main assets render locally after normalizing Figma SVG exports to `.svg` filenames.
- Desktop and mobile pages are nonblank, scrollable, and responsive.
- Header/nav, CTA buttons, vacancy links, and department pills have interactive hover/focus states.
- Figma MCP access was confirmed for source node `1625:455`.
- Mobile team image crop was adjusted after screenshot QA so the exported photo appears instead of an empty green crop.
- Performance pass reduced deployed assets from about `27 MB` to about `1.2 MB`.
