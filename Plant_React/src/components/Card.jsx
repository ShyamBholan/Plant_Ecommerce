import React from 'react';
import { IMG_URL } from '../config';

const Card = ({ data }) => {
    // Ensure data is defined before destructuring
    if (!data) {
        return null; // or return loading indicator or error message
    }

    // Destructure properties with default values to prevent errors
    const { _id = '', product_name = '', product_price = 0, product_description = '', product_image = '' } = data;

    return (
        <div className="col-md-4">
            <div className="card shadow-lg p-3 mb-5 bg-white rounded">
                <img className="card-img-top" src={`${IMG_URL}/${product_image}`} alt={product_name} />
                <div className="card-body">
                    <h5 className="card-title">{product_name}</h5>
                    <h5 className="card-title">Rs.{product_price}</h5>
                    <p className="card-text">{product_description}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;
