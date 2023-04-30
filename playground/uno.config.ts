import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerCompileClass,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import { presetAnimista } from '@amihhs/preset-animista'
import animistaJson from './src/assets/animista.json'

const safelist = () => {
  const animista = animistaJson as Record<string, Record<string, string[]>>
  const safelist: string[] = []
  for (const key in animista) {
    for (const key2 in animista[key]) {
      animista[key][key2].forEach((k) => {
        safelist.push(`animista-${k}`)
      })
    }
  }
  // console.log(safelist)
  return safelist
}
export default defineConfig({
  theme: {
    fontFamily: {},
  },
  safelist: [
    ...safelist(),
  ],
  shortcuts: {},
  presets: [
    presetAttributify(),
    presetUno(),
    presetIcons(),
    presetAnimista(),
  ],
  transformers: [
    transformerCompileClass(),
    transformerVariantGroup(),
    transformerDirectives(),
  ],
})
