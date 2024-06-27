import React, { useState, useEffect } from 'react';
import Card from './Card';
import { API } from '../config';
import axios from 'axios';

const CardContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get(`${API}/productlist`)
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                setError(err); // Capture and set the error
                setLoading(false);
            });
    }, []); 

    if (loading) {
        return <p>Loading...</p>; // Display loading indicator
    }

    if (error) {
        return <p>Error: {error.message}</p>; // Display specific error message
    }

    return (
        <div className="container-fluid mt-3">
            <div className="row">
                {products && products.slice(0, 8).map((item, i) => (
                    <Card data={item} key={i} />
                ))}
            </div>
        </div>
    );
};

export default CardContainer;


