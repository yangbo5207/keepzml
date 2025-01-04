import Button from './pages/button'
import Input from './pages/input'
import Skeleton from './pages/skeleton'
import Pagination from './pages/pagination'

export const compath = [
  {
    type: 'tip',
    name: '基础组件'
  }, 
  {
    path: 'button',
    name: '1、按钮 Button',
    component: Button
  }, 
  {
    path: 'input',
    name: '2、输入框 Input',
    component: Input
  }, 
  {
    path: 'skeleton',
    name: '2、骨架屏 Skeleton',
    component: Skeleton
  },
  {
    path: 'pagination',
    name: '3、分页器 Pagination',
    component: Pagination
  }
]
