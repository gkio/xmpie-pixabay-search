import { defaultValueParser } from './default-value-parser'

export function castByKey(key: string, value: any) {
  switch (key) {
    case 'bookingId':
    case 'itineraryId':
      return `${value}`
    default:
      return defaultValueParser(value)
  }
}
