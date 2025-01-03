import Skeleton from 'components/Skeleton'
import Userinfo from './userinfo'

export default function List(props) {
  const list = props.list
  return (
    <>
      {list.map((item, index) => {
        if (item.type === 'loading') {
          return <Skeleton key='loading' />
        }
        return <Userinfo index={index} username={item.id} message={item.value} key={item.id} />
      })}
    </>
  )
}
