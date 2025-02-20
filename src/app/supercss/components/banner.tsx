'use client'

import Image from 'next/image'
import Link from 'next/link'
import { start_path, column_url } from '../config'
import { ArrowRight } from 'lucide-react'
import Cover from './cover.jpg'
import Button from '@/components/ui/button'

export default function Banner() {
  return (
    <div className='p-4 flex border-gray-200 border rounded'>
      <Image className='rounded' src={Cover} width={130} alt='cover' />
      <div className='flex flex-1 ml-4 flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-bold'>超级 CSS</span>
          <Link href={column_url} target='_blank'>
            <Button danger>200 元 . 立即订阅</Button>
          </Link>

        </div>
        <div className='text-sm text-gray-600'>紧贴生产实践，帮助大家构建完整的 CSS 知识体系、内置大量生动直观的演示案例，带你深入理解 CSS 的强大功能与灵活应用</div>
        <div className='mt-2 flex items-center'>
          <img className='size-6 rounded-full overflow-hidden' src='https://avatars.githubusercontent.com/u/13758605?u=75da5f0ab0a298d380242929e17fb28d4314b635&v=4' alt='' />
          <span className='ml-2'>这波能反杀 . 大前端架构师 . 独立开发者</span>
        </div>
        <div className='flex items-center justify-between'>
          <Link href={start_path}>
            <Button primary><ArrowRight size={15} /> <span>快速开始</span></Button>
          </Link>

          <Button className=''>112 人已订阅</Button>
        </div>
      </div>
    </div>
  )
}
