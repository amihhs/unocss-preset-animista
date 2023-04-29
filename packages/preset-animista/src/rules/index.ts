/* @export-submodules */
import type { Rule } from '@unocss/core'
import { animations } from './animation'

export const rules: Rule[] = [
  animations,
].flat(1)
