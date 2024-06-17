import React from 'react';

const Carousel = () => {
    return (
        <>
            <div className="w-100 mb-3 d-flex justify-content-center">
                <div className='w-50 bg-primary'>
                    <div id="carouselExampleIndicators" className="carousel slide" style={{ maxWidth: '100%' }}>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                                <span className="visually-hidden">Slide 1</span>
                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                                <span className="visually-hidden">Slide 2</span>
                            </button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3">
                                <span className="visually-hidden">Slide 3</span>
                            </button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="images/carousel-img-1.jpg" className="d-block w-100" alt="room with plants decore" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item">
                                <img src="images/carousel-img-2.jpg" className="d-block w-100" alt="boy reading books with plants on table" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                            </div>
                            <div className="carousel-item">
                                <img src="images/carousel-img-3.jpg" className="d-block w-100" alt="lady caring plants" style={{ maxHeight: '400px', objectFit: 'cover' }} />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="w-25 mx-4 d-flex justify-content-center flex-column ">
                    <h4 className='text-center'>Our Decors</h4>
                    <p>
                    Decorate with indoor plants by choosing ones that match your room's light conditions and maintenance preferences. Place plants to create focal points, mix heights and textures, and use vertical space. Select pots that complement your decor and add style with plant stands and shelves. Ensure proper care with appropriate watering, humidity, and fertilization, and rotate plants regularly. Enhance aesthetics with a cohesive theme, plant-themed decor, and colorful foliage.</p>
                </div>
            </div>
        </>
    );
};

export default Carousel;
