import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import input__ from './Input.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'Input': input__,
      }}
      caseRender={<Case />}
    />
  )
}