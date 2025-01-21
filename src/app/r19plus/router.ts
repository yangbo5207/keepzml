import {r0} from './(0.preface)/router'
import {r1} from './(1.theory)/router'
import {r2} from './(2.case)/router'
import {r3} from './(3.source)/router'

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
]