import { Suspense } from 'react'
import Message from './message'
import Skeleton from 'components/ui/skeleton'
import { getApi } from '../api'

export default function App() {
  const promise = getApi()

  return (
    <Suspense fallback={<Skeleton type='header' />}>
      <Message response={promise} />
    </Suspense>
  )
}
