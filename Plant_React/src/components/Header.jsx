import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header className='d-flex justify-content-between align-items-center bg-light border-bottom border-shadow-secondary'>
        <Link to={"/"} className="d-flex flex-wrap align-items-center justify-content-center m-2" >
          <img src="logo.png" width="180px" height="55px" alt='logo'/>
        </Link>
        <ul className="nav col-12 col-md-auto mx-5 px-3 justify-content-center text-dark mb-md-0">
          <li><Link to="/" className="nav-link p-3 link-dark ">Home</Link></li>
          <li><Link to="/aboutus" className="nav-link p-3 link-dark">About Us</Link></li>
          <li><Link to="*" className="nav-link p-3 link-dark">Services</Link></li>
          <li><Link to="/product" className="nav-link p-3 link-dark">Products</Link></li>
          <li><Link to="*" className="nav-link p-3 link-dark">Help</Link></li>
          <li><Link to="/cart" className="nav-link p-3 link-dark"><i class="fa fa-cart-plus"></i></Link></li>
        </ul>

        <div className="input-group mx-5">
          <input type="text" className="form-control" placeholder="Search"/>
          <button className="btn btn-outline-secondary" type="button" id="button"><i className="fas fa-search"></i></button>
        </div>

        <div className=" col-md-2 text-end ">
          <Link to="/login" className="btn btn-success me-3" role="button">Login</Link>
          <Link to="/signup" className="btn btn-success me-3" role="button">Sign Up</Link>
        </div>
      </header>
    </>
  )
}

export default Header