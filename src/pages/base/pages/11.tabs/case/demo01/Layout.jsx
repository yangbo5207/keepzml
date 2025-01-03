import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import tab__ from './tabs.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        'tab': tab__
      }}
      caseRender={<Case />}
    />
  )
}