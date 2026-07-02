// Product-name treatment: italic-gold "Igni" prefix + roman navy remainder + ™.
// e.g. <BrandName suffix="Cognition" /> → *Igni*Cognition™

export function BrandName({
  suffix,
  tm = true,
  className = '',
}: {
  suffix: string
  tm?: boolean
  className?: string
}) {
  return (
    <span className={`font-display ${className}`}>
      <span className="italic text-gold">Igni</span>
      {suffix}
      {tm && <sup className="text-[0.5em] align-super">™</sup>}
    </span>
  )
}
