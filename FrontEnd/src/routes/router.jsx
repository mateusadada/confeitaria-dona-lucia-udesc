import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import CashFlow from "../pages/CashFlow";
import Orders from "../pages/Orders";
import Recipes from "../pages/Recipes";
import Pricing from "../pages/Pricing";
import Storage from "../pages/Storage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/menu',
    element: <Menu />
  },
  {
    path: '/cashflow',
    element: <CashFlow />
  },
  {
    path: '/orders',
    element: <Orders />
  },
  {
    path: '/recipes',
    element: <Recipes />
  },
  {
    path: '/pricing',
    element: <Pricing />
  },
  {
    path: '/storage',
    element: <Storage />
  },
])

export default router;