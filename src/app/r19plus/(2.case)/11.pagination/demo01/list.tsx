import { use, useReducer, useMemo } from 'react'
import Flex from 'components/ui/flex'
import Pagination from 'components/ui/pagination'
import { Parameter } from './filter'

export default function CurrentList({ promise, onChange }: {
  promise: Promise<UserInfo[]>,
  onChange: (c: Parameter) => any,
  loading?: boolean
}) {
  const users = use(promise)
  const [, forceUpdate] = useReducer((boolean) => !boolean, true)

  let list = useMemo(() => {
    return users.map(item => ({
      selected: false,
      ...item
    }))
  }, [promise])

  function __radioHandler(e: any, i: number) {
    list[i].selected = e.target.checked
    forceUpdate()
  }

  const count = list.reduce((prev, cur) => {
    if (cur.selected) { prev += 1 }
    return prev
  }, 0)

  function pageChange(index: number) {
    onChange && onChange({ current: index })
  }

  return (

    <div className='space-y-4'>
      {list.map((item, i) => (
        <Flex key={item.id}>
          <input type="checkbox" className='!w-5 mr-4' checked={item.selected} onChange={(e) => __radioHandler(e, i)} />
          <div className='flex border border-gray-200 p-4 items-center rounded flex-1'>
            <img className='w-12 h-12 rounded-full' src={item.thumb} alt='' />
            <div className='flex-1 ml-4'>
              <div className='font-bold'>{item.fullname}</div>
              <div className='text-gray-400 mt-1 text-sm line-clamp-1'>{item.desc}</div>
            </div>
          </div>
        </Flex>
      ))}
      <div className='mb-4'>选中项一共有：{count}</div>
      <Pagination total={50} onChange={pageChange} />
    </div>
  )
}
