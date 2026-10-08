import { chapters } from './manual'
import { chapters2 } from './manual2'
import { chapters3 } from './manual3'

export { ui, pick } from './manual'
export type { Lang, L, Block, Chapter } from './manual'

export const allChapters = [...chapters, ...chapters2, ...chapters3]
