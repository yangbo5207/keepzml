export const r1 = [
  {
    type: 'tip',
    name: '理论篇'
  },
  {
    path: 'archi',
    name: '1、整体架构思维总览',
    component: require('./0.architectrure/layout')
  },
  {
    path: 'bff',
    name: '2、BFF 架构思维',
    component: require('./1.bff/layout')
  },
  {
    path: 'split',
    name: '3、组件拆分原则',
    component: require('./2.split/layout')
  },
  {
    path: 'nested',
    name: '4、解耦与嵌套',
    component: require('./3.nested/layout')
  }
]