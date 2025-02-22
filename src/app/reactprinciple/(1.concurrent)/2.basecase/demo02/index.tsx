import Button from '@/components/ui/button'
import { useRef, useState } from 'react'

export default function Counter() {
  const container = useRef<any>(null)
  const [loopRunning, setLoop] = useState(false)
  const queue = useRef(Array.from({ length: 100000 }, () => task))

  function __click() {
    setLoop(true)
    requestIdleCallback(performWorkUnit)
  }

  function task() {
    let span = document.createElement('span')
    span.innerText = '1'
    container.current.appendChild(span)
  }

  function performWorkUnit() {
    if (queue.current.length === 0) {
      return setLoop(false)
    }
    requestIdleCallback(deadline => {
      let task: any;
      while ((task = queue.current.pop()) && !deadline.didTimeout && deadline.timeRemaining() > 0) {
        task()
      }
      performWorkUnit()
    })
  }

  return (
    <div className='space-y-4'>
      <Button danger disabled={loopRunning} onClick={__click}>{!loopRunning ? '插入 100 万个子节点' : '插入中...'}</Button>
      <div ref={container} className='h-72 break-words overflow-y-scroll'></div>
    </div>
  )
}