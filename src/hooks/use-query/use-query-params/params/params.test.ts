import { stringifyParams } from './stringify-params'
import { parseParams } from './parse-params'

describe('params stringify/parse', () => {
  const checkObject = {
    isNull: null,
    isUndefined: undefined,
    first: 'first',
    number: 123,
    bigNumber: '123456789012345678901234567890123456789012345678901234567890',
    itineraryId: '789',
    bookingId: '456',
    object: {
      field: 'field',
      subField: {
        secondField: 'secondField',
      },
    },
  }

  it('should stringify to one level object', () => {
    const string = stringifyParams(checkObject)

    expect(string).toBe(
      'bigNumber=123456789012345678901234567890123456789012345678901234567890&bookingId=456&first=first&isNull&itineraryId=789&number=123&object=%7B%22field%22%3A%22field%22%2C%22subField%22%3A%7B%22secondField%22%3A%22secondField%22%7D%7D',
    )
  })

  it('should parse to one level object', () => {
    const string = stringifyParams(checkObject)
    const object = parseParams(string)

    expect(object.object.subField.secondField).toEqual('secondField')
    expect(object).toEqual(checkObject)
  })

  it('should parse date object', () => {
    const date = new Date()
    const string = stringifyParams({
      date,
    })

    const object = parseParams(string)

    expect(object.date).toEqual(date)
  })

  it('should stringify arrays', () => {
    const string = stringifyParams({
      list: [1, 2, { field: 'field' }],
    })

    expect(string).toBe('list=1&list=2&list=%7B%22field%22%3A%22field%22%7D')
  })

  it('should parse arrays', () => {
    const object = parseParams('list=1&list=2&list=%7B%22field%22%3A%22field%22%7D')

    expect(object).toEqual({
      list: [1, 2, { field: 'field' }],
    })
  })

  it('should parse to number', () => {
    const str = stringifyParams({
      num: 123,
    })
    const object = parseParams(str)

    expect(object).toEqual({
      num: 123,
    })
  })

  it('should parse 16 max chars number to string', () => {
    const str = stringifyParams({
      num: '103061607941452624',
    })
    const object = parseParams(str)

    expect(object).toEqual({
      num: '103061607941452624',
    })
  })

  it('should parse itinerary and booking ids to string', () => {
    const str = stringifyParams({
      itineraryId: 123,
      bookingId: 456,
    })
    const object = parseParams(str)

    expect(object).toEqual({
      itineraryId: '123',
      bookingId: '456',
    })
  })
})
