import {r0} from './(0.preface)/router'

interface RouteItem {
  type?: string,
  name?: string,
  component?: any,
  path?: string,
  label?: string
}

export const routers: RouteItem[] = [
  ...r0,
].map(item => {
  if (item.path) {
    item.path = `/zustand/${item.path}`
  }
  return item
})