import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import list__ from './List.jsx?raw'
import controller__ from './controller.js?raw'
import service__ from './service.js?raw'
import api__ from './api.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index.jsx': index__, 
        'List': list__,
        'controller': controller__,
        'service': service__,
        'api': api__ 
      }}
      caseRender={<Case />}
    />
  )
}