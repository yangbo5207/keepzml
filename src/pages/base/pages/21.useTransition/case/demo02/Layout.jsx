import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import tab__ from './tabs.jsx?raw'
import list__ from './list.jsx?raw'
import api__ from './api.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        'tab': tab__,
        'list': list__,
        'api': api__,
      }}
      caseRender={<Case />}
    />
  )
}