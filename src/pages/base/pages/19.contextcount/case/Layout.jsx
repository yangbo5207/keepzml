import Codepack from 'components/Codepack'
import Case from './index'

import index__ from './index.jsx?raw'
import context__ from './context.jsx?raw'
import card__ from './Card.jsx?raw'
import total__ from './Total.jsx?raw'
import css__ from './skin.css?raw'

export default function Layout() {
  return (
    <Codepack
      files={{ 
        'index': index__,
        'Context': context__,
        'Card': card__,
        'Total': total__,
        'skin.css': css__,
      }}
      caseRender={<Case />}
    />
  )
}