import type { Theme } from '@unocss/preset-mini'
/**
 * https://animista.net/play/basic/scale-down
 */
export function kenburnsAnimista(theme: Theme) {
  const keyframes: Record<string, string> = {
    'kenburns-top': '{0%{transform:scale(1) translateY(0);transform-origin:50% 16%}100%{transform:scale(1.25) translateY(-15px);transform-origin:top}}',
    'kenburns-top-right': '{0%{transform:scale(1) translate(0,0);transform-origin:84% 16%}100%{transform:scale(1.25) translate(20px,-15px);transform-origin:right top}}',
    'kenburns-right': '{0%{transform:scale(1) translate(0,0);transform-origin:84% 50%}100%{transform:scale(1.25) translateX(20px);transform-origin:right}}',
    'kenburns-bottom-right': '{0%{transform:scale(1) translate(0,0);transform-origin:84% 84%}100%{transform:scale(1.25) translate(20px,15px);transform-origin:right bottom}}',
    'kenburns-bottom': '{0%{transform:scale(1) translateY(0);transform-origin:50% 84%}100%{transform:scale(1.25) translateY(15px);transform-origin:bottom}}',
    'kenburns-bottom-left': '{0%{transform:scale(1) translate(0,0);transform-origin:16% 84%}100%{transform:scale(1.25) translate(-20px,15px);transform-origin:left bottom}}',
    'kenburns-left': '{0%{transform:scale(1) translate(0,0);transform-origin:16% 50%}100%{transform:scale(1.25) translate(-20px,15px);transform-origin:left}}',
    'kenburns-top-left': '{0%{transform:scale(1) translate(0,0);transform-origin:16% 16%}100%{transform:scale(1.25) translate(-20px,-15px);transform-origin:top left}}',
  }
  const duration = '5s'
  const timingFns = 'ease-out'
  const mode = 'both'

  for (const key in keyframes) {
    theme.animation!.keyframes![key] = keyframes[key]
    theme.animation!.durations![key] = duration
    theme.animation!.timingFns![key] = timingFns
    theme.animation!.mode![key] = mode
  }
  return theme
}
