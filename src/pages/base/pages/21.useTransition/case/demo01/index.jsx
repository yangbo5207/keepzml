import {use, useState, Suspense, useTransition} from 'react'
import Message from './Message'
import Skeleton from 'components/Skeleton'
import Spin from 'components/Spin'
import {getMessage} from './api'

export default function Demo01() {
  const [promise, update] = useState(getMessage())
  const [isPending, startTransition] = useTransition()

  function __handler() {
    startTransition(() => {
      update(getMessage())
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>更新数据</button>
      </div>
      <Suspense fallback={<Skeleton />}>
        <Spin loading={isPending}>
          <Message promise={promise} />
        </Spin>
      </Suspense>
    </>
  )
}
