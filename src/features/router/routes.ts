import { JSX } from "react"
import OverviewPage from "../../pages/OverviewPage"
import ProductsPage from "../../pages/ProductsPage"
import UsersPage from "../../pages/UsersPage"
import SalesPage from "../../pages/SalesPage"
import AnaliticsPage from "../../pages/AnaliticsPage"

export const ROUTES_APP:IRoutes[] = [
  {
    path: '/',
    element: OverviewPage,
  },
  {
    path: '/products',
    element: ProductsPage,
  },
  {
    path: '/users',
    element: UsersPage,
  },
  {
    path: '/sales',
    element: SalesPage
  },
  {
    path: '/analitics',
    element: AnaliticsPage
  }
]

export type IRoutes = {
  path: string
  element: () => JSX.Element
}