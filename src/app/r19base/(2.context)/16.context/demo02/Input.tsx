import { Search } from 'lucide-react'
import { InputHTMLAttributes, RefAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = RefAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>

export default function Input(props: InputProps) {
  const { ref, className, ...other } = props
  return (
    <div className={twMerge('flex items-center border border-gray-200 px-2 rounded text-gray-500', className)}>
      <Search size={18} />
      <input ref={ref} className='flex-1 !border-none p-2 text-sm' type='text' {...other} />
    </div>
  )
}
