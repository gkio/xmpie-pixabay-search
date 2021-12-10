import { useLocation } from 'react-router'
import { parse } from 'query-string'

export function useQuery<T>(): T {
  const { search } = useLocation()

  return (parse(search, {
    parseBooleans: true,
  }) as unknown) as T
}
