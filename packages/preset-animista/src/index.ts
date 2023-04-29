import type { Preset } from '@unocss/core'
import type { PresetMiniOptions, Theme } from '@unocss/preset-mini'
import { rules } from './rules'
import { createTheme } from './theme'

export { colors, preflights } from '@unocss/preset-mini'
export type { Theme } from '@unocss/preset-mini'
export { rules, createTheme }

export interface PresetAnimistaOptions extends PresetMiniOptions { }

export function presetAnimista(options: PresetAnimistaOptions = {}): Preset<Theme> {
  options.dark = options.dark ?? 'class'
  options.attributifyPseudo = options.attributifyPseudo ?? false

  return {
    name: '@amihhs/preset-animista',
    theme: createTheme(),
    rules,
    options,
    prefix: options.prefix,
  }
}

export default presetAnimista
