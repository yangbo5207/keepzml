import { useEffect } from 'react'
import { useStore, update } from './store'

export default function Counter() {
  // !mark(1:2)
  const x = useStore(state => state.x)
  const y = useStore(state => state.y)

  useEffect(() => {
    window.addEventListener('mousemove', update)
    return () => {
      window.removeEventListener('mousemove', update)
    }
  }, [])

  return (
    <div className='text-center'>
      鼠标当前位置
      <div className='font-bold text-2xl mt-4'>{x}, {y}</div>
    </div>
  )
}