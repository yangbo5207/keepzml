import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import expensive__ from './expensive.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'Expensive': expensive__
      }}
      caseRender={<Case />}
    />
  )
}