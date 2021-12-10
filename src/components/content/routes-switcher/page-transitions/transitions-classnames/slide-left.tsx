import { css } from 'styled-components'
import { PAGE_DEFAULT_ANIMATION_TIMEOUT, PageTransitionNames } from '../constants'

const TRANSITION_NAME = PageTransitionNames.SlideLeft

const slideLeft = css`
  .${TRANSITION_NAME}-enter {
    transform: translateX(100%);
  }

  .${TRANSITION_NAME}-enter-active {
    transform: translateX(0%);
    transition: transform ${PAGE_DEFAULT_ANIMATION_TIMEOUT}ms;
  }

  .${TRANSITION_NAME}-exit {
    transform: translateX(0%);
  }

  .${TRANSITION_NAME}-exit-active {
    transform: translateX(-100%);
    transition: transform ${PAGE_DEFAULT_ANIMATION_TIMEOUT}ms;
  }
`

export default slideLeft
