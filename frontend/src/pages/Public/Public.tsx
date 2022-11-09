import { lazy } from "react"
import { Route } from "react-router-dom"
import { PublicRoutes } from "@/models"
import { RoutesWithNotFound } from "@/utilities"

const Login = lazy(() => import('./Login/Login'));

function Public() {
  return (
    <RoutesWithNotFound>
      {/* <Route path="/" element={PublicRoutes.PUBLIC}/> */}
      <Route path={PublicRoutes.LOGIN} element={<Login/>} />
    </RoutesWithNotFound>
  )
}
export default Public