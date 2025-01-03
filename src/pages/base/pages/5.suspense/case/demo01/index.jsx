import {Suspense} from 'react'
import Message from './message'
import Skeleton from 'components/Skeleton'
import {messageApi} from './api'

export default function Page() {
  const promise = messageApi()
  return (
    <Suspense fallback={<Skeleton />}>
      <Message promise={promise} />
    </Suspense>
  )
}
