import { use } from 'react'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={item.id} className='flex border-b py-4 mx-4 items-center border-dashed'>
          <img className='w-14 h-14 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
