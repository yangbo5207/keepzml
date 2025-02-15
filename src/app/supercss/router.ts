import {r0} from './(0.viewmode)/router'
import {r1} from './(1.rendertree)/router'

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
    item.path = `/supercss/${item.path}`
  }
  return item
})