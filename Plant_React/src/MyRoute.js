import React from 'react'
import { BrowserRouter as Router, Routes, Route, UNSAFE_useRouteId } from 'react-router-dom'
import Layouts from './components/Layouts'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Cart from './pages/Cart'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Shipping from './pages/Shipping'
import PrivateRoute from './auth/PrivateRoute'

const MyRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layouts />}>
            <Route index element={<Homepage />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='cart' element={<Cart />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='products' element={<Products />} />
            <Route path='productdetails/:productId' element={<ProductDetails />} />
          </Route>
          <Route path='/' element={<PrivateRoute/>}>
            <Route path='shipping' element={<Shipping />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default MyRoute