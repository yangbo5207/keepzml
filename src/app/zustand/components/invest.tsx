import Link from 'next/link'
import { PartyPopper } from 'lucide-react'
import { column_url } from '../config'
import Button from '@/components/ui/button'

export default function SuitableFor() {
  return (
    <div className='p-4 border-gray-200 border rounded keep'>
      <header className='font-bold'>超前投资，火热开启</header>

      <p className='space-x-2 mt-2'>
        <PartyPopper className='inline-block text-red-500' size={18} />
        <span>本专栏目前仅用于记录我在项目中使用 zustand 的心得体会，更新优先级较低，现开启超前投资价格，未来专栏完本价格预计为 200 元，欢迎有需要的读者提前预订。</span>
      </p>

      <div className='text-right'>
        <Link href={column_url} target='_blank'>
          <Button signal>9.9 元 . 超前投资</Button>
        </Link>
      </div>
    </div>
  )
}
