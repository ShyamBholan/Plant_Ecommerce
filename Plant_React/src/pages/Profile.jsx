import React from 'react'
import { isAuthenticated } from '../auth'

const Profile = () => {
  const { user } = isAuthenticated()
  return (
    <>
      <div className="container">
        <h2>Welcome {user.name}</h2>
      </div>


    </>
  )
}

export default Profile