/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Public, indexable site (client decision). No noindex headers.
  images: {
    // Allow reusing brand imagery from the Shopify CDN if referenced by remote URL.
    // Preferred path is downloading into /public (see scripts/download-assets.ps1),
    // but these remotePatterns keep remote <Image> working as a fallback.
    remotePatterns: [
      { protocol: 'https', hostname: 'www.igniton.com' },
      { protocol: 'https', hostname: 'cdn.shopify.com' },
      // Admin-uploaded images (Supabase Storage — site-images bucket).
      { protocol: 'https', hostname: 'mfjibmyfbiwyckkeswnu.supabase.co' },
    ],
  },
}

export default nextConfig
