import React from 'react';

const Card = () => {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                            <img className="card-img-top" src="images/moneyplant.png" alt="money plant in a pot" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                            <img className="card-img-top" src="images/peacelily.png" alt="peacelily growing with flower" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                            <img className="card-img-top" src="images/plant.png" alt="plants growing green in a pot" />
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
