import {useRef, useEffect, use} from 'react'
import {useOutlet, useLocation, useNavigate} from 'react-router-dom'
import Authentication from './components/authentication'
import {setSubscribe} from './api'

export default function BaseArticle({promise}) {
  const navigate = useNavigate();
  const pageMap = useRef(new Map())
  const outLet = useOutlet();
  const { pathname } = useLocation();

  if (!pageMap.current.has(pathname)) {
    pageMap.current.set(pathname, outLet)
  }

  const res = use(promise)
  setSubscribe(res.status)

  useEffect(() => {
    if (location.pathname === '/advance') {
      navigate('index')
    }
  }, [pathname])

  return Array.from(pageMap.current).map(([key, component]) => (
    <div key={key} style={{display: pathname === key ? 'block' : 'none'}}>
      <Authentication>{component}</Authentication>
    </div>
  ))
}
