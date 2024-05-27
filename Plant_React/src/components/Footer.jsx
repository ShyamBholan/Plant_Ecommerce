import React, { useEffect, useState } from 'react';

const Footer = () => {
  function Copyright() {
    // State variable to store the current year
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  
    // Effect to update the current year
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentYear(new Date().getFullYear());
      }, 1000); // Update every second

      // Clear the interval when the component unmounts
      return () => clearInterval(interval);
    }, []);
    
    return (
      <div className="text-center text-dark border-top border-shadow-secondary bg-light p-4">
        © <span>{currentYear}</span> Copyright:
        <a className="text-reset text-decoration-none fw-bold" href="#">Mero Plants</a>
      </div>
    );
  }

  return (
    <footer className="text-center text-lg-start bg-body-tertiary my-2 border-top border-shadow-secondary bg-light">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-shadow-dark">
        <div className="me-5 d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="me-4 text-reset">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <div className="container text-center text-md-start">
        <div className="row justify-content-space mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <a className="d-flex flex-wrap align-items-center justify-content-center m-2" >
              <img src="logo.png" width="180px" height="55px" />
            </a>
            <p>
              At Mero Plants, we're passionate about green living. Our mission is to provide premium quality indoor and outdoor plants, enhancing your living spaces with natural beauty
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p><a href="#" className="text-reset text-decoration-none">Money Plant</a></p>
            <p><a href="#" className="text-reset text-decoration-none">Lucky Bamboo</a></p>
            <p><a href="#" className="text-reset text-decoration-none">Peace Lily</a></p>
            <p><a href="#" className="text-reset text-decoration-none">Snake Plant</a></p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p><a href="#" className="text-reset text-decoration-none">Pricing</a></p>
            <p><a href="#" className="text-reset text-decoration-none">Products</a></p>
            <p><a href="#" className="text-reset text-decoration-none">Orders</a></p>
            <p><a href="#" className="text-reset text-decoration-none">Help</a></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3"></i>Banepa, Kavre</p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              info@gmail.com
            </p>
            <p><i className="fas fa-phone me-3"></i> + 977 9841001234</p>
            <p><i className="fas fa-print me-3"></i> + 977 9809876543</p>
          </div>
        </div>
      </div>

      {/* Render the Copyright component */}
      <Copyright />
    </footer>
  );
}

export default Footer;
