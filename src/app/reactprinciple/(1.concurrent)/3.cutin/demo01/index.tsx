import Button from '@/components/ui/button'
import { useRef, useState } from 'react'

export default function Counter() {
  const container = useRef<any>(null)
  const [loopRunning, setLoop] = useState(false)
  const queue = useRef(Array.from({ length: 3000 }, () => performWorkUnit))

  function __click() {
    setLoop(true)
    requestIdleCallback(workLoop)
  }

  function performWorkUnit() {
    const startTime = performance.now()
    let span = document.createElement('span')
    span.innerText = '1'
    while (performance.now() - startTime < 1) {
      // 阻塞 1 ms
    }
    container.current.appendChild(span)
  }

  function workLoop() {
    if (queue.current.length === 0) {
      return setLoop(false)
    }
    requestIdleCallback(deadline => {
      let task: any;
      while ((task = queue.current.pop()) && !deadline.didTimeout && deadline.timeRemaining() > 0) {
        task()
      }
      workLoop()
    })
  }

  return (
    <div className='space-y-4'>
      <Button danger disabled={loopRunning} onClick={__click}>{!loopRunning ? '插入 100 万个子节点' : '插入中...'}</Button>
      <div ref={container} className='h-72 break-words overflow-y-scroll'></div>
    </div>
  )
}