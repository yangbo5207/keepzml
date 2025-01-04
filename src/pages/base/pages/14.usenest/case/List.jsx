import {createRandomMessage} from 'utils'
import { use } from 'react'

export default function CurrentList({promise}) {
  const {results} = use(promise)
  return (
    <div>
      {results.map((item, i) => (
        <div key={`h${i}`} className='flex border p-4 items-center my-4 rounded'>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 line-clamp-1'>
              {createRandomMessage()}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
