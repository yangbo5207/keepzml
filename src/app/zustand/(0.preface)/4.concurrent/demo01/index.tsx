import { useState, useDeferredValue } from 'react'
import Expensive from './expensive'
import Number from './number'

export default function Index() {
  const [counter, setCounter] = useState(0)
  const deferred = useDeferredValue(counter)

  function __clickHanler() {
    setCounter(counter + 1)
  }

  return (
    <div className=''>
      <div className='flex items-center'>
        <Expensive counter={deferred} />
        <div className='flex-1 text-center'>
          <Number value={counter} />
          <div>高优先级任务</div>
        </div>
      </div>
      <div className='text-right mt-8'>
        <button onClick={__clickHanler}>counter++</button>
      </div>

    </div>
  )
}