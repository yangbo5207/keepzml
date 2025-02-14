import Link from 'next/link'
import { getAuthURL } from 'utils/http'
import { useLoginStore } from 'app/service'

export default function Avatar() {
  const isLogin = useLoginStore(s => s.isLogin)
  const userinfo = useLoginStore(s => s.userinfo)
  const { avatar_url, nickname, user_id } = userinfo

  if (!isLogin) {
    return (
      <Link
        className='flex items-center px-8 py-1 rounded bg-blue-500 text-white'
        href={getAuthURL()}
      >
        <div>登录</div>
      </Link>
    )
  }

  const profileLink = `https://xinyuzone.cn/user/${user_id}`

  return (
    <Link href={profileLink} target='_blank' className='flex items-center'>
      <div className='w-6 h-6 ml-0 md:ml-4 border rounded-full overflow-hidden'>
        <img className='w-full h-full' src={avatar_url} alt='' />
      </div>
      <span className='ml-2'>{nickname}</span>
    </Link>
  )
}