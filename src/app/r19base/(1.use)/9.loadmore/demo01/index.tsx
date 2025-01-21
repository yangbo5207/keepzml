import { useState, Suspense } from 'react'
import Skeleton from 'components/ui/skeleton'
import { uuid } from '@/utils'
import { getUsersInfo } from './api'

import List from './list'

const Index = () => {
  const [promises, increasePromise] = useState(() => [getUsersInfo()])

  const onLoadMore = () => {
    increasePromise([...promises, getUsersInfo()])
  };

  return (
    <>
      {promises.map(promise => (
        <Suspense fallback={<Skeleton />} key={uuid()}>
          <List promise={promise} />
        </Suspense>
      ))}
      <div className='text-center my-4'>
        <button onClick={onLoadMore}>loading more</button>
      </div>
    </>
  );
};
export default Index;
