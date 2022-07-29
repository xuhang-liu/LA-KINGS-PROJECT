import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  PaymentRequestButtonElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";

export default function CheckoutFormPayg(props) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "payment_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case "succeeded":
          setMessage("Payment succeeded!");
          break;
        case "processing":
          setMessage("Your payment is processing.");
          break;
        case "requires_payment_method":
          setMessage("Your payment was not successful, please try again.");
          break;
        default:
          setMessage("Something went wrong.");
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://"+window?.location?.hostname+"/paygpayment",
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsLoading(false);
  };

  var linkStyle1 = { outline: "6px solid #006dff", boxShadow: "0px 4px 32px 0px #518AD666", transition: "0.2s" }

  return (
    <div className="container-fluid row">
      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 py-4">
        <div className="single-pricing-table h-100" style={linkStyle1}>
          <div className="pricing-header">
            <h3 style={{ color: "#006dff", fontWeight: "700", fontSize: "2rem" }}>PAY-AS-YOU-GO</h3>
          </div>

          <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
            <sup style={{ color: "#090d3a" }}>$</sup>99<sub style={{ color: "#090d3a" }}>/job</sub>
            <p style={{ fontSize: "13px", color: "#090d3a", fontWeight: "700" }}>365-day access</p>
          </div>
          <div className="px-5 py-4">
            <p>A one-time solution for organizations with occasional hiring needs.</p>
            <div className="pt-5 pb-2">
              <p style={{ color: "#090d3a", fontWeight: "500" }}>1 Active Job Postings</p>
              <p style={{ color: "#090d3a", fontWeight: "500" }}>Standard Job Advertising</p>
              <p style={{ color: "#090d3a", fontWeight: "500" }}>Applicants Tracking</p>
              <p style={{ color: "#090d3a", fontWeight: "500" }}>One-way Video Interview</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12 py-4 px-5">
        <h3 className="mb-3">Payment Detail</h3>
        <form id="payment-form" onSubmit={handleSubmit}>
          <PaymentElement id="payment-element" />
          <hr />
          <h3 className="mb-3">Payment Summary</h3>
          <div className="row mb-3">
            <div className="col-4">
              <p>Pay-As-You-Go Subtotal</p>
            </div>
            <div className="col-1"></div>
            <div className="col-3"><p>$99 / Job</p></div>
          </div>
          <div className="row">
            <div className="col-4">
              <p>Total</p>
            </div>
            <div className="col-1"></div>
            <div className="col-3"><p>$99</p></div>
          </div>
          <div className="row d-flex justify-content-end pr-3">
            <button type="button" disabled={isLoading || !stripe || !elements} className="default-btn4" style={{ paddingLeft: "25px", marginTop: "1rem", marginRight: "1rem" }} onClick={props.hideShowPayment}>Back to Plans</button>
            <button type="submit" disabled={isLoading || !stripe || !elements} id="submit" className="default-btn1" style={{ paddingLeft: "25px", marginTop: "1rem" }}>
              <span id="button-text">
                {isLoading ? <div id="spinner"></div> : "Pay now"}
              </span>
            </button>
          </div>
          {/* Show any error or success messages */}
          {message && <div id="payment-message"><p>{message}</p></div>}
        </form>
      </div>
    </div>
  );
}