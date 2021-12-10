import { RouteItem } from '@xmpie/routes'
import { ROUTES } from '@xmpie/constants'
import { Favourites } from '@xmpie/screens'
import { getDocumentTitle } from './get-document-title'

export const favouritesRoutes: Array<RouteItem> = [
  {
    route: {
      path: ROUTES.favourites,
      exact: true,
    },
    documentTitle: getDocumentTitle('Favourites'),
    transitionIndex: 1,
    transitionGroup: 'fade-through',
    component: () => <Favourites />,
  },
]
