'use client'

import { useState, useRef, use } from 'react'
import { RawCode } from 'codehike/code'
import { CodeTitle } from './code-base'
import { AnimatePresence, motion } from 'framer-motion'
import { CodeTabsContext } from './code-tabs-context'
import clsx from 'clsx'

interface CodeTabHeaderProps {
  tabs: RawCode[]
}

export function CodeTabHeader({ tabs }: CodeTabHeaderProps) {
  const { index, setIndex } = use(CodeTabsContext)
  const [hover, setHover] = useState<number | null>(null)
  let timeoutRef = useRef<any>(null)

  function _mouseenter(i: number) {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current)
    }
    setHover(i)
  }

  function _mouseleave() {
    timeoutRef.current = window.setTimeout(() => {
      setHover(null)
    }, 200)
  }

  function _click(i: number) {
    setIndex(i)
  }

  return (
    <div className={clsx('flex px-1 py-2 bg-gray-50 gap-1 overflow-auto border-b border-gray-200', {
      'flex-col w-40 border-r border-b-0': tabs.length > 5
    })}>
      {tabs.map((tab, i) => (
        <div
          key={tab.meta}
          onMouseEnter={() => _mouseenter(i)}
          onMouseLeave={_mouseleave}
          onClick={() => _click(i)}
          className='relative text-sm transition-colors delay-150 hover:delay-0 pl-2 pr-3 py-1 cursor-pointer'
        >
          <AnimatePresence>
            {hover === i && (
              <motion.span
                className="absolute inset-0 rounded bg-gray-200"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
              />
            )}
          </AnimatePresence>
          <CodeTitle meta={tab.meta} className={index === i ? 'text-blue-700' : ''} />
        </div>
      ))}
    </div>
  )
}
