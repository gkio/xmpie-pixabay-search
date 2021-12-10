export type CaseStyle = 'kebab-case' | 'camelCase'

export type OptionsType<T> = {
  caseStyle?: CaseStyle
  arrayFields?: (keyof T)[]
}
