import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import compiler__ from './compiler.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        '编译后': compiler__, 
      }}
      caseRender={<Case />}
    />
  )
}