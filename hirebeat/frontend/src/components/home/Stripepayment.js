import React, { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFormPremium from "./CheckoutFormPremium";
import CheckoutFormPro from "./CheckoutFormPro";
import CheckoutFormPayg from "./CheckoutFormPayg";

const stripePromise = loadStripe('pk_test_51H4wpRKxU1MN2zWMpM0uKcYl4zZGDIecT8lKilLjKPax7kNxgGrXJEYsAGwQOSTAXOSM8CZC8DlnotePGf6l6KUY00F0TbxnIQ');
function getClientReferenceId() {
    return window.Rewardful && window.Rewardful.referral || ('checkout_' + (new Date).getTime());
}

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

    useEffect(() => {
        subscribe_stripe();
    }, []);

    const subscribe_stripe = () => {
        fetch("accounts/stripe-create-subcription", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                coupon: props.coupon,
                planPrice: props.planPrice,
                userID: props.user.id,
                clientReferenceId: getClientReferenceId()
            }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret))
    }

    return (
        <React.Fragment>
            <div style={{ paddingTop: "3rem", margin: "auto", width: "50%" }}>
                {(props.planPrice == "price_1LQbu3KxU1MN2zWMAaZbcGBr") &&
                    <span>
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutFormPayg />
                            </Elements>
                        )}
                    </span>}
                {(props.planPrice == "price_1LQdOgKxU1MN2zWMqc2M6u92" || props.planPrice == "price_1LQdRHKxU1MN2zWMrNPTju3z" ) &&
                    <span>
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutFormPro />
                            </Elements>
                        )}
                    </span>}
                {(props.planPrice == "price_1LJLwsKxU1MN2zWM3PiqUIwf" || props.planPrice == "price_1LQdSoKxU1MN2zWMHtZSudl8" ) &&
                    <span>
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutFormPremium />
                            </Elements>
                        )}
                    </span>}
            </div>
        </React.Fragment>
    )
}