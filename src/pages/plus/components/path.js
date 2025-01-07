export const plus_router = [
  {
    path: 'live',
    name: '0、直播讲解录屏',
    component: require('pages/plus/pages/0.live')
  },
  {
    type: 'tip',
    name: '序'
  },
  {
    path: 'index',
    name: '1、如何理解体系化',
    component: require('pages/plus/pages/1.index')
  },
  {
    type: 'tip',
    name: '理论篇'
  },
  {
    path: 'architecture',
    name: '2、架构思维总览',
    component: require('pages/plus/pages/2.architectrure')
  },
  {
    path: 'bff',
    name: '3、BFF架构思维',
    component: require('pages/plus/pages/3.bff')
  },
  {
    path: 'split',
    name: '4、组件拆分原则',
    component: require('pages/plus/pages/4.split')
  },
  {
    path: 'nest',
    name: '5、解耦与嵌套',
    component: require('pages/plus/pages/5.nested')
  },
  {
    type: 'tip',
    name: '实战篇'
  },
  {
    path: 'streaming',
    name: '6、瀑布流',
    component: require('pages/plus/pages/6.streaming')
  },
  {
    path: 'multapi',
    name: '7、多个接口并行',
    component: require('pages/plus/pages/7.multi')
  },
  {
    path: 'deps',
    name: '8、多个接口前后依赖',
    component: require('pages/plus/pages/8.deps')
  },
  {
    path: 'cache',
    name: '9、数据缓存',
    component: require('pages/plus/pages/9.cache')
  },
  {
    path: 'update',
    name: '10、多个更新条件',
    component: require('pages/plus/pages/10.mutiparams')
  },
  {
    path: 'different',
    name: '11、接口更新频率不一致',
    component: require('pages/plus/pages/11.diff')
  },
  {
    path: 'pickapi',
    name: '12、更新其中某个接口',
    component: require('pages/plus/pages/12.pickone')
  },
  {
    path: 'childx',
    name: '13、子组件数据解耦',
    component: require('pages/plus/pages/13.childx')
  },
  {
    path: 'cfilter',
    name: '14、统一思考过滤条件',
    component: require('pages/plus/pages/14.cfilter')
  },
  {
    path: 'lstate',
    name: '15、单独维护列表状态',
    component: require('pages/plus/pages/15.liststate')
  },
  {
    path: 'reduce',
    name: '16、分页列表',
    component: require('pages/plus/pages/16.pagination')
  },
  // {
  //   path: 'signal',
  //   name: '12、从列表中筛选',
  //   component: Multapi
  // },
  // {
  //   path: 'showcache',
  //   name: '13、详情回显',
  //   component: Multapi
  // },
  // {
  //   path: 'shocachemore',
  //   name: '14、复杂项回显',
  //   component: Multapi
  // },
  // {
  //   path: 'editor',
  //   name: '15、详情编辑',
  //   component: Multapi
  // },
]
