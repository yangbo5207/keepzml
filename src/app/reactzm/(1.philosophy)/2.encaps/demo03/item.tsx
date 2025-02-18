import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface ListItemProps {
  icon: any,
  iconColor?: string,
  title: string,
  number: number,
  size: string,
  className?: string
}

export default function Item(props: ListItemProps) {
  const { title, number, size, iconColor, className = '' } = props

  return (
    <div className={twMerge(clsx('flex items-center border border-blue-200 rounded-2xl p-4 space-x-4', className))}>
      <props.icon className={iconColor} />
      <div className='flex-1'>
        <div className='font-bold'>{title}</div>
        <div className='text-sm text-gray-600'>{number} Files</div>
      </div>
      <div className='text-sm font-bold'>{size}</div>
    </div>
  )
}