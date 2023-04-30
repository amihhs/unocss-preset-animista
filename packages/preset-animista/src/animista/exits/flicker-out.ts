import type { Theme } from '@unocss/preset-mini'

export function flickerOutExits(theme: Theme) {
  const keyframes: Record<string, string> = {
    'flicker-out-1': '{0%{opacity:1}13.9%{opacity:1}14%{opacity:0;box-shadow:none}14.9%{opacity:0;box-shadow:none}15%{opacity:1}22.9%{opacity:1}23%{opacity:0;box-shadow:none}24.9%{opacity:0;box-shadow:none}25%{opacity:1}34.9%{opacity:1}35%{opacity:0;box-shadow:none}39.9%{opacity:0;box-shadow:none}40%{opacity:1}42.9%{opacity:1}43%{opacity:0;box-shadow:none}44.9%{opacity:0;box-shadow:none}45%{opacity:1}50%{opacity:1}54.9%{opacity:1}55%{opacity:0;box-shadow:none}69.4%{opacity:0;box-shadow:none}69.5%{opacity:1}69.9%{opacity:1}70%{opacity:0;box-shadow:none}79.4%{opacity:0;box-shadow:none}79.9%{opacity:1}80%{opacity:0;box-shadow:none}89.8%{opacity:0;box-shadow:none}89.9%{opacity:1;box-shadow:none}90%{opacity:0;box-shadow:none}100%{opacity:0}}',
    'flicker-out-2': '{0%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}13.9%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}14%{opacity:0;box-shadow:none}14.9%{opacity:0;box-shadow:none}15%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}22.9%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}23%{opacity:0;box-shadow:none}24.9%{opacity:0;box-shadow:none}25%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}34.9%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35),0 0 100px rgba(255,255,255,.1)}35%{opacity:0;box-shadow:none}39.9%{opacity:0;box-shadow:none}40%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}42.9%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.35)}43%{opacity:0;box-shadow:none}44.9%{opacity:0;box-shadow:none}45%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}50%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}54.9%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55%{opacity:0;box-shadow:none}69.4%{opacity:0;box-shadow:none}69.5%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}69.9%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}70%{opacity:0;box-shadow:none}79.4%{opacity:0;box-shadow:none}79.9%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.25)}80%{opacity:0;box-shadow:none}89.8%{opacity:0;box-shadow:none}89.9%{opacity:1;box-shadow:none}90%{opacity:0;box-shadow:none}100%{opacity:0}}',
  }
  const duration = '2s'
  const timingFns = 'linear'
  const mode = 'both'

  for (const key in keyframes) {
    theme.animation!.keyframes![key] = keyframes[key]
    theme.animation!.durations![key] = duration
    theme.animation!.timingFns![key] = timingFns
    theme.animation!.mode![key] = mode
  }

  return theme
}
