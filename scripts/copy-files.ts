import { copyFileSync } from 'fs'
import { resolve } from 'path'
import { fileURLToPath } from 'url'

// relative to scripts directory
const destinations = [
  ['../LICENSE', '../packages/preset-animista/LICENSE'],
  ['../README.md', '../packages/preset-animista/README.md'],
]

const _filename = fileURLToPath(import.meta.url)
destinations.forEach(([src, dest]) => {
  copyFileSync(resolve(_filename, '..', src), resolve(_filename, '..', dest))
})
