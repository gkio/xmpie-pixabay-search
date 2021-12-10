import { BrowserRouter } from 'react-router-dom'
import { PropsWithChildren } from 'react'
import { APP_BASE_PATH } from '@xmpie/constants'

export function AppRouting({ children }: PropsWithChildren<{}>) {
  return <BrowserRouter basename={APP_BASE_PATH}>{children}</BrowserRouter>
}
