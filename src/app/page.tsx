'use client'

import Banner from './components/section/1.banner'
import dynamic from 'next/dynamic'
import Footer from './components/section/footer'
import Course from './components/section/course'
import AllCourses from '@/app/components/section/allcourse'

// 使用动态导入解决水合错误
const HotestCurse = dynamic(() => import('./components/section/hotest-curse'), {
  ssr: false
})

const LatestCourseBanner = dynamic(() => import('./components/section/2.banner'), {
  ssr: false
})
const UpcomingCoursesBanner = dynamic(() => import('./components/section/upcoming-courses-banner'), {
  ssr: false
})

export default function Page() {
  return (
    <div className='relative pt-16'>
      <Banner />
      <LatestCourseBanner />
      {/* <Course /> */}
      <UpcomingCoursesBanner />
      <HotestCurse />
      <AllCourses />
      <Footer />
    </div>
  )
}