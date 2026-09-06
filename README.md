# Saman Rizvi — Editorial Portfolio

A modern, motion-rich personal portfolio for **Saman Rizvi** — Career Counsellor & English Trainer at the **National Institute of Language (NIL)**, previously Assistant Coordinator for the **Junior Youth Empowerment Programme (JYEP)** at City Montessori School, Lucknow.

🌐 **Live:** [samanrizvi.vercel.app](https://samanrizvi.vercel.app/)
📦 **Repo:** [github.com/samanrizvi108-ctrl/Personal_portfolio](https://github.com/samanrizvi108-ctrl/Personal_portfolio)

---

## Screenshots

### Home — Botanical theme (default)
![Home — Botanical theme](https://samanrizvi.vercel.app/screenshots/prod-home.png)

### Work
![Work](https://samanrizvi.vercel.app/screenshots/prod-work.png)

### About
![About](https://samanrizvi.vercel.app/screenshots/prod-about.png)

### Contact
![Contact](https://samanrizvi.vercel.app/screenshots/prod-contact.png)

### Theme Demo (A/B preview)
![Theme Demo](https://samanrizvi.vercel.app/screenshots/prod-theme-demo.png)

---

## Features

- **Editorial hero** — large rotating-word headline, letter-by-letter meta reveal, live "now" status panel with onboarding progress, animated marquee
- **4 switchable themes** — A1 Botanical (default, terracotta + drifting leaves), A2 Aurora Sky (navy + falling stars), A4 Sunrise (crimson → amber → cream gradient), A5 Bokeh Gold (crimson + warm gold orbs). Theme choice persists in localStorage and applies across all pages
- **Floating theme switcher** in the bottom-left of every page
- **Contact form** wired to Resend with validation, honeypot, and loading / sent / error states
- **Multi-page** — Home / Work / About / Contact with persistent pill navigation and animated route transitions
- **Resume PDF** at `/resume.pdf` — opens in a new tab
- **Demo routes** — `/hero-demo` (parallax vs particle-field A/B) and `/theme-demo` (6 theme options A/B) for design exploration

## Stack

- **React 18** + **Vite 6** — fast dev server, fast builds
- **react-router-dom 6** — client-side routing
- **framer-motion 11** — page transitions, scroll-driven animations, hover effects
- **@designcodeio/threeui** — 3D background fields (ConstellationField on Work, ParticleDrift on About)
- **@react-three/fiber** (dev only) — used by the demo particle field
- **three** — 3D engine
- **resend 4** — email delivery for the contact form

## Project structure

```
api/
  contact.js                  ← Vercel serverless function (Resend)
netlify/
  functions/contact.js        ← Netlify serverless function (same logic)
scripts/
  dev-api.mjs                 ← Local Node server for testing the API
public/
  resume.pdf
  saman.jpg, saman-ghibli.png
  screenshots/                ← README images (served from /)
src/
  components/
    EditorialHero.jsx         ← The no-photo hero (in use)
    NowPanel.jsx              ← Right-side live status card
    ParallaxHero.jsx          ← Legacy parallax hero (demo only)
    PillNav.jsx
    RainCanvas.jsx
    ... (legacy)
  pages/
    Home.jsx                  ← Editorial hero + stats + timeline + moments
    Work.jsx                  ← Projects grid
    About.jsx                 ← Bio + facts + portrait
    Contact.jsx               ← Contact form (Resend)
    HeroDemo.jsx              ← /hero-demo
    ThemeDemo.jsx             ← /theme-demo
  theme/
    ThemeContext.jsx          ← Global theme state, localStorage
    ThemeSwitcher.jsx         ← Floating widget
    ThemedBackdrop.jsx        ← Per-theme animated background layer
    themes.css                ← 4 sets of CSS variables + theming rules
  main.jsx, App.jsx
  index.css                   ← All component styles
.env.example                  ← Template (copy to .env.local)
vercel.json                   ← Vercel rewrites for SPA routes
package.json
```

## Local development

```bash
npm install
cp .env.example .env.local
# fill in RESEND_API_KEY from https://resend.com/api-keys

# terminal 1: vite dev server (port 3003)
npm run dev

# terminal 2: dev API server (port 3004) — needed for the contact form
node scripts/dev-api.mjs
```

Then open:
- `http://localhost:3003/` — the site
- `http://localhost:3004/contact` — the dev API

## Deployment

Hosted on **Vercel**. The repo includes `vercel.json` with a catch-all rewrite to `index.html` so client-side routes work.

**Required env vars on Vercel:**

| Variable | Description |
| --- | --- |
| `RESEND_API_KEY` | From [resend.com/api-keys](https://resend.com/api-keys) |
| `CONTACT_TO_EMAIL` | Destination address for the contact form |
| `CONTACT_FROM_EMAIL` | Verified sender in Resend (e.g. `Name <hello@yourdomain.com>`). Until you verify a domain in Resend, `onboarding@resend.dev` works for testing but only sends to the Resend account email |

Deploy:

```bash
vercel deploy --prod
```

## Contact form flow

1. User submits the form on `/contact`
2. Client validates fields, sends `POST /api/contact` with JSON
3. Vercel serverless function (`api/contact.js`) validates + sends via Resend
4. Resend delivers to `CONTACT_TO_EMAIL` with `reply_to` set to the sender
5. Client shows a "Thank you 💌" success card

Honeypot: a hidden `company` field — bots fill it, the server returns `200 {skipped: true}` without sending.

## Themes — how to add a new one

1. Edit `src/theme/ThemeContext.jsx` — add an entry to the `THEMES` array (key, name, sub, swatches)
2. Edit `src/theme/themes.css` — add a `[data-theme="X"]` block with `--page-bg`, `--hero-bg`, `--headline-em`, etc.
3. (Optional) Add a matching background component to `src/theme/ThemedBackdrop.jsx` and wire it into `ThemedBackdrop()`

That's it. The switcher widget, localStorage persistence, and cross-page application are all automatic.

## License

Personal portfolio — all rights reserved.
