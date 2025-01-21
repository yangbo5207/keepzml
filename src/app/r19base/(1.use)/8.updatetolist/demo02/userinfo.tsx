import { use } from 'react'
import { getMessage } from './api'

export default function Userinfo({ promise, index = 0 }: {
  promise: ReturnType<typeof getMessage>,
  index?: number
}) {
  const { id, value } = use(promise)

  return (
    <div className='flex border border-gray-200 p-4 rounded items-start'>
      <img className='w-10' src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} alt='' />
      <div className='flex-1 ml-3'>
        <div>{id || 'momo'}</div>
        <div className='text-sm mt-1 text-gray-600'>{value}</div>
      </div>
    </div>
  )
}
