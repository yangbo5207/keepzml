import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import List__ from './List.jsx?raw'
import input__ from './Input.jsx?raw'
import select__ from './select.jsx?raw'
import controller__ from './controller.js?raw'
import service__ from './service.js?raw'
import api__ from './api.js?raw'
import http__ from './http.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        'Select': select__,
        'List': List__, 
        'Input': input__,
        'controller': controller__,
        'service': service__,
        'api': api__,
        'http': http__,
        
      }}
      caseRender={<Case />}
    />
  )
}