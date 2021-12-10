import { RouteItem } from '../types'
import { imageViewRoutes } from './image-view'
import { homeRoutes } from './home'
import { favouritesRoutes } from './favourites'

export const xmpieRoutes: Array<RouteItem> = [
  ...homeRoutes,
  ...favouritesRoutes,
  ...imageViewRoutes,
]
