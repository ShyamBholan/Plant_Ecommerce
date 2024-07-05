import React from 'react'

const Cart = () => {
    return (
        <>
          <div className="container">
                <h2 className='text-center'>Your Cart Items</h2>
                <div className="col-md-8">
                    <div className="d-flex align-items center">
                        <div className="col-3">
                            <img src="/images/plant.png" className='img-fluid' alt="plant images" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cart