import { useState, useRef, useEffect, PropsWithChildren } from 'react'
import { TvMinimalPlay, RefreshCw } from 'lucide-react'
import Flex from 'components/ui/flex'
import clsx from 'clsx'

export default function Preview(props: PropsWithChildren<{ className?: string }>) {
  const { className } = props
  const [show, update] = useState(true)
  const ref = useRef<any>(null)

  useEffect(() => {
    setTimeout(() => {
      const h = ref.current.getBoundingClientRect().height
      ref.current.style.minHeight = `${h}px`
    }, 50);
  }, [])

  function __handler() {
    update(false)
    setTimeout(() => {
      update(true)
    }, 40)
  }
  const base = 'preview border rounded border-gray-200 overflow-hidden my-5'
  const cls = clsx(base, className)
  return (
    <div className={cls}>
      <header className='flex border-b border-gray-200 bg-gray-50 items-center justify-between px-4 py-2'>
        <Flex>
          <TvMinimalPlay size={16} />
          <div className='ml-2 text-sm'>预览</div>
        </Flex>
        <RefreshCw size={16} className='text-gray-500 cursor-pointer' onClick={__handler} />
      </header>
      <div className='p-4' ref={ref}>
        {show ? props.children : null}
      </div>
    </div>
  )
}
