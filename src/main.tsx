import { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import PageLoading from 'components/page-loading'

import RootLayout from 'app/layout'
import App from 'app/page'

import R19BaseLayout from 'app/r19base/layout'
import R19Page from 'app/r19base/page'
import { routers as r19baseRouters } from 'app/r19base/router'


import R19PlusLayout from 'app/r19plus/layout'
import R19Plus from 'app/r19plus/page'
import { routers as r19plusRouters } from 'app/r19plus/router'

import R19LightningLayout from 'app/r19lightning/layout'
import R19Lightning from 'app/r19lightning/page'
import { routers as r19lightningRouters } from 'app/r19lightning/router'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<App />} />

        <Route path='r19base' element={<R19BaseLayout />}>
          <Route index element={<R19Page />} />
          {r19baseRouters.filter((item) => !!item.path).map((item, i) => (
            <Route key={item.path} path={item.path} element={
              <Suspense fallback={<PageLoading />}>
                <item.component />
              </Suspense>
            } />
          ))}
        </Route>

        <Route path='r19plus' element={<R19PlusLayout />}>
          <Route index element={<R19Plus />} />
          {r19plusRouters.filter((item) => !!item.path).map((item, i) => (
            <Route key={item.path} path={item.path} element={
              <Suspense fallback={<PageLoading />}>
                <item.component />
              </Suspense>
            } />
          ))}
        </Route>

        <Route path='r19lightning' element={<R19LightningLayout />}>
          <Route index element={<R19Lightning />} />
          {r19lightningRouters.filter((item) => !!item.path).map((item) => (
            <Route key={item.path} path={item.path} element={
              <Suspense fallback={<PageLoading />}>
                <item.component />
              </Suspense>
            } />
          ))}
        </Route>

      </Route>
    </Routes>
  </BrowserRouter>,
)
