import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="text-center text-lg-start bg-body-tertiary my-2 border-top border-shadow-secondary bg-light">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom border-shadow-dark">
        <div className="me-5 d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <Link to="#" className="me-4 text-reset" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </Link>
          <Link to="#" className="me-4 text-reset" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </Link>
          <Link to="#" className="me-4 text-reset" aria-label="Google">
            <i className="fab fa-google"></i>
          </Link>
          <Link to="#" className="me-4 text-reset" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </Link>
          <Link to="#" className="me-4 text-reset" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </Link>
          <Link to="#" className="me-4 text-reset" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </Link>
        </div>
      </section>

      <div className="container text-center text-md-start">
        <div className="row justify-content-space mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <a className="d-flex flex-wrap align-items-center justify-content-center m-2">
              <img src="images/logo.png" className='img-fluid' alt="Mero Plants Logo" />
            </a>
            <p>
              At Mero Plants, we're passionate about green living. Our mission is to provide premium quality indoor and outdoor plants, enhancing your living spaces with natural beauty.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p className="text-reset text-decoration-none">Money Plant</p>
            <p className="text-reset text-decoration-none">Lucky Bamboo</p>
            <p className="text-reset text-decoration-none">Peace Lily</p>
            <p className="text-reset text-decoration-none">Snake Plant</p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p><Link to="/services" className="text-reset text-decoration-none">Services</Link></p>
            <p><Link to="/products" className="text-reset text-decoration-none">Products</Link></p>
            <p><Link to="/orders" className="text-reset text-decoration-none">Orders</Link></p>
            <p><Link to="/aboutus" className="text-reset text-decoration-none">Help</Link></p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p><i className="fas fa-home me-3"></i>Kathmandu, Nepal</p>
            <p><i className="fas fa-envelope me-3"></i>info@gmail.com</p>
            <p><i className="fas fa-phone me-3"></i> + 977 9841001234</p>
            <p><i className="fas fa-print me-3"></i> + 977 9809876543</p>
          </div>
        </div>
      </div>
      
      <div className="text-center text-dark border-top border-shadow-secondary bg-light p-4">
        © {currentYear} Copyright:
        <Link className="text-reset text-decoration-none fw-bold" to="/">Mero Plants</Link>
      </div>
    </footer>
  );
}

export default Footer;
