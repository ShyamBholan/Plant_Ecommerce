import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header className='container-fluid d-flex flex-wrap align-items-center justify-content-between border-bottom border-shadow-secondary'>
        <Link to={"/"} className="d-flex flex-wrap align-items-center justify-content-center" >
          <img src="images/logo.png" alt="logo" className='img-fluid' style={{ maxHeight: '50px', maxWidth: '220px' }} />
        </Link>
        <ul className="nav col-12 col-lg-auto  mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link p-3 link-dark ">Home</Link></li>
          <li><Link to="/aboutus" className="nav-link p-3 link-dark">About Us</Link></li>
          <li><Link to="/services" className="nav-link p-3 link-dark">Services</Link></li>
          <li><Link to="/products" className="nav-link p-3 link-dark">Products</Link></li>
          <li><Link to="/help" className="nav-link p-3 link-dark">Help</Link></li>
          <li><Link to="/cart" className="nav-link p-3 link-dark"><i class="fa fa-cart-plus"></i></Link></li>
        </ul>
        <form class="col-12 d-flex col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search" />
          <button className="btn btn-outline-secondary" type="button" id="button"><i className="fas fa-search"></i></button>
        </form>
        <div className=" col-md-2 text-end ">
          <Link to="/signin" className="btn btn-success me-3" role="button">Login</Link>
          <Link to="/signup" className="btn btn-success me-3" role="button">Sign Up</Link>
        </div>
      </header>
    </>
  )
}

export default Header