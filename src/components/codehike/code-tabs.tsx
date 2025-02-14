import { z } from 'zod'
import { Block, CodeBlock, parseProps } from 'codehike/blocks'
import { highlight } from 'codehike/code'
import { CodeTabHeader } from './code-tabs-header'
import { CodeTabsInner } from './code-tabs-inner'
import Provider from './code-tabs-context'
import theme from './theme'
import clsx from 'clsx'

const Schema = Block.extend({ tabs: z.array(CodeBlock) })

export default async function CodeTabs(props: unknown) {
  const { tabs } = parseProps(props, Schema)
  const highlighteds = await Promise.all(tabs.map(tab => highlight(tab, theme)))

  return (
    <div className={clsx('code-tabs border rounded border-gray-200 overflow-hidden my-5', {
      'flex': tabs.length > 5
    })}>
      <Provider>
        <CodeTabHeader tabs={tabs} />
        <CodeTabsInner highlighteds={highlighteds} />
      </Provider>
    </div>
  )
}