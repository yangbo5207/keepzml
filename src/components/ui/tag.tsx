import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export default function Tag(props: any) {
  const { primary, type, warning, danger, newer, hard, className, children } = props

  const base = 'text-sm text-gray-500 bg-gray-100 border-gray-200 border px-2 rounded-full text-xs'

  const clx = clsx(base, {
    ['bg-blue-100 text-blue-500 border-blue-200']: !!primary || type === 'primary',
    ['bg-green-100 text-green-500 border-green-200']: !!newer || type === 'newer',
    ['bg-red-100 text-red-500 border-red-200']: !!danger || type == 'danger',
    ['bg-orange-100 text-orange-500 border-orange-200']: !!warning || type === 'warning',
    ['bg-fuchsia-100 text-fuchsia-500 border-fuchsia-200']: !!hard || type === 'hard',
  }, className)

  return (
    <label className={twMerge(clx)}>
      {children}
    </label>
  )
}
