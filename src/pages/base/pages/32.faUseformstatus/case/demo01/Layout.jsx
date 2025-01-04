import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import actions__ from './actions.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'actions': actions__
      }}
      caseRender={<Case />}
    />
  )
}