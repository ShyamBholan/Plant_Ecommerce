import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Card from './components/Card'
import Cart from './pages/Cart'

const MyRoute = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Layouts/>}>
            <Route index element={<Homepage/>}/>
            <Route path='product' element={<Card/>}/>
            <Route path='aboutus' element={<AboutUs/>} />
            <Route path='cart' element={<Cart/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='signup' element={<Signup/>}/>
            </Route>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </Router>
    </>
  )
}

export default MyRoute