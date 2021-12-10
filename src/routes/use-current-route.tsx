import { matchPath, useLocation } from 'react-router'
import { routes } from './routes'

export function useCurrentRoute() {
  const { pathname } = useLocation()
  const currentRouteItem = routes.find(({ route }) => matchPath(pathname, route.path))
  return { currentRouteItem }
}
