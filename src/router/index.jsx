import { createBrowserRouter, redirect } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout.jsx'
import HomePage from '../pages/home.jsx'
import LoginPage from '../pages/login.jsx'
import CartPage from '../pages/cart.jsx';
import DetailproductPage from '../pages/detailProduct.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "products/:id",
        element: <DetailproductPage />
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ]
  },
  {
    path: "/login",
    element: <LoginPage />,
  }
]);

export default router;