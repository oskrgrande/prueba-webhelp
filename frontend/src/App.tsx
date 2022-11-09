import { Suspense, useState, lazy } from 'react'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes, Roles } from '@/models'
import { RoutesWithNotFound } from '@/utilities'
import { Provider } from 'react-redux'
import store from './redux/store'
import { AuthGuard, RoleGuard } from '@/guards'
import { Dashboard } from './pages/Private'

const Private = lazy(() => import('./pages/Private/Private'));
const Public = lazy(() => import('./pages/Public/Public'));


function App() {

  return (
    <>
      <Suspense fallback={<>Cargando...</>}>
        <Provider store={store}>
          <BrowserRouter>
              <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PublicRoutes.LOGIN} />} />
                <Route element={<Outlet/>}>
                  <Route path={`/*`} element={<Public />} />
                </Route>
                <Route element={<AuthGuard privateValidation={true} />}>
                  <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                </Route>
                <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                  <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                </Route>
              </RoutesWithNotFound>
          </BrowserRouter>
        </Provider>
      </Suspense>
    </>

  );
}

export default App
