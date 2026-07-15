import type { ReactNode } from 'react'

// Renders a plain string with:
//  • lightweight markdown emphasis — *word*/_word_ → italic, **word** → bold
//    (so an editor can italicize the brand, e.g. type *Igni*ton for the company)
//  • automatic italic on the "Igni" of PRODUCT names — "Igni" immediately
//    followed by a capital letter (IgniCognition, IgniLongevity, IgniREM,
//    IgniPeptide, IgniCoherence). It deliberately does NOT touch "Igniton",
//    "Ignitons", or "ignitons" (the quasi-particle), which stay roman.
export function RichText({ children }: { children: string }) {
  return <>{parseMarkdown(children)}</>
}

function autoBrand(text: string, keyBase: string): ReactNode[] {
  const out: ReactNode[] = []
  const re = /Igni(?=[A-Z])/g
  let last = 0
  let i = 0
  let m: RegExpExecArray | null
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index))
    out.push(<em key={`${keyBase}-b${i++}`}>Igni</em>)
    last = m.index + 4
  }
  if (last < text.length) out.push(text.slice(last))
  return out
}

function parseMarkdown(text: string): ReactNode[] {
  const nodes: ReactNode[] = []
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|_[^_]+_)/g
  let last = 0
  let key = 0
  let m: RegExpExecArray | null
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(...autoBrand(text.slice(last, m.index), `t${key}`))
    const tok = m[0]
    if (tok.startsWith('**')) {
      nodes.push(<strong key={`s${key++}`}>{tok.slice(2, -2)}</strong>)
    } else {
      nodes.push(<em key={`e${key++}`}>{tok.slice(1, -1)}</em>)
    }
    last = m.index + tok.length
  }
  if (last < text.length) nodes.push(...autoBrand(text.slice(last), `t${key}`))
  return nodes
}
