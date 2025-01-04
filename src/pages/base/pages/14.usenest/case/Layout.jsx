import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import account__ from './Account.jsx?raw'
import list__ from './List.jsx?raw'
import api__ from './api.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        'account': account__, 
        'list': list__,
        'api': api__,
      }}
      caseRender={<Case />}
    />
  )
}