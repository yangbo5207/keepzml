import Skeleton from 'components/ui/skeleton'
import Userinfo from './userinfo'

export interface UserInfo {
  username?: string,
  value?: string,
  id?: string,
  type?: string
}

export default function List(props: { list: UserInfo[] }) {
  const list = props.list
  return (
    <div className='space-y-4'>
      {list.map((item, index) => {
        if (item.type === 'loading') {
          return <Skeleton key={`loading-${index}`} />
        }
        return <Userinfo index={index} username={item.id} message={item.value} key={item.id} />
      })}
    </div>
  )
}
