import { useEffect } from 'react'
import { useStore, update } from './store'

export default function Counter() {
  const { x, y } = useStore()

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