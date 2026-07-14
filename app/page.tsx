import { PageRenderer } from '@/components/sections/PageRenderer'

// Home is composed from its arranged layout (built-in sections + any custom
// sections). Reorder / hide / add sections in /admin/sections/home.
export default function HomePage() {
  return <PageRenderer slug="home" />
}
