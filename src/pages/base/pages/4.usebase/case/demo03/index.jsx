import React, { useState, use, useRef } from 'react';
import Skeleton from 'components/Skeleton'
import Message from './message'
import {getMessage} from './api'

export default function Demo03() {
  let [loading, setLoading] = useState(true)

  const promise = useRef(getMessage().then(res => {
    setLoading(false)
    return res
  }))

  let result = {value: '', icon_url: ''}

  if (!loading) {
    result = use(promise.current)
    return <Message message={result.value} />
  }

  return <Skeleton />
}
