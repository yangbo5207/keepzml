import { useRef } from 'react'
import Input from './Input'

export default function Demo02() {
  const input = useRef(null)
  return (
    <div className='flex justify-between'>
      <Input ref={input} type='text' className='flex-1' />
      <button
        onClick={() => input.current.focus()}
        className='ml-3'
      >点击获取焦</button>
    </div>
  )
}
