import { RoleGuard } from "@/guards";
import { lazy } from "react"
import { Route } from "react-router-dom"
import { PrivateRoutes, Roles } from "../../models"
import { RoutesWithNotFound } from "../../utilities"

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

function Private() {
  return (
    <RoutesWithNotFound>
      <Route element={<RoleGuard rol={Roles.ADMIN} />}>
      </Route>
    </RoutesWithNotFound>
  )
}
export default Private