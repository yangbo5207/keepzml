import { memo } from 'react'
import SlowItem from './slow-item'
import Number from './number'

const Expensive = ({ counter }: { counter: number }) => {
  let items = []
  for (let i = 0; i < 200; i++) {
    items.push(<SlowItem key={i} counter={counter} />);
  }

  return (
    <div className='text-red-500 flex-1'>
      <div className='flex-1 text-center'>
        <Number value={counter} />
        <div>耗时任务</div>
      </div>
      <ul className='h-32 hidden'>
        {items}
      </ul>
    </div>
  );
}

export default memo(Expensive)