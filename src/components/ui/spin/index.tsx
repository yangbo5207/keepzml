import { useState, useEffect } from 'react'
import { Loader } from 'lucide-react'
import clsx from 'clsx'
import './index.css'

export default function Index(props: {
  loading: boolean,
  type?: 'icon' | 'mask',
  children?: any
}) {
  const { loading, type = 'icon' } = props
  const [show, setShow] = useState(false)
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    if (loading) {
      setShow(true); setDisplay(true)
    } else { setShow(false) }
  }, [loading]);

  const base = 'spin flex items-center justify-center top-0 bg-white/50'
  const cls = clsx(base, {
    in: show,
    out: !show
  })

  function __animationendHandler() {
    if (!show) setDisplay(false)
  }

  return (
    <div className='relative'>
      {props.children}
      {display ? (
        <div className={cls} onAnimationEnd={__animationendHandler}>
          {type === 'icon' && (
            <Loader className='animate-spin' />
          )}
        </div>
      ) : null}
    </div>
  )
}
