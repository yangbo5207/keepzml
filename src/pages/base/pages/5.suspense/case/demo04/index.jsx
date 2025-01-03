import React, { useEffect, useState } from 'react';
import Skeleton from 'components/Skeleton'
import Message from './message'
import {getMessage} from './api'

export default function Index() {
  const [content, update] = useState({value: ''})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMessage().then(res => {
      update(res)
      setLoading(false)
    })
  }, []);

  if (loading) {
    return <Skeleton />
  }

  return <Message message={content.value} />
}
