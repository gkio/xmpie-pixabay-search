import { css } from 'styled-components'
import { PageTransitionNames } from '../constants'

const TRANSITION_NAME = PageTransitionNames.None

const fadeThrough = css`
  .${TRANSITION_NAME}-exit-active {
    display: none;
  }
`

export default fadeThrough
