import {r0} from './(0.preface)/router'
import {r1} from './(1.philosophy)/router'

interface RouteItem {
  type?: string,
  name?: string,
  component?: any,
  path?: string,
  label?: string
}

export const routers: RouteItem[] = [
  ...r0,
  ...r1,
].map(item => {
  if (item.path) {
    item.path = `/reactzm/${item.path}`
  }
  return item
})