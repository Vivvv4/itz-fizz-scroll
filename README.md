# Itz Fizz — Scroll Animation Landing Page

A responsive Next.js landing page concept with GSAP intro animations and scroll-linked motion.

## Features
- Above-the-fold hero with letter-by-letter staggered headline reveal
- Animated statistics and intro copy
- GSAP ScrollTrigger scrub ties the soda can's movement to scroll progress
- CSS-built can illustration with no external image dependency
- Responsive mobile layout and reduced-motion preference
- Static export suitable for GitHub Pages

## Requirements
- Node.js 20.9+
- npm

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Build
```bash
npm run build
```
Next.js exports the static website into `out/`.

## Deployment
The included workflow at `.github/workflows/deploy.yml` builds and deploys the static export to GitHub Pages on pushes to `main`. In the repository, go to **Settings → Pages** and choose **GitHub Actions** as the source if it is not already selected.

Live site: https://vivvv4.github.io/itz-fizz-scroll/
Repository: https://github.com/Vivvv4/itz-fizz-scroll

## Submission checklist
- [ ] GitHub Actions build and deployment succeed
- [ ] Live URL opens on desktop and mobile
- [ ] Scroll motion responds to scroll, not autoplay
- [ ] Repository is public and accessible to the evaluator
- [ ] Submit the live URL and repository URL

## Stack
Next.js / React, Tailwind CSS v4, GSAP, ScrollTrigger, TypeScript.