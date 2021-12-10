import { TransitionGroup } from './types'

export enum PageTransitionNames {
  None = 'NONE',
  FadeThrough = 'FADE_THROUGH',
  SlideLeft = 'SLIDE_LEFT',
  SlideRight = 'SLIDE_RIGHT',
  SlideModalUp = 'SLIDE_MODAL_UP',
  SlideModalDown = 'SLIDE_MODAL_DOWN',
}

export const TRANSITION_GROUP_TO_NAMES: TransitionGroup = {
  none: {
    front: PageTransitionNames.None,
    back: PageTransitionNames.None,
  },
  slide: {
    front: PageTransitionNames.SlideLeft,
    back: PageTransitionNames.SlideRight,
  },
  'slide-modal': {
    front: PageTransitionNames.SlideModalUp,
    back: PageTransitionNames.SlideModalDown,
  },
  'fade-through': {
    front: PageTransitionNames.FadeThrough,
    back: PageTransitionNames.FadeThrough,
  },
}

export const PAGE_DEFAULT_ANIMATION_TIMEOUT = 300
