'use client'

import { useEffect, useRef, type ReactNode, type ElementType } from 'react'

// Scroll-reveal wrapper. Progressive enhancement: content is visible without JS
// (globals.css .no-js fallback) and reveal is skipped under prefers-reduced-motion.
export function Reveal({
  children,
  as: Tag = 'div',
  delay = 0,
  className = '',
}: {
  children: ReactNode
  as?: ElementType
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.classList.add('is-visible')
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -60px 0px', threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      data-reveal=""
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
      className={className}
    >
      {children}
    </Tag>
  )
}
