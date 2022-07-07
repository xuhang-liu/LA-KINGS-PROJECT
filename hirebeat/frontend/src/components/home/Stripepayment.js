import React, { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51H4wpRKxU1MN2zWMpM0uKcYl4zZGDIecT8lKilLjKPax7kNxgGrXJEYsAGwQOSTAXOSM8CZC8DlnotePGf6l6KUY00F0TbxnIQ');

export const Stripepayment = (props) => {
    const [clientSecret, setClientSecret] = useState("");

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("accounts/stripe-paymentIntent", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <React.Fragment>
            <div style={{marginTop: "3rem"}}>
                {clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )}
            </div>
        </React.Fragment>
    )
}