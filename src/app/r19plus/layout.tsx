'use client'

import { FolderDown } from 'lucide-react'
import { useRef, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import NavSider from 'components/nav-sider'
import Drawer from 'components/ui/modal/drawer'
import Button from 'components/ui/button'
import { LOGO } from 'app/components/nav-header'
import { getSubscribe } from 'app/service/api'
import { setSubscribe, ColumnKey, useLoginStore } from 'app/service/index'
import { reactversion, column_id, user_ids } from './config'
import { routers } from './router'

export default function ColumnLayout({ children }: any) {
  const pathname = usePathname()
  const column_key = pathname.split('/')[1] as ColumnKey
  const drawer = useRef<any>(null)

  const isLogin = useLoginStore(s => s.isLogin)
  const userinfo = useLoginStore(s => s.userinfo)

  useEffect(() => {
    if (!isLogin) return
    let vip = user_ids.includes(userinfo.user_id)
    if (vip) {
      return setSubscribe(column_key, 1)
    }
    getSubscribe(column_id).then(res => {
      setSubscribe(column_key, res.status)
    })
  }, [isLogin])

  return (
    <div className='pt-16 md:flex'>
      <aside id='vp-aside' className='fixed top-0 left-0 bottom-0 overflow-y-scroll bg-gray-50 hidden md:block'>
        <div className='px-6 w-full'>
          <div className='flex items-center pb-8 pt-24 sticky top-0 bg-gray-50 border-b border-b-gray-200 mb-8'>
            <div className='flex items-center justify-between p-1 border mr-3 rounded-md border-blue-200'>
              <FolderDown className='text-blue-500' size={20} />
            </div>

            <div className='text-sm'>
              <div>当前版本</div>
              <div className='text-gray-500'>{reactversion}</div>
            </div>
          </div>
          <nav className='pb-8'>
            <NavSider routers={routers} />
          </nav>
        </div>
      </aside>
      <div id='vp-content'>
        {children}

        <Button className='fixed bottom-6 right-4 md:hidden' signal onClick={() => drawer.current.show()}>目录</Button>

        <Drawer ref={drawer} direction='left' width='60%'>
          <header className='h-16 flex items-center px-4'>
            <LOGO />
          </header>
          <nav className='bg-white h-full py-8 overflow-scroll px-6' onClick={() => drawer.current.close()}>
            <NavSider routers={routers} />
          </nav>
        </Drawer>
      </div>
    </div>
  )
}
