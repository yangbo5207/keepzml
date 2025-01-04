import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import dialog__ from 'components/Dialog/index.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'Dialog': dialog__,
      }}
      caseRender={<Case />}
    />
  )
}