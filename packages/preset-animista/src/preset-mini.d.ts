import type { ThemeAnimation } from '@unocss/preset-mini'

declare module '@unocss/preset-mini' {
  interface ThemeAnimation extends ThemeAnimation {
    direction?: Record<string, 'normal' | 'reverse' | 'alternate' | 'alternate-reverse' | 'inherit' | 'initial'| 'revert'| 'revert-layer'| 'unset'>
    mode?: Record<string, 'none' | 'forwards'|'backwards'|'both'  | 'inherit' | 'initial'| 'revert'| 'revert-layer'| 'unset'>
  }
}