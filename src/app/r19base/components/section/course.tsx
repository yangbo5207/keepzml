import { motion } from 'motion/react'
import Block from './components/block'
import { variants } from './variants'

export default function SectionCourse() {
  return (
    <main className='py-14 px-0'>
      <div className="mx-auto max-w-[1080px]">
        <motion.p {...variants()} className="font-bold text-2xl text-center">我的其他付费课程</motion.p>

        <motion.p {...variants(0.1)} className="mt-2 mb-10 text-center leading-6 px-6 md:px-44">
          请根据自己的学习意愿和经济能力综合考虑，理性消费。我负责提供过硬的学习质量，确保每一位用户都能学有所得
        </motion.p>

        <div
          className='flex mt-12 justify-between flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6'>
          <Block
            title='1V1定向指导'
            path='https://appxw863qeq2150.h5.xiaoeknow.com/v1/goods/goods_detail/course_2YWwycNZDt3u59naEs57g0gGa0H?'
            desc='前端专家：这波能反杀，为您提供全网最专业的技术、面试辅导，结合个人目标与工作经验，时长 2 ~ 3 小时，一次沟通，解决所有问题'
            className='flex-1'
            delay={0.15}
          />

          <Block
            title='keepCharts'
            path='https://www.yuque.com/coreadvance/ar2my1/em5rrk6p1umptsxw'
            desc='聚焦技术深度，手写基于 Canvas 的渲染引擎，并在此基础之上实现可视化图表等应用层库，打造自己牢不可破的核心竞争力'
            className='flex-1'
            delay={0.2}
          />

          <Block
            title='keepCoder'
            path='https://www.yuque.com/coreadvance/ar2my1/apk8cr'
            desc='资深前端进阶通道，1V1深度沟通辅导，聚焦学习方法，深挖知识体系，深挖应用场景，凝聚核心竞争力'
            className='flex-1'
            delay={0.25}
          />

        </div>
      </div>
    </main>
  )
}
