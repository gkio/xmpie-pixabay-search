const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.*Z$/
const MAX_NUMBER_LENGTH = 16

function reviver(_: string, value: any) {
  if (typeof value === 'string' && dateFormat.test(value)) {
    return new Date(value)
  }

  return value
}

export function defaultValueParser(value: any) {
  const res = JSON.parse(value, reviver)
  if (typeof res === 'number' && value.length >= MAX_NUMBER_LENGTH) {
    // because itineraryId has 18 digits, but js supports 16 digits without losing precision
    return value
  }
  return res
}
