import React from 'react'

const AboutUs = () => {
    return (
        <>
            <div className="container d-flex justify-content-center allign-items-center w-75 my-2">
                <img src="images/ai-image-1.jpg" className='img-fluid' alt="ai  girl with plant" />
                <div className="container justify-content-center allign-items-center w-50 ">
                    <h3 className='text-lg-start my-3  '>Mission</h3>
                    <p>To bring the beauty of nature into every home and garden with high-quality plants and exceptional service, promoting sustainability and well-being.</p>
                </div>
            </div>
            <div className="container d-flex justify-content-center allign-items-center w-75 my-2">
                <div className="container justify-content-center allign-items-center w-50  ">
                    <h3 className='text-lg-center my-3'>Our Story</h3>
                    <p>We grew up missing the lush gardens of our childhoods while surrounded by city concrete. As we filled our city apartments with greenery, friends started coming to us for advice on caring for plants. Seeing the difference these plants made in our lives, we launched Mero Plants. We noticed more and more people in urban areas wanted high-quality plants and reliable guidance, so our mission became clear.</p>
                </div>
                <img src="images/ai-image-2.jpg" className='img-fluid' alt="ai  guys studying plant" />
            </div>
        </>
    )
}

export default AboutUs