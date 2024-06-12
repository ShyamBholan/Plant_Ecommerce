import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './components/Layouts'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'
import Homepage from './pages/Homepage'
import Product from './components/Product'
import AboutUs from './pages/AboutUs'

const MyRoute = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Layouts/>}>
            <Route index element={<Homepage/>}/>
            <Route path='product' element={<Product/>}/>
            <Route path='aboutus' element={<AboutUs/>} />
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