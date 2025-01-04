import ActiveLink from 'components/ActiveLink'
import Tag from 'components/Tag'
import {plus_router} from './path'

export default function SideNav() {
  return (
    <div>
      {plus_router.map((item, index) => {
        if (item.type === 'tip') {
          return <div className='text-sm text-gray-400 first:pt-0 pb-4 pt-8' key={`z-${index}`}>
            {item.name}
          </div>
        }
        return (
          <ActiveLink className='text-gray-700' activeName='text-blue-700' to={item.path} key={item.path}>
            <li key={item.path} className='py-3 text-sm transition flex items-center justify-between hover:text-blue-700'>
              <div className='line-clamp-1'>{item.name}</div>
              {item.label ? <Tag label={item.label} primary className='ml-2'/> : null}
            </li>
          </ActiveLink>
        )
      })}
    </div>
  )
}