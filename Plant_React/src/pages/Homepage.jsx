import React from 'react'
import LandingPage from './LandingPage'
import Card from '../components/Card'
import AboutUs from './AboutUs'
import Carousel from '../components/Carousel'

const Homepage = () => {
  return (
    <>
    <LandingPage/>
    <Card/>
    <AboutUs/>
    {/* <Carousel/> */}
    </>
  )
}

export default Homepage