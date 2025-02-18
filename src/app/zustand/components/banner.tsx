'use client'

import Image from 'next/image'
import Link from 'next/link'
import { start_path, column_url } from 'app/zustand/config'
import { ArrowRight } from 'lucide-react'
import Cover from './cover750x1000.jpg'
import Button from '@/components/ui/button'

export default function Banner() {
  return (
    <div className='p-4 flex border-gray-200 border rounded'>
      <Image className='rounded' src={Cover} width={130} alt='cover' />
      <div className='flex flex-1 ml-4 flex-col justify-between'>
        <div className='flex items-center justify-between'>
          <span className='text-2xl font-bold'>zustand</span>
          <Link href={column_url} target='_blank'>
            <Button danger>9.9 元 . 立即订阅</Button>
          </Link>

        </div>
        <div className='text-sm text-gray-600'>本专栏主要用于记录我在使用 zustand 过程中的心得体会，暂时未考虑做系统推广售卖，更新优先级也不高，大家购买时一定要谨慎，切勿冲动消费。专栏未来计划内容已在后续的介绍中分享。</div>
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
