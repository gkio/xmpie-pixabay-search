import { ComponentType } from 'react'
import { PageTransitionGroups } from '@xmpie/components/content/routes-switcher/page-transitions/types'

export type RouteItem = {
  route: {
    path: string
    exact?: boolean
  }
  documentTitle: string
  component: ComponentType<unknown>
  transitionGroup?: PageTransitionGroups
  transitionIndex: number
}
