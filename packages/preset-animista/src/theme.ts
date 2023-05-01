import type { Theme } from '@unocss/preset-mini'
import {
  blinkAttention,
  bounceAttention,
  flickerAttention,
  jelloAttention,
  pulsateAttention,
  shakeAttention,
  vibrateAttention,
  wobbleAttention,
} from './animista/attention'
import {
  bgPanBackground,
  colorChangeBackground,
  kenburnsBackground,
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
  bounceInEntrances,
  fadeInEntrances,
  flickerInEntrances,
  flipInEntrances,
  puffInEntrances,
  rollInBlurredEntrances,
  rollInEntrances,
  rotateIn2Entrances,
  rotateInEntrances,
  scaleInEntrances,
  slideInBckEntrances,
  slideInBlurredEntrances,
  slideInEllipticEntrances,
  slideInEntrances,
  slideInFwdEntrances,
  slitInEntrances,
  swingInEntrances,
  swirlInEntrances,
  tiltInEntrances,
  tiltInFwdEntrances,
} from './animista/entrances'
import {
  bounceOutExits,
  fadeOutExits,
  flickerOutExits,
  flipOutExits,
  puffOutExits,
  rollOutExits,
  rolloutBlurredExits,
  rotateOut2Exits,
  rotateOutExits,
  scaleOutExits,
  slideOutBckExits,
  slideOutBlurredExits,
  slideOutEllipticExits,
  slideOutExits,
  slideOutFwdExits,
  slitOutExits,
  swingOutExits,
  swirlOutExits,
} from './animista/exits'
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
    blinkAttention,
    bounceAttention,
    flickerAttention,
    jelloAttention,
    pulsateAttention,
    shakeAttention,
    vibrateAttention,
    wobbleAttention,
    // background
    bgPanBackground,
    colorChangeBackground,
    kenburnsBackground,
    // text
    blurOutText,
    flickerText,
    focusInText,
    popUpText,
    shadowDropText,
    trackingInText,
    trackingOutText,
    // entrances
    bounceInEntrances,
    fadeInEntrances,
    flickerInEntrances,
    flipInEntrances,
    puffInEntrances,
    rollInBlurredEntrances,
    rollInEntrances,
    rotateIn2Entrances,
    rotateInEntrances,
    scaleInEntrances,
    slideInBckEntrances,
    slideInBlurredEntrances,
    slideInEllipticEntrances,
    slideInFwdEntrances,
    slideInEntrances,
    slitInEntrances,
    swingInEntrances,
    swirlInEntrances,
    tiltInFwdEntrances,
    tiltInEntrances,
    // exits
    bounceOutExits,
    fadeOutExits,
    flickerOutExits,
    flipOutExits,
    puffOutExits,
    rolloutBlurredExits,
    rollOutExits,
    rotateOut2Exits,
    rotateOutExits,
    scaleOutExits,
    slideOutBckExits,
    slideOutBlurredExits,
    slideOutEllipticExits,
    slideOutFwdExits,
    slideOutExits,
    slitOutExits,
    swingOutExits,
    swirlOutExits,
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
