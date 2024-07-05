import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API, IMG_URL } from '../config'
import axios from 'axios'

const ProductDetails = () => {
    const [product, setProduct] = useState({})
    const params = useParams()

    useEffect(() => {
        const id = params.productId
        axios.get(`${API}/productdetails/${id}`)
            .then(res => {
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [params.productId])

    return (
        <>
            <div className='container bg-primaryy shadow p-5 my-5'>
                <div className='row d-flex justify-content-around'>
                    <div className='col-md-3'>
                        <img src={`${IMG_URL}/${product.product_image}`} alt={product.product_name} className='img-fluid' />
                    </div>
                    <div className='col-md-5'>
                        <h5>{product.product_name}</h5>
                        <h5>Rs.{product.product_price}</h5>
                        <p>{product.product_description}</p>
                        <br />
                        <button className='btn btn-success' >Add to Cart</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails