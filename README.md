# franktraylor.com

Static site built with Astro, hosted on Cloudflare Pages.

## Pages
- `src/pages/index.astro` – home page with the timeline
- `src/pages/foundations.md` – core attributes, quotations, wedding vows
- `src/pages/work.md` – work history, education, boards

Foundations and Work are plain Markdown. Edit the text and push.

## Adding a timeline moment
Create one file in `src/content/timeline/`, for example `2026-new-thing.md`:

```
---
headline: "New Thing"
date: "2026-10"        # YYYY, YYYY-MM or YYYY-MM-DD
end: "2027-06"         # optional, for a span of time
media: "/media/timeline/2026-new-thing.jpg"   # optional: a photo in public/media/timeline, or a Vimeo/YouTube link
---

One or two sentences about it.
```

Put the photo in `public/media/timeline/`. Order comes from the date, so the file name only needs to be unique.

## Running locally
```
npm install
npm run dev      # preview at http://localhost:4321
npm run build    # output in dist/
```

`public/_redirects` sends retired Squarespace URLs (Music, Africa and its galleries) to the home page.
