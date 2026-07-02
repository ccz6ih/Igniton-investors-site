# Igniton Investor Site — Design System

> Extracted verbatim from the theme's own `assets/brand-tokens.css` ("single source of truth, v1.0 May 2026") and cross-checked against `ig-base.css`, `component-ig-hero.css`, and the live site. These values are copy-paste ready for Tailwind + `globals.css`.

---

## 1. Color tokens

```
--color-white:      #FFFFFF   /* page bg, cards, content surfaces */
--color-navy:       #121241   /* ALL text, primary buttons, dark sections */
--color-gold:       #B49153   /* eyebrows, italic emphasis, product names, accents */
--color-gold-bright:#D3A23C   /* particles, badges, glow highlights (use sparingly) */
--color-off-white:  #F5F1EA   /* alternating sections, hint boxes */
--color-cream-light:#FFF8ED   /* occasional warm canvas */
--color-warm-gray:  #6B6660   /* body copy captions, metadata */
--color-border:     #E5E0D6   /* 1px hairline borders */
--color-indigo:     #191880   /* secondary dark accent (rare) */
```

**Semantic aliases:** text-primary→navy, text-secondary→warm-gray, accent→gold, bg→white, bg-alt→off-white.

**Color proportion target (enforced — breaking it breaks the brand):**
`WHITE 60% · NAVY 22% · GOLD 12% · OFF-WHITE 4% · WARM-GRAY 2%`. Pages dominated by dark bands are off-brand.

> ⚠️ **Teal `#108474` is NOT in the real brand system** — it appears nowhere in the theme. The spec listed it but the source doesn't use it. Recommend dropping it. If a "science/proof" accent is ever wanted, use gold; do not introduce teal without client sign-off.

## 2. Typography

**Families**
- `--font-display: 'Playfair Display', serif` — headings, italic emphasis, product names. Weight **600** (the live `font_picker` uses `playfair_display_n6`; brand classes render regular/`400` at large sizes — use 600 for headings, matching the spec).
- `--font-body: 'Plus Jakarta Sans', sans-serif` — body, eyebrows, labels, buttons, cards. Weights 400 / 600 / 700.

Load with `next/font/google` (Playfair 600 incl. italic; Jakarta 400/600/700).

**Fluid scale (clamp)**
```
h1 hero:    clamp(2.5rem, 6vw, 4.5rem)      /* 40–72px */  line-height 1.05  ls -0.02em
h2 section: clamp(1.75rem, 4vw, 2.75rem)    /* 28–44px */  line-height 1.15  ls -0.01em
h3 subhead: clamp(1.25rem, 2.5vw, 1.75rem)  /* 20–28px */  line-height 1.25
h4 card:    clamp(0.95rem, 1.2vw, 1.125rem) /* 15–18px */  line-height 1.3  (BODY font, 600)
body:       clamp(0.9rem, 1vw, 1rem)        /* 14–16px */  line-height 1.6  ls 0.02em
small:      clamp(0.75rem, 0.9vw, 0.8125rem)/* 11–13px */  line-height 1.5
label:      0.75rem  (12px)                              ls 0.18em  UPPER  600
eyebrow:    0.6875rem(11px)                              ls 0.22em  UPPER  600  GOLD
```

**Eyebrow** — `.eyebrow`: body font, 600, uppercase, `letter-spacing:0.22em`, color gold, line-height 1.

**Italic-gold emphasis (the editorial signature)**
```css
em { font-style: italic; font-family: var(--font-display); color: var(--color-gold); }
```
Rule: **one italic emphasis per headline, max** — usually the felt-outcome word. Never italicize connectors ("and", "the", "one"). Body copy carries no italic emphasis.

**Product-name treatment** — italic gold "Igni" prefix + roman navy remainder + superscript ™:
```html
<span class="product-name"><span class="product-name__prefix">Igni</span>Cognition™</span>
```
→ build a reusable `<BrandName name="Cognition" />` component. Renders as _Igni_**Cognition**™.

## 3. Spacing & layout

```
--space-section-vertical:   7rem   /* 112px — top/bottom of EVERY primary section (THE 7REM RULE) */
--space-section-horizontal: 3rem   /* 48px */
--space-block:   4rem  /* 64px between major blocks */
--space-card:    2.5rem/* 40px card padding */
--space-element: 1.5rem/* 24px between related elements */
--space-tight:   0.75rem /* 12px */
--container-max-width: 1200px
--nav-height: 72px
--logo-height-desktop: 32px  /* 32–40px range; logo is always PNG */
```
Breakpoints: mobile/tablet 640px, desktop 1024px.
Border radius: cards `2px`, sections `4px`. Hairline: `1px solid #E5E0D6`.

**The 7rem rule:** every primary section gets 7rem vertical padding top+bottom. If sections feel cramped, add space — never less. (Live `ig-section` uses 9.6rem desktop / ~5.7rem mobile — either is on-brand; 7rem is the documented target.)

## 4. Section rhythm (alternating backgrounds)

```css
.section-primary { padding: 7rem 3rem; background: #FFFFFF; }          /* white */
.section-alt     { padding: 7rem 3rem; background: #F5F1EA; }          /* off-white — the alternator */
.section-dark    { padding: 7rem 3rem; background: #121241; color:#FFF; } /* navy — FLAT, no gradients */
```
Pattern per page: eyebrow → Playfair headline (italic payoff) → prose → CTA. Alternate white ↔ off-white, with occasional navy bands (hero, CTA). **Dark sections are solid navy, flat — no gradient overlays.** Gold sits as accent; white as primary text.

## 5. Buttons — two levels ONLY

```css
/* Primary — filled navy */
.btn-primary {
  padding: 12px 24px; font-family: var(--font-body); font-size: .75rem;
  font-weight: 600; letter-spacing: .18em; text-transform: uppercase;
  color: #fff; background: #121241; border: none; transition: opacity .25s;
}
.btn-primary:hover { opacity: .9; }
/* (ig-base variant hovers navy→gold with translateY(-1px) — either is acceptable) */

/* Secondary — text + gold arrow */
.btn-secondary {
  display: inline-flex; align-items: center; gap: .5em;
  font-family: var(--font-body); font-weight: 500; color: #121241; background: none; border: none;
}
.btn-secondary::after { content: '→'; color: #B49153; }
```
> ⚠️ **Do NOT introduce a third button style.** No gold-outlined, ghost-with-border, or icon-only CTAs. Two levels — that's it.

**The Request-Access CTA** (header top-right, replacing the consumer "Log in/Cart" slot) is the primary button rendered in **bright gold** to match the consumer accent-button treatment.

## 6. Hero & the luminous glow motif

Structure inside the hero: `eyebrow → headline (Playfair, one <em> gold accent) → subheadline (max-width ~52ch) → buttons → proof-stat row`. Hero `min-height ~700px`, `overflow:hidden`, navy or light background.

**The glow = a pure CSS radial-gradient orb** (rebuild this, not the sparkle.gif):
```css
.hero-orb {
  position:absolute; left:50%; top:50%; transform:translate(-50%,-50%);
  width:750px; height:750px; border-radius:50%; opacity:.35; filter:blur(2px); z-index:1;
  background: radial-gradient(circle at 40% 40%,
    color-mix(in srgb, #B49153 15%, #fdfaf5) 0%,
    color-mix(in srgb, #B49153 30%, #fdfaf5) 55%,
    #c9a96e 100%);
}
```
On a **navy** hero, warm the orb toward gold on dark navy for the "Born from Light" signature. Mobile: shrink to `clamp(300px,80vw,500px)`, shift toward the edge.

**Proof-stat band** (its own element): flex row, `gap:3rem`, hairline `border-right` between items. Number in Playfair (~4.4rem, `font-variant-numeric: tabular-nums`); the unit (`%`) is gold, ~`.55em`, superscript-lifted. Label in Jakarta uppercase, `letter-spacing:.05em`, `opacity:.6`. Mobile → 2-col grid.

## 7. Header & footer

**Header** — matches the consumer chrome: **light/white, sticky, 72px**, native (non-inverted) logo PNG left + an "Investors" lockup, investor nav center/right (uppercase, `letter-spacing:.16em`, 600), a subtle gold **Shop ↗** link out to the store, and the bright-gold **Contact IR** button in the top-right accent slot. (The consumer header uses scheme-1: white bg `#ffffff`, navy foreground — so the investor header is light to match, not navy.)

**Hero** — also **light** to match the consumer home (scheme-1, `orb_style: warm`): warm-white canvas `#fdfaf5`, **left-aligned** navy Playfair headline with one gold italic accent, warm glow orb positioned to the **right** (x≈74%) so text stays on clean canvas, navy primary + text-link secondary, metric band below. (An earlier dark-navy hero with a centered orb behind white text was replaced — it clashed with the consumer home and hurt readability.)

**Footer** — dark navy (`#121241`), gold wordmark. Columns of investor links (Overview · Technology · Team · Roadmap · Request Access · Legal) + "**Powered by Ignitons™**" signature + social icons + the disclaimer block (see [04_COMPLIANCE.md](04_COMPLIANCE.md)). Reveal-on-scroll cascade.

## 8. Motion

- **Library:** GSAP 3.12 + ScrollTrigger, lazy-loaded. Reveals also work via IntersectionObserver as a no-JS-friendly fallback.
- **Scroll reveal:** elements start `opacity:0` + small transform (`translateY(24px)` fade-up, etc.), transition `700ms cubic-bezier(0.22,0.61,0.36,1)`, cascade delay `~75ms` per item. Class flips to visible on intersect.
- **Ambient:** the hero orb (CSS), optional floating gold particles (indigo `#191880` / `#1B1B57` / gold `#D3A23C`), optional floating "sun" scroll-to-top CTA.
- **Reduced motion:** honor `prefers-reduced-motion` everywhere — force `opacity:1; transform:none; transition:none`, disable ambient keyframes. Content must be fully visible without JS.

## 9. Drop-in `globals.css` `:root` (ready to paste)

```css
:root {
  --color-white:#FFFFFF; --color-navy:#121241; --color-gold:#B49153;
  --color-gold-bright:#D3A23C; --color-off-white:#F5F1EA; --color-cream-light:#FFF8ED;
  --color-warm-gray:#6B6660; --color-border:#E5E0D6; --color-indigo:#191880;
  --font-display:'Playfair Display',serif; --font-body:'Plus Jakarta Sans',sans-serif;
  --space-section-v:7rem; --space-section-h:3rem; --space-block:4rem; --space-card:2.5rem;
  --space-element:1.5rem; --space-tight:.75rem; --container:1200px; --nav-height:72px;
  --radius-card:2px; --radius-section:4px; --border-hairline:1px solid #E5E0D6;
  --ls-eyebrow:.22em; --ls-label:.18em;
}
```

## 10. Tailwind theme extension (ready to paste)

```ts
// tailwind.config.ts → theme.extend
colors: {
  navy:'#121241', gold:'#B49153', 'gold-bright':'#D3A23C',
  'off-white':'#F5F1EA', 'cream-light':'#FFF8ED', 'warm-gray':'#6B6660',
  'hairline':'#E5E0D6', indigo:'#191880',
},
fontFamily: { display:['var(--font-playfair)','serif'], body:['var(--font-jakarta)','sans-serif'] },
maxWidth: { container:'1200px' },
letterSpacing: { eyebrow:'0.22em', label:'0.18em' },
```

## 11. Non-negotiable brand rules (from the source's own checklist)
✅ Hero H1 at full scale (largest element on the page) · stat band as its own section · one italic per headline max · PNG logo always · two CTA levels only · real bottle photography (no AI product imagery) · reserve "quantum" for the science explainer.
❌ Don't shrink the hero to one line · don't jam stats as chips under the hero · don't italic-gold every emphasis word · don't recreate the logo in HTML/CSS · don't mix button styles · don't repeat "quantum-charged" 5+ times.
