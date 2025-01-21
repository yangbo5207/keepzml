import { HighlightedCode, Pre, RawCode } from 'codehike/code'
import { CopyButton } from './annotations/copy-button'
import { CodeIcon } from './annotations/icons'
import { cn, extractFlags } from './lib'

import { callout } from './annotations/callout'
import { mark } from './annotations/mark'
import { diff } from './annotations/diff'
import { focus } from './annotations/focus'
import { lineNumbers } from './annotations/line-numbers'

export type CodeProps = {
  codeblock: HighlightedCode,
  className?: string
}

export function CodeBase({ codeblock, className = '' }: CodeProps) {
  const { flags } = extractFlags(codeblock.meta)
  const handlers = [callout, mark, diff, focus, lineNumbers]
  const lang = codeblock.lang

  return (
    <div className={cn('code-base', { [className]: !!className, 'error': flags.includes('-error') }, lang)}>
      {flags.includes("-c") && (
        <CopyButton text={codeblock.value} />
      )}
      <Pre code={codeblock} handlers={handlers} />
    </div>
  )
}

export function CodeHeader({ lang = '', meta = '', value }: RawCode) {
  let { title } = extractFlags(meta)
  if (!title && lang == 'shellscript') {
    title = 'shell'
  }

  if (!title) return null

  return (
    <div className='code-header px-2 py-2 text-sm border-b border-gray-200 bg-gray-50'>
      <CodeTitle meta={meta} lang={lang} />
    </div>
  )
}

export function CodeTitle({ meta = '', className = '', lang }: {
  meta: string,
  className?: string,
  lang?: string
}) {
  let { title } = extractFlags(meta)
  if (!title && lang === 'shellscript') {
    title = 'shell'
  }
  return (
    <div className={cn('flex items-center gap-1 relative z-10', { [className]: !!className })}>
      {title && <CodeIcon title={title} />}
      <span>{title}</span>
    </div>
  )
}
