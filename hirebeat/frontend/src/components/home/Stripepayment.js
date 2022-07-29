import React, { useState, useEffect } from 'react';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutFormPremium from "./CheckoutFormPremium";
import CheckoutFormPro from "./CheckoutFormPro";
import CheckoutFormPayg from "./CheckoutFormPayg";

const stripePromise = loadStripe('pk_live_51H4wpRKxU1MN2zWM7NHs8vqQsc7FQtnL2atz6OnBZKzBxJLvdHAivELe5MFetoqGOHw3SD5yrtanVVE0iOUQFSHj00NmcZWpPd');
function getClientReferenceId() {
    return window?.Rewardful && window?.Rewardful?.referral || ('checkout_' + (new Date).getTime());
}

export const Stripepayment = (props) => {
    const [clientSecret, setClientSecret] = useState("");
    const [subscriptionId, setsubscriptionId] = useState(null);

    const appearance = {
        theme: 'stripe',
        variables: {
            colorPrimary: '#006dff',
            colorBackground: '#e8edfc',
            colorText: '#080a3c',
            colorDanger: '#ff0000',
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
                planPrice: props.planPrice,
                userID: props.user.id,
                clientReferenceId: getClientReferenceId()
            }),
        })
            .then((res) => res.json())
            .then((data) => { setClientSecret(data.clientSecret), setsubscriptionId(data.subscriptionId) })
    }

    return (
        <React.Fragment>
            <div className='px-5 py-5'>
                {(props.planPrice == "price_1K7QhOKxU1MN2zWM6f54d41L") &&
                    <span>
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutFormPayg price={99} subscriptionId={subscriptionId} hideShowPayment={props.hideShowPayment} setClientSecret={setClientSecret} />
                            </Elements>
                        )}
                    </span>
                }
                {(props.planPrice == "price_1ITDJGKxU1MN2zWMKd4L8TOH") &&
                    <span>
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutFormPro price={169} subscriptionId={subscriptionId} hideShowPayment={props.hideShowPayment} setClientSecret={setClientSecret} />
                            </Elements>
                        )}
                    </span>
                }
                {(props.planPrice == "price_1JAcQeKxU1MN2zWMU4DYwhVA") &&
                    <span>
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutFormPro price={126} subscriptionId={subscriptionId} hideShowPayment={props.hideShowPayment} setClientSecret={setClientSecret} />
                            </Elements>
                        )}
                    </span>
                }
                {(props.planPrice == "price_1K7REaKxU1MN2zWMcG3Oknyt") &&
                    <span>
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutFormPremium price={399} subscriptionId={subscriptionId} hideShowPayment={props.hideShowPayment} setClientSecret={setClientSecret} />
                            </Elements>
                        )}
                    </span>
                }
                {(props.planPrice == "price_1K7RExKxU1MN2zWM87rKnRhM") &&
                    <span>
                        {clientSecret && (
                            <Elements options={options} stripe={stripePromise}>
                                <CheckoutFormPremium price={299} subscriptionId={subscriptionId} hideShowPayment={props.hideShowPayment} setClientSecret={setClientSecret} />
                            </Elements>
                        )}
                    </span>
                }
            </div>
        </React.Fragment>
    )
}