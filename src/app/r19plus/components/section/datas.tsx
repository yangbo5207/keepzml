import { motion } from 'motion/react'
import { UserRoundCheck, NotebookPen, MonitorPlay, LandPlot } from 'lucide-react'
import Flex from 'components/ui/flex'
import { variants } from './variants'

export default function LearnBefore() {
  const sources = [{
    desc: '已购买',
    count: 150,
    icon: UserRoundCheck,
    delay: 0.1
  }, {
    desc: '已更新',
    count: 29,
    icon: NotebookPen,
    delay: 0.2
  }, {
    desc: '内置案例',
    count: 30,
    icon: MonitorPlay,
    delay: 0.3
  }, {
    desc: '已重构',
    count: 3,
    icon: LandPlot,
    delay: 0.35
  }]
  return (
    <div className='py-2 md:py-14 flex justify-between'>
      {sources.map(item => (
        <motion.div className='block' {...variants(item.delay)} key={item.delay}>
          <Flex className=''>
            <Flex className='bg-red-100 rounded-full p-2 md:p-4'>
              <item.icon className='text-red-600' size={18} />
            </Flex>

            <div className='ml-2'>
              <div className='font-bold text-base md:text-xl'>{item.count}+</div>
              <div className='text-sm md:text-sm'>{item.desc}</div>
            </div>
          </Flex>
        </motion.div>
      ))}
    </div>
  )
}
