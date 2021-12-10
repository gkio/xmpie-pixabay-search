import { Suspense } from 'react'
import { Spinner } from '@xmpie/ui'
import { Content } from '@xmpie/components/content'
import { Theme } from './theme'
import { AppRouting } from './app-routing'

export function App() {
  return (
    <Theme>
      <Suspense fallback={<Spinner />}>
        <AppRouting>
          <Content />
        </AppRouting>
      </Suspense>
    </Theme>
  )
}
