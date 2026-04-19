# Portfolio — Jayesh Patel

Minimal black & white portfolio site. Monospace grid aesthetic with a light/dark mode toggle.

**Live:** https://itsmejay80.github.io/portfolio/

## Stack

- Static HTML + CSS
- React 18 (UMD) rendered in-browser
- Babel Standalone for in-browser JSX
- Google Fonts: Inter, Inter Tight, JetBrains Mono
- Hosted on GitHub Pages

No build step. Open `index.html` and it runs.

## Structure

```
.
├── index.html              # entry; loads React, Babel, components
├── components/
│   ├── data.jsx            # all portfolio content (projects, experience, etc.)
│   └── VariantMono.jsx     # layout + styles
└── .nojekyll               # tell Pages to serve files as-is
```

## Local development

```bash
# any static server works
python3 -m http.server 8000
# then open http://localhost:8000
```

Opening `index.html` directly via `file://` won't work — Babel needs to fetch the `.jsx` files over HTTP.

## Editing content

All copy, projects, experience, and links live in `components/data.jsx`. Update that file and push — Pages redeploys on every commit to `main`.

## Features

- Light / dark theme toggle (persisted to `localStorage`)
- Fully responsive — desktop, tablet, mobile breakpoints
- Dashed borders, monospace metadata, inverted accent blocks
- Sticky top nav with anchor links to each section

## Credits

Design direction produced with [Claude Design](https://claude.ai/design) — Variant B (Monospace grid). Implementation and content by Jayesh Patel.

## License

Personal project. Content © Jayesh Patel. Code MIT.
