import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { countries } from 'countries-list'

const Shipping = () => {
    const navigate = useNavigate()
    const countriesList = Object.values(countries)
    const shippingInfo = JSON.parse(localStorage.getItem('shippingInfo')) || {}

    const [shippingAddress1, setShippingAddress1] = useState(shippingInfo.shippingAddress1 || '')
    const [shippingAddress2, setShippingAddress2] = useState(shippingInfo.shippingAddress2 || '')
    const [city, setCity] = useState(shippingInfo.city || '')
    const [zip, setZip] = useState(shippingInfo.zip || '')
    const [country, setCountry] = useState(shippingInfo.country || '')
    const [phone, setPhone] = useState(shippingInfo.phone || '')

    // save shipping info 
    const submitHandler = e => {
        e.preventDefault()
        const shippingInfo = {
            shippingAddress1,
            shippingAddress2,
            city,
            zip,
            country,
            phone
        }
        localStorage.setItem('shippingInfo', JSON.stringify(shippingInfo))
        navigate('/confirm')
    }

    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-4 shadow p-2 my-2">
                        <form action="">
                            <h2 className=''>Shipping Information</h2>
                            <div className="mb-2">
                                <label htmlFor="ShippingAddress1"> Shipping Address 1</label>
                                <input type="text" className='form-control' id='address1' onChange={(e) => setShippingAddress1(e.target.value)}
                                    value={shippingAddress1} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">Shipping Address 2</label>
                                <input type="text" className='form-control' id='address2'
                                    onChange={(e) => setShippingAddress2(e.target.value)}
                                    value={shippingAddress2} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">city</label>
                                <input type="text" className='form-control' id='city'
                                    onChange={(e) => setCity(e.target.value)}
                                    value={city} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="" >Zip</label>
                                <input type="text" className='form-control' id='zip'
                                    onChange={(e) => setZip(e.target.value)}
                                    value={zip} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">Phone</label>
                                <input type="text" className='form-control' id='phone'
                                    onChange={(e) => setPhone(e.target.value)}
                                    value={phone} />
                            </div>
                            <div className="mb-2">
                                <label htmlFor="">Country</label>
                                <select name="country" className='form-control' id='country'
                                    onChange={(e) => setCountry(e.target.value)}>
                                    <option value={country}>{country}</option>
                                    {countriesList.map((c, i) => (
                                        <option key={i} value={c.name}>{c.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='mb-2'>
                                <button className='btn btn-success' onClick={submitHandler}>Continue</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Shipping