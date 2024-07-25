// PaymentElement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { API } from '../config';
import Payment from './Payment';

const PaymentElement = () => {
    const [stripeApiKey, setStripeApiKey] = useState('');

    useEffect(() => {
        async function getStripeApiKey() {
            try {
                const { data } = await axios.get(`${API}/stripeapi`);
                setStripeApiKey(data.stripeApiKey);
            } catch (error) {
                console.error('Error fetching Stripe API key:', error);
                // Handle error state or retry logic if necessary
            }
        }
        getStripeApiKey();
    }, []);

    return (
        <>
            {stripeApiKey && (
                <Elements stripe={loadStripe(stripeApiKey)}>
                    <Payment />
                </Elements>
            )}
        </>
    );
};

export default PaymentElement;
