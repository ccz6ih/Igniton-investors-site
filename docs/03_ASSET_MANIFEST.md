# Igniton Investor Site — Asset Manifest

> Brand images live on the Shopify **CDN** (not in the theme export). Live base: `https://www.igniton.com/cdn/shop/files/<filename>`. Only ~15 images + 1 PDF are needed for the investor site — listed below with the target `/public` path. A download script is at the bottom.

Rule from the brand doc: **use real bottle photography — never AI-generated product imagery.** Logo is always the PNG, never recreated in HTML/CSS.

---

## Needed assets (download these)

| Purpose | Source filename (on CDN) | → target in `/public` |
|---|---|---|
| **Wordmark logo** (transparent PNG) | `igniton-tm-191880-transparent-1600x480_Logo_c262d507-7f26-4d6d-931b-2c8181af072f.png` | `public/brand/logo.png` |
| **Favicon** (circle mark) | `igniton-symbol-circle-transparent.webp` | `public/brand/favicon.webp` |
| **Investor hero bg** (dramatic sunset) | `dramatic-sunset-2026-03-26-09-09-32-utc.jpg` | `public/hero/sunset.jpg` |
| Solar/energy background (alt hero) | `igniton-solar2-background-2560x1080.jpg` | `public/hero/solar.jpg` |
| Cosmic/galaxy background | `big-bang-black-hole-supermassive-star-galaxy-c-2026-03-13-04-12-15-utc.jpg` | `public/hero/cosmos.jpg` |
| Lifestyle (meditation, on-brand) | `Igniton_Meditation_MA_0090.jpg` | `public/lifestyle/meditation.jpg` |
| **Product — Cognition** | `cognition-new.jpg` | `public/products/cognition.jpg` |
| **Product — Longevity** | `igniclongevity.png` (or `Longevity_c426deb9-bc89-4147-a2be-4bb6c3b54122.jpg`) | `public/products/longevity.png` |
| **Product — Peptide serum** | `Peptide.jpg` | `public/products/peptide.jpg` |
| **Product — REM Sleep** | `Sleep.jpg` | `public/products/rem.jpg` |
| Bundle (Cognition+Longevity) | `Cog-Lon.jpg` | `public/products/bundle.jpg` |
| Advisor — Korotkov | `Dr._Konstantin_Korotkov.jpg` | `public/team/korotkov.jpg` |
| Advisor — Valverde | `Dr._Raul_Valverde_PhD.jpg` | `public/team/valverde.jpg` |
| Advisor — Gail King | `Dr_Gail_King.webp` | `public/team/king.webp` |
| Advisor — Dave Asprey | `dave-asprey.jpg` | `public/team/asprey.jpg` |
| Advisor — James Colquhoun | `James_Colquhoun_Bio_Pic.jpg` | `public/team/colquhoun.jpg` |
| Clinical results graphic (cognition) | `Doctorresults.png` | `public/science/cognition-results.png` |
| Clinical results graphic (longevity) | `Longevityresults.png` | `public/science/longevity-results.png` |
| **Articles of Incorporation (PDF)** | `Articles-of-Incorporation-CO.pdf` | `public/docs/articles-of-incorporation.pdf` |
| Press/media kit (optional) | `Ignition_Press_media_Kit_2.pdf` | `public/docs/press-kit.pdf` |

**Missing / to source from client:** founder photo of **Jirka Rysavy** (no clean headshot found in the theme — request one), **Dr. Ken Ro** headshot, and any real award badges (COVR) if used.

**Do NOT reuse:** cognitive-test-app UI chrome, ebook covers, discount/guarantee badges, "$100 off" offer creatives, campaign/landing imagery — all commerce/marketing artifacts.

---

## Download script (PowerShell) → run from project root once `/public` exists

```powershell
$base = "https://www.igniton.com/cdn/shop/files/"
$map = @{
  "igniton-tm-191880-transparent-1600x480_Logo_c262d507-7f26-4d6d-931b-2c8181af072f.png" = "public/brand/logo.png"
  "igniton-symbol-circle-transparent.webp" = "public/brand/favicon.webp"
  "dramatic-sunset-2026-03-26-09-09-32-utc.jpg" = "public/hero/sunset.jpg"
  "igniton-solar2-background-2560x1080.jpg" = "public/hero/solar.jpg"
  "big-bang-black-hole-supermassive-star-galaxy-c-2026-03-13-04-12-15-utc.jpg" = "public/hero/cosmos.jpg"
  "Igniton_Meditation_MA_0090.jpg" = "public/lifestyle/meditation.jpg"
  "cognition-new.jpg" = "public/products/cognition.jpg"
  "igniclongevity.png" = "public/products/longevity.png"
  "Peptide.jpg" = "public/products/peptide.jpg"
  "Sleep.jpg" = "public/products/rem.jpg"
  "Cog-Lon.jpg" = "public/products/bundle.jpg"
  "Dr._Konstantin_Korotkov.jpg" = "public/team/korotkov.jpg"
  "Dr._Raul_Valverde_PhD.jpg" = "public/team/valverde.jpg"
  "Dr_Gail_King.webp" = "public/team/king.webp"
  "dave-asprey.jpg" = "public/team/asprey.jpg"
  "James_Colquhoun_Bio_Pic.jpg" = "public/team/colquhoun.jpg"
  "Doctorresults.png" = "public/science/cognition-results.png"
  "Longevityresults.png" = "public/science/longevity-results.png"
  "Articles-of-Incorporation-CO.pdf" = "public/docs/articles-of-incorporation.pdf"
  "Ignition_Press_media_Kit_2.pdf" = "public/docs/press-kit.pdf"
}
foreach ($k in $map.Keys) {
  $dest = $map[$k]; $dir = Split-Path $dest
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
  try { Invoke-WebRequest -Uri ($base + [uri]::EscapeDataString($k)) -OutFile $dest -ErrorAction Stop; Write-Host "OK  $dest" }
  catch { Write-Host "MISS $k  (may need /cdn/shop/files vs /s/files, or fetch from Shopify Files admin)" }
}
```

> **Committed-repo notes (post-cleanup):** `products/longevity.png` was resampled 3000²→1500² (11 MB → 1.3 MB). `hero/solar.jpg` came down broken (12 KB) and is **not committed** — re-fetch or replace before using it. `docs/press-kit.pdf` (17 MB) is **not committed** to keep the repo lean; run `npm run assets` to pull it if you decide to link it. `public/` totals ~5.5 MB.
>
> Note: some assets historically resolved under `https://cdn.shopify.com/s/files/1/0604/2573/2151/files/<filename>`. If a URL 404s, try that base, or pull the file directly from the store's **Content → Files** admin. Verify licensing on the stock photos (envato-style filenames indicate licensed stock — confirm rights before reuse).
