import { createGlobalStyle } from 'styled-components'
import { resetStyled } from './styles/reset-styled'
import { bodyStyled } from './styles/body-styled'

export const GlobalStyle = createGlobalStyle<{ bodyMargin?: string }>`

  ${resetStyled}

  ${bodyStyled};

`
