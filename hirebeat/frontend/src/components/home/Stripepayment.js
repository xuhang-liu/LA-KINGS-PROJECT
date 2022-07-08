import React, { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51H4wpRKxU1MN2zWMpM0uKcYl4zZGDIecT8lKilLjKPax7kNxgGrXJEYsAGwQOSTAXOSM8CZC8DlnotePGf6l6KUY00F0TbxnIQ');

export const Stripepayment = (props) => {
    const [clientSecret, setClientSecret] = useState("");

    const appearance = {
        theme: 'stripe',
        variables: {
            colorPrimary: '#006dff', 
            colorText: '#080a3c',
            spacingUnit: '2px',
            borderRadius: '4px',
            fontFamily: 'Inter, Segoe UI, Helvetica, sans-serif',
        },
    };
    const options = {
        clientSecret,
        appearance,
    };

    const subscribe_stripe = () =>{
        fetch("accounts/stripe-create-subcription", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
    }

    return (
        <React.Fragment>
            <div style={{ paddingTop: "3rem", margin:"auto", width:"50%" }}>
                <h3>Premium Plan</h3>
                <button onClick={subscribe_stripe} className='default-btn1 mb-3' style={{paddingLeft:"25px"}}>Select Plan</button>
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>
        </React.Fragment>
    )
}