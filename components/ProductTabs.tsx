'use client'

import { useState, type ReactNode } from 'react'

// Section switcher for the Products page — the buttons show one panel at a
// time. Panels are passed as an array (NOT children) so grouped fragments stay
// intact; React.Children.toArray would flatten fragments and mis-map the tabs.
export function ProductTabs({ labels, panels }: { labels: string[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className="mx-auto max-w-5xl px-6 pt-16 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Products</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3">
          {labels.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={active === i}
              className={`rounded-lg border px-5 py-2.5 text-sm font-semibold transition ${
                active === i
                  ? 'border-navy bg-navy text-white'
                  : 'border-navy/30 text-navy hover:border-navy hover:bg-off-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-2">{panels[active]}</div>
    </div>
  )
}
