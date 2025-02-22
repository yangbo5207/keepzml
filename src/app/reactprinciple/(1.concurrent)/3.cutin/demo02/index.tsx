import Button from '@/components/ui/button'
import { useEffect, useRef, useState } from 'react'
import { pop, push } from './schedulerMinHeap'

export default function Counter() {
  const container = useRef<any>(null)
  const [loopRunning, setLoop] = useState(false)
  // 定义一个空队列
  const queue = useRef([])

  useEffect(() => {
    // 初始时移入 3000 个任务节点
    for (let i = 0; i < 3000; i++) {
      const node = {
        callback: performWorkUnit,
        id: i,
        sortIndex: 100
      }
      // !mark
      push(queue.current, node)
    }
  }, [])

  function __click() {
    setLoop(true)
    requestIdleCallback(workLoop)
  }

  function __cutinClick() {
    const node = {
      callback: performWorkHighPriorityUnit,
      id: 0,
      sortIndex: 1
    }
    push(queue.current, node)
  }

  // 普通单个任务
  function performWorkUnit() {
    const startTime = performance.now()
    let span = document.createElement('span')
    span.innerText = '1'
    while (performance.now() - startTime < 1) {
      // 阻塞 1 ms
    }
    container.current.appendChild(span)
  }

  // 高优先级单个任务
  function performWorkHighPriorityUnit() {
    const startTime = performance.now()
    let span = document.createElement('span')
    span.style.color = 'red'
    span.innerHTML = '<strong>2</strong>'

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
      let node: any;
      // !mark
      while ((node = pop(queue.current)) && !deadline.didTimeout && deadline.timeRemaining() > 0) {
        node.callback()
      }
      workLoop()
    })
  }

  return (
    <div className='space-y-4'>
      <div className='space-x-2'>
        <Button success disabled={!loopRunning} onClick={__cutinClick}>插入高优先级任务</Button>
        <Button danger disabled={loopRunning} onClick={__click}>{!loopRunning ? '插入 100 万个子节点' : '插入中...'}</Button>
      </div>

      <div ref={container} className='h-72 break-words overflow-y-scroll'></div>
    </div>
  )
}