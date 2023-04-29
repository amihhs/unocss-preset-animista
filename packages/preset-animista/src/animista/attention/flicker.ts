import type { Theme } from '@unocss/preset-mini'
/**
 * https://animista.net/play/basic/scale-down
 */
export function flickerAnimista(theme: Theme) {
  const keyframes: Record<string, string> = {
    'flicker-1': '{0%,100%{opacity:1}41.99%{opacity:1}42%{opacity:0}43%{opacity:0}43.01%{opacity:1}47.99%{opacity:1}48%{opacity:0}49%{opacity:0}49.01%{opacity:1}}',
    'flicker-2': '{0%,100%{opacity:1}41.99%{opacity:1}42%{opacity:0}43%{opacity:0}43.01%{opacity:1}45.99%{opacity:1}46%{opacity:0}46.9%{opacity:0}46.91%{opacity:1}51.99%{opacity:1}52%{opacity:0}52.8%{opacity:0}52.81%{opacity:1}}',
    'flicker-3': '{0%,100%{opacity:1}32.98%{opacity:1}33%{opacity:0}34%{opacity:0}34.02%{opacity:1}34.98%{opacity:1}35%{opacity:0}35.9%{opacity:0}35.92%{opacity:1}38.98%{opacity:1}39%{opacity:0}39.8%{opacity:0}39.82%{opacity:1}83.98%{opacity:1}84%{opacity:0}84.9%{opacity:0}84.92%{opacity:1}}',
    'flicker-4': '{0%,100%{opacity:1}31.98%{opacity:1}32%{opacity:0}32.8%{opacity:0}32.82%{opacity:1}34.98%{opacity:1}35%{opacity:0}35.7%{opacity:0}35.72%{opacity:1}36.98%{opacity:1}37%{opacity:0}37.6%{opacity:0}37.62%{opacity:1}67.98%{opacity:1}68%{opacity:0}68.4%{opacity:0}68.42%{opacity:1}95.98%{opacity:1}96%{opacity:0}96.7%{opacity:0}96.72%{opacity:1}98.98%{opacity:1}99%{opacity:0}99.6%{opacity:0}99.62%{opacity:1}}',
    'flicker-5': '{0%,100%{opacity:1}0%{opacity:1}1%{opacity:1}1.02%{opacity:1}8.98%{opacity:1}9%{opacity:0}9.8%{opacity:0}9.82%{opacity:1}9.48%{opacity:1}9.5%{opacity:1}9.6%{opacity:1}9.62%{opacity:1}14.98%{opacity:1}15%{opacity:.5}15.8%{opacity:.5}15.82%{opacity:1}15.18%{opacity:1}15.2%{opacity:.7}16%{opacity:.7}16.02%{opacity:1}15.48%{opacity:1}15.5%{opacity:.5}16.2%{opacity:.5}16.22%{opacity:1}16.98%{opacity:1}17%{opacity:1}17.8%{opacity:1}17.82%{opacity:1}20.48%{opacity:1}20.5%{opacity:.9}21.3%{opacity:.9}21.32%{opacity:1}20.98%{opacity:1}21%{opacity:1}22%{opacity:1}22.02%{opacity:1}39.98%{opacity:1}40%{opacity:1}41%{opacity:1}41.02%{opacity:1}40.48%{opacity:1}40.5%{opacity:.6}41.4%{opacity:.6}41.42%{opacity:1}41.98%{opacity:1}42%{opacity:1}42.8%{opacity:1}42.82%{opacity:1}59.98%{opacity:1}60%{opacity:1}61%{opacity:1}61.02%{opacity:1}60.18%{opacity:1}60.2%{opacity:.2}61%{opacity:.2}61.02%{opacity:1}60.78%{opacity:1}60.8%{opacity:.4}61.6%{opacity:.4}61.62%{opacity:1}61.38%{opacity:1}61.4%{opacity:0}62.2%{opacity:0}62.22%{opacity:1}61.78%{opacity:1}61.8%{opacity:1}62.8%{opacity:1}62.82%{opacity:1}75.98%{opacity:1}76%{opacity:1}77%{opacity:1}77.02%{opacity:1}77.98%{opacity:1}78%{opacity:.7}78.8%{opacity:.7}78.82%{opacity:1}78.98%{opacity:1}79%{opacity:1}80%{opacity:1}80.02%{opacity:1}99.98%{opacity:1}100%{opacity:1}}',
  }
  const duration: Record<string, string> = {
    'flicker-1': '2s',
    'flicker-2': '2s',
    'flicker-3': '2.5s',
    'flicker-4': '4s',
    'flicker-5': '8s',
  }
  const timingFns = 'linear'
  const counts = 'infinite'
  const mode = 'both'

  for (const key in keyframes) {
    theme.animation!.keyframes![key] = keyframes[key]
    theme.animation!.durations![key] = duration[key]
    theme.animation!.timingFns![key] = timingFns
    theme.animation!.counts![key] = counts
    theme.animation!.mode![key] = mode
  }
  return theme
}
