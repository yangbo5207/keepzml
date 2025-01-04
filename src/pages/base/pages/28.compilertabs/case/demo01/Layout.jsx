import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import panel1__ from './Panel1.jsx?raw'
import panel2__ from './Panel2.jsx?raw'
import panel3__ from './Panel3.jsx?raw'
import panel4__ from './Panel4.jsx?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__, 
        'Panel1': panel1__,
        'Panel2': panel2__,
        'Panel3': panel3__,
        'Panel4': panel4__,
      }}
      caseRender={<Case />}
    />
  )
}