import { useQueryParams } from '@xmpie/hooks'
import { PixabaySearchQueryType } from './types'

export function usePixabaySearchQuery() {
  const { queryParams, appendQueryParams, navigateTo, clearQueryParams } =
    useQueryParams<PixabaySearchQueryType>(
      {
        page: 1,
        perPage: 20,
        search: '',
      },
      {
        caseStyle: 'kebab-case',
      },
    )

  return {
    queryParams,
    appendQueryParams,
    navigateTo,
    clearQueryParams,
  }
}
