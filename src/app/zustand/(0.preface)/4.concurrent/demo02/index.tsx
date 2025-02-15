import { useDeferredValue } from 'react'
import Expensive from './expensive'
import Number from './number'
import { useStore } from './store'

export default function Index() {
  const counter = useStore(state => state.counter)
  const increment = useStore(state => state.increment)
  const deferred = useDeferredValue(counter)

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
        <button className='button' onClick={increment}>counter++</button>
      </div>

    </div>
  )
}