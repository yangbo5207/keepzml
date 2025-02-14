'use client'

import clsx from 'clsx'
import { use } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { HighlightedCode } from 'codehike/code'
import { CodeBase } from './code-base'
import { CodeTabsContext } from './code-tabs-context'

export function CodeTabsInner({ highlighteds }: {
  highlighteds: HighlightedCode[]
}) {
  const { index } = use(CodeTabsContext)

  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className={clsx('icon', {
          'flex-1 w-0': highlighteds.length > 5
        })}
        key={highlighteds[index].meta}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <CodeBase codeblock={highlighteds[index]} />
      </motion.div>
    </AnimatePresence>
  )
}

