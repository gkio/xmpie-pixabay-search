import { routes } from '@xmpie/routes'
import { RoutesSwitcher } from './routes-switcher'
import { GlobalStyle, GlobalStyleThemed } from './global-style'

export function Content() {
  return (
    <>
      <GlobalStyle />
      <GlobalStyleThemed />
      <RoutesSwitcher routes={routes} />
    </>
  )
}
