import { motion } from 'motion/react'
import { CircleCheck, ChevronRight } from 'lucide-react'
import Flex from 'components/ui/flex'
import { variants } from './variants'

export default function LearnBefore() {
  const icls = 'mt-5 rounded border border-gray-200 py-3 px-4 bg-gray-50 hover:bg-blue-50 hover:border-blue-500 transition'
  const sources = [{
    desc: '具备一定的 JavaScript 基础',
    tip: 'JavaScript 核心进阶',
    url: 'https://xinyuzone.cn/column/1818097927437131776',
    delay: 0.3
  }, {
    desc: '熟悉异步请求，熟悉 fetch 与 Promise',
    tip: 'fetch',
    url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch',
    delay: 0.4
  }, {
    desc: '熟悉 React 之前的版本的使用',
    tip: 'React 知命境',
    url: 'https://react.usehook.cn/',
    delay: 0.5
  }]
  return (
    <div className='py-14 px-0'>
      <motion.h1 className='text-2xl font-bold text-center my-0' {...variants()}>学前准备</motion.h1>

      <motion.p {...variants(0.1)} className='text-center mt-2 mb-10'>
        学习之前，你需要具备一些前置的基础能力
      </motion.p>

      {sources.map((item) => (
        <motion.a className='block  text-sm md:text-base' href={item.url} {...variants(item.delay)} target='_blank' key={item.url}>
          <Flex className={icls} between>
            <Flex>
              <CircleCheck className='text-blue-600' size={18} />
              <div className='ml-2 line-clamp-1'>{item.desc}</div>
            </Flex>
            <Flex className='space-x-2' >
              <span className='line-clamp-1'>{item.tip}</span>
              <ChevronRight size={18} />
            </Flex>
          </Flex>
        </motion.a>
      ))}
    </div>
  )
}
