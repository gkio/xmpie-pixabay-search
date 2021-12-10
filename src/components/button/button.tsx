import { ReactNode, useEffect } from 'react'
import { StyledButton } from './button-components'

type Props = {
  onClick: () => void
  runOnEnter?: boolean
  children?: ReactNode
}

export function Button({ onClick, children, runOnEnter = false }: Props) {
  useEffect(() => {
    if (!runOnEnter) return
    const listener = (event: KeyboardEvent) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault()
        onClick()
      }
    }
    document.addEventListener('keydown', listener)
    return () => {
      document.removeEventListener('keydown', listener)
    }
  }, [runOnEnter, onClick])

  return <StyledButton onClick={onClick}>{children}</StyledButton>
}
