import type { ReactNode } from 'react'

type Tone = 'primary' | 'alt' | 'dark'

const toneClass: Record<Tone, string> = {
  primary: 'bg-white text-navy',
  alt: 'bg-off-white text-navy',
  dark: 'bg-navy text-white on-dark',
}

// A primary content section with the brand's 7rem vertical rhythm and
// alternating background tone. `id` enables anchor navigation.
export function Section({
  id,
  tone = 'primary',
  children,
  className = '',
}: {
  id?: string
  tone?: Tone
  children: ReactNode
  className?: string
}) {
  return (
    <section
      id={id}
      className={`${toneClass[tone]} py-[clamp(3.5rem,9vw,7rem)] ${className}`}
    >
      <div className="container-brand">{children}</div>
    </section>
  )
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>
}
