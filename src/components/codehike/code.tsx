import { HighlightedCode, Inline } from 'codehike/code'
import { CodeBase, CodeHeader } from './code-base'
import './code.css'

export type CodeProps = {
  codeblock: HighlightedCode
}

export function Code({ codeblock }: CodeProps) {
  return (
    <div className='code-wrapper border my-4 border-gray-200 rounded overflow-hidden'>
      <CodeHeader {...codeblock} />
      <CodeBase codeblock={codeblock} />
    </div>
  )
}

export function InlineCode({ codeblock }: CodeProps) {
  return (
    <Inline code={codeblock} />
  )
}