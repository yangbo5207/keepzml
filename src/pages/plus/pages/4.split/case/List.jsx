import { use } from 'react';
export default function CurrentList({promise}) {
  const results = use(promise)

  return (
    <div>
      {results.map((item, i) => (
        <div key={`h${i}`} className='flex border p-4 items-center my-4 rounded-md'>
          <img className='w-12 h-12 rounded-full' src={item.thumbnail} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
