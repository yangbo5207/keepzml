import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import List__ from './List.jsx?raw'
import controller__ from './controller.js?raw'
import service__ from './service.js?raw'
import api__ from './api.js?raw'
import http__ from './http.js?raw'

import filter_index__ from './Filter/index.jsx?raw'
import filter_input__ from './Filter/Input.jsx?raw'
import filter_select__ from './Filter/Select.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        'List': List__, 
        'controller': controller__,
        'service': service__,
        'api': api__,
        'http': http__,
        'Filter/index': filter_index__,
        'Filter/Input': filter_input__,
        'Filter/Select': filter_select__
        
      }}
      caseRender={<Case />}
    />
  )
}