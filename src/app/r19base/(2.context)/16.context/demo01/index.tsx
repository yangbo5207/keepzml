import { useRef } from 'react'

export default function Demo01() {
  const input = useRef<any>(null)
  return (
    <div className='flex justify-between'>
      <input ref={input} type='text' className='border p-2 rounded flex-1' />
      <button
        onClick={() => input.current.focus()}
        className='button ml-3'
      >点击获取焦</button>
    </div>
  )
}
