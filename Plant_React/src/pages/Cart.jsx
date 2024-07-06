import React from 'react'

const Cart = () => {
    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-between my-5">
                    {/* {products && products.length === 0 ?
                        <h2 className="text-center text-danger mt-3">Your Cart is Empty</h2>
                    :(
                    <> */}
                        
                        <div className="col-md-8 shadow-lg">
                        <h2 className='text-center mt-2'>Your Cart Items</h2>
                        <hr />
                            <div className="d-flex p-3 align-items-center">
                                <div className="col-3">
                                    <img src="/images/peacelily.png" className='img-fluid' alt="plant images" />
                                </div>
                                <div className="col-3">
                                    <span><b>Peacelily</b></span>
                                </div>
                                <div className="col-2">
                                    <span>Rs.400</span>
                                </div>
                                <div className="col-3">
                                    <div className="d-flex">
                                        <button className="btn btn-danger">-</button>&nbsp;
                                        <input type="number" name='qty' readOnly className='form-control text-center border-0' />
                                        &nbsp;
                                        <button className='btn btn-primary'>+</button>
                                    </div>
                                </div>
                                &nbsp;&nbsp;
                                <div className="col-1">
                                    <div className="btn btn-danger"><i className="fa fa-trash"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="shadow-lg p-2">
                                <h4>Cart Summary</h4>
                                <hr />
                                <span><b>Units:</b></span>
                                <br />
                                <span><b>Total:</b></span>
                                <hr />
                                <button className='btn btn-success'>check Out</button>
                            </div>
                        </div>
                    {/* </>
                    )
                } */}
                </div>
            </div>

        </>
    )
}

export default Cart