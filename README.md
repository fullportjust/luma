# Lumi Nuru — website

Static site (HTML/CSS/JS). One tiny prebuild step generates the therapist
lineup from the photos (`npm run build`). Photos are embedded in `assets.js`.

## Deploy to Vercel

### Option A — drag & drop (easiest)
1. Go to https://vercel.com/new
2. Drag this whole folder onto the page (or zip it and upload).
3. Vercel reads `vercel.json`: build command `npm run build`, output `.`
   (the build only regenerates `data/therapists.json`).
4. Click **Deploy**. Done.

### Option B — Vercel CLI
```
npm i -g vercel
cd lumi-nuru-vercel
vercel
```
Accept the defaults — `vercel.json` supplies the build command and output dir.

### Option C — GitHub
Push these files to a repo, then "Import Project" in Vercel and select the repo.

## Files
- index.html — home
- menu.html — menu & pricing
- index.html — home, including the Ladies section (`#ladies`) with the therapist slideshow
- book.html — reservation form
- style.css / shared.js / assets.js — shared styling, layout, and embedded photos
- vercel.json — clean URLs (/menu instead of /menu.html) + build command
- scripts/build-therapists.js — scans `img/therapists/` and writes `data/therapists.json`
- data/therapists.json — generated; do not edit by hand

## Adding photos to the lineup

The home page Ladies section (`index.html#ladies`) is the only ladies showcase:
a photo-only slideshow of every image in `img/therapists/` plus a
message-for-availability CTA. The old `/lineup` URL 301-redirects to `/#ladies`.
No names, roles or captions are shown anywhere.

1. Drop photos into `img/therapists/`. Any filename works — it is never
   displayed. Supported: jpg, jpeg, png, webp, avif, gif.
2. Run `npm run build` locally (or let Vercel run it on deploy). This rewrites
   `data/therapists.json` as a simple array of image paths; commit it with the
   photos. Order follows the filename sort; rename files to reorder.
3. Delete a photo and rebuild to remove it from the slideshow.

Photos must be plain, professional and non-sexual — clothed, neutral
background. No body-measurement or vitals fields exist anywhere on the site;
do not add any.

## To customise
- Phone, LINE ID, address: top of `shared.js`
- The booking form generates a reference number but does not send anywhere yet —
  connect it to a form service (Typeform, Formspree) or your own endpoint to receive requests.
