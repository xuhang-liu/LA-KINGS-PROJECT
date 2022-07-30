import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  PaymentRequestButtonElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import axios from "axios";

export default function CheckoutFormPremium(props) {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [errormsg, seterrormsg] = useState("");
  const [percent, setpercent] = useState(1);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "setup_intent_client_secret"
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrieveSetupIntent(clientSecret).then(({ setupIntent }) => {
      switch (setupIntent.status) {
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

    const { error } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: "https://"+window?.location?.hostname+"/premiumplanpayment-suc",
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

  const onChange = (e) => {
    setCouponCode(e.target.value)
  }

  const applyCouponCode = (e) => {
    e.preventDefault();
    if (couponCode == "") {
      return seterrormsg("*This code is invalid. Please try again.");
    }
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let data = { "coupon": couponCode, "subid": props.subscriptionId };

    axios.post("accounts/stripe-apply-coupon-code", data, config).then((res) => {
      seterrormsg(res.data.errormsg);
      setpercent(res.data.percent);
    }).catch(error => {
      console.log(error);
    });
  }

  const cancelSripesub = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    let data = { "subid": props.subscriptionId };

    axios.post("accounts/stripe-cancel-sub", data, config).then((res) => {
      console.log(res);
    }).catch(error => {
      console.log(error);
    });
    props.hideShowPayment();
  }

  var linkStyle3 = { outline: "6px solid #13C4A1", boxShadow: "0px 4px 32px 0px #079A7D66", transition: "0.2s" }

  return (
    <div className="container-fluid row">
      <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 py-4">
        <div className="single-pricing-table h-100" style={linkStyle3}>
          <div className="pricing-header">
            <h3 style={{ color: "#13c4a1", fontWeight: "700", fontSize: "2.5rem" }}>PREMIUM</h3>
          </div>
          <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
            <sup style={{ color: "#090d3a" }}>$</sup>{props.price}<sub style={{ color: "#090d3a" }}>/mo</sub>
          </div>
          <div className="px-5 py-4">
            <p>For organizations seeking hiring automation and team collaboration with an all-in-one talent acquisition suite.</p>
            <div className="pt-2 pb-2">
              <p style={{ color: "#090d3a", fontWeight: "500" }}>Unlimited Job Postings</p>
              <p style={{ color: "#090d3a", fontWeight: "500" }}>Premium Job Advertising</p>
              <p style={{ color: "#090d3a", fontWeight: "500" }}>Applicants Tracking</p>
              <p style={{ color: "#090d3a", fontWeight: "500" }}>One-way Video Interview</p>
              <p style={{ color: "#090d3a", fontWeight: "500" }}>Integration with Major HRIS</p>
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
          <div className="row">
            <div className="col-4">
              <p>{(props.price == 399) ? "" : "Annual "}Premium Subtotal</p>
            </div>
            <div className="col-1"></div>
            <div className="col-3"><p>${(props.price == 399) ? "399" : "3588"}{(props.price == 399) ? " / mo" : " / yr"}</p></div>
          </div>
          <div className="row my-3">
            {!showCoupon ?
              <div className="col-12">
                <p style={{ cursor: "pointer", color: "#006dff" }} onClick={() => setShowCoupon(true)}><b>Add Coupon Code</b></p>
              </div> :
              <div className="row ml-1">
                <div className="col-6 mr-3">
                  <input value={couponCode} onChange={onChange} type="text" placeholder="XXXXX" style={{ background: "#ffffff", border: "1px solid #7E8993", borderRadius: "4px", height: "2rem" }} />
                </div>
                <div className="col-4">
                  <button onClick={applyCouponCode} type="button" className="default-btn" style={{ paddingLeft: "25px", paddingTop: "6px", paddingBottom: "6px" }}>Apply</button>
                </div>
                {(errormsg == "") ? null : <p style={{ fontSize: "0.6rem", color: "#ff4d4f", marginLeft: "1rem" }}>{errormsg}</p>}
              </div>
            }
          </div>
          <div className="row">
            <div className="col-4">
              <p>Total</p>
            </div>
            <div className="col-1"></div>
            {(percent == 1) ?
              <div className="col-3"><p>${(props.price == 399) ? "399" : "3588"}</p></div> :
              <div className="col-3"><p style={{ display: "inline-block" }}>${(props.price == 399) ? parseInt(399 * percent) : parseInt(3588 * percent)}</p><p style={{ marginLeft: "0.6rem", color: "#7a7a7a", textDecorationLine: "line-through", display: "inline-block" }}>${(props.price == 399) ? "399" : "3588"}</p></div>
            }
          </div>
          <div className="row d-flex justify-content-end pr-3">
            <button type="button" disabled={isLoading || !stripe || !elements} className="default-btn4" style={{ paddingLeft: "25px", marginTop: "1rem", marginRight: "1rem" }} onClick={cancelSripesub}>Back to Plans</button>
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