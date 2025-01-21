import { Suspense, useState } from 'react'
import Skeleton from 'components/ui/skeleton'
import Message from './message'
import { getMessage } from './api'

export default function Page() {
  const [promise, update] = useState<ReturnType<typeof getMessage>>()

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>更新数据</button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Message promise={promise} />
      </Suspense>
    </>
  )
}