export const r2 = [
  {
    type: 'tip',
    name: '实战篇'
  },
  {
    path: 'streaming',
    name: '1、瀑布流',
    component: require('./1.streaming/layout')
  },
  {
    path: 'multapi',
    name: '2、多个接口并行',
    component: require('./2.multi/layout'),
    label: 'hard',
    type: 'hard'
  },
  {
    path: 'deps',
    name: '3、多个接口前后依赖',
    component: require('./3.deps/layout')
  },
  {
    path: 'cache',
    name: '4、数据缓存',
    component: require('./4.cache/layout')
  },
  {
    path: 'update',
    name: '5、多个更新条件',
    component: require('./5.mutiparams/layout')
  },
  {
    path: 'childx',
    name: '6、子组件数据解耦',
    component: require('./6.childx/layout')
  },
  {
    path: 'cfilter',
    name: '7、统一思考过滤条件',
    component: require('./7.cfilter/layout'),
    label: 'hard',
    type: 'hard'
  },
  {
    path: 'different',
    name: '8、接口更新频率不一致',
    component: require('./8.diff/layout'),
    label: 'hard',
    type: 'hard'
  },
  {
    path: 'pickone',
    name: '9、主动更新某一个接口',
    component: require('./9.pickone/layout')
  },
  
  {
    path: 'cstate',
    name: '10、子组件单独维护状态',
    component: require('./10.cstate/layout'),
    label: 'hard',
    type: 'hard'
  },
  {
    path: 'spage',
    name: '11、分页列表',
    component: require('./11.pagination/layout'),
    label: 'hard',
    type: 'hard'
  }
]