import {Suspense} from 'react'
import {Routes, Route} from 'react-router-dom'
import PageLoading from 'components/PageLoading'
import Home from 'pages/home'

import BaseLayout from './pages/base/Layout'
import {navigation} from 'pages/base/components/path'

import AdvanceLayout from './pages/plus/Layout'
import {plus_router} from 'pages/plus/components/path'

import Docs from './pages/docs'
import {compath} from 'pages/docs/path'

import Payment from 'pages/payment'
import AppLayout from './pages/Layout'

function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout />}>
        <Route index element={<Home />} />
        <Route path='tutorial' element={<BaseLayout />}>
          {navigation.filter((item) => !!item.path).map((item ,i) => (
            <Route key={item.path} path={item.path} element={
              <Suspense fallback={<PageLoading />}>
                <item.component />
              </Suspense>
            } />
          ))}
        </Route>
        
        <Route path='advance' element={<AdvanceLayout />}>
          {plus_router.filter((item) => !!item.path).map((item ,i) => (
            <Route key={item.path} path={item.path} element={
              <Suspense fallback={<PageLoading />}>
                <item.component />
              </Suspense>
            } />
          ))}
        </Route>

        <Route path='docs' element={<Docs />}>
          {compath.filter((item) => !!item.path).map((item ,i) => (
            <Route key={item.path} path={item.path} element={
              <Suspense fallback={<PageLoading />}>
                <item.component />
              </Suspense>
            } />
          ))}
        </Route>

        <Route path='pay' element={<Payment />} />
        <Route path="*" element={<div className='p-32'>暂无内容</div>} />
      </Route>
    </Routes>
  )
}

export default App
