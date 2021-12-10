import { createGlobalStyle } from 'styled-components'

export const GlobalStyleThemed = createGlobalStyle`
  body {
    background-color: ${(p) => p.theme.colors.background4} !important;
    color: ${(p) => p.theme.secondaryColor};
  }
`
