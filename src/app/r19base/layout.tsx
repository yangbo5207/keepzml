import { Telescope, MousePointerClick, PlaneTakeoff, ArrowUpToLine, ArrowDownToLine, FolderDown } from 'lucide-react'
import { useState, Suspense, useRef, use, useEffect } from 'react'
import { Link, useLocation, useOutlet } from 'react-router'
import NavSider from 'components/nav-sider'
import Drawer from 'components/ui/modal/drawer'
import Button from 'components/ui/button'
import { LOGO } from 'app/components/nav-header'
import { getSubscribe } from 'app/service/api'
import { setSubscribe, ColumnKey } from 'app/service/index'
import { reactversion, column_id } from './config'
import { routers } from './router'

export default function R19BaseLayout() {
  const { pathname } = useLocation()
  const column_key = pathname.split('/')[1] as ColumnKey
  const [promise] = useState(() => getSubscribe(column_id).then(res => {
    setSubscribe(column_key, res.status)
  }))
  const drawer = useRef<any>(null)

  function __click() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  function __scrollToAnchor() {
    const diviler = document.getElementById('diviler_')
    if (diviler) {
      diviler.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    }
  }

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
        <div className='pt-4 md:pt-8 relative flex justify-center'>
          <div id='cp-content' className='pb-24 w-0 flex-1'>
            <Suspense fallback={<div></div>}>
              <BaseComponent promise={promise} />
            </Suspense>
          </div>

          <aside id='cp-aside' className='pr-6 relative items-start'>
            <div id='headings' className='w-full sticky top-24 space-y-4 text-gray-700'>
              <Link
                to='https://xinyuzone.cn/column/1818097927437131776'
                className='block rounded bg-gray-50 p-4 border border-gray-100'
                target='_blank'
              >
                <Telescope className='text-blue-400' />
                <div className='font-bold my-2'>JavaScript 核心进阶</div>
                <div className='text-sm leading-6'>从构建基础知识体系出发，抓紧核心基础内容，给你地道的前端进阶思维</div>
              </Link>

              <Link
                to='https://usehook.cn/'
                className='block rounded bg-gray-50 p-4 border border-gray-100'
                target='_blank'
              >
                <MousePointerClick className='text-green-400' />
                <div className='font-bold my-2'>React 19 全解</div>
                <div className='text-sm leading-6'>全网第一本系统介绍 React 19 的小册，大量实践案例，给你沉浸式学习体验</div>
              </Link>

              <Link
                to='https://usehook.cn/advance/index'
                className='block rounded bg-gray-50 p-4 border border-gray-100'
                target='_blank'
              >
                <PlaneTakeoff className='text-red-400' />
                <div className='font-bold my-2'>React 19 尊享版</div>
                <div className='text-sm leading-6'>专为前端资深架构师提供的进阶内容，聚焦项目架构，强化开发效率与开发体验</div>
              </Link>

              <div className='rounded bg-gray-100 py-8 text-center text-gray-500'>
                <div className=''>成为赞助商</div>
              </div>

              <div
                onClick={__click}
                className='rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer'
              >
                <ArrowUpToLine size={16} />
                <div className='ml-2'>滚动到顶部</div>
              </div>
              <div
                onClick={__scrollToAnchor}
                className='rounded py-2 border border-gray-200 text-center flex items-center justify-center cursor-pointer'
              >
                <ArrowDownToLine size={16} />
                <div className='ml-2'>滚动到评论</div>
              </div>
            </div>
          </aside>
        </div>
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