import Item, { ListItemProps } from './item'

export default function List(props: {
  data: ListItemProps[]
}) {
  const { data } = props
  return (
    <div className='w-80 m-auto p-4 space-y-4'>
      {data.map((item) => (
        <Item
          key={item.title}
          className={item.className}
          iconColor={item.iconColor}
          icon={item.icon}
          title={item.title}
          number={item.number}
          size={item.size}
        />
      ))}
    </div >
  )
}
