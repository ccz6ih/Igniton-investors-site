# Igniton — Investor Site

A **public**, SEO-friendly investor-relations site for Igniton, built with **Next.js (App Router) + TypeScript + Tailwind**, deploying to **Vercel** at **ignitoninc.com**. It mirrors the consumer site's look, feel, typography, and motion — with **no commerce** (no cart, price, checkout, subscribe, or Shopify).

> Design + content decisions live in [`docs/`](docs/). Read [`docs/00_ROADMAP.md`](docs/00_ROADMAP.md) first.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
npm run assets   # (re)download brand images from the Shopify CDN into /public
```

## Project structure

```
app/            App Router: layout (fonts + SEO), page.tsx (Overview), team/, robots.ts, sitemap.ts
components/     Header, Footer, Hero (CSS glow orb), Section, Reveal, BrandName, Metric, sections.tsx
content/        Typed, editable copy — EDIT COPY HERE, not in components
public/         Brand images + PDFs (downloaded from the Shopify CDN)
scripts/        download-assets.ps1
docs/           Design system, content blueprint, asset manifest, compliance
_theme_reference/  The extracted consumer Shopify theme (design reference only; git-ignored)
```

## Editing content

All copy is in [`content/*.ts`](content/) so you can edit without touching components:

- `site.ts` — nav, footer links, brand, **IR email** (`irEmail` — set the real inbox).
- `overview.ts`, `technology.ts`, `portfolio.ts`, `traction.ts`, `company.ts`, `team.ts`, `roadmap.ts` — per-section copy.
- `disclaimers.ts` — the four legal/compliance blocks.

### Placeholders (important)

Every unverified number renders as a muted **"▢ Pending"** chip — the site **never invents figures**. To fill one in, set its `value` and flip `verified: true` (metrics), or provide the `status` / `ownership` string (Technology IP, Company Gaia %). See the checklist in [`docs/04_COMPLIANCE.md`](docs/04_COMPLIANCE.md) §4 for everything the client must supply:
financials, exact Gaia ownership %, IP status, operating-team bios, award proof, endorsement permission.

## Brand system (summary)

- **Colors:** navy `#121241` (text/dark), gold `#B49153` + bright gold `#D3A23C` (accents), off-white `#F5F1EA`, warm-gray `#6B6660`. **No teal** (not in the real brand). Proportion target ~60% white / 22% navy / 12% gold.
- **Type:** Playfair Display 600 headings (one italic-gold emphasis word max) + Plus Jakarta Sans body; uppercase gold eyebrows. Product names: _Igni_**Cognition**™ via `<BrandName>`.
- **Rhythm:** alternating white / off-white / navy sections, 7rem vertical padding.
- **Motion:** CSS glow orb + IntersectionObserver scroll reveals; fully visible without JS; honors `prefers-reduced-motion`.

Full detail: [`docs/01_DESIGN_SYSTEM.md`](docs/01_DESIGN_SYSTEM.md).

## SEO / indexing (public — client decision)

This site is **public and indexable** for SEO (this reverses the original spec's private/gated plan):

- `app/layout.tsx` sets `robots: { index: true, follow: true }`, full Open Graph/Twitter metadata, and a self-canonical.
- `app/robots.ts` allows all crawlers and points to the sitemap.
- `app/sitemap.ts` lists public routes.
- **No auth gate / no password.** The former "Request Access" wall is now a public **Contact IR** section.

Deploy on the separate domain `ignitoninc.com`; keep copy meaningfully distinct from igniton.com to avoid duplicate-content overlap. See [`docs/04_COMPLIANCE.md`](docs/04_COMPLIANCE.md).

## Compliance

The footer renders four disclaimer blocks (not-an-offer, forward-looking, framework language, FDA structure/function). **Legal must review all disclaimer language before launch.** Product claims keep exact figures, correct study tier, and the `**` FDA marker. No NASA/DoD claims, no disease claims, nothing presented as proven or committed.

## Deploy to Vercel

1. Push to a Git repo (the `.vercelignore` keeps the theme reference + zip out of the deploy).
2. Import into Vercel — framework auto-detects as Next.js; no env vars required (public site).
3. Add the domain `ignitoninc.com` in Vercel → Domains.
4. Set up a **separate** analytics property (not the consumer store's).

## Pre-launch checklist

See [`docs/04_COMPLIANCE.md`](docs/04_COMPLIANCE.md) §4. In short: **replace every ▢ placeholder with verified data (or remove it), get legal to review the disclaimers, confirm the IR email, and confirm indexing/SEO in a Vercel preview — before going to production.**
