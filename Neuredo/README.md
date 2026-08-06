# Neuredo — Frontend

React + Vite frontend for Neuredo, "The Architecture of Learning."

## Running it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

The output goes to `dist/` — deploy that folder to any static host
(Vercel, Netlify, your own server, etc).

## What's here

- **Home** — hero section with an animated node/constellation canvas
  echoing the logo's mark.
- **About** — the platform's teaching philosophy.
- **Learning Tracks** — the five subject areas (Technical Skills, Soft
  Skills, O Levels, Quranic Education, Intermediate Studies). Clicking a
  track opens a modal showing how the video curriculum will be laid out.
  All videos shown are placeholders — see "Wiring up real content" below.
- **Blog** — sample article cards. Copy is placeholder.
- **Contact** — a working form UI. It currently only shows a local
  success state; it isn't wired to a backend yet (see below).
- A scroll-progress rail on the right edge (desktop only) tracks which
  section you're in, styled after the logo's node-and-line mark.

## Project structure

```
src/
  components/   one component + one CSS file per UI piece
  data/         tracks.js and blogPosts.js — edit these to change copy
  hooks/        useReveal (scroll-in animations), useScrollSpy (nav highlight)
  styles/       tokens.css (colors/type/spacing) and global.css (reset)
  assets/       logo.png
```

## Wiring up real content next

1. **Videos** — `src/data/tracks.js` holds each track's video list
   (`title`, `duration`, `level`). Once you have real video files or
   hosted URLs, swap the placeholder thumbnail in
   `src/components/Tracks.jsx` (`.video-card__thumb`) for an actual
   `<video>` element or embedded player, and add a `url`/`videoId`
   field per entry.
2. **Contact form** — `src/components/Contact.jsx`'s `handleSubmit`
   currently just sets local state. Point it at your backend/email
   service (e.g. a `fetch` POST, or a service like Formspree) when
   ready.
3. **Blog** — `src/data/blogPosts.js` is placeholder copy. Replace with
   real posts, or wire the section to a CMS/API if you'll be publishing
   often.

## Design notes

Colors and type live entirely in `src/styles/tokens.css` as CSS
variables — change the palette or fonts there and it propagates
everywhere. The palette is drawn from the logo: navy `#0B1229` and
electric blue `#1E6FFF`, paired with a warm parchment background and a
gold accent.
