import Background from './background'
import Banner from './banner'
import SectionDatas from './section-datas'
import SectionCase from './section-case'
import LearnBefore from './learn-before'
import EfficientLearning from './efficient-learning'
import SectionType from './section-type' 
import SectionPrice from './section-price' 
import SectionSponsor from './section-sponsor'
import SectionCourse from './section-course'
import SctionComment from './section-comment'
import SectionFooter from './section-footer'
import './App.css'

export function variants(delay = 0) {
  return {
    initial: {y: 60, opacity: 0},
    whileInView: {y: 0, opacity: 1},
    transition: {duration: 0.5, delay: delay},
    viewport: {once: true}
  }
}

function App() {
  return (
    <div className='relative pt-16'>
      <Background />
      <div>
        <Banner />
        <SectionDatas />
        <SectionCase />
        <LearnBefore />
        <EfficientLearning />
        <SectionType />
        <SectionPrice />
        <SectionSponsor />
        <SectionCourse />
        <SctionComment />
        <SectionFooter />
      </div>
    </div>
  )
}

export default App
