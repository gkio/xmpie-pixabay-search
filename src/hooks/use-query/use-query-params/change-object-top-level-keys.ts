import { CaseStyle } from './types'

function toCaseStyle(value: string, caseStyle?: CaseStyle) {
  switch (caseStyle) {
    case 'kebab-case':
      return value.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase()

    case 'camelCase':
      return value.replace(/-./g, (x) => x.toUpperCase()[1])

    default:
      return value
  }
}
export function changeObjectTopLevelKeys(object: Record<string, any>, caseStyle?: CaseStyle) {
  if (!caseStyle) return object

  return Object.keys(object).reduce((acc, key) => {
    const newKey = toCaseStyle(key, caseStyle)

    return {
      ...acc,
      [newKey]: object[key],
    }
  }, {})
}
