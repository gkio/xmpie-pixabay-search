import { RouteItem } from '@xmpie/routes'
import { ROUTES } from '@xmpie/constants'
import { ImageView } from '@xmpie/screens'
import { getDocumentTitle } from './get-document-title'

export const imageViewRoutes: Array<RouteItem> = [
  {
    route: {
      path: ROUTES.imageView,
      exact: true,
    },
    documentTitle: getDocumentTitle('Image View'),
    transitionIndex: 1,
    transitionGroup: 'fade-through',
    component: () => <ImageView />,
  },
]
