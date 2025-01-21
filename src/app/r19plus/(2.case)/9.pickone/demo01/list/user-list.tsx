import { use } from 'react'
import { getOverAccounts } from './controller'

export default function UserList({ promise }: {
  promise: ReturnType<typeof getOverAccounts>
}) {
  const users = use(promise)
  return (
    <div>
      {users.map(item => (
        <div key={item.id} className='flex border border-gray-300 p-4 items-center my-4 rounded'>
          <img className='w-12 h-12 rounded-full' src={item.thumb} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.fullname}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>
              {item.desc}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
