# Igniton Investor Site — Build Spec & Content Blueprint

> **What this is.** The blueprint for a private, investor-only site that mirrors the look and feel of the consumer site (igniton.com) but replaces all e-commerce with an investment narrative. Pairs with the companion build prompt. Built in React (Next.js) → Vercel.
>
> **Golden rule for this site:** it is investor-facing, so accuracy is legally load-bearing. Every number is a placeholder until you populate it from verified sources. Never invent financials, projections, market sizes, patents, or claims.

---

## 1. Purpose & Audience

- **Purpose:** a credibility-first "front door" for prospective investors and strategic partners — the story, the technology moat, the traction, the team, and the roadmap — leading to a gated data room / contact.
- **Audience:** sophisticated / accredited investors, strategic partners, and Gaia stakeholders. Assume they are skeptical, financially literate, and will fact-check.
- **Primary goal (CTA):** "Request access" / "Contact Investor Relations" (NOT purchase). There is no cart, no price, no subscription anywhere.
- **Secondary goal:** convey a de-risked, real business (revenue + studies + Gaia parentage) with venture-scale upside (the technology platform + roadmap).

## 2. The Investment Thesis (the spine of the site)

Frame everything around this reframe:

> **Igniton is a revenue-generating premium wellness brand today — and a quantum-wellness *technology platform* tomorrow.** The supplements are the de-risked, cash-generating foundation; the enhancement technology, IP, published science, and device roadmap are the venture upside. It is backed by a proven founder (Jirka Rysavy) and majority-owned by a public company (Gaia Inc., NASDAQ: GAIA).

Four pillars investors should leave with:
1. **Proven operator** — Jirka Rysavy's track record de-risks execution.
2. **Real traction** — revenue, subscription, published studies, awards. *(populate figures)*
3. **A defensible moat** — the enhancement process / ignitons IP and the science lineage.
4. **Venture upside** — the platform roadmap (home device → HIT chair) and Gaia's owned audience.

## 3. Information Architecture (mirror the consumer nav's *feel*, swap the destinations)

Keep the same header chrome (logo left, horizontal nav, one accent button top-right) and the same footer styling. Map commerce nav → investor nav:

| Consumer nav | Investor nav | Notes |
|---|---|---|
| Home | **Overview** | The thesis, at a glance |
| Shop / Products | **Portfolio** | The 4 SKUs shown as revenue assets — no prices, no cart |
| Science | **Technology** | The moat: enhancement process, ignitons IP, science lineage |
| — | **Traction** | Studies, awards, metrics *(placeholders)* |
| About | **Team & Advisors** | Founder + advisory board (major asset) |
| — | **Company** | Gaia relationship, structure, business model |
| — | **Roadmap** | Forward-looking vision (clearly labeled) |
| Cart / Begin | **Request Access** (button) | Gated data room / IR contact |

Keep nav to ~5–6 items + the button (Overview · Technology · Traction · Team · Roadmap · **Request Access**); fold "Portfolio" and "Company" into those pages or the overview if the bar gets crowded. A single long-scroll homepage with anchored sections + a couple of deeper pages (Team, Data Room) is a strong, fast option.

## 4. Global Elements

**Header:** Igniton wordmark (left) · nav (center/right) · "Request Access" button (top-right, in the consumer "Begin/Cart" slot, styled bright gold). Sticky, navy translucent — identical treatment to the consumer site.

**Footer:** same visual style. Replace shop/legal/consumer links with: Overview · Technology · Team · Roadmap · Request Access · Legal/Disclaimers. Include the "Powered by Ignitons™" signature. Add the investor disclaimer block (see §9).

## 5. Design System (identical to consumer — reuse the Visual Identity file)

- **Fonts:** Playfair Display (600) headlines with italic payoff words; Plus Jakarta Sans body; uppercase, letter-spaced eyebrows.
- **"Igni" treatment:** italic *Igni* + roman remainder (+ ™ where product names appear).
- **Palette (with intent):** Royal Indigo `#191880` / Midnight Navy `#121241` (cosmos + premium) · Emerald Teal `#108474` (science/proof) · Bronze/Bright Gold `#B49153` / `#D3A23C` (light/accent) · Ivory/Warm Cream `#F5F1EA` / `#FFF8ED` (canvas) · Near-Black `#121212` (text).
- **Motion:** subtle GSAP/scroll reveals and a luminous radial "light" glow in dark heroes (the "Born from Light" signature). Respect `prefers-reduced-motion`.
- **Rhythm:** alternating cream/navy sections; eyebrow → Playfair headline (italic payoff) → prose → CTA.

## 6. Page-by-Page Content

For each section: **purpose**, then **content direction**. `[BRACKETS]` = you must supply verified data.

### Overview (home)
- **Hero:** eyebrow "Investor Overview" · headline e.g. "A revenue business today. A wellness *technology* tomorrow." · one-line thesis · button "Request access." Luminous navy.
- **At-a-glance strip:** 3–4 headline metrics — `[Net revenue to date]`, `[Run-rate / growth]`, `[# published studies]`, `[Gaia ownership %]`. *(All placeholders — verify.)*
- **The thesis** (§2) in 3–4 short beats.
- **Logos/credibility row:** Gaia Inc. (NASDAQ: GAIA), COVR Visionary Award, "as advised by" (Asprey, etc.).
- CTA band → Request access.

### Technology (the moat)
- Reframe the consumer Science page for investors: **what's defensible.**
- The enhancement thesis: ordinary GRAS ingredients → cold-plasma "charging" → better absorption/efficacy. "Not just what's in it — how it's *enhanced*."
- The science lineage (quasi-particles since the 1990s; early Swiss-lab work on CERN-rented instruments; later named *ignitons*). Framed as Igniton's framework, not settled physics.
- **IP / moat:** `[patents / applications / trade secrets — supply status]`. GDV measurement (Korotkov). Manufacturing know-how.
- Keep quantum/coherence language as *framework* (owned-context, allowed) — but pair it with the substantiated wedge (absorption + studies) so skeptical investors have the rational anchor.

### Portfolio (the current product line = revenue assets)
- The four SKUs — *Igni*Cognition, *Igni*Longevity, *Igni*Peptide, *Igni*REM — as a portfolio grid. **No prices, no cart, no subscribe.**
- Each: one-line positioning + its validation (correctly tiered claim + exact study figure). Cognition/Longevity = "university study published in a peer-reviewed journal"; Peptide = "clinical study"; REM = "a study." Exact numbers only (e.g., IgniCognition +83% speed of reactions / +51% attention / +28% short-term memory, Valverde et al., 2023; IgniREM +24.6% REM). Every claim carries the `**` disclaimer.
- Note the proven **Cognition + Longevity** pairing as the top revenue line (validated demand).

### Traction & Validation
- **Metrics** *(placeholders — verify every one):* `[net revenue]`, `[growth / run-rate]`, `[orders / customers]`, `[subscription mix]`, `[AOV]`, `[repeat rate]`, `[CAC/LTV]`.
- **Scientific validation:** the published studies (tiered), the advisory board, COVR Gold/Silver/Bronze awards.
- **Endorsement:** Dave Asprey.
- **Distribution proof:** Gaia audience relationship; any partnerships. *(supply specifics)*

### Company
- **Gaia Inc. relationship:** publicly traded parent (NASDAQ: GAIA) owns ~two-thirds of Igniton; conscious-media audience as a distribution engine. *(confirm exact %)*
- **Business model:** premium DTC supplements, subscription-led, expanding into a technology platform.
- **Structure / cap table summary:** `[supply — high level only]`.
- **Use of funds** (if raising): `[supply]`.

### Team & Advisors
- **Founder — Jirka Rysavy:** Corporate Express ($4.7B → Staples); Crystal Market → Wild Oats → Whole Foods lineage; founder of Gaia Inc. (NASDAQ: GAIA). The execution-risk answer.
- **Advisory board (full bios, as provided):** Dave Asprey (biohacking/performance); Prof. Konstantin Korotkov (inventor, GDV technology); Dr. Kenneth Ro, M.D. (emergency medicine, men's health, RECLAIM™); Dr. Gail King, M.D. (functional medicine); Dr. Raul Verde (Teaching Professor, Concordia University; lead author of the cognition study).
- **Operating team:** `[supply]`.

### Roadmap (forward-looking — label as such)
- Today: the studied formulas (revenue).
- Horizon: in-home igniton-field device.
- Frontier: the **HIT (Holoton-Igniton Therapy)** coherence chair with Bio-Well monitoring — clinics, performance, longevity.
- **Every future item is explicitly labeled forward-looking vision; no dates presented as commitments, no specs guaranteed, nothing implied as available.** Add the forward-looking disclaimer inline.

### Request Access / Data Room (the "cart" replacement)
- Short form: name, firm, email, accreditation note, message → routes to IR/founder. Or a gated data-room link (e.g., DocSend/Notion).
- Optional: "Download the overview" (a one-pager/deck) behind the form.
- Clear "not an offer" line adjacent to the form.

## 7. Content Transformation Map (consumer → investor)

| Element on consumer site | Action | Investor treatment |
|---|---|---|
| Product prices, "$199", compare-at | **Remove** | No pricing anywhere |
| Add-to-cart, cart drawer, checkout | **Remove** | Delete all commerce components/scripts |
| Subscribe & Save / discount codes | **Remove** | No offers; CTA = Request access |
| Shopify scripts, Judge.me reviews, Superfiliate | **Remove** | Strip third-party commerce embeds |
| Product benefit copy | **Reframe** | From "feel sharper" → "validated, revenue-generating asset" |
| Science page | **Reframe** | Into "Technology / moat / IP" |
| About / founder | **Elevate** | Lead investor credibility |
| Studies & awards | **Elevate** | Traction / validation, correctly tiered |
| Testimonials/reviews | **Optional** | Keep only as traction signal, not purchase social proof |
| Brand look, nav chrome, footer, fonts, colors, motion | **Keep** | Identical feel |

## 8. SEO & Indexing Protection (the "don't screw up SEO" requirement)

Because it's investor-only, the cleanest protection is to keep it **out of search entirely** — a non-indexed, gated site cannot create duplicate-content or cannibalization issues with igniton.com.

- **Host on a separate subdomain or domain** (e.g., `investors.igniton.com` or a standalone domain). Never under a crawlable path of the main store.
- **Global `noindex, nofollow`** on every page — both a `<meta name="robots" content="noindex, nofollow">` and an `X-Robots-Tag: noindex, nofollow` response header (belt and suspenders).
- **`robots.txt`:** `User-agent: *` / `Disallow: /`.
- **No `sitemap.xml`** (or an empty one); do **not** submit it to Search Console.
- **Do not link to it** from the public site or any indexed page (no backlinks = no discovery).
- **Do not set canonical tags pointing to consumer pages** (irrelevant once noindexed, and avoids passing odd signals).
- **Separate analytics property** (not the consumer GA/Shopify analytics).
- **Gate it** (see §9) — auth alone keeps crawlers out; combined with noindex it's airtight.

## 9. Access Control & Investor Compliance

**Access (investor-only):**
- Gate the whole site. Simplest on Vercel: **Vercel Deployment Password Protection** (Pro/Enterprise). Code-level fallback: **Next.js middleware HTTP Basic Auth** via env vars, or a shared access-code splash. The data room can be a further gate (DocSend/Notion with per-investor links).

**Disclaimers (include in footer + relevant pages — get legal review):**
- **Not an offer:** "This website is for informational purposes only and does not constitute an offer to sell, or a solicitation of an offer to buy, any securities. Any offering will be made only to qualified/accredited investors through definitive offering documents."
- **Forward-looking statements:** "This site contains forward-looking statements, including regarding future products (e.g., in-home devices and the HIT chair), technology, and business plans. These are subject to risks and uncertainties; actual results may differ materially. Nothing here is a promise or guarantee of future performance."
- **Framework language:** "'Ignitons,' 'coherence,' and related concepts represent Igniton's framework and are not presented as established scientific consensus."
- **Product claims:** any efficacy statement retains structure/function language, correct study tier, exact figures, and the `**` FDA disclaimer.
- **No unsubstantiated claims:** omit any claim you cannot document (explicitly including any NASA/DoD reference) unless you hold proof and legal sign-off.

## 10. Assets You Must Provide (checklist — replaces every placeholder)

- [ ] Verified financials: net revenue to date, growth/run-rate, orders/customers, subscription mix, AOV, repeat, CAC/LTV
- [ ] Exact Gaia ownership % and any structural details cleared for sharing
- [ ] Cap-table summary + use of funds (if raising) — legal-approved
- [ ] IP status: patents/applications/trade secrets
- [ ] Market-size data with sources (TAM/SAM/SOM) — no invented numbers
- [ ] Operating team bios/photos
- [ ] The downloaded consumer site (HTML/CSS/assets) for design reference
- [ ] Logos/press assets; the deck/one-pager for the data room
- [ ] Legal-reviewed disclaimer language + IR contact/route
