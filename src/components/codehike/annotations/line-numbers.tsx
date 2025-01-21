import { AnnotationHandler, InnerLine } from 'codehike/code'
import { Terminal } from 'lucide-react'

export const lineNumbers: AnnotationHandler = {
  name: 'line-numbers',
  Line: (props) => {
    const { totalLines, lineNumber } = props
    const max = totalLines.toString().length
    return (
      <div className='flex items-center'>
        <span className='line-number px-4 text-gray-400 text-xs select-none'>
          {totalLines === 1 ? <Terminal size={14} /> : <LineNumberElement lineNumber={lineNumber} max={max} />}
        </span>

        <InnerLine merge={props} className='flex-1 pl-2' />
      </div>
    )
  },
}

interface LineNumberElementProps {
  lineNumber: number,
  max: number
}

function LineNumberElement({ lineNumber, max }: LineNumberElementProps) {
  const len = lineNumber.toString().length
  const dis = max - len
  let fix0 = ''

  if (dis > 0) {
    for (let i = 0; i < dis; i++) {
      fix0 += '0'
    }
  }

  return (
    <span>
      {lineNumber}
      <span className='invisible'>{fix0}</span>
    </span>
  )
}