import { motion } from 'motion/react'
import ActiveLink from 'components/active-link'
import Tag from 'components/ui/tag'
import Show from '@/components/ui/show'

interface RouteItem {
  type?: string,
  name?: string,
  component?: any,
  path?: string,
  label?: string
}

export default function SideNav({ routers }: {
  routers: RouteItem[]
}) {
  return (
    <div className='pb-12'>
      {routers.map((item, index) => {
        if (item.type === 'tip') {
          return <motion.div className='text-xs text-gray-400 first:pt-0 pb-4 pt-8' key={`z-${index}`} {...variants(0.03 * index)}>
            {item.name}
          </motion.div>
        }
        return (
          <motion.div {...variants(0.03 * index)} key={item.path}>
            <ActiveLink className='text-gray-700' activeName='text-blue-700' href={item.path!}>
              <li key={item.path} className='py-2 text-xs transition flex items-center justify-between hover:text-blue-700'>
                <div className='line-clamp-1'>{item.name}</div>
                <Show when={!!item.label}>
                  <Tag type={item.type} className='ml-2'>{item.label}</Tag>
                </Show>
              </li>
            </ActiveLink>
          </motion.div>
        )
      })}
    </div>
  )
}

export function variants(delay = 0) {
  return {
    initial: { x: -30, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.4, delay: delay },
  }
}