export const r0 = [
  {
    type: 'tip',
    name: '前言'
  },
  {
    path: '0.page',
    name: '0、介绍',
    component: require('./0.page/layout'),
    label: '试读',
    type: 'warning'
  },
  {
    path: '1.start',
    name: '1、快速开始',
    component: require('./1.start/layout'),
    label: '试读',
    type: 'warning'
  },
  {
    path: '2.create',
    name: '2、create',
    component: require('./2.create/layout'),
    label: '试读',
    type: 'warning'
  },
  {
    path: '3.set',
    name: '3、set',
    component: require('./3.set/layout'),
    label: '试读',
    type: 'warning'
  },
  {
    path: '4.concurrent',
    name: '4、与并发API结合使用',
    component: require('./4.concurrent/layout'),
    label: 'newer',
    type: 'newer'
  }
]