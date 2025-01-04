import { useState } from 'react'
import Show from 'components/Show'
import Button from 'components/Button'
import Cardruntime from 'components/Cardruntime'
import clsx from 'clsx'
import Code from './code'

import ButtonCaseRaw from './ButtonCase?raw'
import ButtonRaw from 'components/Button/index.jsx?raw'

const defiles = {
  'ButtonCase': ButtonCaseRaw,
  'Button': ButtonRaw,
}

export default function Codepack(props) {
  const {files = defiles, caseRender, active = 0, className} = props
  const titles = Object.keys(files)
  const [currentCode, updateCurrentCode] = useState(titles[active])

  function __switch(i) {
    updateCurrentCode(titles[i])
  }

  const base = 'flex bg-white flex-col-reverse rounded my-5'
  const cls = clsx(base, className)

  return (
    <div className={cls}>
      <div className='overflow-scroll flex-1 relative'>
        <header className='flex border-b border-x border-gray-200 sticky top-0 bg-gray-50 py-1 rounded overflow-auto'>
          {titles.map((title, i) => (
            <Button key={title} ghost onClick={() => __switch(i)} className={currentCode === title ? 'text-green-500' : ''}>
              {title}
            </Button>
          ))}
        </header>
        <div className='keep codepack'>
          <pre className='border-x border-b rounded'>
            <Code className='language-js'>{files[currentCode]}</Code>
          </pre>
        </div>
      </div>

      <Show when={caseRender}>
        <Cardruntime reload>{caseRender}</Cardruntime>
      </Show>
    </div>
  )
}
