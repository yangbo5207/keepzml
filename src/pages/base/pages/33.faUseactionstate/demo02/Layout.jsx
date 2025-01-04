import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import book__ from './BookItem.jsx?raw'
import sub__ from './SubmitButton.jsx?raw'
import list__ from './List.jsx?raw'
import act__ from './actions.js?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'BookItem': book__,
        'SubmitButton': sub__,
        'List': list__,
        'actions': act__,
      }}
      caseRender={<Case />}
    />
  )
}