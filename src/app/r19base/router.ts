import {r0} from './(0.preface)/router'
import {r1} from './(1.use)/router'
import {r2} from './(2.context)/router'
import {r3} from './(3.concurrent)/router'
import {r4} from './(4.compiler)/router'
import {r5} from './(5.formaction)/router'

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
  ...r5,
].map(item => {
  if (item.path) {
    item.path = `/r19base/${item.path}`
  }
  return item
})