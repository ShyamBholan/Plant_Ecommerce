import React, { useState, useEffect,Fragment } from 'react'
import { IMG_URL } from '../config'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { Navigate } from 'react-router-dom';

const Cart = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const cartData = localStorage.getItem('cartItems')
        const cartItems = JSON.parse(cartData)
        if (cartItems && cartItems.length > 0) {
            setProducts(cartItems)
        }
        else {
            setProducts([])
        }
    }, [])

    //decrease quantity
    const decreaseQuantity=id=>{
        const updateProducts=products.map(item=>{
            if(item.id===id && item.quantity>1){
                return {...item,quantity:item.quantity-1}
            }
            return item
        })
        setProducts(updateProducts)
        localStorage.setItem('cartItems',JSON.stringify(updateProducts))
    }

    //increase quantity
    const increaseQuantity=id=>{
        const updateProducts=products.map(item=>{
            if(item.id===id && item.quantity<item.countInStock){
                return {...item,quantity:item.quantity+1}
            }
            return item
        })
        setProducts(updateProducts)
        localStorage.setItem('cartItems',JSON.stringify(updateProducts))
    }

      //remove from cart 
      const removeCartHandler = (id, name) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'))
        const filterCart = cartItems.filter(item => item.id !== id)
        localStorage.setItem('cartItems', JSON.stringify(filterCart))
        setProducts(filterCart)
        toast.success(`${name} is removed from the cart`)
    }

    //shipping
    const shippingHandler=()=>{
        // Navigate('/shipping')
    }
    return (
        <>
        <ToastContainer theme='colored' position='top-center' />
            <div className="container">
                <div className="row d-flex justify-content-between my-5">
                    {products && products.length === 0 ?
                        <h2 className="text-center text-danger mt-3">Your Cart is Empty</h2>
                        : (
                            <>
                                <div className="col-md-8 shadow-lg">
                                    <h2 className='text-center mt-2'>Your Cart Items</h2>
                                    <hr />
                                    {products && products.map((item, i) => (
                                        <Fragment key={i}>
                                            <div className="d-flex p-3 align-items-center">
                                            <div className="col-3">
                                                <img src={`${IMG_URL}/${item.image}`} className='img-fluid' alt={item.name} width="150" />
                                            </div>
                                            <div className="col-3">
                                                <span><b>{item.name}</b></span>
                                            </div>
                                            <div className="col-2">
                                                <span>Rs.{item.price}</span>
                                            </div>
                                            <div className="col-3">
                                                <div className="d-flex">
                                                    <button className="btn btn-danger" onClick={()=>decreaseQuantity(item.id)}>-</button>&nbsp;
                                                    <input type="number" name='qty' value={item.quantity} readOnly className='form-control text-center border-0' />
                                                    &nbsp;
                                                    <button className='btn btn-primary' onClick={()=>increaseQuantity(item.id)}>+</button>
                                                </div>
                                            </div>
                                            &nbsp;&nbsp;
                                            <div className="col-1">
                                                <div className="btn btn-danger" onClick={() => removeCartHandler(item.id, item.name)}><i className="fa fa-trash"></i></div>
                                            </div>
                                        </div>
                                        </Fragment>
                                    ))}
                                </div>
                                <div className="col-md-3">
                                    <div className="shadow-lg p-2">
                                        <h4>Cart Summary</h4>
                                        <hr />
                                        <span><b>Units:</b>{products.reduce((acc,item)=>(acc+Number(item.quantity)),0)}</span>
                                        <br />
                                        <span><b>Total:</b>{products.reduce((acc,item)=>(acc+item.quantity*item.price),0)}</span>
                                        <hr />
                                        <button className='btn btn-success' onClick={shippingHandler}>check Out</button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                </div>
            </div>

        </>
    )
}

export default Cart