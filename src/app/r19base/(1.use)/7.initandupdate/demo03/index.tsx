import { Suspense, useState } from 'react'
import Skeleton from 'components/ui/skeleton'
import Message from './message'
import { getMessage } from './api'

export default function Page() {
  // !mark
  const [promise, update] = useState(getMessage)

  function __handler() {
    update(getMessage())
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button className='button' onClick={__handler}>更新数据</button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Message promise={promise} />
      </Suspense>
    </>
  )
}