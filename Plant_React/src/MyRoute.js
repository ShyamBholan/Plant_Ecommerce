import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
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
import EmailVerify from './auth/EmailVerify'
import Profile from './pages/Profile'

const MyRoute = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layouts />}>
            <Route index element={<Homepage />} />
            <Route path='aboutus' element={<AboutUs />} />
            <Route path='cart' element={<Cart />} />
            <Route path='signin' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='products' element={<Products />} />
            <Route path='productdetails/:productId' element={<ProductDetails />} />
            <Route path='email/confirmation/:token' element={<EmailVerify/>}/>
          </Route>
          <Route path='/' element={<PrivateRoute/>}>
            <Route path='shipping' element={<Shipping />} />
            <Route path='profile' element={<Profile/>}/>
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default MyRoute