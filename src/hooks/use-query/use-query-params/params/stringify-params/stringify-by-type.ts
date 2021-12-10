export function stringifyByType(value: any): any {
  if (value === null) return value
  if (value === undefined) return value

  const type = typeof value
  if (type === 'number') return value
  if (type === 'string') return value

  if (Array.isArray(value)) {
    return value.map((item) => stringifyByType(item))
  }

  return JSON.stringify(value)
}
