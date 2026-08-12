# My Portfolio

Personal portfolio website of **Habieb Anugrah Heryza** — Web Developer, Student & Freelancer.

A single-page portfolio with a separate contact page, built with a techy, IDE-inspired visual language (terminal window, code-comment section labels, monospace accents) on top of Tailwind CSS v4.

## Live Site

Deployed on Netlify: _add your live URL here after deploying_

## Features

- Single-page layout — About, Skills, Projects, Experience, and Education all live on one scrollable page
- Separate `contact.html` page with direct WhatsApp and email links (no contact form)
- Dark mode by default, with a light mode toggle (preference saved to `localStorage`)
- Terminal-style hero with a typing animation
- Scroll-reveal animations and hover micro-interactions, with `prefers-reduced-motion` respected
- Fully responsive, mobile-first navigation with a slide-out menu
- Built with **Tailwind CSS v4** + custom CSS for full flexibility

## Tech Stack

- HTML5
- Tailwind CSS v4 + custom CSS
- Vanilla JavaScript
- Google Fonts — Space Grotesk, Inter, JetBrains Mono

## Project Structure

```
my-portfolio/
├── index.html            # Main single-page site
├── contact.html           # Contact page (WhatsApp + email)
├── src/
│   └── input.css          # Tailwind v4 entry point + design tokens + custom CSS
├── dist/
│   └── output.css         # Compiled CSS (generated — do not edit by hand)
├── js/
│   └── main.js             # Theme toggle, typing animation, mobile nav, scroll reveal
├── assets/
│   └── images/             # Profile photo, favicon
├── netlify.toml            # Netlify build & deploy configuration
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (for building the Tailwind CSS)

### Install dependencies

```bash
npm install
```

### Build CSS once

```bash
npm run build
```

### Watch CSS during development

```bash
npm run watch
```

Then open `index.html` in your browser (or use a local server such as the VS Code "Live Server" extension) to preview changes.

## License

This project is personal portfolio code. Feel free to reference the structure, but please don't republish it as your own portfolio content.
