import * as R from 'ramda'

export function checkIsEqual<T>(a: T, b: T) {
  return R.equals(a, b)
}
