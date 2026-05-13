# T10Global — Corporate Website

Single-page bilingual (EN/ES) corporate website for **T10Global**, a curated alliance of professional firms. Built as a pure static site for deployment on **Cloudflare Pages**.

## Stack

- One static `index.html` (HTML + inline CSS + inline JS)
- No build step, no dependencies, no external fonts
- Inline SVG favicon and icons (no image files)
- Bilingual via JS toggle (EN | ES) persisted in `localStorage`
- JSON-LD `Organization` schema, OG tags, `hreflang` alternates
- Security headers + `robots.txt` + `sitemap.xml` included

## Project structure

```
.
├── index.html       Full site (HTML, CSS, JS, i18n, JSON-LD)
├── favicon.svg      Brand mark (10-node ring)
├── robots.txt       Allow all + sitemap reference
├── sitemap.xml      Single URL with hreflang alternates
├── _headers         Cloudflare Pages security + cache headers
├── _redirects       Placeholder (no redirects configured)
└── README.md        This file
```

## Deploy to Cloudflare Pages

### Option A — Drag and drop (fastest)

1. Go to [Cloudflare Dashboard → Pages](https://dash.cloudflare.com/?to=/:account/pages)
2. **Create a project → Upload assets**
3. Project name: `t10global`
4. Drag the contents of this folder (not the folder itself) into the upload area
5. Click **Deploy site**
6. Add your custom domain `t10global.com` via the **Custom domains** tab

### Option B — Wrangler CLI

```bash
npx wrangler pages deploy . --project-name=t10global
```

### Option C — Git integration

Push this folder to a GitHub or GitLab repo, then connect the repo in Cloudflare Pages. No build command, no build output directory — Cloudflare will serve the root directly.

## Before launch — replace placeholders

Search `index.html` for the comment block near the top:

```html
<!--
  REPLACE BEFORE LAUNCH:
  - Office addresses (currently placeholders in Tenerife)
  - Contact email: info@t10global.com
  - JSON-LD Organization sameAs (LinkedIn, etc.)
  - Open Graph image (currently omitted - add og-image.png if needed)
-->
```

Items to update:

- **Office addresses** — both EN and ES versions live in two places:
  - The HTML (`address` elements inside the `#offices` section)
  - The JS i18n dictionary (keys `offices.hq.body` and `offices.md.body`)
  - The JSON-LD `address` array in the `<head>`
- **Contact email** — search-and-replace `info@t10global.com` if you want a different address
- **JSON-LD `sameAs`** — add LinkedIn / social URLs to the Organization schema if relevant
- **Open Graph image** — if you want a richer share preview, add an `og-image.png` (1200×630) to the project root and add `<meta property="og:image" content="https://t10global.com/og-image.png">` to the `<head>`. The CSP in `_headers` already allows `img-src 'self'`.
- **Copyright year** — `© 2026` in the footer (both EN and ES dictionaries)

## Editing content

All translatable text lives in the `i18n` JavaScript object at the bottom of `index.html`. Each text node carries a `data-i18n="key"` attribute that maps to entries in the dictionary.

To change a line:

1. Find the `data-i18n="..."` attribute on the element in the HTML
2. Update the corresponding key in **both** `i18n.en` and `i18n.es`

If you add a brand new section or text, make sure to:

1. Add `data-i18n="your.key"` to the new element
2. Add `your.key: '...'` to both the `en` and `es` dictionaries

## Language behaviour

- On first visit, the site picks **Spanish** if the browser language starts with `es`, otherwise **English**
- Manual toggle persists the choice in `localStorage` (key `t10_lang`)
- `<html lang="...">` updates so screen readers and search engines see the right language
- `<title>` and `<meta name="description">` update with the language

## Adding analytics (optional)

Cloudflare Web Analytics is the cleanest fit — privacy-friendly, no cookie banner needed:

1. In the Cloudflare dashboard → **Analytics → Web Analytics → Add a site**
2. Use the **Hostname-based** method (no code change required), or paste the provided snippet just before `</body>` in `index.html`
3. If you paste a snippet, you may need to relax the CSP `script-src` in `_headers` to allow Cloudflare's domain

## Local preview

The site is a pure static page. You can either:

- **Just open it** — double-click `index.html` to open in your browser. Works fully (i18n, animations, smooth scroll). The only thing that won't apply is the `_headers` rules — those are server-side.
- **Serve it** — run `python3 -m http.server 8080` in this folder and open `http://localhost:8080`

## License / ownership

© 2026 T10Global. All rights reserved.
