import Banner from './components/section/1.banner'
import Footer from './components/section/footer'
import Course from './components/section/course'

export default function Home() {
  return (
    <div className='relative pt-16'>
      <Banner />
      <Course />
      <Footer />
    </div>
  )
}