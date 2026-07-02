# Igniton Investor Site — Master Roadmap

> **PUBLIC** investor-relations site that mirrors the consumer look/feel of **igniton.com** but strips all commerce and replaces consumer content with an investment narrative. Indexable / SEO-friendly, **no access gate**, ship-ready for Vercel at **ignitoninc.com**.
>
> **⚠️ Posture change (client decision):** the original spec called for a private, non-indexed, gated site. The client has since directed that this site be **public and used for SEO**. Therefore: it is **indexable** (no noindex, has a sitemap), has **no password/auth gating**, and "Request Access" becomes a public **Contact / Investor Relations** section. Legal disclaimers matter *more* on a public investment page — they stay. See [04_COMPLIANCE.md](04_COMPLIANCE.md).
>
> This document is the index. Detail lives in the sibling docs:
> - **[01_DESIGN_SYSTEM.md](01_DESIGN_SYSTEM.md)** — exact tokens (colors, type, spacing, components, motion), Tailwind/CSS-ready.
> - **[02_CONTENT_BLUEPRINT.md](02_CONTENT_BLUEPRINT.md)** — page-by-page content, verbatim approved copy, and the placeholder map.
> - **[03_ASSET_MANIFEST.md](03_ASSET_MANIFEST.md)** — reusable image/PDF URLs + a download script.
> - **[04_COMPLIANCE.md](04_COMPLIANCE.md)** — disclaimers, SEO/noindex, gating, pre-launch verification checklist.

---

## 1. What we're building (one line)

A long-scroll **Overview** homepage with anchored sections + a couple of deeper routes (**Team**, **Request Access**), reusing the consumer site's fonts, colors, nav chrome, footer, section rhythm, and luminous-glow motion — with **zero** cart/price/checkout/Shopify/liquid.

## 2. What was found in the source (the important facts)

The download is a stock **Shopify Dawn-based theme** with heavy Igniton customization. Key discoveries that shape the build:

| Finding | Implication for the build |
|---|---|
| `assets/brand-tokens.css` exists — the theme's own "single source of truth" (v1.0, May 2026). | We copy these tokens **exactly** into Tailwind theme + `globals.css`. See [01_DESIGN_SYSTEM.md](01_DESIGN_SYSTEM.md). |
| **No teal (`#108474`) anywhere** in the actual theme, despite the spec listing it. | Drop teal, or keep only as a rare optional accent. Real accent = **gold `#B49153`** (+ bright gold `#D3A23C`). |
| `settings_data.json` is **empty** in the export (customizations are server-side). | Palette/fonts come from `brand-tokens.css` + the spec, both of which agree. |
| Fonts: **Playfair Display 600** (headings, italic payoff) + **Plus Jakarta Sans** (body/UI). | Load via `next/font/google`. |
| A real **`page.investors-page.json`** already exists with hard corporate facts. | Reuse verbatim (Colorado C-corp, 12-acre Boulder campus, cash/no debt, Bio-Well subsidiary). |
| Real **study figures, product claims, team bios, disclaimers** are all in templates/sections. | Reuse verbatim; see [02_CONTENT_BLUEPRINT.md](02_CONTENT_BLUEPRINT.md). |
| Signature hero glow = **pure CSS radial-gradient orb** (not the sparkle.gif). | Rebuild in CSS; GSAP only for scroll reveals. |
| Brand images live on Shopify **CDN**, not in the export. Live base: `https://www.igniton.com/cdn/shop/files/<file>`. | Download the ~15 needed into `/public`. See [03_ASSET_MANIFEST.md](03_ASSET_MANIFEST.md). |
| Live consumer nav: **Products · Results · Science · About · Journal**, "Log in" top-right. | Map to investor nav below. |

### Two source discrepancies to resolve with the client (do NOT guess)
1. **Ownership:** one page says "Gaia owns two-thirds of Igniton"; the investor page frames Bio-Well as a majority-owned *subsidiary* of Igniton. These describe different relationships — confirm the exact Gaia ownership % before publishing. → placeholder until verified.
2. **Trial count:** "2 published trials" vs "three randomized placebo-controlled trials" appear in different places. Results page reconciles as **3 peer-reviewed published + 1 clinical (Peptide) + 1 initial (REM)**. Use that reconciliation; confirm with client.

## 3. Information architecture (consumer → investor)

| Consumer nav | Investor nav | Route / anchor |
|---|---|---|
| Home | **Overview** | `/` hero + at-a-glance metrics |
| Products | **Portfolio** | `/#portfolio` — 4 SKUs as revenue assets, no price/cart |
| Science | **Technology** | `/#technology` — moat, IP, science lineage |
| Results | **Traction** | `/#traction` — studies, awards, metrics (placeholders) |
| About | **Team & Advisors** | `/team` (deeper route) + `/#company` (Gaia) |
| — | **Roadmap** | `/#roadmap` — forward-looking, clearly labeled |
| Cart / Log in | **Contact IR** (gold button) | `/#contact` — public Investor Relations contact (no gate) |

**Header nav (≤6 + button):** Overview · Technology · Traction · Team · Roadmap · **[Contact IR]**
Fold Portfolio + Company into the overview/anchors so the bar stays clean. The CTA is a public contact section (email/IR), **not** a gated request-access wall.

## 4. Tech stack (decided)

- **Next.js (App Router) + TypeScript**, deployed on **Vercel**.
- **Tailwind CSS** with brand tokens as CSS variables + Tailwind theme extension.
- **GSAP + ScrollTrigger** for scroll reveals + the hero glow ambient motion; progressive enhancement (content visible without JS); respect `prefers-reduced-motion`.
- Fonts via **`next/font/google`**: Playfair Display (600) + Plus Jakarta Sans (400/600/700).
- **No database.** Content lives in typed `/content/*.ts` files so copy is editable without touching components.
- **Public & indexable** (client decision, for SEO): no auth gate; `robots.txt` allows crawling; `app/sitemap.ts` + `app/robots.ts`; full SEO metadata + Open Graph per route.

## 5. Build phases

- [x] **Phase 0 — Discover & document** (this deliverable). Theme decoded, tokens/content/assets/nav captured, compliance rules set.
- [ ] **Phase 1 — Scaffold.** `create-next-app` (TS, Tailwind, App Router). Wire tokens into `tailwind.config.ts` + `globals.css`. Fonts via next/font. Base layout (Header/Footer). `robots.txt`, noindex metadata + `X-Robots-Tag` header, Basic-Auth middleware. `/content` schema.
- [ ] **Phase 2 — Design primitives.** `<BrandName>`, `<Eyebrow>`, `<Section>` (primary/alt/dark rhythm), `<Button>` (2 levels only), `<Hero>` w/ CSS glow orb, `<StatBand>`, `<Card>`/`<CardGrid>` (shared hairline borders), scroll-reveal wrapper.
- [ ] **Phase 3 — Content build.** Populate `/content` from [02_CONTENT_BLUEPRINT.md](02_CONTENT_BLUEPRINT.md); build all sections; every unverified number rendered as a labeled placeholder chip.
- [ ] **Phase 4 — Assets.** Download the ~15 CDN images + Articles-of-Incorporation PDF into `/public`; optimize; set alt text.
- [ ] **Phase 5 — Compliance + polish.** Footer disclaimer block; Request-Access form (routes to IR, "not an offer" line); a11y pass; Lighthouse ≥90; no console errors; confirm no commerce paths.
- [ ] **Phase 6 — Deploy.** `vercel.json` headers; env vars; README; connect `ignitoninc.com`.

## 6. Decisions (resolved with client)
1. ~~Gating~~ → **RESOLVED: public, no gate.** Site is public and indexable for SEO.
2. ~~Request-Access destination~~ → **RESOLVED: no gate.** "Request Access" becomes a public **Contact / Investor Relations** section (IR email to supply; renders a placeholder link until provided).
3. **Teal** → **RESOLVED: dropped** (`#108474` not in the real brand system; accent is gold).
4. **Still open — Placeholders:** client must supply verified financials, exact Gaia %, IP status, operating-team bios (see [04_COMPLIANCE.md](04_COMPLIANCE.md) §checklist). Until then they render as muted "▢ pending" chips.

## 7. Hard "do NOT" rules (carried through every phase)
- No invented financials, projections, market sizes, ownership %, patents, endorsements, or claims.
- No cart / checkout / pricing / subscribe / discount anything.
- No NASA/DoD claims, no disease claims, nothing presented as proven or committed.
- Product claims keep exact figures, correct study tier, and the `**` FDA disclaimer.
- (Site is **public** per client — SEO is a goal — but the legal disclaimers in [04_COMPLIANCE.md](04_COMPLIANCE.md) become **more** important, not less.)
