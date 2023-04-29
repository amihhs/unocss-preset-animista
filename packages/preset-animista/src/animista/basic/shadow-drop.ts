import type { Theme } from '@unocss/preset-mini'
/**
 * https://animista.net/play/basic/scale-up
 */
export function shadowDropBasic(theme: Theme) {
  const keyframes: Record<string, string> = {
    'shadow-drop-center': '{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:0 0 20px 0 rgba(0,0,0,.35)}}',
    'shadow-drop-top': '{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:0 -12px 20px -12px rgba(0,0,0,.35)}}',
    'shadow-drop-right': '{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:12px 0 20px -12px rgba(0,0,0,.35)}}',
    'shadow-drop-bottom': '{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:0 12px 20px -12px rgba(0,0,0,.35)}}',
    'shadow-drop-left': '{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:-12px 0 20px -12px rgba(0,0,0,.35)}}',
    'shadow-drop-lr': '{0%{box-shadow:0 0 0 0 transparent,0 0 0 0 transparent}100%{box-shadow:-12px 0 20px -12px rgba(0,0,0,.35),12px 0 20px -12px rgba(0,0,0,.35)}}',
    'shadow-drop-tb': '{0%{box-shadow:0 0 0 0 transparent,0 0 0 0 transparent}100%{box-shadow:0 -12px 20px -12px rgba(0,0,0,.35),0 12px 20px -12px rgba(0,0,0,.35)}}',
    'shadow-drop-tr': '{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:12px -12px 20px -12px rgba(0,0,0,.35)}}',
    'shadow-drop-br': '{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:12px 12px 20px -12px rgba(0,0,0,.35)}}',
    'shadow-drop-bl': '{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:-12px 12px 20px -12px rgba(0,0,0,.35)}}',
    'shadow-drop-tl': '{0%{box-shadow:0 0 0 0 transparent}100%{box-shadow:-12px -12px 20px -12px rgba(0,0,0,.35)}}',
  }
  const duration = '.4s'
  const timingFns = 'cubic-bezier(.25,.46,.45,.94)'
  const mode = 'both'

  for (const key in keyframes) {
    theme.animation!.keyframes![key] = keyframes[key]
    theme.animation!.durations![key] = duration
    theme.animation!.timingFns![key] = timingFns
    theme.animation!.mode![key] = mode
  }

  return theme
}
