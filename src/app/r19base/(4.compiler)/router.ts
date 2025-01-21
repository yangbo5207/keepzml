export const r4 = [
  {
    type: 'tip',
    name: 'Compiler'
  }, {
    path: 'compiler',
    name: '22、React 19 中引入',
    component: require('./22.compiler/layout'),
    label: 'R'
  }, {
    path: 'compilerlower',
    name: '23、低版本中引入',
    component: require('./23.compilerlower/layout')
  }, {
    path: 'compilerwebpack',
    name: '24、webpack 中引入',
    component: require('./24.compilerwebpack/layout')
  }, {
    path: 'compilerbase',
    name: '25、Compiler 编译原理',
    component: require('./25.compilerbase/layout'),
    type: 'hard',
    label: 'hard'
  }, {
    path: 'compilercounter',
    name: '26、收益分析 - 递增',
    component: require('./26.compilercounter/layout')
  }, {
    path: 'compilerexpensive',
    name: '27、收益分析 - 耗时子组件',
    component: require('./27.compilerexpensive/layout')
  }, {
    path: 'compilertabs',
    name: '28、收益分析 - tabs',
    component: require('./28.compilertabs/layout')
  }
]