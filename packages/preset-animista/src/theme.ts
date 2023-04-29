import type { Theme } from '@unocss/preset-mini'
import {
  blinkAnimista,
  bounceAnimista,
  flickerAnimista,
  jelloAnimista,
  pulsateAnimista,
  shakeAnimista,
  vibrateAnimista,
  wobbleAnimista,
} from './animista/attention'
import {
  bgPanAnimista,
  colorChangeAnimista,
  kenburnsAnimista,
} from './animista/background'
import {
  blurOutText,
  flickerText,
  focusInText,
  popUpText,
  shadowDropText,
  trackingInText,
  trackingOutText,
} from './animista/text'
import {
  flip2Basic,
  flipBasic,
  flipScale2Basic,
  flipScaleBasic,
  rotate90Basic,
  rotateBasic,
  rotateScaleBasic,
  scaleDownBasic,
  scaleUpBasic,
  shadowDrop2Basic,
  shadowDropBasic,
  shadowInsetBasic,
  shadowPopBasic,
  slideBasic,
  slideBckBasic,
  slideFwdBasic,
  slideRotateBasic,
  swingBasic,
} from './animista/basic'

export function createTheme(): Theme {
  let theme: Theme = {
    animation: {
      keyframes: {},
      durations: {},
      timingFns: {},
      properties: {},
      counts: {},
      direction: {},
      mode: {},
    },
  }

  const fns = [
    // attention
    vibrateAnimista,
    flickerAnimista,
    shakeAnimista,
    jelloAnimista,
    wobbleAnimista,
    bounceAnimista,
    pulsateAnimista,
    blinkAnimista,
    // background
    bgPanAnimista,
    colorChangeAnimista,
    kenburnsAnimista,
    // text
    blurOutText,
    flickerText,
    focusInText,
    popUpText,
    shadowDropText,
    trackingInText,
    trackingOutText,
    // basic
    scaleUpBasic,
    scaleDownBasic,
    rotateBasic,
    flip2Basic,
    flipScale2Basic,
    flipScaleBasic,
    flipBasic,
    rotate90Basic,
    rotateScaleBasic,
    shadowDrop2Basic,
    shadowDropBasic,
    shadowInsetBasic,
    shadowPopBasic,
    slideBckBasic,
    slideFwdBasic,
    slideRotateBasic,
    slideBasic,
    swingBasic,
  ]

  fns.forEach((fn) => {
    theme = fn(theme)
  })

  return theme
}
