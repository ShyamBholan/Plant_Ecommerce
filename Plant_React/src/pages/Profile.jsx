import React from 'react'
import { isAuthenticated } from '../auth'

const Profile = () => {
    const {user}=isAuthenticated()
  return (
    <>
    <div className="container">
      <h1></h1>
    <h2 className='bg-danger'>Welcome {user.name}</h2>
    <p>hello</p>
    </div>

    
    </>
  )
}

export default Profile