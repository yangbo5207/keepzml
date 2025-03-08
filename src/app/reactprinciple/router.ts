import {r0} from './(0.eventloop)/router'
import {r1} from './(1.concurrent)/router'
import {r2} from './(2.fiber)/router'
import {r3} from './(3.hook)/router'

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
  ...r2,
  ...r3
].map(item => {
  if (item.path) {
    item.path = `/reactprinciple/${item.path}`
  }
  return item
})