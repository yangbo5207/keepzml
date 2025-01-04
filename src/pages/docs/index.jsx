import {useRef, useReducer, useEffect} from 'react'
import {useOutlet, useLocation, useNavigate} from 'react-router-dom'
import ActiveLink from 'components/ActiveLink'
import {compath} from './path.js'
import Tag from 'components/Tag'

export default function Tutorial() {
  const navigate = useNavigate();
  const pageMap = useRef(new Map())
  const outLet = useOutlet();
  const { pathname } = useLocation();
  const forceUpdate = useReducer(bool => !bool)[1]

  if (!pageMap.current.has(pathname)) {
    pageMap.current.set(pathname, outLet)
  }

  useEffect(() => {
    if (location.pathname === '/docs') {
      navigate('button')
    }
  }, [pathname])

  return (
    <div className='pt-16 flex'>
      <nav className='hidden md:block w-60 sticky top-16 h-[calc(100vh_-_5rem)] overflow-y-auto bg-hei'>
        <div className='flex items-center px-4 py-8'>
          <div className='flex items-center justify-between p-1 border mr-3 rounded-md border-cyan-200'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5 text-cyan-500">
              <path fillRule="evenodd" d="M19.5 21a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3h-5.379a.75.75 0 0 1-.53-.22L11.47 3.66A2.25 2.25 0 0 0 9.879 3H4.5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h15Zm-6.75-10.5a.75.75 0 0 0-1.5 0v4.19l-1.72-1.72a.75.75 0 0 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 1 0-1.06-1.06l-1.72 1.72V10.5Z" clipRule="evenodd" />
            </svg>
          </div>

          <div className='text-sm'>
            <div>当前版本</div>
            <div className='text-gray-500'>React@19.0.0</div>
          </div>
        </div>
        <ul className='border-r h-[calc(100vh_-_9rem_-_35px)] overflow-y-auto pb-8'>

          {compath.map((item, index) => {
            if (item.type === 'tip') {
              return <div className='mx-2 text-sm px-4 text-gray-400 first:pt-0 pb-4 pt-8' key={`z-${index}`}>
                {item.name}
              </div>
            }
            return (
              <ActiveLink className='text-gray-700' activeName='text-blue-700' to={item.path} key={item.path} onClick={forceUpdate}>
                <li key={item.path} className='mx-2 px-4 py-3 transition hover:bg-blue-100 text-sm flex items-center justify-between hover:text-blue-700 rounded'>
                  <div className='flex items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round"
                            d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                    </svg>
                    <div className='ml-2 line-clamp-1'>{item.name}</div>
                  </div>
                  {item.label ? <Tag label={item.label} primary className='ml-2'/> : null}
                </li>

              </ActiveLink>
            )
          })}
        </ul>
      </nav>
      <div className='w-full md:w-[calc(100vw_-_15rem)] p-8 min-h-[calc(100vh_-_5rem)] box-border'>
        {/*<Outlet />*/}
        {Array.from(pageMap.current).map(([key, component]) => (
          <div key={key} style={{display: pathname === key ? 'block' : 'none'}}>
            {component}
          </div>
        ))}
      </div>
    </div>
  )
}
