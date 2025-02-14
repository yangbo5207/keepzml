'use client'

import SectionBanner from './components/section/banner'
import SectionDatas from './components/section/datas'
import SectionBefore from './components/section/before'
import SectionEfficient from './components/section/efficient'
import SectionType from './components/section/type'
import SectionPrice from './components/section/price'
import SectionCourse from './components/section/course'

export default function Page() {
  return (
    <div className='pt-8 md:pt-16'>
      <div id='cp-content' className='px-4 max-w-[1024px] mx-auto 2xl:pr-9!'>
        <div className='overflow-hidden'>
          <SectionBanner />
          <SectionDatas />
          <div className='border-b my-10 border-dashed border-gray-300'></div>
          <SectionBefore />
          <div className='border-b my-10 border-dashed border-gray-300'></div>
          <SectionEfficient />
          <div className='border-b my-10 border-dashed border-gray-300'></div>
          <SectionType />
          <div className='border-b my-10 border-dashed border-gray-300'></div>
          <SectionPrice />
          <div className='border-b my-10 border-dashed border-gray-300'></div>
          <SectionCourse />
        </div>
      </div>
    </div>
  )
}
