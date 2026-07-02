# Igniton Investor Site — Compliance, SEO & Gating

> Investor-facing = accuracy is legally load-bearing. This file holds the disclaimer copy, the SEO/non-indexing implementation, the access-gating plan, and the pre-launch verification checklist. **Legal must review all disclaimer language before launch.**

---

## 1. Disclaimer blocks (render in footer + inline where relevant)

Store these in `content/disclaimers.ts` as a single source; reuse in the footer and adjacent to relevant sections.

**A. Not an offer (footer + adjacent to Request-Access form)**
> "This website is for informational purposes only and does not constitute an offer to sell, or a solicitation of an offer to buy, any securities. Any offering will be made only to qualified/accredited investors through definitive offering documents."

**B. Forward-looking statements (footer + top of Roadmap section)**
> "This site contains forward-looking statements, including regarding future products (e.g., in-home devices and the HIT chair), technology, and business plans. These are subject to risks and uncertainties; actual results may differ materially. Nothing here is a promise or guarantee of future performance."

**C. Framework language (footer + Technology section)**
> "'Ignitons,' 'coherence,' and related concepts represent Igniton's framework and are not presented as established scientific consensus."

**D. Product structure/function + FDA (footer + every product card)**
> "** These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease."

**No unsubstantiated claims:** omit anything not documented — explicitly including any **NASA/DoD** reference for Igniton — unless the client holds proof and legal sign-off.

---

## 2. SEO / indexing — PUBLIC (client decision: this site is used for SEO)

> **This reverses the original spec's non-indexing plan.** The client directed a public, indexable, SEO-oriented site. Implement standard best-practice SEO, and lean on the disclaimers (§1) since investment content is now public.

1. **Robots metadata** in the root layout — allow indexing:
   ```ts
   export const metadata = { robots: { index: true, follow: true } }
   ```
2. **`app/robots.ts`** (allow all + point to sitemap):
   ```ts
   export default function robots() {
     return { rules: [{ userAgent: '*', allow: '/' }],
       sitemap: 'https://ignitoninc.com/sitemap.xml' }
   }
   ```
3. **`app/sitemap.ts`** — list all public routes (`/`, `/team`, and any others).
4. **Full metadata per route:** distinct `<title>` + description, **canonical to self** (`ignitoninc.com`, NOT consumer pages), Open Graph + Twitter cards, `metadataBase`.
5. **No `X-Robots-Tag: noindex`** header. Do **not** block crawling.
6. **Separate analytics** property for `ignitoninc.com` (not the consumer GA/Shopify analytics).
7. Deploy on the **separate domain** `ignitoninc.com`. Because it's a different domain with distinct investor copy (not duplicated commerce content), cannibalization risk is low — but keep the copy meaningfully different from igniton.com to avoid duplicate-content overlap.
8. Consider `JSON-LD` `Organization` structured data for the company entity.

## 3. Access gating — NONE (public)

Per client decision, there is **no password/auth gate**. The site is fully public. No `middleware.ts` auth, no Vercel password protection.

The former "Request Access" CTA is now a public **Contact / Investor Relations** section: an IR email/contact link (address to be supplied — renders a placeholder `mailto:` until then), with the "not an offer" line (§1-A) adjacent. Any sensitive data room (DocSend/Notion) can still be linked and gated on its own platform, separate from this public site.

---

## 4. Pre-launch verification checklist (client supplies before flipping placeholders)

Every ▢ below is currently a muted "pending" chip in the UI. **Do not invent any of these.**

- [ ] Verified financials: net revenue to date, growth/run-rate, orders/customers, subscription mix, AOV, repeat, CAC/LTV
- [ ] **Exact Gaia ownership %** (source says "two-thirds" once — confirm) + any structural details cleared to share
- [ ] Cap-table summary + use of funds (if raising) — legal-approved
- [ ] IP status: patents / applications / trade secrets (no patent numbers stated in source)
- [ ] Market-size data with sources (TAM/SAM/SOM) — no invented numbers
- [ ] Operating-team bios/photos; a clean **Jirka Rysavy** headshot; **Dr. Ken Ro** headshot
- [ ] Award proof if used (**COVR** — not found in source); "as seen in" publication rights
- [ ] Permission to quote/attribute the **Dave Asprey** endorsement for investor use
- [ ] Real review metrics (the "4.8 / 127" in source are theme defaults — unverified)
- [ ] Reconcile trial count (2 vs 3) and confirm the published/clinical/initial tiering
- [ ] Legal-reviewed final disclaimer language + public IR contact email
- [ ] Confirm licensing on any stock photography reused from the theme
- [ ] **Because the site is public:** legal sign-off that publishing the investment narrative (thesis, roadmap, Gaia relationship) publicly is acceptable, with disclaimers §1 present

## 5. Sign-off gate
**No production deploy** until: every ▢ placeholder is either populated with verified data or removed, legal has reviewed §1 disclaimers (extra important on a public site), and SEO/indexing (§2) is confirmed correct in a preview.
