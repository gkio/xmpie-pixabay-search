import { CaseStyle } from './types'
import { changeObjectTopLevelKeys } from './change-object-top-level-keys'
import { stringifyParams } from './params/stringify-params'

export function getPath<T>(path: string, queryParams: Partial<T>, caseStyle?: CaseStyle): string {
  const params = changeObjectTopLevelKeys(queryParams, caseStyle)
  const searchArguments = stringifyParams(params)

  if (!searchArguments) return path

  if (path.indexOf('?') !== -1) {
    return `${path}&${searchArguments}`
  }

  return `${path}?${searchArguments}`
}
