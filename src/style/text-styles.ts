import { css } from 'styled-components'

export const mediumWeightText = css`
  font-weight: 500;
`

export const strongWeightText = css`
  font-weight: 700;
`

export const normalWeightText = css`
  font-weight: 400;
`

export const defaultFontFamily = css`
  font-family: ${(p) => p.theme.fontFamily || 'Inter'}, 'Helvetica Neue', Helvetica, Arial,
    sans-serif;
`
