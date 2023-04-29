import type { Theme } from '@unocss/preset-mini'
/**
 * https://animista.net/play/basic/scale-up
 */
export function trackingInText(theme: Theme) {
  const keyframes: Record<string, string> = {
    'tracking-in-expand': '{0%{letter-spacing:-.5em;opacity:0}40%{opacity:.6}100%{opacity:1}}',
    'tracking-in-expand-fwd': '{0%{letter-spacing:-.5em;transform:translateZ(-700px);opacity:0}40%{opacity:.6}100%{transform:translateZ(0);opacity:1}}',
    'tracking-in-expand-fwd-top': '{0%{letter-spacing:-.5em;transform:translateZ(-700px) translateY(-500px);opacity:0}40%{opacity:.6}100%{transform:translateZ(0) translateY(0);opacity:1}}',
    'tracking-in-expand-fwd-bottom': '{0%{letter-spacing:-.5em;transform:translateZ(-700px) translateY(500px);opacity:0}40%{opacity:.6}100%{transform:translateZ(0) translateY(0);opacity:1}}',
    'tracking-in-contract': '{0%{letter-spacing:1em;opacity:0}40%{opacity:.6}100%{letter-spacing:normal;opacity:1}}',
    'tracking-in-contract-bck': '{0%{letter-spacing:1em;transform:translateZ(400px);opacity:0}40%{opacity:.6}100%{transform:translateZ(0);opacity:1}}',
    'tracking-in-contract-bck-top': '{0%{letter-spacing:1em;transform:translateZ(400px) translateY(-300px);opacity:0}40%{opacity:.6}100%{transform:translateZ(0) translateY(0);opacity:1}}',
    'tracking-in-contract-bck-bottom': '{0%{letter-spacing:1em;transform:translateZ(400px) translateY(300px);opacity:0}40%{opacity:.6}100%{transform:translateZ(0) translateY(0);opacity:1}}',
  }
  const duration = '.7s'
  const timingFns = 'cubic-bezier(.215,.61,.355,1.000)'
  const mode = 'both'

  for (const key in keyframes) {
    theme.animation!.keyframes![key] = keyframes[key]
    theme.animation!.durations![key] = duration
    theme.animation!.timingFns![key] = timingFns
    theme.animation!.mode![key] = mode
  }

  return theme
}
