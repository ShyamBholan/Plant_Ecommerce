import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="conatiner d-flex p-2 m-5 bg-light">
                <div class="container-fluid justify-content-center allign-items-center">
                    <div class="row">
                        <div className="p-2 my-3">
                            <h1 className='display-2'>Plants Make Life <br />Better</h1><br />
                            <p className='display-7'>Plants reduce stress and improve your mood,<br/>
                           So, they are ideal for use at home <br /> and in workplace </p>
                            <div className="d-flex align-items-center  my-3">
                              <button id="button" className='btn btn-success p-2'>Explore More</button>
                              <button id="button" className='btn btn-light p-2 m-3'>Learn More <i className="fa fa-arrow-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row d-flex">
                        <div className="col-lg-5">
                            <img src="plant1.png" alt="eyes" height="400px" />
                        </div>
                        <div className="col-lg-5 d-flex align-items-end">
                            <img src="plant2.png" alt="eyes" height="250px" />
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Hero