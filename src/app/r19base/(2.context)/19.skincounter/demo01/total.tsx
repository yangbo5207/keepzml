import { use } from 'react'
import { Context } from './context'

export default function Total() {
  const { count } = use(Context)
  return (
    <div>
      <div className='font-bold'>Total Switch Count</div>
      <p className='text-sm'>这里统计的是所有组件的切换次数: {count}</p>
    </div>
  )
}
