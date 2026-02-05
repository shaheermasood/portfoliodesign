# Portfolio Design — Editorial Portfolio Frontend

## Project Overview
Single-page editorial portfolio UI inspired by modernist / industrial spec-sheet aesthetics.
Black-and-white palette with muted pastel pill accents. Print-like minimalism.

## Tech Stack
- **HTML5** — semantic markup (header, main, section, article)
- **CSS3** — custom properties (design tokens), flexbox/grid, responsive
- **Vanilla JS** — data-driven rendering, scroll-to-top interaction
- No frameworks, no build tools. Open `index.html` in a browser.

## File Structure
```
/
├── claude.md          # AI agent context (this file)
├── todo.md            # Task tracking
├── index.html         # Entry point
├── src/
│   ├── styles.css     # All styles, design tokens at top
│   ├── data.js        # Projects array + bio data
│   └── app.js         # DOM rendering + interactions
└── assets/            # Static assets (currently empty)
```

## Design Tokens (defined in src/styles.css :root)
- `--bg` — paper white background
- `--text` — near-black text
- `--rule` — hairline border color
- `--pill-yellow`, `--pill-blue`, `--pill-green` — pastel pill fills
- `--pill-border` — pill outline color
- `--font-stack` — system sans-serif stack
- `--max-width` — content max width (780px)

## Key Design Decisions
- Data lives in `src/data.js` as plain JS objects/arrays.
- `src/app.js` reads that data and renders into `#app` container.
- CSS is mobile-first; breakpoints at 600px and 860px.
- No build step — everything is vanilla.

## Conventions
- CSS class names: BEM-ish (`project-entry__index`, `pill--yellow`).
- IDs only for JS hooks (`#app`, `#scroll-top`).
- All colors via CSS custom properties — never hard-coded hex in rules.
