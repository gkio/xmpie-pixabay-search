import { css } from 'styled-components'
import { PAGE_DEFAULT_ANIMATION_TIMEOUT, PageTransitionNames } from '../constants'

const TRANSITION_NAME = PageTransitionNames.SlideModalUp

const slideUp = css`
  .${TRANSITION_NAME}-enter {
    transform: translateY(100%);
    z-index: 3;
  }

  .${TRANSITION_NAME}-enter-active {
    transform: translateY(0%);
    transition: transform ${PAGE_DEFAULT_ANIMATION_TIMEOUT}ms;
    z-index: 3;
  }
`

export default slideUp
