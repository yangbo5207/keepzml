import Banner from './components/section/1.banner'
import Packcase from './components/section/2.case'
import Footer from './components/section/footer'
import Course from './components/section/course'

export default function Home() {
  return (
    <div className='relative pt-16'>
      <Banner />
      <Packcase />
      <Course />
      <Footer />
    </div>
  )
}