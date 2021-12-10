import { RouteItem } from '@xmpie/routes'
import { ROUTES } from '@xmpie/constants'
import { Home } from '@xmpie/screens'
import { getDocumentTitle } from './get-document-title'

export const homeRoutes: Array<RouteItem> = [
  {
    route: {
      path: ROUTES.home,
      exact: true,
    },
    documentTitle: getDocumentTitle('Home'),
    transitionIndex: 1,
    transitionGroup: 'fade-through',
    component: () => <Home />,
  },
]
