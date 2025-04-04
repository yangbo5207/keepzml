
import {r0} from './(0.eventloop)/router'
import {r1} from './(1.concurrent)/router'
import {r2} from './(2.fiber)/router'
import {r3} from './(3.hook)/router'
import { r4 } from './(4.diff)/router'
import { r5 } from './(5.event)/router'

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
  ...r3,
  ...r4,
  ...r5
].map(item => {
  if (item.path) {
    item.path = `/reactprinciple/${item.path}`
  }
  return item
})