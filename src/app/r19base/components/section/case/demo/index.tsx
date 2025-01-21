import TabCaseHeader from './header'
import TabCaseContent from './content'
import './index.css'

export default function SharedLayoutAnimation() {
  return (
    <div className='index_tab_case'>
      <nav className='nav'>
        <TabCaseHeader />
      </nav>
      <main>
        <TabCaseContent />
      </main>
    </div>
  )
}