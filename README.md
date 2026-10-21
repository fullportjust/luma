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

## Editing "Our Therapists" (no code)

The therapist lineup on `lineup.html` is loaded from `data/therapists.json`
(an array of `{ name, role, photo }`). Edit it through the Git-based CMS so
the site owner can add / edit / delete therapists and upload photos from a
web UI — every save is committed to this repo and Vercel redeploys.

**CMS: Pages CMS (pagescms.org)** — configured in `.pages.yml`.

1. Owner signs in at https://app.pagescms.org/ with their GitHub account.
2. On first use, install the **Pages CMS GitHub App** and grant it access to
the `fullportjust/luma` repository (one-time, free).
3. Open the repo → **Our Therapists** → edit the list, or upload photos.
   Uploads go to `img/therapists/` and are referenced as `/img/therapists/…`.
4. Save → Pages CMS commits to GitHub → Vercel redeploys automatically.

**Content rule:** photos and copy are plain and professional only — clothed,
neutral background, no sexualised imagery, and no body-measurement or vitals
fields (no chest / waist / hips).

## To customise
- Phone, LINE ID, address: top of `shared.js`
- The booking form generates a reference number but does not send anywhere yet —
  connect it to a form service (Typeform, Formspree) or your own endpoint to receive requests.
