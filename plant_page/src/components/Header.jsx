import React from 'react'

const Header = () => {
  return (
    <>
      <header className='d-flex justify-content-between align-items-center bg-light'>
        <a className="d-flex flex-wrap align-items-center justify-content-center m-2" >
          <img src="logo.png" width="180px" height="55px" />
        </a>
        <ul className="nav col-12 col-md-auto mx-5 px-3 justify-content-center text-dark mb-md-0">
          <li><a to="/" className="nav-link p-3 link-dark ">Home</a></li>
          <li><a to="#" className="nav-link p-3 link-dark">About Us</a></li>
          <li><a to="#" className="nav-link p-3 link-dark">Services</a></li>
          <li><a to="#" className="nav-link p-3 link-dark">Shop</a></li>
          <li><a to="#" className="nav-link p-3 link-dark">Help</a></li>
          <li><a to="#" className="nav-link p-3 link-dark">Cart</a></li>
        </ul>

        <div className="input-group mx-5">
          <input type="text" className="form-control" placeholder="Search"/>
          <button className="btn btn-outline-secondary" type="button" id="button"><i className="fas fa-search"></i></button>
        </div>

        <div className=" col-md-2 text-end ">
          <a to="/login" className="btn btn-success me-3" role="button">Login</a>
          <a to="/signup" className="btn btn-success me-3" role="button">Sign Up</a>
        </div>
      </header>
    </>
  )
}

export default Header