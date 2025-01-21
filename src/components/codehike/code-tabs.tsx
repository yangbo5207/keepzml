import { useState, Suspense, use } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { z } from 'zod'
import { Block, CodeBlock, parseProps } from 'codehike/blocks'
import { highlight, HighlightedCode, RawCode } from 'codehike/code'
import { CodeBase } from './code-base'
import { CodeTabHeader } from './code-tabs-header'
import theme from './theme'
import clsx from 'clsx'

const Schema = Block.extend({ tabs: z.array(CodeBlock) })

async function highLighted(tabs: RawCode[]) {
  const h = await Promise.all(tabs.map(tab => highlight(tab, theme)))
  return h
}

export default function CodeTabs(props: unknown) {
  const { tabs } = parseProps(props, Schema)
  const [promise] = useState(() => highLighted(tabs))
  const [index, setIndex] = useState(0)
  return (
    <div className={clsx('code-tabs border rounded border-gray-200 overflow-hidden my-5', {
      'flex': tabs.length > 5
    })}>
      <CodeTabHeader tabs={tabs} index={index} onClick={(i) => setIndex(i)} />
      <Suspense fallback={<div className='code-base opacity-0'><pre>{tabs[index].value}</pre></div>}>
        <CodeTabsInner promise={promise} index={index} />
      </Suspense>
    </div>
  )
}

function CodeTabsInner({ promise, index }: {
  promise: Promise<HighlightedCode[]>,
  index: number
}) {
  const tabs = use(promise)

  // return (
  //   <>
  //     {tabs.map((tab, i) => (
  //       <CodeBase codeblock={tab} className={i === index ? 'block' : 'hidden'} key={tab.meta} />
  //     ))}
  //   </>
  // )
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        className={clsx('icon', {
          'flex-1 w-0': tabs.length > 5
        })}
        key={tabs[index].meta}
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <CodeBase codeblock={tabs[index]} />
      </motion.div>
    </AnimatePresence>
  )
}
