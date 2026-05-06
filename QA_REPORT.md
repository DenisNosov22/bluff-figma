# QA Report

## Gates

- `npm run build`: passed
- `npm run lint`: passed
- `git diff --check`: passed

## Visual QA

- Desktop screenshot: captured locally with Playwright before and after optimization.
- Mobile screenshot: captured locally with Playwright before optimization.
- Desktop viewport: `1440 x 1200`, full page
- Mobile viewport: `390 x 900`, full page

## Notes

- Main assets render locally after normalizing Figma SVG exports to `.svg` filenames.
- Desktop and mobile pages are nonblank, scrollable, and responsive.
- Header/nav, CTA buttons, vacancy links, and department pills have interactive hover/focus states.
- Final pixel-perfect comparison against Figma could not be repeated because Figma MCP reached the Starter plan call limit.
- Performance pass reduced deployed assets from about `27 MB` to about `1.2 MB`.
