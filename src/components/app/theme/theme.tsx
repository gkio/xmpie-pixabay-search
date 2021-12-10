import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { xmpie } from '@xmpie/themes'

type Props = {
  children: ReactNode
}

export function Theme({ children }: Props) {
  return <ThemeProvider theme={xmpie}>{children}</ThemeProvider>
}
