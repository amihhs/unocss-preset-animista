import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)

export const alias: Record<string, string> = {
  '@amihhs/preset-animista': r('./packages/preset-animista/src/'),
}
