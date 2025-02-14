'use client'

import { Telescope, MousePointerClick, PlaneTakeoff, ArrowUpToLine, ArrowDownToLine } from 'lucide-react'
import Link from 'next/link'
import Gisucs from '@giscus/react'
import { Code, InlineCode } from 'components/codehike/code'
import Authentication from 'components/authentication'
import { MDXProps } from 'mdx/types'

interface LayoutProps {
  pass?: boolean,
  post?: (props: MDXProps) => any,
  children?: any
}

export default function Article(props: LayoutProps) {
  function __click() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  function __scrollToAnchor() {
    const diviler = document.getElementById('diviler_')
    if (diviler) {
      diviler.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className='pt-4 md:pt-8 relative flex justify-center'>
      <div id='cp-content' className='px-4 md:px-8 2xl:px-24 pb-24 w-0 flex-1'>
        <Authentication pass={props.pass}>
          <div className='keep'>
            {props.post ? <props.post components={{ Code, InlineCode }} /> : props.children}
          </div>
        </Authentication>
        <div id='diviler_' className='border-b border-gray-300 my-8 border-dashed scroll-mt-24' />
        <Gisucs
          repo='yangbo5207/react19feature'
          repoId='R_kgDOMGiHOw'
          category='General'
          categoryId='DIC_kwDOMGiHO84Cf8dR'
          mapping='pathname'
          term='欢迎道友'
          strict='0'
          reactionsEnabled='1'
          emitMetadata="1"
          inputPosition="top"
          lang="zh-CN"
          key='c'
        />
      </div>

      <aside id='cp-aside' className='pr-6 relative items-start'>
        <div id='headings' className='w-full sticky top-24 space-y-4 text-gray-700'>
          <Link
            href='https://xinyuzone.cn/column/1818097927437131776'
            className='block rounded bg-gray-50 p-4 border border-gray-100'
            target='_blank'
          >
            <Telescope className='text-blue-400' />
            <div className='font-bold my-2'>JavaScript 核心进阶</div>
            <div className='text-sm leading-6'>从构建基础知识体系出发，抓紧核心基础内容，给你地道的前端进阶思维</div>
          </Link>

          <Link
            href='https://usehook.cn/'
            className='block rounded bg-gray-50 p-4 border border-gray-100'
            target='_blank'
          >
            <MousePointerClick className='text-green-400' />
            <div className='font-bold my-2'>React 19 全解</div>
            <div className='text-sm leading-6'>全网第一本系统介绍 React 19 的小册，大量实践案例，给你沉浸式学习体验</div>
          </Link>

          <Link
            href='https://usehook.cn/advance/index'
            className='block rounded bg-gray-50 p-4 border border-gray-100'
            target='_blank'
          >
            <PlaneTakeoff className='text-red-400' />
            <div className='font-bold my-2'>React 19 尊享版</div>
            <div className='text-sm leading-6'>专为前端资深架构师提供的进阶内容，聚焦项目架构，强化开发效率与开发体验</div>
          </Link>

          <div className='rounded bg-gray-100 py-8 text-center text-gray-500'>
            <div className=''>成为赞助商</div>
          </div>

          <div
            onClick={__click}
            className='rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer'
          >
            <ArrowUpToLine size={16} />
            <div className='ml-2'>滚动到顶部</div>
          </div>
          <div
            onClick={__scrollToAnchor}
            className='rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer'
          >
            <ArrowDownToLine size={16} />
            <div className='ml-2'>滚动到评论</div>
          </div>
        </div>
      </aside>
    </div>
  )
}


