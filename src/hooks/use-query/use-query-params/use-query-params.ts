import { useNavigate, useLocation } from 'react-router'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { checkIsEqual } from '@xmpie/utils'
import { OptionsType } from './types'
import { getPath } from './get-path'
import { useParsedData } from './use-parsed-data'

export function useQueryParams<T>(initialData?: Partial<T>, options?: OptionsType<T>) {
  const caseStyle = options?.caseStyle

  const { search, pathname } = useLocation()
  const navigate = useNavigate()

  const { getParsedData } = useParsedData<T>({ options, initialData })

  const parsedQueryParams = useMemo(() => {
    return getParsedData(search)
  }, [search, getParsedData])

  const [searchParams, setSearchParams] = useState<T>(parsedQueryParams)

  useEffect(() => {
    if (!checkIsEqual(parsedQueryParams, searchParams)) {
      setSearchParams(parsedQueryParams)
    }
  }, [parsedQueryParams, searchParams])

  const appendQueryParams = useCallback(
    (queryParams: Partial<T>): void => {
      const newParams = Object.assign(searchParams, queryParams)

      const newPath = getPath<T>(pathname, newParams, caseStyle)
      setSearchParams(newParams)
      navigate(newPath, { replace: true })
    },
    [searchParams, pathname, caseStyle, navigate],
  )

  function clearQueryParams(): void {
    const params = getParsedData('')
    setSearchParams(params)
    const newPath = getPath<T>(pathname, params, caseStyle)
    navigate(newPath, { replace: true })
  }

  function navigateTo(path: string, appendParams?: Partial<T>): void {
    const newParams = Object.assign(searchParams, appendParams)
    setSearchParams(newParams)
    const newPath = getPath<T>(path, newParams, caseStyle)
    navigate(newPath)
  }

  return {
    queryParams: searchParams,
    appendQueryParams,
    clearQueryParams,
    navigateTo,
  }
}
