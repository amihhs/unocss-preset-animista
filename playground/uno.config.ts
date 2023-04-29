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
export default defineConfig({
  theme: {
    fontFamily: {},
  },
  shortcuts: { },
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
