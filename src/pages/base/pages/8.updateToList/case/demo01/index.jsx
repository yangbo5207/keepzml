import {useState, useEffect} from 'react'
import {getMessage} from './api'
import List from './list'

export default function Page() {
  const [list, updateList] = useState([])

  useEffect(() => {
    updateList([...list, {type: 'loading'}])
    getMessage().then(res => {
      updateList([...list, res])
    })
  }, []);

  function __handler() {
    updateList([...list, {type: 'loading'}])
    getMessage().then(res => {
      updateList([...list, res])
    })
  }

  return (
    <>
      <div className='text-right mb-4'>
        <button onClick={__handler}>新增数据</button>
      </div>
      <List list={list} />
    </>
  )
}