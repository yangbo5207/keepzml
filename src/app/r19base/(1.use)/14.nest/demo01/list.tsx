import { use } from 'react'
import { getUsersInfo } from './api'

export default function CurrentList({ promise }: {
  promise: ReturnType<typeof getUsersInfo>
}) {
  const users = use(promise)

  return (
    <div className='space-y-2'>
      {users.map(item => (
        <div key={item.id} className='flex border rounded p-4 items-center border-gray-200'>
          <img className='w-14 h-14 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 text-sm mt-1 line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}