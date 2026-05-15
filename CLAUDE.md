# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Local dev server (Next.js only, no AI binding)
npm run build        # Next.js production build
npm run lint         # ESLint check
npm run pages:build  # Build for Cloudflare Pages deployment
npm run preview      # Build + local Wrangler preview (enables AI chat binding)
npm run deploy       # Build + deploy to Cloudflare Pages via Wrangler
```

No test framework is configured.

## Architecture

Single-page marketing site with 11 section components assembled in `app/page.tsx`. Navigation is entirely anchor-based (scroll to `#section-id`). The only dynamic functionality is the AI chatbot.

```
app/
  page.tsx           — home page, imports all section components
  layout.tsx         — root layout, metadata, JSON-LD org schema, hreflang
  globals.css        — all styles (CSS variables + semantic class selectors)
  api/chat/route.ts  — edge runtime chat endpoint (Cloudflare Workers AI)
components/          — 11 React components (Header, Hero, About, Services, Model,
                       Why, Offices, CTA, Footer, ChatWidget, RevealOnScroll)
lib/i18n.tsx         — React Context i18n provider with EN/ES dictionaries
wrangler.toml        — Cloudflare Pages + AI binding config
public/_headers      — Cloudflare security/cache headers
```

Path alias: `@/*` resolves to the project root (configured in `tsconfig.json`).

## i18n

All user-facing strings live in `lib/i18n.tsx` as two typed dictionaries (`en`, `es`). Components consume them via the `useI18n()` hook, which returns `{ t, lang, toggle }`. Language preference is auto-detected on first visit (browser `navigator.language`), then persisted in `localStorage` under the key `t10_lang`.

When adding content, add the key to **both** dictionaries in `lib/i18n.tsx` before referencing it in a component.

## Styling

Pure CSS with CSS custom properties — no Tailwind, no CSS modules. All styles are in `app/globals.css`. Design tokens (colors, spacing, shadows, radii) are declared in `:root`. Use semantic class selectors that match component names (e.g., `.hero`, `.service-card`, `.chat-widget`).

## Chat API

`app/api/chat/route.ts` runs on the Cloudflare edge runtime and uses the `AI` binding (Llama 3.1-8B Instruct). **This binding is unavailable during `npm run dev`** — the route returns a fallback error response locally. To test the chatbot end-to-end, run `npm run preview` (requires Wrangler and a logged-in Cloudflare account).

Client-side limits enforced in `components/ChatWidget.tsx`:
- 5 messages max per session (tracked in `sessionStorage`)
- 400 character input cap
- 6-message history window sent to the API

## Deployment

The site deploys to **Cloudflare Pages** via `npm run deploy`. The `@cloudflare/next-on-pages` adapter transforms the Next.js build output for the Workers runtime. `wrangler.toml` declares compatibility date and the AI binding. The `public/_headers` file controls HTTP security headers and cache rules at the CDN edge.
