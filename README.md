# Alishba Niaz — Portfolio (React)

Rebuilt from the original static HTML/CSS as a Vite + React app.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL. Build for production with `npm run build`
(output goes to `dist/`); preview that build with `npm run preview`.

## Where things live

- `src/data/` — all your content: projects, timeline, skills, profile/socials,
  services. Edit these files to update the site; you generally won't need to
  touch the components themselves.
- `src/components/` — one component + one CSS file per section.
- `public/` — put your resume PDF and project screenshots here, referenced
  as `/filename.ext` from `src/data/`.

## Things I flagged for you (see TODOs in the data files)

1. **`src/data/projects.js`** — only your 3 original projects are in here.
   Send me the rest (name, description, tech, live/repo links, screenshot)
   and I'll add them.
2. **`src/data/timeline.js`** — I kept your education history but dropped
   the work-experience entries from the old markup, since their dates
   overlapped in a way that looked like placeholder content rather than a
   real history. Add your actual experience whenever you're ready.
3. **`src/components/Contact.jsx`** — still points at the placeholder
   Formspree endpoint (`https://formspree.io/f/yourid`) from the original.
   Swap in your real form ID.
4. **`public/`** — add `Alishba-Niaz-Resume.pdf`, `calculator.png`,
   `youtube.png`, and `game.png` (or update the paths in `data/projects.js`
   and `data/profile.js` to match your actual filenames).
5. Your WhatsApp link was missing the country code (`03154029312` isn't a
   valid `wa.me` link) — I fixed it to `923154029312`. Double check that's
   the right number.
