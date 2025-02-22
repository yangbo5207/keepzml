import Button from '@/components/ui/button'
import { useRef, useState } from 'react'

export default function Counter() {
  const container = useRef<any>(null)
  const [loopRunning, setLoop] = useState(false)
  const queue = useRef(Array.from({ length: 100000 }, () => performWorkUnit))

  function __click() {
    setLoop(true)
    requestIdleCallback(workLoop)
  }

  function performWorkUnit() {
    let span = document.createElement('span')
    span.innerText = '1'
    container.current.appendChild(span)
  }

  function workLoop() {
    if (queue.current.length === 0) {
      return setLoop(false)
    }
    requestIdleCallback(deadline => {
      let performWorkUnit: any;
      // 中断条件：没有剩余时间了
      while ((performWorkUnit = queue.current.pop()) && !deadline.didTimeout && deadline.timeRemaining() > 0) {
        performWorkUnit()
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