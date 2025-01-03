import {useState, Suspense} from 'react'
import Skeleton from 'components/Skeleton'
import {uuid} from 'utils'
import { fetchList} from './api'

import List from './list'

const Index = () => {
  const [promises, increasePromise] = useState(() => [fetchList()])

  const onLoadMore = () => {
    increasePromise([...promises, fetchList()])
  };

  return (
    <>
      {promises.map((promise, i) => (
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
