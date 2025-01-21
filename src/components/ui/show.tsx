import React from 'react';

type RequiredParameter<T> = T extends () => unknown ? never : T;

export default function Show<T, TRenderFunction extends (item: T) => React.ReactNode>(
  props: {
    when: T | boolean,
    fallback?: React.ReactNode,
    children: React.ReactNode | RequiredParameter<TRenderFunction>
  }): any {
  const { when, fallback = null, children } = props

  if (typeof when === 'boolean') {
    return when ? children : fallback
  } else {
    return !!when ? (typeof children === 'function' ? children(when) : children) : fallback
  }
}