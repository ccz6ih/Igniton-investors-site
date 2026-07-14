// Resolved Supabase connection values.
//
// The URL and anon/publishable key are PUBLIC by design — the publishable key
// is shipped in every browser bundle, and the data is protected by Row-Level
// Security, not by keeping this key secret. Committing them as fallbacks lets
// the app run with no Vercel env setup. Set NEXT_PUBLIC_SUPABASE_URL /
// NEXT_PUBLIC_SUPABASE_ANON_KEY to override (e.g. to point at another project).
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? 'https://mfjibmyfbiwyckkeswnu.supabase.co'

export const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  'sb_publishable_spm9eCE1BuZ1o-z73CKFDw_71coC7H5'
