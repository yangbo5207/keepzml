import { useState, Suspense } from 'react'
import Skeleton from 'components/ui/skeleton'
import { uuid } from '@/utils'
import { getMessage } from './api'
import Userinfo from './userinfo'

export default function Demo01() {
  const [promise, updatePromise] = useState(() => [getMessage()])

  function __handler() {
    updatePromise([...promise, getMessage()])
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button className='button' onClick={__handler}>新增数据</button>
      </div>
      <div className='space-y-4'>
        {promise.map((item, index) => (
          <Suspense fallback={<Skeleton />} key={uuid()}>
            <Userinfo promise={item} index={index} />
          </Suspense>
        ))}
      </div>

    </>
  )
}
