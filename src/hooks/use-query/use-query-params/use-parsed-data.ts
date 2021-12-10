import { useCallback } from 'react'
import { parseParams } from './params/parse-params'
import { changeObjectTopLevelKeys } from './change-object-top-level-keys'
import { OptionsType } from './types'

type Args<T> = {
  initialData?: Partial<T>
  options?: OptionsType<T>
}

export function useParsedData<T>({ options, initialData }: Args<T>) {
  const getParsedData = useCallback((str) => {
    const parsedData = parseParams(str)
    const convertedData = changeObjectTopLevelKeys(parsedData, options?.caseStyle && 'camelCase')
    const result = (options?.arrayFields || []).reduce(
      (acc, field) => {
        if (acc[field] === undefined) return acc
        if (!Array.isArray(acc[field])) {
          // @ts-ignore
          acc[field] = [acc[field]]
        }
        return acc
      },
      {
        ...initialData,
        ...convertedData,
      } as T,
    )

    return result
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    getParsedData,
  }
}
