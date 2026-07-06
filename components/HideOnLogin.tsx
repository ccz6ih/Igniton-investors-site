'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

// Hides the site chrome (header/footer) on the standalone /login splash.
export function HideOnLogin({ children }: { children: ReactNode }) {
  const pathname = usePathname()
  if (pathname === '/login') return null
  return <>{children}</>
}
