import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useEffect, useState } from 'react'
import Button from 'components/ui/button'

export interface DialogProps {
  show: boolean,
  onClose: () => void,
  children?: any
}

export default function Dialog({ show, onClose, children }: DialogProps) {
  const [open, setOpen] = useState(show)

  useEffect(() => {
    setOpen(show)
  }, [show])

  function __clickHandler() {
    onClose && onClose()
  }
  return (
    <div className={twMerge(clsx('fixed w-full h-full bg-black/30 left-0 top-0 z-90 hidden', {
      'block': !!open,
    }))}>
      <div className='w-80 mx-auto mt-40 bg-white p-4 rounded-md'>
        <header className='pb-2 text-sm font-bold border-b border-gray-200'>弹窗消息</header>
        <div className='py-2 text-sm'>
          {children}
        </div>

        <footer className='pt-2 text-right'>
          <Button primary onClick={__clickHandler}>确认</Button>
        </footer>
      </div>
    </div>
  )
}