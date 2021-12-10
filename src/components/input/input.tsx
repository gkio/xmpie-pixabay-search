import { StyledInput } from './input-components'

type Props = {
  type: string
  placeholder?: string
  value?: string | number
  onChange: (e: any) => void
}

export function Input({ type = 'text', placeholder = '', value = '', onChange }: Props) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      autoComplete="off"
    />
  )
}
