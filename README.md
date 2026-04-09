<div align="center">

# Hammouche Merouane — Portfolio

**AI & Software Engineer · Master SII @ USTHB · Research Intern @ LRIA**

[![Live](https://img.shields.io/badge/Live-shi667.github.io-4fffb0?style=flat-square&logo=github)](https://shi667.github.io)
[![Deploy](https://img.shields.io/github/actions/workflow/status/shi667/shi667.github.io/deploy.yml?style=flat-square&label=Deploy&logo=githubactions&logoColor=white)](https://github.com/shi667/shi667.github.io/actions)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

</div>

---

## Overview

Personal portfolio website built with vanilla HTML/CSS/JS and automatically deployed via GitHub Actions to GitHub Pages. Features a dark editorial aesthetic with smooth scroll animations, a custom cursor, and a typewriter effect.

**Live at → [shi667.github.io](https://shi667.github.io)**

---

## Features

- **Zero dependencies** — pure HTML, CSS, JavaScript
- **Animated UI** — scroll-triggered reveals, typewriter effect, parallax glow
- **Custom cursor** with trail effect (desktop only)
- **Responsive** — fully adapted for mobile and tablet
- **CI/CD** — auto-deployed on every push via GitHub Actions
- **Performance-first** — no build step, instant load

---

## Project Structure

```
shi667.github.io/
├── index.html                  # Entry point
├── css/
│   └── style.css               # All styles (CSS variables, animations, layout)
├── js/
│   └── main.js                 # Interactions (cursor, typed text, scroll observer)
├── assets/                     # Static assets (images, icons)
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions — Pages deployment
└── README.md
```

---

## Getting Started

### Clone & run locally

```bash
git clone https://github.com/shi667/shi667.github.io.git
cd shi667.github.io
# Open index.html in your browser — no build step required
open index.html
```

### Deploy your own fork

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git branch -M main
git remote add origin https://github.com/shi667/shi667.github.io.git
git push -u origin main
```

Then go to **Settings → Pages → Source → GitHub Actions**.  
Your site will be live at `https://shi667.github.io` within ~2 minutes.

---

## Customization

| What | Where | How |
|---|---|---|
| Personal info | `index.html` | Edit text content directly |
| Accent color | `css/style.css` | Change `--accent: #4fffb0` |
| Profile photo | `index.html` | Replace SVG with `<img src="assets/photo.jpg">` |
| Typed phrases | `js/main.js` | Edit the `phrases` array |
| Projects | `index.html` | Edit `<article class="project-item">` blocks |

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 semantic |
| Styling | CSS3 — custom properties, grid, flexbox, animations |
| Scripting | Vanilla JavaScript — IntersectionObserver, typewriter |
| Fonts | Syne · Instrument Serif · DM Mono (Google Fonts) |
| Deployment | GitHub Actions + GitHub Pages |

---

## License

MIT — feel free to use this as a template for your own portfolio.

---

<div align="center">
  <sub>Built by <a href="https://github.com/shi667">Hammouche Merouane</a> · Alger, Algérie</sub>
</div>
