import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Menu from "../pages/Menu";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/menu',
    element: <Menu />
  }
])

export default router;