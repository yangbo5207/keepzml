import { Suspense, useState, useTransition } from 'react'
import Skeleton from 'components/ui/skeleton'
import Message from './message'
import { getApi } from '../api'

export default function App() {
  const [response, setApi] = useState(getApi)
  const [isPending, startTransition] = useTransition()

  function __click() {
    startTransition(() => {
      setApi(getApi())
    })
  }

  return (
    <div className='space-y-4'>
      <div className='flex justify-end'>
        <button onClick={__click} disabled={isPending}>点击更新</button>
      </div>

      <Suspense fallback={<Skeleton />}>
        <Message response={response} isPending={isPending} />
      </Suspense>
    </div>
  )
}
