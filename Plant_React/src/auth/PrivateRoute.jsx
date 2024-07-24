import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet, Navigate } from 'react-router-dom'
import { isAuthenticated } from '../auth'

const PrivateRoute = () => {
  const auth = isAuthenticated();
  if (auth && auth.user.role === 0) {
    return (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    )
  }
  else {
    return <Navigate to='/signin' />;
  }
}

export default PrivateRoute
