import React from 'react'
import { Navigate } from 'react-router-dom'
const Shipping = () => {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 shadow p-2 my-2">
                        <form action="">
                            <h2 className=''>Shipping Information</h2>
                            <div className="mb-2">
                                <label htmlFor="ShippingAddress1"> Shipping Address 1</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">Shipping Address 2</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">city</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="" >Zip</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">Phone</label>
                                <input type="text" className='form-control' />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">Country</label>
                               <select name="country" id="" className='form-control'></select>
                            </div>
                            <div className='mb-2'>
                                <button className='btn btn-success'>Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shipping