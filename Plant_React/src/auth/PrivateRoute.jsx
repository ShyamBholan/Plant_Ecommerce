import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { isAuthenticated } from '.'

const PrivateRoute = () => {
  isAuthenticated() && isAuthenticated().user.role === 0 ?
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
    : (
      <Navigate to='/signin' />
    )
}

export default PrivateRoute