# Lumi Nuru — website

Static site (HTML/CSS/JS, no build step). Photos are embedded in `assets.js`.

## Deploy to Vercel

### Option A — drag & drop (easiest)
1. Go to https://vercel.com/new
2. Drag this whole folder onto the page (or zip it and upload).
3. Vercel detects a static site — no framework, no build command needed.
4. Click **Deploy**. Done.

### Option B — Vercel CLI
```
npm i -g vercel
cd lumi-nuru-vercel
vercel
```
Accept the defaults (no build command, output = current directory).

### Option C — GitHub
Push these files to a repo, then "Import Project" in Vercel and select the repo.

## Files
- index.html — home
- menu.html — menu & pricing
- book.html — reservation form
- style.css / shared.js / assets.js — shared styling, layout, and embedded photos
- vercel.json — enables clean URLs (/menu instead of /menu.html)

## To customise
- Phone, LINE ID, address: top of `shared.js`
- The booking form generates a reference number but does not send anywhere yet —
  connect it to a form service (Typeform, Formspree) or your own endpoint to receive requests.
