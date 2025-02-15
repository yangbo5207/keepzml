'use client'

import Image from 'next/image'
import Link from 'next/link'
import { start_path, column_url } from 'app/reactzm/config'
import { ArrowRight } from 'lucide-react'
import Cover from './cover.jpg'
import Button from '@/components/ui/button'

export default function Banner() {
  return (
    <div className='p-4 flex border-gray-200 border rounded'>
      <Image className='rounded' src={Cover} width={130} alt='cover' />
      <div className='flex flex-1 ml-4 flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-bold'>React 知命境</span>
          <Link href={column_url} target='_blank'>
            <Button danger>99 元 . 立即订阅</Button>
          </Link>

        </div>
        <div className='text-sm text-gray-600'>本专栏经过长期打磨，历时 4 年的沉淀，帮助了许多前端开发者成为 React 高手，最好的 React 入门学习资料。本次内容重构结合作者多年实战经验，质量更上一层楼</div>
        <div className='mt-2 flex items-center'>
          <img className='size-6 rounded-full overflow-hidden' src='https://avatars.githubusercontent.com/u/13758605?u=75da5f0ab0a298d380242929e17fb28d4314b635&v=4' alt='' />
          <span className='ml-2'>这波能反杀 . 大前端架构师 . 独立开发者</span>
        </div>
        <div className='flex items-center justify-between'>
          <Link href={start_path}>
            <Button primary><ArrowRight size={15} /> <span>快速开始</span></Button>
          </Link>

          <Button className=''>1077 人已订阅</Button>
        </div>
      </div>
    </div>
  )
}
