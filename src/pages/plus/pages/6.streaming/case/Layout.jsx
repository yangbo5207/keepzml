import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import useracount__ from './user-account.jsx?raw'
import api__ from './api.js?raw'
import list_index__ from './List/index.jsx?raw'
import list_service__ from './List/service.js?raw'
import list_controller__ from './List/controller.js?raw'
import list_list__ from './List/user-list.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        'UserAccount': useracount__, 
        'api': api__,
        'List/index': list_index__,
        'List/controller': list_controller__,
        'List/service': list_service__,
        'List/user-list': list_list__,
        
      }}
      caseRender={<Case />}
    />
  )
}