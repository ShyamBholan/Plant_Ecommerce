import React from 'react';

const Card = () => {
    return (
        <>
        <h1 className='text-lg-center my-4'>Top Products</h1>
            <div className="container-fluid m-2">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="images/moneyplant.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="images/peacelily.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <img className="card-img-top" src="images/plant.png" alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
