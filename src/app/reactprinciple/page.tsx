import Banner from './components/banner'
import Invest from './components/invest'
import Part from './components/part'
import SuitableFor from './components/suitable_for'
import Introduce from './components/introduce'
import Tip from './components/tip'

export default function Page() {
  return (
    <div className='py-8 md:pt-16'>
      <div id='cp-content' className='px-4 max-w-[1024px] mx-auto 2xl:pr-9!'>
        <div className='overflow-hidden space-y-8'>
          <Banner />
          <Invest />
          <SuitableFor />
          <Part />
          <Introduce />
          <Tip />
        </div>
      </div>
    </div>
  )
}
