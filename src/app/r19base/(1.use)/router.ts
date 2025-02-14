export const r1 = [
  {
    type: 'tip',
    name: 'use(promise)'
  }, {
    path: '4.usebase',
    name: '4、use 基础知识',
    component: require('./4.usebase/layout'),
    type: 'warning',
    label: '试读'
  }, {
    path: '5.suspense',
    name: '5、Suspense',
    component: require('./5.suspense/layout'),
    type: 'warning',
    label: '试读'
  }, {
    path: '6.update',
    name: '6、点击之后按钮获取数据',
    component: require('./6.update/layout')
  }, {
    path: '7.initandupdate',
    name: '7、初始获取数据并更新',
    component: require('./7.initandupdate/layout')
  }, {
    path: '8.updatetolist',
    name: '8、新增数据到列表',
    component: require('./8.updatetolist/layout')
  }, {
    path: '9.loadmore',
    name: '9、列表加载更多',
    component: require('./9.loadmore/layout')
  }, {
    path: '10.search',
    name: '10、搜索',
    component: require('./10.search/layout')
  }, {
    path: '11.tabs',
    name: '11、tab 简单切换',
    component: require('./11.tabs/layout'),
    label: '1'
  }, {
    path: '12.tabshard',
    name: '12、tab 缓存切换',
    component: require('./12.tabshard/layout'),
    type: 'primary',
    label: '2'
  }, {
    path: '13.tabscount',
    name: '13、父元素获取子元素数据',
    component: require('./13.tabscount/layout'),
    type: 'hard',
    label: '3'
  }, {
    path: '14.nest',
    name: '14、Suspense 嵌套',
    component: require('./14.nest/layout'),
  }, {
    path: '15.withlower',
    name: '15、在低版本中使用',
    component: require('./15.withlower/layout'),
    type: 'newer',
    label: 'new'
  }
]