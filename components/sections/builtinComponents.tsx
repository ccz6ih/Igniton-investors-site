import type { ReactNode } from 'react'
import { HomeHero, HomeStatement, HomeCarousel, HomeDisclaimer } from './builtins/home'

// Maps each page's built-in section refs to their render component. Async
// server components are allowed (React 19 / Next 15). Extend as pages are
// converted to the arranger model.
type BuiltinComponent = () => ReactNode | Promise<ReactNode>

export const BUILTIN_COMPONENTS: Record<string, Record<string, BuiltinComponent>> = {
  home: {
    hero: HomeHero,
    statement: HomeStatement,
    carousel: HomeCarousel,
    disclaimer: HomeDisclaimer,
  },
}
