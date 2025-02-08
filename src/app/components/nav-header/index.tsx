import ActiveLink from 'components/active-link'
import ChatButton from './chat-button'
import Profile from './profile'
import MobileHeader from './mobile'
import { BellDot, BellElectric, Squirrel, Zap } from 'lucide-react'
import { useLocation } from 'react-router'
import './index.css'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export const links = [
  { path: 'r19base', text: 'React 19 . 基础', icon: BellDot },
  { path: 'r19plus', text: 'React 19 . 尊享', icon: BellElectric },
  { path: 'zustand', text: 'zustand', icon: Squirrel },
  { path: 'r19lightning', text: 'React 速成宝典 . 上', icon: Zap },
]

export default function NavHeader() {
  const { pathname } = useLocation()
  const [isHome, setIshome] = useState(pathname === '/')

  useEffect(() => {
    setIshome(pathname === '/')
  }, [pathname])

  const cls = clsx('fixed top-0 h-16 items-center transition', {
    'bg-gray-50': !isHome
  })

  return (
    <header
      className={clsx('fixed z-50 top-0 flex justify-between min-w-[320px] backdrop-blur-sm w-full bg-gray-50/90 transition', {
        'bg-gray-50/90': isHome,
        'bg-white/90': !isHome
      })}
    >
      <aside id='vp-aside' className={cls}>
        <div className='px-4'>
          <LOGO />
        </div>
      </aside>

      <div id='vp-content' className='h-15 flex items-center pr-4 lg:pr-0'>
        <div className='flex px-4 md:px-8 2xl:px-24 flex-1'>
          <div className='md:hidden'>
            <LOGO />
          </div>
          {links.map(link => (
            <ActiveLink
              to={link.path} key={link.path}
              className={clsx('hidden lg:flex text-gray-600 text-[14px] items-center hover:bg-white py-2 px-3 rounded-md transition', {
                'hover:bg-gray-100': !isHome
              })}
              end={false} activeName='text-blue-600'
            >
              <link.icon size={14} />
              <span className='ml-2'>{link.text}</span>
            </ActiveLink>
          ))}
        </div>

        <aside id='hp-aside' className='hidden lg:flex h-16 items-center pr-6 space-x-4'>
          <ChatButton />
          <Profile />
        </aside>

        <MobileHeader />
      </div>
    </header>
  )
}

export function LOGO() {
  return (
    <ActiveLink className='flex items-center' to='/'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M12 1.5a.75.75 0 0 1 .75.75V4.5a.75.75 0 0 1-1.5 0V2.25A.75.75 0 0 1 12 1.5ZM5.636 4.136a.75.75 0 0 1 1.06 0l1.592 1.591a.75.75 0 0 1-1.061 1.06l-1.591-1.59a.75.75 0 0 1 0-1.061Zm12.728 0a.75.75 0 0 1 0 1.06l-1.591 1.592a.75.75 0 0 1-1.06-1.061l1.59-1.591a.75.75 0 0 1 1.061 0Zm-6.816 4.496a.75.75 0 0 1 .82.311l5.228 7.917a.75.75 0 0 1-.777 1.148l-2.097-.43 1.045 3.9a.75.75 0 0 1-1.45.388l-1.044-3.899-1.601 1.42a.75.75 0 0 1-1.247-.606l.569-9.47a.75.75 0 0 1 .554-.68ZM3 10.5a.75.75 0 0 1 .75-.75H6a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 10.5Zm14.25 0a.75.75 0 0 1 .75-.75h2.25a.75.75 0 0 1 0 1.5H18a.75.75 0 0 1-.75-.75Zm-8.962 3.712a.75.75 0 0 1 0 1.061l-1.591 1.591a.75.75 0 1 1-1.061-1.06l1.591-1.592a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
      </svg>
      <div className='font-bold ml-2'>USEHOOK</div>
    </ActiveLink>
  )
}