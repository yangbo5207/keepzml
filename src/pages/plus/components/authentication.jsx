import {Link} from 'react-router-dom'
import {Tent} from 'lucide-react'

import {getUserinfo} from 'pages/service'
import {getSubscribe, columnURL} from '../api'
import { getAuthURL } from 'utils/http'

export default function Authentication({children, pass}) {
  const {isLogin} = getUserinfo()
  if (!pass && !isLogin) {
    return (
      <div className='w-full py-32 flex flex-col justify-center items-center'>
        <Tent className='text-cyan-500' size={32} />
        <div className='my-2 text-lg font-bold'>您还没有登录</div>
        <div className='text-xs'>本网站仅支持通过三方授权平台新语进行登录</div>
        <Link to={getAuthURL()} className='bg-green-500 py-1.5 px-4 text-white rounded mt-8'>登录</Link>
      </div>
    )
  }

  const subscribe = getSubscribe()

  if (!pass && subscribe !== 1) {
    return (
      <div className='w-full py-32 flex flex-col justify-center items-center'>
        <Tent className='text-cyan-500' size={32} />
        <div className='my-2 text-lg font-bold'>您还没有订阅</div>
        <div>你需要在新语社区的专栏中订阅之后才能访问内容</div>
        <Link to={columnURL} className='bg-green-500 py-1.5 px-4 text-white rounded mt-8'>订阅</Link>
      </div>
    )
  }

  return children
}