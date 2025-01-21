import { motion } from 'motion/react'
import { variants } from '../variants'
import { Code, InlineCode } from 'components/codehike/code'
import Page from './page.mdx'

function App() {
  return (
    <div id='case' className='py-14 px-6 md:px-0'>
      <div className='max-w-[1080px] mx-auto overflow-hidden'>
        <motion.h1 {...variants()} className='text-2xl my-0 text-center font-bold'>真实交互、沉浸体验</motion.h1>
        <motion.p {...variants(0.1)} className='text-center px-10 mt-2 mb-10'>
          所见即所得。通过在线可演示的案例，获得更极致的学习收益
        </motion.p>
        <motion.div {...variants(0.2)}>
          <Page components={{ Code, InlineCode }} />
        </motion.div>
      </div>
    </div>
  )
}

export default App;
