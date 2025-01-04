import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import modal__ from './Modal.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'Modal': modal__
      }}
      caseRender={<Case />}
    />
  )
}