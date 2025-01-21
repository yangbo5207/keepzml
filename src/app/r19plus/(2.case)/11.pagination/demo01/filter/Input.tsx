import { Search } from 'lucide-react'
import { InputHTMLAttributes } from 'react'

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className='flex items-center border border-gray-200 px-2 rounded text-gray-500'>
      <Search size={18} />
      <input className='flex-1 !border-none p-2 text-sm' type='text' {...props} />
    </div>
  )
}
