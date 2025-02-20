'use client'

import { motion } from 'motion/react'
import Block from './block'
import { variants } from './variants'

export default function SectionCourse() {
  return (
    <main className='backdrop-blur-sm py-14 md:py-28 bg-opacity-70 px-6 md:px-8'>
      <div className="mx-auto max-w-[768px]">
        <motion.p {...variants()} className="font-bold text-2xl">付费课程</motion.p>
        <motion.p {...variants()} className="mb-8 md:mb-12 leading-8">我负责提供过硬的学习质量，确保每一位用户都能学有所得</motion.p>

        <div className='mt-12 space-y-6'>
          <Block
            title='爆锤面试官之 React 原理面试'
            desc='冲大厂！'
            path='reactprinciple'
            delay={0}
            className='flex-1'
          />
          <Block
            title='React 知命境'
            desc='本专栏是沉淀了四年的诚意之作。为了帮助广大开发者轻松掌握 React 的学习，我们从基础知识出发，循序渐进，逐渐深入，是学习 React 的最佳最佳选择'
            path='reactzm'
            delay={0}
            className='flex-1'
          />

          <Block
            title='React 19 . 基础'
            desc='React@19 为开发者带来了新的开发理念，这是一次开发方式上的变革，在开发体验和性能上都有大幅度的提升，值得每一位 React 开发者学习'
            path='r19base'
            delay={0}
            className='flex-1'
          />

          <Block
            title='React 19 . 尊享'
            desc='优雅的代码架构师是技术能力的体现，也是开发效率的保证。本专栏专为前端架构师提供，通俗易懂，帮助前端开发快速掌握一套代码架构最佳实践'
            path='r19plus'
            delay={0}
            className='flex-1'
          />

          <Block
            title='时间出租 . 私人高级指导'
            path='https://appxw863qeq2150.h5.xiaoeknow.com/v1/goods/goods_detail/course_2YWwycNZDt3u59naEs57g0gGa0H?'
            desc='为您提供专业的技术、面试、职场、人生辅导，结合个人目标与工作经验，时长 2 小时，一次沟通，解决困惑'
            className='flex-1'
            delay={0}
          />

          <Block
            title='keepCoder'
            path='https://www.yuque.com/coreadvance/ar2my1/apk8cr'
            desc='体系化学习，资深前端进阶通道，1V1深度沟通辅导，聚焦学习方法，深挖知识体系，深挖应用场景，凝聚核心竞争力'
            className='flex-1'
            delay={0}
          />

          <Block
            title='keepCharts'
            path='https://www.yuque.com/coreadvance/ar2my1/em5rrk6p1umptsxw'
            desc='聚焦技术深度，手写基于 Canvas 的渲染引擎，并在此基础之上实现可视化图表等应用层库，打造自己牢不可破的核心竞争力'
            className='flex-1'
            delay={0}
          />

          <Block
            title='zustand'
            path='zustand'
            desc='zustand，是 React 生态中最受欢迎的状态管理库之一，本专栏主要结合 react 19 为大家介绍 zustand 在实践中的使用'
            className='flex-1'
            delay={0}
          />

          <Block
            title='React 速成宝典 . 上'
            path='r19lightning'
            desc='本专栏正在开发中，尽请期待...'
            className='flex-1'
            delay={0}
          />
        </div>
      </div>
    </main>
  )
}
