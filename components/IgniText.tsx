// Renders a string with every occurrence of "Igni" italicized (brand rule for
// product names like IgniLongevity, IgniCognition, Igniton Equipment).
export function IgniText({ children }: { children: string }) {
  const parts = children.split('Igni')
  return (
    <>
      {parts.map((p, i) => (
        <span key={i}>
          {i > 0 && <span className="italic">Igni</span>}
          {p}
        </span>
      ))}
    </>
  )
}
