// generate animista.json file from packages/preset-animista/src/animista.ts

import type { Dirent } from 'fs'
import { promises as fs } from 'fs'
const defaultTheme = {
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
const animista = fs.readdir('./packages/preset-animista/src/animista', { withFileTypes: true })

animista.then((dirs) => {
  const animistaJson = {}
  const promise: any[] = []

  async function execFileExport(dir: Dirent, file: Dirent) {
    const f = await import(`../packages/preset-animista/src/animista/${dir.name}/${file.name}`)
    if (file.name === 'index.ts')
      return

    const type = dir.name.replace('.ts', '')
    const model = `${file.name.replace('.ts', '').replace(/-(\w)/g, (_, letter) => letter.toUpperCase())}`
    const moduleName = `${model}${type[0].toUpperCase() + type.slice(1)}`
    const m = f[moduleName]
    try {
      const theme = JSON.parse(JSON.stringify(defaultTheme))
      m(theme)
      const keyframes = theme.animation.keyframes
      animistaJson[dir.name][model] = Object.keys(keyframes)
    }
    catch (e) {}
  }
  async function readDir(dir: Dirent) {
    const d = await fs.stat(`./packages/preset-animista/src/animista/${dir.name}`)
    if (!d.isDirectory())
      return

    animistaJson[dir.name] = {}
    const files = await fs.readdir(`./packages/preset-animista/src/animista/${dir.name}`, { withFileTypes: true })
    const promise: any[] = []
    for (const file of files)
      promise.push(execFileExport(dir, file))

    await Promise.all(promise)
  }
  for (const dir of dirs)
    promise.push(readDir(dir))

  Promise.all(promise).then(() => {
    // console.log(animistaJson)
    fs.writeFile('./playground/src/assets/animista.json', JSON.stringify(animistaJson, null, 2))
  })
})
