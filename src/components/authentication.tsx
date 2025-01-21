import { Link, useLocation } from 'react-router'
import { Tent } from 'lucide-react'
import { useLoginStore, ColumnKey } from 'app/service'
import { getAuthURL } from 'utils/http'
import { PropsWithChildren } from 'react'
import * as r19base_config from 'app/r19base/config'
import * as r19plus_config from 'app/r19plus/config'
import * as r19lightning_config from 'app/r19lightning/config'

const config = {
  r19base: r19base_config,
  r19plus: r19plus_config,
  r19lightning: r19lightning_config
}

export default function Authentication({ children, pass }: PropsWithChildren<{ pass?: boolean }>) {
  const { userinfo, subscrible, isLogin } = useLoginStore()
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

  const { pathname } = useLocation()

  const column_key = pathname.split('/')[1] as ColumnKey
  const { user_ids, column_url } = config[column_key]
  const subscribe = subscrible[column_key]
  let vip = user_ids.includes(userinfo.user_id)

  if (!pass && subscribe !== 1 && !vip) {
    return (
      <div className='w-full py-32 flex flex-col justify-center items-center'>
        <Tent className='text-cyan-500' size={32} />
        <div className='my-2 text-lg font-bold'>您还没有订阅</div>
        <div>你需要在新语社区的专栏中订阅之后才能访问内容</div>
        <Link to={column_url} className='bg-green-500 py-1.5 px-4 text-white rounded mt-8'>订阅</Link>
      </div>
    )
  }

  return children
}