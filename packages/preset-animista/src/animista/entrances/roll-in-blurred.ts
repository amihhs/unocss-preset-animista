import type { Theme } from '@unocss/preset-mini'
/**
 * https://animista.net/play/basic/scale-up
 */
export function rollInBlurredAnimista(theme: Theme) {
  const keyframes: Record<string, string> = {}
  const duration = '.4s'
  const timingFns = 'cubic-bezier(0.39, 0.575, 0.565, 1)'
  const mode = 'both'

  for (const key in keyframes) {
    theme.animation!.keyframes![key] = keyframes[key]
    theme.animation!.durations![key] = duration
    theme.animation!.timingFns![key] = timingFns
    theme.animation!.mode![key] = mode
  }

  return theme
}
