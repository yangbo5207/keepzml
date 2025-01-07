
// use promise
import C4Usebase from 'pages/base/pages/4.usebase'
import C5Suspense from 'pages/base/pages/5.suspense'
import C6Update from 'pages/base/pages/6.update'
import C7InitUpdate from 'pages/base/pages/7.useInitUpdate'
import C8UpdateToList from 'pages/base/pages/8.updateToList'
import C9Loadmore from 'pages/base/pages/9.Loadmore'
import C10Search from 'pages/base/pages/10.Search'
import C11Tabs from 'pages/base/pages/11.tabs'
import C12TabShare from 'pages/base/pages/12.tabshard'
import UseTabscount from 'pages/base/pages/13.tabscount'
import UseNest from 'pages/base/pages/14.usenest'
import UseLower from 'pages/base/pages/15.usewitchreact16'

// use context
import CtxRef from 'pages/base/pages/16.contextRef'
import CtxModal from 'pages/base/pages/17.contextmodal'
import CtxModify from 'pages/base/pages/18.contextmodify'
import CtxCount from 'pages/base/pages/19.contextcount'

// 并发 API
import Deferred from 'pages/base/pages/20.deferred'
import Transition from 'pages/base/pages/21.useTransition'

// Compiler
import ImportCompiler from 'pages/base/pages/22.compilerimport19'
import ImportWithLower from 'pages/base/pages/23.compilerimportlower'
import ImportWithWebpack from 'pages/base/pages/24.compilerimportwebpack'
import CompilerBase from 'pages/base/pages/25.compilerbase'
import CompilerCount from 'pages/base/pages/26.compilercounter'
import CompilerExpensive from 'pages/base/pages/27.compilerexpensive'
import CompilerTabs from 'pages/base/pages/28.compilertabs'

// form action
import ActionBase from 'pages/base/pages/29.fabase'
import FormDataBase from 'pages/base/pages/30.faformdata'
import FormAction from 'pages/base/pages/31.faAction'
import UseFormStatus from 'pages/base/pages/32.faUseformstatus'
import UseActionState from 'pages/base/pages/33.faUseactionstate'
import UseOptimistic from 'pages/base/pages/34.faUseoptimistic1'
import UseOptimistic2 from 'pages/base/pages/35.faUseoptimistic2'
import UseOptimistic3 from 'pages/base/pages/36.faUseoptimistic3'
import UseOptimistic4 from 'pages/base/pages/37.faUseoptimistic4'

import End from 'pages/base/pages/38.end'

export const navigation = [
  {
    path: 'live',
    name: '0、直播录屏地址',
    component: require('pages/base/pages/0.live')
  },
  {
  type: 'tip',
  name: '前言'
}, {
  path: 'index',
  name: '1、开发方式变革',
  component: require('pages/base/pages/1.change')
}, {
  path: 'layers',
  name: '2、学习的三个层次',
  component: require('pages/base/pages/2.layers')
}, {
  path: 'create',
  name: '3、创建项目',
  component: require('pages/base/pages/3.create')
}, {
  type: 'tip',
  name: 'use(promise)'
}, {
  path: 'use/base',
  name: '4、use 基础知识',
  component: C4Usebase
}, {
  path: 'use/suspense',
  name: '5、Suspense',
  component: C5Suspense
}, {
  path: 'use/update',
  name: '6、点击更新数据',
  component: C6Update
}, {
  path: 'use/initialize',
  name: '7、初始化请求并更新',
  component: C7InitUpdate
}, {
  path: 'use/updatetolist',
  name: '8、请求并新增到列表',
  component: C8UpdateToList
}, {
  path: 'use/loadmore',
  name: '9、分页列表加载更多',
  component: C9Loadmore
}, {
  path: 'use/search',
  name: '10、搜索',
  component: C10Search
}, {
  path: 'use/tabs',
  name: '11、tab 简单切换',
  component: C11Tabs,
  label: '1'
}, {
  path: 'use/tabshard',
  name: '12、tab 缓存切换',
  component: C12TabShare,
  label: '2'
}, {
  path: 'use/fromchildren',
  name: '13、父级获取数据',
  component: UseTabscount,
  label: '3'
}, {
  path: 'use/nest',
  name: '14、Suspense 嵌套',
  component: UseNest
}, {
  path: 'use/react16',
  name: '15、在低版本中使用',
  component: UseLower
}, {
  type: 'tip',
  name: 'use(context)'
}, {
  path: 'use/ref',
  name: '16、ref 调整',
  component: CtxRef
}, {
  path: 'use/modal',
  name: '17、自定义弹窗组件',
  component: CtxModal
}, {
  path: 'use/contextmodify',
  name: '18、弹窗中更改内容',
  component: CtxModify
}, {
  path: 'use/skinswitch',
  name: '19、皮肤切换次数',
  component: CtxCount
}, {
  type: 'tip',
  name: '并发 API'
}, {
  path: 'use/deferred',
  name: '20、useDeferredValue',
  component: Deferred
}, {
  path: 'use/transition',
  name: '21、useTransition',
  component: Transition
}, {
  type: 'tip',
  name: 'Compiler'
}, {
  path: 'use/importwith19',
  name: '22、React 19 中引入',
  component: ImportCompiler
},{
  path: 'use/importwithlower',
  name: '23、低版本中引入',
  component: ImportWithLower
},{
  path: 'use/importwithwebpack',
  name: '24、webpack中引入',
  component: ImportWithWebpack
},{
  path: 'use/compilerbase',
  name: '25、Compiler 编译原理',
  component: CompilerBase
},{
  path: 'use/compilercount',
  name: '26、收益分析-递增',
  component: CompilerCount
},{
  path: 'use/compilerexpensive',
  name: '27、收益分析-耗时子组件',
  component: CompilerExpensive
},{
  path: 'use/compilertabs',
  name: '28、收益分析-tabs',
  component: CompilerTabs
}, {
  type: 'tip',
  name: 'form action'
},{
  path: 'formaction/base',
  name: '29、form 基础',
  component: ActionBase
}, {
  path: 'formaction/formdata',
  name: '30、FormData 基础',
  component: FormDataBase
}, {
  path: 'formaction/action',
  name: '31、form action',
  component: FormAction
}, {
  path: 'formaction/useformstatus',
  name: '32、useFormStatus',
  component: UseFormStatus
}, {
  path: 'formaction/useactionstate',
  name: '33、useActionState',
  component: UseActionState
}, {
  path: 'formaction/useoptimistic',
  name: '34、useOptimistic',
  component: UseOptimistic,
  label: '1'
}, {
  path: 'formaction/useoptimistic2',
  name: '35、useOptimistic',
  component: UseOptimistic2,
  label: '2'
}, {
  path: 'formaction/useoptimistic3',
  name: '36、useOptimistic',
  component: UseOptimistic3,
  label: '3'
}, {
  path: 'formaction/useoptimistic4',
  name: '37、复杂案例',
  component: UseOptimistic4,
  label: '4'
}, {
  type: 'tip',
  name: '后续闲谈'
}, {
  path: 'formaction/end',
  name: '38、完结感言',
  component: End
}]
