import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
  ],
  clean: true,
  declaration: true,
  externals: [
    '@unocss/preset-mini',
    '@unocss/extractor-arbitrary-variants',
    '@unocss/preset-mini/utils',
    '@unocss/core',
  ],
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: false,
    },
  },
})
