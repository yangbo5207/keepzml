import { FolderDown } from 'lucide-react'
import { useState, Suspense, useRef, use, useEffect } from 'react'
import { useLocation, useOutlet } from 'react-router'
import NavSider from 'components/nav-sider'
import Drawer from 'components/ui/modal/drawer'
import Button from 'components/ui/button'
import { LOGO } from 'app/components/nav-header'
import { getSubscribe } from 'app/service/api'
import { setSubscribe, ColumnKey } from 'app/service/index'
import { reactversion, column_id } from './config'
import { routers } from './router'

export default function ColumnLayout() {
  const { pathname } = useLocation()
  const column_key = pathname.split('/')[1] as ColumnKey
  const [promise] = useState(() => getSubscribe(column_id).then(res => {
    setSubscribe(column_key, res.status)
  }))
  const drawer = useRef<any>(null)

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
        <Suspense fallback={<div></div>}>
          <BaseComponent promise={promise} />
        </Suspense>

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

interface BaseComponentProps {
  promise: Promise<any>
}

export function BaseComponent({ promise }: BaseComponentProps) {
  use(promise)
  return <Poster />
}

export function Poster() {
  const outLet = useOutlet()
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return outLet
}