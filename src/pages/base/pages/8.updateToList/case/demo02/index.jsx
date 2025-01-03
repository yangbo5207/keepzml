import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {getMessage, getUuid} from './api'
import Userinfo from './userinfo'

export default function Demo01() {
  const [promise, updatePromise] = useState(() => [getMessage()])

  function __handler() {
    updatePromise([...promise, getMessage()])
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>新增数据</button>
      </div>
      {promise.map((item, index) => (
        <Suspense fallback={<Skeleton />} key={getUuid()}>
          <Userinfo promise={item} index={index} />
        </Suspense>
      ))}
    </>
  )
}
