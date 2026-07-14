import { getContent } from '@/lib/content'
import { HomeEditor } from './HomeEditor'

// Loads the current live content (falls back to compiled-in defaults before the
// first edit) and hands it to the client editor.
export default async function EditHomePage() {
  const [home, disclaimer] = await Promise.all([
    getContent('home'),
    getContent('disclaimer'),
  ])
  return <HomeEditor initialHome={home} initialDisclaimer={disclaimer} />
}
