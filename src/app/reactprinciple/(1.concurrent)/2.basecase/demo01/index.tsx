import Button from '@/components/ui/button'
import { useRef, useState } from 'react'

export default function Counter() {
  const container = useRef<any>(null)
  const [loopRunning, setLoop] = useState(false)

  // 长耗时任务
  function expensiveTask() {
    let i = 0
    for (; i < 100000; i++) {
      let span = document.createElement('span')
      span.innerText = '1'
      container.current.appendChild(span)
    }
  }

  function __click() {
    setLoop(true)
    setTimeout(() => {
      expensiveTask()
    }, 100)
  }

  return (
    <div className='space-y-4'>
      <Button disabled={loopRunning} danger onClick={__click}>插入 100 万个子节点</Button>
      <div ref={container} className='h-72 break-words overflow-y-scroll'></div>
    </div>
  )
}