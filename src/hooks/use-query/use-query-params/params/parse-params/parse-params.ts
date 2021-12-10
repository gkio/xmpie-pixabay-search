import { parse } from 'query-string'
import { parseByType } from './parse-by-type'

export function parseParams(string: string): Record<string, any> {
  const parsedData = (parse(string, {
    parseBooleans: true,
    parseNumbers: false,
  }) as unknown) as Record<string, any>

  const result = Object.keys(parsedData).reduce((acc, key) => {
    return {
      ...acc,
      [key]: parseByType(key, parsedData[key]),
    }
  }, {})

  return result
}
