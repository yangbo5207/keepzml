import { use } from 'react'
import List from './list'
import { getUsersInfo } from './api'

export default function UserAccount(props: {
  promise: ReturnType<typeof getUsersInfo>
}) {
  const { results } = use(props.promise)
  return (
    <div className='border border-gray-200 rounded p-4 space-y-4'>
      <div className='flex space-x-4'>
        {results.map((item, index) => (
          <div className="flex-1 overflow-hidden" key={`z-${index}`}>
            <div className='rounded h-32 overflow-hidden bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(${item.picture.large})` }}></div>
            <div className="mt-4 font-bold">{item.name.last}</div>
            <div className="mt-1 text-gray-400 text-sm">{item.email}</div>
          </div>
        ))}
      </div>
      <List />
    </div>
  )
}
