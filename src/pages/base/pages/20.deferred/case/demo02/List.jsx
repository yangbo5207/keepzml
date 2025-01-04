import { memo, use } from 'react';
import { createRandomMessage } from 'utils'

function CurrentList({promise}) {
  const {results} = use(promise)
  console.log('List with use renderred.')
  return (
    <div>
      {results.map((item, i) => (
        <div className='flex border p-4 items-center my-4 rounded' key={`v${i}`}>
          <img className='w-12 h-12 rounded-full' src={item.picture.large} alt='' />
          <div className='flex-1 ml-4'>
            <div className='font-bold'>{item.name.last}</div>
            <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{createRandomMessage()}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default memo(CurrentList)