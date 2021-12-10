import { useCallback } from 'react'
import { usePixabaySearchQuery } from '@xmpie/hooks'
import { usePixabay } from '@xmpie/api'

export const useHome = () => {
  const { queryParams, appendQueryParams } = usePixabaySearchQuery()
  const { page, search, perPage } = queryParams

  const { data, isLoading, error } = usePixabay({ search, page, perPage })

  const handleSearch = useCallback(
    (searchValue: string) => {
      appendQueryParams({ page: page + 1, search: searchValue })
    },
    [appendQueryParams, page],
  )

  const fetchMore = useCallback(() => {
    appendQueryParams({ page: page + 1 })
  }, [appendQueryParams, page])

  const isInitialView = !search && !data

  return {
    isInitialView,
    images: data?.hits,
    isLoading,
    hasError: error,
    page,
    search,
    handleSearch,
    fetchMore,
  }
}
