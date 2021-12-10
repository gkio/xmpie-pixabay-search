export type PageTransitionGroups = 'none' | 'slide' | 'slide-modal' | 'fade-through'

export type TransitionGroup = {
  [key in PageTransitionGroups]: {
    front: string
    back: string
  }
}
