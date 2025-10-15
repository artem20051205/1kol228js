# Basis Programmeren — Sketches

This repository contains small p5.js sketches organized by week.

What I changed
- Added `index.html` at the repository root so GitHub Pages has a root document to serve.
- Fixed asset paths in per-folder `index.html` files so `style.css`, `p5.min.js` and `p5.sound.min.js` load correctly.

Notes for GitHub Pages
- Make sure Pages is configured to serve from the `main` branch (or move files into a `docs/` folder and configure Pages to serve from `docs/`).
- The HTML files reference the shared assets using relative paths like `../libraries/p5.min.js` and `../style.css`. This works when opening a folder's `index.html` directly or when Pages is configured to serve from the repository root.

If you want a single demo as the site root, move that demo into `docs/` or update the Pages settings to point to a specific folder.

— Auto-generated notes (October 15, 2025)
