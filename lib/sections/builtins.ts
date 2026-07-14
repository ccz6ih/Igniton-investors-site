import type { Block } from './types'

// Metadata for each page's built-in (bespoke) sections, in their natural order.
// Client-safe: plain data only (the render components live in
// components/sections/builtinComponents.tsx). A page appears here once it has
// been converted to the arranger/PageRenderer model.
export const BUILTIN_SECTIONS: Record<string, { ref: string; label: string }[]> = {
  home: [
    { ref: 'hero', label: 'Hero image' },
    { ref: 'statement', label: 'Company statement + video' },
    { ref: 'carousel', label: 'Facility carousel' },
    { ref: 'disclaimer', label: 'Disclaimer' },
  ],
}

export function hasBuiltins(slug: string): boolean {
  return Boolean(BUILTIN_SECTIONS[slug])
}

export function builtinLabel(slug: string, ref: string): string {
  return (BUILTIN_SECTIONS[slug] ?? []).find((s) => s.ref === ref)?.label ?? 'Section'
}

function builtinBlock(ref: string): Block {
  return { id: `builtin:${ref}`, type: 'builtin', ref }
}

// The default page = built-in sections in natural order (identical to the
// original hand-coded page).
export function defaultLayout(slug: string): Block[] {
  return (BUILTIN_SECTIONS[slug] ?? []).map((s) => builtinBlock(s.ref))
}

// Keep a stored layout in sync with the code: drop built-in refs that no longer
// exist and append any newly-added built-in sections at the end.
export function reconcileLayout(slug: string, stored: Block[]): Block[] {
  const valid = new Set((BUILTIN_SECTIONS[slug] ?? []).map((s) => s.ref))
  const kept = stored.filter((b) => b.type !== 'builtin' || valid.has(b.ref))
  const present = new Set(
    kept.filter((b) => b.type === 'builtin').map((b) => (b as { ref: string }).ref),
  )
  const missing = (BUILTIN_SECTIONS[slug] ?? [])
    .filter((s) => !present.has(s.ref))
    .map((s) => builtinBlock(s.ref))
  return [...kept, ...missing]
}
