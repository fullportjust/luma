# Lumi Nuru — Project Context for Claude

This file gives any future Claude session full context to continue work on this project immediately.

---

## What this project is
A static website for **Lumi Nuru** — a private KTV (karaoke) and massage lounge in Bangkok, Thailand. The site is 5 pages, fully multilingual, deployed on Vercel via GitHub auto-deploy.

---

## GitHub repo
- **URL:** https://github.com/fullportjust/luma
- **Branch:** main
- **Auto-deploys to Vercel** on every push
- **To push:** ask the user for a fresh GitHub Personal Access Token (PAT) each session — never store it. Then:
  ```bash
  cd /tmp && git clone https://PAT@github.com/fullportjust/luma.git luma-push
  cd luma-push
  # copy changed files in
  git add . && git commit -m "description" && git push origin main
  ```

---

## File structure
| File | Purpose |
|------|---------|
| `index.html` | Home page — hero, QR contacts, photo gallery, service cards, combo, Find Us, footer |
| `menu.html` | Menu & Pricing — KTV rooms, massage courses, special/long time |
| `book.html` | Booking form — service selector, date/time, guests, contact, confirmation |
| `lineup.html` | Daily staff lineup — 15 placeholder cards, all Available, Book button at top |
| `faq.html` | FAQ — Why Us cards, expandable Q&A sections |
| `style.css` | All styles — brand colours, gallery, cards, lineup, FAQ, footer, QR pills |
| `shared.js` | Nav + footer builder injected on every page. Contains PHONE, LINE_ID, ADDR, MAPS_URL constants |
| `i18n.js` | All translations — EN, TH, ZH, JA, KO. `getLang()` / `setLang()` / `t(key)` / `applyI18n()` |
| `assets.js` | All images as base64 — `window.LN_IMG = { exterior, lounge, lobby, ktv, massage, line_qr, whatsapp_qr, wechat_qr }` |
| `vercel.json` | `cleanUrls: true` — enables /menu instead of /menu.html |

---

## Brand & design
- **Colours:** `--bg:#1b0f3a` (deep indigo), `--gold:#e8c364`, `--gold-bright:#f6dd92`, `--ink:#efe7ff`, `--muted:#b6a7da`
- **Fonts:** Cormorant Garamond (serif headings) + Jost (sans body) via Google Fonts
- **Logo:** SVG LN monogram, recreated from brand — arch + interlocking L/N letters
- **Hero background:** real exterior photo (LN_IMG.exterior)

---

## Contact & business info
- **LINE:** @luminuru
- **WhatsApp:** +660828943665 (real number — QR already set)
- **WeChat:** luminuru (placeholder — update when real ID confirmed)
- **Google Maps:** https://maps.app.goo.gl/rcKXQsdLzDWAYKzQA
- **Coordinates:** 13.7308979, 100.5703333
- **Hours:** Daily 6pm – late
- **Address:** [Street address — not yet filled in, user to update in shared.js]
- **BTS:** [Nearest station — not yet filled in, user to update in shared.js]

---

## How translations work
All text with `data-i18n="key"` attributes gets replaced by `applyI18n()`.
- Add new keys to `I18N` object in `i18n.js`
- `mountChrome(active)` in `shared.js` builds nav + footer and calls `applyI18n()`
- Language stored in `localStorage` key `ln_lang`
- Falls back to English if key missing for a language

---

## How images work
All photos are base64-embedded in `assets.js` as `window.LN_IMG`.
- To replace a photo: convert to base64, update the relevant key in `assets.js`
- Current keys: `exterior`, `lounge`, `lobby`, `ktv`, `massage`, `line_qr`, `whatsapp_qr`, `wechat_qr`
- To add new keys: append to the `LN_IMG` object

---

## Lineup page
- 15 placeholder cards — user replaces with real staff photos and names
- All set to `status-available` (green badge)
- To update daily: edit the `staff` array in `lineup.html` script block
- Video slot was removed per user request

---

## Things still to fill in (placeholders)
- [ ] Street address and BTS station → `shared.js` constants `ADDR` and footer HTML
- [ ] Phone number → `shared.js` constant `PHONE`
- [ ] LINE QR → update when real LINE ID confirmed (currently @luminuru placeholder)
- [ ] WeChat QR → update when real WeChat ID confirmed
- [ ] Instagram handle → `@luminuru` placeholder in footer
- [ ] X (Twitter) handle → `@luminuru` placeholder in footer
- [ ] Staff photos → 15 slots in `lineup.html`
- [ ] Staff names → edit `staff` array in `lineup.html`

---

## Key decisions made
- No drink buffet section anywhere (removed at user request)
- Massage prices hidden from public menu and billboard (user request) — "Ask our team"
- Booking form generates a reference number client-side, sends via LINE pre-filled message (no backend)
- All images embedded as base64 so pages are self-contained (no broken images from missing files)
- 5 languages: EN / ไทย / 中文 / 日本語 / 한국어

---

## Working on Claude's side
Files are kept at `/home/claude/site/`. The git push repo is cloned to `/tmp/luma-push/`.
When starting a new session, files from `/home/claude/site/` may not persist — pull from GitHub first:
```bash
git clone https://PAT@github.com/fullportjust/luma.git /home/claude/site
```
