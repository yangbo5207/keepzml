export const r1 = [
  {
    type: 'tip',
    name: '理论篇'
  },
  {
    path: '0.architectrure',
    name: '1、整体架构思维总览',
    component: require('./0.architectrure/layout')
  },
  {
    path: '1.bff',
    name: '2、BFF 架构思维',
    component: require('./1.bff/layout')
  },
  {
    path: '2.split',
    name: '3、组件拆分原则',
    component: require('./2.split/layout')
  },
  {
    path: '3.nested',
    name: '4、解耦与嵌套',
    component: require('./3.nested/layout')
  },
  {
    path: '4.DDD',
    name: '5、DDD 领域驱动设计',
    component: require('./4.DDD/layout'),
    label: 'new',
    type: 'newer'
  }
]