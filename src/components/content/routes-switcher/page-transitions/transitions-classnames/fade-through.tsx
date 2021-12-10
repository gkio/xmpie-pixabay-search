import { css } from 'styled-components'
import { PAGE_DEFAULT_ANIMATION_TIMEOUT, PageTransitionNames } from '../constants'

const TRANSITION_NAME = PageTransitionNames.FadeThrough
const HALT_TIMEOUT = PAGE_DEFAULT_ANIMATION_TIMEOUT / 2

const ANIMATION = 'cubic-bezier(0.4, 0, 0.2, 1)'

const fadeThrough = css`
  .${TRANSITION_NAME}-enter {
    transform: scale(0.92);
    opacity: 0;
  }

  .${TRANSITION_NAME}-exit-active {
    transition: opacity ${HALT_TIMEOUT}ms ${ANIMATION};
    opacity: 0;
  }

  .${TRANSITION_NAME}-enter-active {
    transition: opacity ${HALT_TIMEOUT}ms ${ANIMATION} ${HALT_TIMEOUT}ms,
      transform ${HALT_TIMEOUT}ms ${ANIMATION} ${HALT_TIMEOUT}ms;
    opacity: 1;
    transform: scale(1);
  }
`

export default fadeThrough
