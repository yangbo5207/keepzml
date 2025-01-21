import clsx from 'clsx'
import { Cookie, ChevronRight } from 'lucide-react'
import Flex from 'components/ui/flex'
import { motion } from 'motion/react'
import { variants } from '../variants'

interface MiniBlockProps {
  title: string,
  desc: string,
  href: string,
  className: string,
  delay: number,
  iconName: string
}

export default function MiniBlock(props: MiniBlockProps) {
  const { title, desc, href, className, delay, iconName } = props
  const base = 'block border rounded-md p-4 bg-white border-gray-200 hover:shadow cursor-pointer space-y-4'
  const cls = clsx(base, className)
  return (
    <motion.a {...variants(delay)} href={href} target='_blank' className={cls}>
      <div><Cookie className={className} /></div>
      <Flex between className=''>
        <div className='font-bold'>{title}</div>
        <Flex className='text-green-700'>
          了解详情
          <ChevronRight size={18} className={iconName} />
        </Flex>
      </Flex>

      <div className='text-slate-600 leading-8'>{desc}</div>
    </motion.a>
  )
}
