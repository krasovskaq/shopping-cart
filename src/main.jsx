import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider, Link } from 'react-router'
import Heading from './components/Heading'
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import CartPage from './pages/CartPage'

  const route = createBrowserRouter([
    {
      path:"/",
      element:<App/>,
      children: [
        {index: true, element: <HomePage/>},
        {path: "home", element: <HomePage/>},
        {path: "shop", element: <ShopPage/>},
        {path: "cart", element: <CartPage/>}
      ]
    }
  ])
createRoot(document.getElementById('root')).render(
  

    <StrictMode>
          <RouterProvider router={route} />
    </StrictMode>,

 
)
