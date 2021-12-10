import { stringify } from 'query-string'
import { stringifyByType } from './stringify-by-type'

export function stringifyParams(params: Record<string, any>): string {
  const oneLevelObject = Object.keys(params).reduce((acc, key) => {
    return {
      ...acc,
      [key]: stringifyByType(params[key]),
    }
  }, {})

  return stringify(oneLevelObject)
}
