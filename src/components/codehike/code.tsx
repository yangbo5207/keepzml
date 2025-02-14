import { highlight, Inline, RawCode } from 'codehike/code'
import { CodeBase, CodeHeader } from './code-base'
import theme from './theme'
import './code.css'

export type CodeProps = {
  codeblock: RawCode
}

export async function Code({ codeblock }: CodeProps) {
  const highlighted = await highlight(codeblock, theme)

  return (
    <div className='code-wrapper border my-4 border-gray-200 rounded overflow-hidden'>
      <CodeHeader {...codeblock} />
      <CodeBase codeblock={highlighted} />
    </div>
  )
}

export async function InlineCode({ codeblock }: CodeProps) {
  const highlighted = await highlight(codeblock, theme)
  return (
    <Inline code={highlighted} style={highlighted.style} />
  )
}