// Insertion points ("slots") for custom sections on each page — the gaps
// between the fixed sections. Each id maps to a <PageSections slot="id"> anchor
// placed in that page's JSX. 'bottom' is the default for new/legacy blocks.

export type Slot = { id: string; label: string }

export const DEFAULT_SLOT = 'bottom'

export const PAGE_SLOTS: Record<string, Slot[]> = {
  home: [
    { id: 'afterHero', label: 'After the hero image' },
    { id: 'afterIntro', label: 'After the company statement' },
    { id: 'afterCarousel', label: 'After the facility carousel' },
    { id: 'bottom', label: 'Bottom of page' },
  ],
  'about-us': [
    { id: 'top', label: 'Top of page' },
    { id: 'afterInc', label: 'After the Igniton Inc. intro' },
    { id: 'bottom', label: 'Bottom of page' },
  ],
  'product-overview': [
    { id: 'top', label: 'Top of page' },
    { id: 'afterProducts', label: 'After the products & awards' },
    { id: 'afterWorldRecord', label: 'After the world record' },
    { id: 'afterDevices', label: 'After the biophotonic devices' },
    { id: 'bottom', label: 'Bottom of page' },
  ],
  technology: [
    { id: 'top', label: 'Top of page' },
    { id: 'afterIntro', label: 'After the intro' },
    { id: 'afterCurrent', label: 'After current equipment' },
    { id: 'bottom', label: 'Bottom of page' },
  ],
  science: [
    { id: 'top', label: 'Top of page' },
    { id: 'afterIntro', label: 'After the opening intro' },
    { id: 'afterPhysics', label: 'After the physics section' },
    { id: 'bottom', label: 'Bottom of page' },
  ],
}

export function slotsFor(slug: string): Slot[] {
  return PAGE_SLOTS[slug] ?? [{ id: 'bottom', label: 'Bottom of page' }]
}

export function slotLabel(slug: string, id: string | undefined): string {
  const target = id ?? DEFAULT_SLOT
  return slotsFor(slug).find((s) => s.id === target)?.label ?? 'Bottom of page'
}
