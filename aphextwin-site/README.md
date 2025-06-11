# Aphex Twin Neobrutalism Fan Site

This repository contains a neobrutalist-inspired fan site for Aphex Twin with interactive 3D effects, audio visualizations, and secret easter eggs.

## Structure
- `index.html`: Landing page with 3D hero.
- `about.html`: Biography timeline with scroll animations.
- `discography.html`: Interactive discography with audio samples and visualizer.
- `fun-facts.html`: Fun facts with interactive reveal buttons.
- `secret.html`: Hidden secret page with custom visualization.
- `styles/`: CSS files (`style.css`, `brutalist.css`).
- `assets/`: Assets directory for images, audio, models, fonts, and scripts.
  - `assets/scripts/`: JavaScript files (`threeScene.js`, `interactions.js`, `audioVisualizer.js`, `radialMenu.js`).
  - `assets/images/`: Place album covers and photos here.
  - `assets/audio/`: Place audio samples here.
  - `assets/models/`: Place 3D model files (e.g., Aphex Twin logo) here.
  - `assets/fonts/`: Place custom font files here.
- `README.md`: This file.

## Setup
1. Download or clone this repository.
2. Add your assets (images, audio, fonts, models) into the appropriate folders.
3. Serve via a local HTTP server, e.g., `npx http-server` or VSCode Live Server, to handle module imports if needed.
4. Open `index.html` in your browser and explore.

## Asset Suggestions & Links
- **Wikimedia Commons Aphex Twin Category**: https://commons.wikimedia.org/wiki/Category:Aphex_Twin
- **Selected Ambient Works 85-92 Cover**: See Wikipedia page (https://en.wikipedia.org/wiki/Selected_Ambient_Works_85%E2%80%9392) and download via the image on the page.
- **Richard D. James Album Cover**: https://en.wikipedia.org/wiki/Richard_D._James_Album (download image from infobox).
- **Syro Album Cover**: https://en.wikipedia.org/wiki/Syro (download image from infobox).
- **SoundCloud Embed**: Use embed code from https://soundcloud.com/aphextwin (get track IDs or embed playlist).
- **YouTube Video Embeds**:
  - Windowlicker: https://www.youtube.com/watch?v=eri6Ic1VsXM
  - Come to Daddy: https://www.youtube.com/watch?v=1pPVKNF7C2I
- **Fonts**: Host a bold, brutalist-style font or use Google Fonts like "Monoton" or similar. Place in `assets/fonts/`.
- **3D Logo Model**: If you find a licensed 3D model of the Aphex Twin logo (.glb/.obj), place in `assets/models/` and load via Three.js GLTFLoader.
- **Additional Photos**: Use official press photos from Wikimedia Commons or official sources; place in `assets/images/`.
- **Audio Samples**: Short clips (e.g., 30 seconds) from tracks; ensure fair use. Place in `assets/audio/` and reference in `discography.html` buttons.
- **External Libraries**: Three.js, GSAP loaded via CDN as shown in HTML files.

## Deployment
- Host on GitHub Pages, Netlify, or Vercel as static site.
- Ensure correct MIME types for module imports if using ES modules.
- Configure 404 fallback to `index.html` if using SPA-like routing (optional).

## Customization
- Update CSS variables in `index.html` or in a separate config for theme colors.
- Modify JS interactions to add more easter eggs or interactive elements.
- Add more timeline events in `about.html` with citations as comments or separate documentation.
- Enhance audio visualizer in `assets/scripts/audioVisualizer.js` with more visualization modes (waveform, particles, WebGL).

Feel free to adapt, enhance, and share your creations!
