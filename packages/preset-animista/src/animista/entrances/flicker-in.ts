import type { Theme } from '@unocss/preset-mini'

export function flickerInEntrances(theme: Theme) {
  const keyframes: Record<string, string> = {
    'flicker-in-1': '{0%{opacity:0}10%{opacity:0}10.1%{opacity:1}10.2%{opacity:0}20%{opacity:0}20.1%{opacity:1}20.6%{opacity:0}30%{opacity:0}30.1%{opacity:1}30.5%{opacity:1}30.6%{opacity:0}45%{opacity:0}45.1%{opacity:1}50%{opacity:1}55%{opacity:1}55.1%{opacity:0}57%{opacity:0}57.1%{opacity:1}60%{opacity:1}60.1%{opacity:0}65%{opacity:0}65.1%{opacity:1}75%{opacity:1}75.1%{opacity:0}77%{opacity:0}77.1%{opacity:1}85%{opacity:1}85.1%{opacity:0}86%{opacity:0}86.1%{opacity:1}100%{opacity:1}}',
    'flicker-in-2': '{0%{opacity:0}10%{opacity:0;box-shadow:none}10.1%{opacity:1;box-shadow:none}10.2%{opacity:0;box-shadow:none}20%{opacity:0;box-shadow:none}20.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.25)}20.6%{opacity:0;box-shadow:none}30%{opacity:0;box-shadow:none}30.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.5%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}30.6%{opacity:0;box-shadow:none}45%{opacity:0;box-shadow:none}45.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}50%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.45),0 0 60px rgba(255,255,255,.25)}55.1%{opacity:0;box-shadow:none}57%{opacity:0;box-shadow:none}57.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.3)}60%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.3)}60.1%{opacity:0;box-shadow:none}65%{opacity:0;box-shadow:none}65.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.3),0 0 100px rgba(255,255,255,.1)}75%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.55),0 0 60px rgba(255,255,255,.3),0 0 100px rgba(255,255,255,.1)}75.1%{opacity:0;box-shadow:none}77%{opacity:0;box-shadow:none}77.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.4),0 0 110px rgba(255,255,255,.2),0 0 100px rgba(255,255,255,.1)}85.1%{opacity:0;box-shadow:none}86%{opacity:0;box-shadow:none}86.1%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}100%{opacity:1;box-shadow:0 0 30px rgba(255,255,255,.6),0 0 60px rgba(255,255,255,.45),0 0 110px rgba(255,255,255,.25),0 0 100px rgba(255,255,255,.1)}}',
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
