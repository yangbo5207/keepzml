import {useEffect, use} from 'react'
import {useOutlet, useLocation, useNavigate} from 'react-router-dom'
import Authentication from './components/authentication'
import {setSubscribe} from './api'
import {homepath, column_key} from './config'

export default function BaseArticle({promise}) {
  const navigate = useNavigate();
  const outLet = useOutlet();
  const { pathname } = useLocation();

  const res = use(promise)
  setSubscribe(res.status)

  useEffect(() => {
    if (location.pathname === `/${column_key}`) {
      navigate(homepath)
    }
    window.scrollTo(0, 0)
  }, [pathname])

  return <Authentication>{outLet}</Authentication>
}
