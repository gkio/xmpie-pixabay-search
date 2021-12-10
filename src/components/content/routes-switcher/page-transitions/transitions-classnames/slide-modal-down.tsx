import { css } from 'styled-components'
import { PAGE_DEFAULT_ANIMATION_TIMEOUT, PageTransitionNames } from '../constants'

const TRANSITION_NAME = PageTransitionNames.SlideModalDown

const slideDown = css`
  .${TRANSITION_NAME}-exit {
    transform: translateY(0%);
    z-index: 3;
  }

  .${TRANSITION_NAME}-exit-active {
    transform: translateY(100%);
    transition: transform ${PAGE_DEFAULT_ANIMATION_TIMEOUT}ms;
    z-index: 3;
  }
`

export default slideDown
