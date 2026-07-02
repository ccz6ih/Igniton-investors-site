# Downloads reusable Igniton brand assets from the Shopify CDN into /public.
# See docs/03_ASSET_MANIFEST.md. Run: npm run assets
$ErrorActionPreference = 'Continue'
$base = 'https://www.igniton.com/cdn/shop/files/'
$map = @{
  'igniton-tm-191880-transparent-1600x480_Logo_c262d507-7f26-4d6d-931b-2c8181af072f.png' = 'public/brand/logo.png'
  'igniton-symbol-circle-transparent.webp'                                                = 'public/brand/favicon.webp'
  'dramatic-sunset-2026-03-26-09-09-32-utc.jpg'                                           = 'public/hero/sunset.jpg'
  'igniton-solar2-background-2560x1080.jpg'                                                = 'public/hero/solar.jpg'
  'Igniton_Meditation_MA_0090.jpg'                                                        = 'public/lifestyle/meditation.jpg'
  'cognition-new.jpg'                                                                     = 'public/products/cognition.jpg'
  'igniclongevity.png'                                                                    = 'public/products/longevity.png'
  'Peptide.jpg'                                                                           = 'public/products/peptide.jpg'
  'Sleep.jpg'                                                                             = 'public/products/rem.jpg'
  'Cog-Lon.jpg'                                                                           = 'public/products/bundle.jpg'
  'Dr._Konstantin_Korotkov.jpg'                                                           = 'public/team/korotkov.jpg'
  'Dr._Raul_Valverde_PhD.jpg'                                                             = 'public/team/valverde.jpg'
  'Dr_Gail_King.webp'                                                                     = 'public/team/king.webp'
  'dave-asprey.jpg'                                                                       = 'public/team/asprey.jpg'
  'James_Colquhoun_Bio_Pic.jpg'                                                           = 'public/team/colquhoun.jpg'
  'Doctorresults.png'                                                                     = 'public/science/cognition-results.png'
  'Longevityresults.png'                                                                  = 'public/science/longevity-results.png'
  'Articles-of-Incorporation-CO.pdf'                                                      = 'public/docs/articles-of-incorporation.pdf'
  'Ignition_Press_media_Kit_2.pdf'                                                        = 'public/docs/press-kit.pdf'
}
foreach ($k in $map.Keys) {
  $dest = $map[$k]
  $dir = Split-Path $dest
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Force $dir | Out-Null }
  $url = $base + [uri]::EscapeDataString($k)
  try {
    Invoke-WebRequest -Uri $url -OutFile $dest -ErrorAction Stop -UseBasicParsing
    Write-Host "OK   $dest"
  } catch {
    Write-Host "MISS $k  ->  try https://cdn.shopify.com/s/files/1/0604/2573/2151/files/  or the Shopify Files admin"
  }
}
