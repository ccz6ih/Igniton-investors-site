import { Hero } from '@/components/Hero'
import {
  Thesis,
  Technology,
  Portfolio,
  Traction,
  Company,
  Roadmap,
  Contact,
} from '@/components/sections'

// Long-scroll investor Overview with anchored sections.
export default function HomePage() {
  return (
    <>
      <Hero />
      <Thesis />
      <Technology />
      <Portfolio />
      <Traction />
      <Company />
      <Roadmap />
      <Contact />
    </>
  )
}
