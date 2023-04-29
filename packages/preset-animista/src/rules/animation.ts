import type { Rule } from '@unocss/core'
import { globalKeywords, handler as h, makeGlobalStaticRules } from '@unocss/preset-mini/utils'
import type { Theme } from '@unocss/preset-mini'

export const animations: Rule<Theme>[] = [
  // animista-keyframes-<keyframes name>
  [
    /^(?:animista-)?keyframes-(.+)$/,
    ([, name], { theme }) => {
      const kf = theme.animation?.keyframes?.[name]
      if (kf) {
        return [
        `@keyframes ${name}${kf}`,
        { animation: name },
        ]
      }
    },
    {
      autocomplete: [
        'animista-keyframes-$animista.keyframes',
        'keyframes-$animista.keyframes',
      ],
    },
  ],
  // animista-<preset animation name>
  [
    /^animista-(.+)$/,
    ([, name], { theme }) => {
      const kf = theme.animation?.keyframes?.[name]
      if (kf) {
        const duration = theme.animation?.durations?.[name] ?? '1s'
        const timing = theme.animation?.timingFns?.[name] ?? 'linear'
        const count = theme.animation?.counts?.[name] ?? 1
        const props = theme.animation?.properties?.[name] ?? ''
        const direction = theme.animation?.direction?.[name] ?? ''
        const mode = theme.animation?.mode?.[name] ?? ''
        return [
        `@keyframes ${name}${kf}`,
        {
          animation: `${name} ${duration} ${timing} ${count} ${direction} ${mode}`,
          ...props,
        },
        ]
      }
      return { animation: h.bracket.cssvar(name) }
    },
    { autocomplete: 'animista-$animation.keyframes' },
  ],
  [
    /^animista-name-(.+)/,
    ([, d]) => ({ 'animation-name': h.bracket.cssvar(d) ?? d }),
  ],
  // timings
  [
    /^animista-duration-(.+)$/,
    ([, d], { theme }) => ({ 'animation-duration': theme.duration?.[d || 'DEFAULT'] ?? h.bracket.cssvar.time(d) }),
    {
      autocomplete: [
        'animista-duration',
        'animista-duration-$duration',
      ],
    },
  ],
  [
    /^animista-delay-(.+)$/,
    ([, d], { theme }) => ({ 'animation-delay': theme.duration?.[d || 'DEFAULT'] ?? h.bracket.cssvar.time(d) }),
    {
      autocomplete: [
        'animista-delay',
        'animista-delay-$duration',
      ],
    },
  ],
  [
    /^animista-ease(?:-(.+))?$/,
    ([, d], { theme }) => ({ 'animation-timing-function': theme.easing?.[d || 'DEFAULT'] ?? h.bracket.cssvar(d) }),
    { autocomplete: 'animista-delay-$easing' },
  ],

  // fill mode
  [
    /^animista-(fill-mode-|fill-|mode-)?(.+)$/,
    ([, t, d]) => ['none', 'forwards', 'backwards', 'both', ...[t ? globalKeywords : []]].includes(d) ? { 'animation-fill-mode': d } : undefined,
    {
      autocomplete: [
        'animista-(fill|mode|fill-mode)',
        'animista-(fill|mode|fill-mode)-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)',
        'animista-(none|forwards|backwards|both|inherit|initial|revert|revert-layer|unset)',
      ],
    },
  ],

  // direction
  [
    /^animista-(direction-)?(.+)$/,
    ([, t, d]) => ['normal', 'reverse', 'alternate', 'alternate-reverse', ...[t ? globalKeywords : []]].includes(d) ? { 'animation-direction': d } : undefined,
    {
      autocomplete: [
        'animista-direction',
        'animista-direction-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)',
        'animista-(normal|reverse|alternate|alternate-reverse|inherit|initial|revert|revert-layer|unset)',
      ],
    },
  ],

  // others
  [
    /^animista-(?:iteration-|count-|iteration-count-)(.+)$/,
    ([, d]) => ({ 'animation-iteration-count': h.bracket.cssvar(d) ?? d.replace(/\-/g, ',') }),
    {
      autocomplete: [
        'animista-(iteration|count|iteration-count)',
        'animista-(iteration|count|iteration-count)-<num>',
      ],
    },
  ],
  [
    /^animista-(play-state-|play-|state-)?(.+)$/,
    ([, t, d]) => ['paused', 'running', ...[t ? globalKeywords : []]].includes(d) ? { 'animation-play-state': d } : undefined,
    {
      autocomplete: [
        'animista-(play|state|play-state)',
        'animista-(play|state|play-state)-(paused|running|inherit|initial|revert|revert-layer|unset)',
        'animista-(paused|running|inherit|initial|revert|revert-layer|unset)',
      ],
    }],
  ['animista-none', { animation: 'none' }],
  ...makeGlobalStaticRules('animate', 'animation'),
]
