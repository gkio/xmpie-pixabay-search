import DocumentTitle from 'react-document-title'
import { Routes, Route, useLocation } from 'react-router-dom'
import { RouteItem } from '@xmpie/routes'
import { PageLayout } from './page-layout'

type Props = {
  routes: Array<RouteItem>
}

export function RoutesSwitcher({ routes }: Props) {
  const location = useLocation()

  return (
    <Routes location={location}>
      {routes.map((routeItem: RouteItem) => {
        const { route, component: ScreenComponent, documentTitle } = routeItem

        return (
          <Route
            key={route.path}
            {...route}
            element={
              <>
                <DocumentTitle title={documentTitle} />
                <PageLayout>
                  <ScreenComponent />
                </PageLayout>
              </>
            }></Route>
        )
      })}
    </Routes>
  )
}
