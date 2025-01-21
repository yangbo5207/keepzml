import Flex from 'components/ui/flex'
import { motion } from 'motion/react'
import { Nut, ArrowRight, ChevronDown, Castle, GitPullRequestDraft, Projector, Unplug } from 'lucide-react'

export default function EfficientLearning() {
  return (
    <div className='py-14 px-0'>
      <div className='md:flex max-w-[1080px] mx-auto md:space-x-14 md:items-start'>
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className='flex-1 space-y-6'
        >
          <h2 className='text-2xl font-bold text-center md:text-start'>高效学习是我们共同的目的</h2>
          <p className='leading-8'>
            和之前的版本不同，React 19 是一次开发方式的变革。因此，想要彻底掌握 React 19 的最佳实践，是一件比较困难的事情，普通学习者想要通过自学达到这个程度，需要花费大量的时间去做尝试和验证。
          </p>
          <p className='leading-8'>
            因此，为了让付费用户可以更加轻松的掌握 React 19，我在写这本小册时，在如果高效学习上，做了非常多的思考与设计。更是提前与 200 名付费用户深度沟通交流，在内容和案例编排也反复的打磨才最终成型。
          </p>
          <div>
            <a
              className='inline-flex py-2.5 space-x-2 px-4 items-center border rounded-full border-gray-300 hover:bg-blue-50 hover:border-blue-500 transition'
              href='https://mp.weixin.qq.com/s/y2CibsN_0aRcpg9YIz8u1A'
              target='_blank'
            >
              <Nut size={16} />
              <span className='text-sm'>了解更多关于学习方法的思考</span>
              <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: 'spring' }}
          className='md:flex-1 mt-12 md:mt-0'
        >
          <Flex className='text-gray-500 space-x-2'>
            <ChevronDown size={18} />
            <span>特性</span>
          </Flex>

          <div className='grid grid-cols-2 gap-6 mt-8'>
            <Flex col className='flex-1 border border-gray-200 h-36 rounded hover:bg-gray-50 transition p-6 justify-between items-start cursor-pointer'>
              <Castle size={28} className='text-green-400' />
              <p className='text-lg'>知识点覆盖完整</p>
            </Flex>
            <Flex col className='flex-1 border border-gray-200 h-36 rounded  hover:bg-gray-50 transition p-6 justify-between items-start'>
              <GitPullRequestDraft size={28} className='text-green-400' />
              <p className='text-lg'>可复制直接使用</p>
            </Flex>
            <Flex col className='flex-1 border border-gray-200 h-36 rounded-md hover:bg-gray-50 transition p-6 justify-between items-start'>
              <Projector size={28} className='text-green-400' />
              <p className='text-lg'>内置案例可演示</p>
            </Flex>
            <Flex col className='flex-1 border border-gray-200 h-36 rounded-md hover:bg-gray-50 transition p-6 justify-between items-start'>
              <Unplug size={28} className='text-green-400' />
              <p className='text-lg'>付费群直播答疑</p>
            </Flex>
          </div>
        </motion.div>
      </div>
    </div>
  )
}