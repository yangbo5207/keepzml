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
        <span>为了给读者提供更好的学习体验，本专栏中包含了大量的动画演示案例，这些演示案例由于需要实现许多动画能力，因此开发难度非常高，但好消息是目前我们已经克服了所有的技术难点，专栏内容将会在不久后陆续上线，现开启超前投资，欢迎读者提前预订。</span>
      </p>

      <div className='text-right'>
        <Link href={column_url} target='_blank'>
          <Button signal>200 元 . 超前投资</Button>
        </Link>
      </div>
    </div>
  )
}
