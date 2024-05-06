import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layouts from './components/Layouts'

const MyRoute = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route path='/' element={<Layouts/>}>
            {/* <Route index element={}/> */}
            </Route>
        </Routes>
    </Router>
    </>
  )
}

export default MyRoute