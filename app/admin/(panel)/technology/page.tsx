import { getContent } from '@/lib/content'
import { TechnologyEditor } from './TechnologyEditor'

// Loads the current live content (falls back to compiled-in defaults before the
// first edit) and hands it to the client editor.
export default async function EditTechnologyPage() {
  const technologyDeck = await getContent('technologyDeck')
  return <TechnologyEditor initial={technologyDeck} />
}
