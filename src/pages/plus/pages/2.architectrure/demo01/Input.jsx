import {Search} from 'lucide-react'

export default function Input(props) {
  return (
    <div className='flex items-center border px-2 rounded text-gray-500'>
      <Search size={20} />
      <input
        className='flex-1 !border-none p-2'
        style={{ outline: 'none' }}
        type='text' {...props}
      />
    </div>
  )
}
