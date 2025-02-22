import Button from '@/components/ui/button'
import { useRef } from 'react'

export default function Counter() {
  const container = useRef<any>(null)

  function __click() {
    let i = 0
    for (; i < 100000; i++) {
      let span = document.createElement('span')
      span.innerText = '1'
      container.current.appendChild(span)
    }
  }

  return (
    <div className='space-y-4'>
      <Button danger onClick={__click}>插入 100 万个子节点</Button>
      <div ref={container} className='h-72 break-words overflow-y-scroll'></div>
    </div>
  )
}