#!/usr/bin/env node
/* Build data/therapists.json — a plain array of photo paths — from the
 * image files in img/therapists/.
 *
 * The lineup is a photo gallery: no names, roles, captions or any other
 * per-person metadata is generated or displayed. Filenames are only used
 * to locate the image, never shown on the site.
 *
 * Content rule: professional, non-sexual photos only (clothed, neutral
 * background). No body measurements or vitals belong anywhere in this repo.
 *
 * Run manually: npm run build   (Vercel runs it automatically on deploy)
 */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const photoDir = path.join(root, 'img', 'therapists');
const outFile = path.join(root, 'data', 'therapists.json');

const PHOTO_EXT = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif']);

// Photos listed here appear first, in this order (basename, no extension).
const PRIORITY = ['IMG_6682', 'IMG_4978'];

// Sort key: [tier, priorityIndex, name]. Priority photos first, then the rest
// in natural order, and any "copy_*" file last.
function sortKey(name) {
  const base = name.replace(/\.[^.]+$/, '');
  const p = PRIORITY.indexOf(base);
  if (p !== -1) return [0, p, base];
  if (base.toLowerCase().startsWith('copy_')) return [2, 0, base];
  return [1, 0, base];
}

function comparePhotos(a, b) {
  const ka = sortKey(a);
  const kb = sortKey(b);
  if (ka[0] !== kb[0]) return ka[0] - kb[0];
  if (ka[1] !== kb[1]) return ka[1] - kb[1];
  return ka[2].localeCompare(kb[2], undefined, { numeric: true, sensitivity: 'base' });
}

function listPhotos() {
  if (!fs.existsSync(photoDir)) return [];
  return fs.readdirSync(photoDir, { withFileTypes: true })
    .filter(entry => entry.isFile())
    .map(entry => entry.name)
    .filter(name => !name.startsWith('.'))
    .filter(name => PHOTO_EXT.has(path.extname(name).toLowerCase()))
    .sort(comparePhotos);
}

const photos = listPhotos().map(file => `/img/therapists/${file}`);

fs.mkdirSync(path.dirname(outFile), { recursive: true });
const json = JSON.stringify(photos, null, 2) + '\n';

const previous = fs.existsSync(outFile) ? fs.readFileSync(outFile, 'utf8') : '';
if (previous !== json) {
  fs.writeFileSync(outFile, json);
  console.log(`therapists: wrote ${photos.length} photo path${photos.length === 1 ? '' : 's'} to data/therapists.json`);
} else {
  console.log(`therapists: ${photos.length} photo path${photos.length === 1 ? '' : 's'} — data/therapists.json already up to date`);
}
