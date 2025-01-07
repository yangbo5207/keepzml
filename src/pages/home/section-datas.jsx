import {motion} from 'motion/react'
import {UserRoundCheck, NotebookPen, MonitorPlay} from 'lucide-react'
import Flex from 'components/Flex'
import {variants} from './index'

export default function LearnBefore() {
  const sources = [{
    desc: '已购买',
    count: 700,
    icon: UserRoundCheck,
    delay: 0.1
  }, {
    desc: '已更新',
    count: 50,
    icon: NotebookPen,
    delay: 0.2
  }, {
    desc: '内置案例',
    count: 60,
    icon: MonitorPlay,
    delay: 0.3
  }]
  return (
    <div className='py-14 md:py-28 bg-opacity-70 max-w-[1080px] mx-auto px-6 flex justify-between'>
      {sources.map((item, i) => (
        <motion.a className='block'href={item.url} {...variants(item.delay)} target='_blank' key={item.url}>
          <Flex className=''>
            <Flex className='bg-red-100 rounded-full p-2 md:p-5'>
              <item.icon className='text-red-600' />
            </Flex>
            
            <div col className='ml-2 md:ml-10'>
              <div className='font-bold text-base md:text-2xl'>{item.count}+</div>
              <div className='md:mt-2 text-sm md:text-base'>{item.desc}</div>
            </div>
          </Flex>
        </motion.a>
      ))}    
    </div>
  )
}
