# Tour Images

Every tour card/hero image lives in this folder and is referenced from
`src/data/newToursData.js` as `/images/tours/<file>`.

**Never hotlink tour images** (od.lk, Google Drive, Dropbox, Unsplash, etc.).
Those links expire, and the tour cards go blank. `npm run build` runs
`src/data/newToursData.test.js` first and fails if a tour image is external
or missing.

## Replacing a tour photo

1. Resize and convert: `magick photo.jpg -resize '1600x1600>' -strip -quality 78 tour-<name>.webp`
2. Put it here and update the `image` field for **both** the `en` and `fr` entries.
3. `tour-fallback.webp` is shown automatically if an image ever fails to load.
