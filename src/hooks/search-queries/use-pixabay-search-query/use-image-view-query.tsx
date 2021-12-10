import { useQueryParams } from '@xmpie/hooks'

export function useImageViewQuery() {
  const { queryParams, appendQueryParams, navigateTo, clearQueryParams } = useQueryParams<{
    imageSrc: string
  }>(
    {
      imageSrc: '',
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
