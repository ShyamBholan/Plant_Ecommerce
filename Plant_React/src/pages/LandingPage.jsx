import React from 'react'
import { Link } from 'react-router-dom'
const LandingPage = () => {
  return (
    <>
      <div className="conatiner d-flex p-2 m-5">
        <div class="container-fluid justify-content-center allign-items-center">
          <div class="row">
            <div className="p-2 my-3">
              <h1 className='display-3 '>Plants Make Life <br />Better</h1><br />
              <p className='display-7'>Plants reduce stress and improve your mood,<br />
                So, they are ideal for use at home <br /> and in workplace </p>
              <div className="d-flex align-items-center my-3">
                <Link to="/signup" className="btn btn-success me-3" role="button">Start with Us</Link>
                <Link to="/products" id="button" className='btn btn-light border border-shadow-dark p-2 m-3'>Shop Now <i className="fa fa-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid mb-5 d-flex align-items-center ">
          <img src="images/background.png" className='img-fluid' alt="plant" />
        </div>
      </div>
    </>
  )
}

export default LandingPage