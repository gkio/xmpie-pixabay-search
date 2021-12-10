import { castByKey } from './cast-by-key'

export function parseByType(key: string, value: any): any {
  if (value === null) return value
  if (value === undefined) return value

  if (typeof value === 'number') return value

  if (Array.isArray(value)) {
    return value.map((item) => parseByType(key, item))
  }
  try {
    return castByKey(key, value)
  } catch {
    return value
  }
}
