import React from 'react'
import LandingPage from './LandingPage'
import AboutUs from './AboutUs'
import Carousel from '../components/Carousel'
import CardContainer from '../components/CardContainer'

const Homepage = () => {
  return (
    <>
      <LandingPage />
      <h1 className='text-lg-center my-4'>Top Products</h1>
      <CardContainer/>
      <h1 className='text-lg-center my-5'>About Us</h1>
      <AboutUs />
      <h1 className='text-center mt-5 mb-4'>Decorate Your Homes</h1>
      <Carousel />
    </>
  )
}

export default Homepage