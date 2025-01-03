import {useState, useRef, useEffect} from 'react'
import {TvMinimalPlay, RefreshCw} from 'lucide-react'
import Flex from 'components/Flex'
import clsx from 'clsx'

export default function Cardruntime(props) {
  const {className} = props
  const [show, update] = useState(true)
  const ref = useRef(null)

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
  const base = 'border rounded border-gray-200'
  const cls = clsx(base, className)
  return (
    <div className={cls}>
      <header className='flex border-b border-gray-200 bg-gray-50 items-center justify-between px-4 py-2'>
        <Flex>
          <TvMinimalPlay size={18} />
          <div className='ml-2'>Preview</div>
        </Flex>
        <RefreshCw size={18} className='text-red-400 cursor-pointer' onClick={__handler} />
      </header>
      <div className='p-4' ref={ref}>
        {show ? props.children : null}
      </div>
    </div>
  )
}
