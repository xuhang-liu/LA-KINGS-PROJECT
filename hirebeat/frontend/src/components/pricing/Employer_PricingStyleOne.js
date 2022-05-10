import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile, updateUserEmail } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";
import { loadStripe } from '@stripe/stripe-js';
import MediaQuery from 'react-responsive';
import Collapse from 'react-bootstrap/Collapse'
//import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'boxicons';
import axios from "axios";

const stripePromise = loadStripe('pk_live_51H4wpRKxU1MN2zWM7NHs8vqQsc7FQtnL2atz6OnBZKzBxJLvdHAivELe5MFetoqGOHw3SD5yrtanVVE0iOUQFSHj00NmcZWpPd');

function getClientReferenceId() {
    return window.Rewardful && window.Rewardful.referral || ('checkout_'+(new Date).getTime());
}

class Employer_PricingStyleOne extends Component {
    state = {
        upAndDown1: true,
        upAndDown2: false,
        upAndDown3: false,
        upAndDown4: false,
        upAndDown5: false,
        hover1: false,
        hover2: false,
        hover3: false,
        anpro: 126,
        anpre: 299,
        mopro: 169,
        mopre: 399,
    }

    componentDidMount() {
        let allFeaturesIndicate = document.getElementById("allFeaturesIndicate");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 1500 && window.innerWidth >= 1200) {
                allFeaturesIndicate?.classList.add("is-sticky");
            } else if (window.scrollY > 3000 && window.innerWidth < 1200) {
                allFeaturesIndicate?.classList.add("is-sticky");
            }
            else {
                allFeaturesIndicate?.classList.remove("is-sticky");
            }
        });
        let allFeaturesIndicate1 = document.getElementById("allFeaturesIndicate1");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 3000) {
                allFeaturesIndicate1?.classList.add("is-sticky");
            } else {
                allFeaturesIndicate1?.classList.remove("is-sticky");
            }
        });
    }

    toggleHover1 = () => {
        this.setState({ hover1: !this.state.hover1 });
    }
    toggleHover2 = () => {
        this.setState({ hover2: !this.state.hover2 });
    }
    toggleHover3 = () => {
        this.setState({ hover3: !this.state.hover3 });
    }

    setUpAndDown1 = () => {
        this.setState({
            upAndDown1: !this.state.upAndDown1,
        });
    }
    setUpAndDown2 = () => {
        this.setState({
            upAndDown2: !this.state.upAndDown2,
        });
    }
    setUpAndDown3 = () => {
        this.setState({
            upAndDown3: !this.state.upAndDown3,
        });
    }
    setUpAndDown4 = () => {
        this.setState({
            upAndDown4: !this.state.upAndDown4,
        });
    }
    setUpAndDown5 = () => {
        this.setState({
            upAndDown5: !this.state.upAndDown5,
        });
    }

    // handleInputChange = (e) => {
    //     if (e.target.value == 'PH2022' || e.target.value == 'ph2022' || e.target.value == 'BL2022' || e.target.value == 'bl2022') {
    //         this.setState({
    //             anpro: 69,
    //             anpre: 164,
    //             mopro: 93,
    //             mopre: 219
    //         });
    //     } else {
    //         this.setState({
    //             anpro: 126,
    //             anpre: 299,
    //             mopro: 169,
    //             mopre: 399
    //         });
    //     }
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //     });
    // };

    // handleCouponProUpgrade = () => {
    //     this.handleCouponProClickUpgrade();
    // };

    // handleCouponProClickUpgrade = async (event) => {
    //     // When the customer clicks on the button, redirect them to Checkout.
    //     const stripe = await stripePromise;
    //     const { error } = await stripe.redirectToCheckout({
    //         lineItems: [{
    //             price: 'price_1KHADuKxU1MN2zWMnR2zpGiR', // Replace with the ID of your price
    //             quantity: 1,
    //         }],
    //         mode: 'subscription',
    //         successUrl: 'https://app.hirebeat.co/payment',
    //         cancelUrl: 'https://app.hirebeat.co/employer-pricing',
    //         billingAddressCollection: 'auto',
    //         customerEmail: this.props.user.email,
    //     });
    //     error.message;
    // };

    // handleCouponYearProUpgrade = () => {
    //     this.handleCouponYearProClickUpgrade();
    // };

    // handleCouponYearProClickUpgrade = async (event) => {
    //     // When the customer clicks on the button, redirect them to Checkout.
    //     const stripe = await stripePromise;
    //     const { error } = await stripe.redirectToCheckout({
    //         lineItems: [{
    //             price: 'price_1KHADlKxU1MN2zWMTiH3oA8R', // Replace with the ID of your price
    //             quantity: 1,
    //         }],
    //         mode: 'subscription',
    //         successUrl: 'https://app.hirebeat.co/payment',
    //         cancelUrl: 'https://app.hirebeat.co/employer-pricing',
    //         billingAddressCollection: 'auto',
    //         customerEmail: this.props.user.email,
    //     });
    //     error.message;
    // };

    // handleCouponPremiumUpgrade = () => {
    //     this.handleCouponPremiumClickUpgrade();
    // };

    // handleCouponPremiumClickUpgrade = async (event) => {
    //     // When the customer clicks on the button, redirect them to Checkout.
    //     const stripe = await stripePromise;
    //     const { error } = await stripe.redirectToCheckout({
    //         lineItems: [{
    //             price: 'price_1KHABwKxU1MN2zWM9cOLWe3D', // Replace with the ID of your price
    //             quantity: 1,
    //         }],
    //         mode: 'subscription',
    //         successUrl: 'https://app.hirebeat.co/payment',
    //         cancelUrl: 'https://app.hirebeat.co/employer-pricing',
    //         billingAddressCollection: 'auto',
    //         customerEmail: this.props.user.email,
    //     });
    //     error.message;
    // };

    // handleCouponYearPremiumUpgrade = () => {
    //     this.handleCouponYearPremiumClickUpgrade();
    // };

    // handleCouponYearPremiumClickUpgrade = async (event) => {
    //     // When the customer clicks on the button, redirect them to Checkout.
    //     const stripe = await stripePromise;
    //     const { error } = await stripe.redirectToCheckout({
    //         lineItems: [{
    //             price: 'price_1KHABkKxU1MN2zWMs0TTARc9', // Replace with the ID of your price
    //             quantity: 1,
    //         }],
    //         mode: 'subscription',
    //         successUrl: 'https://app.hirebeat.co/payment',
    //         cancelUrl: 'https://app.hirebeat.co/employer-pricing',
    //         billingAddressCollection: 'auto',
    //         customerEmail: this.props.user.email,
    //     });
    //     error.message;
    // };

    handleProUpgrade = () => {
        this.handleProClickUpgrade();
    };
    handleProClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1ITDJGKxU1MN2zWMKd4L8TOH', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'subscription',
            successUrl: 'https://app.hirebeat.co/paymentpro',
            cancelUrl: 'https://app.hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
            clientReferenceId: getClientReferenceId()
        });
        error.message;
    };

    handleYearProUpgrade = () => {
        this.handleYearProClickUpgrade();
    };
    handleYearProClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1JAcQeKxU1MN2zWMU4DYwhVA', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'subscription',
            successUrl: 'https://app.hirebeat.co/paymentpro',
            cancelUrl: 'https://app.hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
            clientReferenceId: getClientReferenceId()
        });
        error.message;
    };

    handlePremiumUpgrade = () => {
        this.handlePremiumClickUpgrade();
    };
    handlePremiumClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1K7REaKxU1MN2zWMcG3Oknyt', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'subscription',
            successUrl: 'https://app.hirebeat.co/payment',
            cancelUrl: 'https://app.hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
            clientReferenceId: getClientReferenceId()
        });
        error.message;
    };

    handleYearPremiumUpgrade = () => {
        this.handleYearPremiumClickUpgrade();
    };
    handleYearPremiumClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1K7RExKxU1MN2zWM87rKnRhM', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'subscription',
            successUrl: 'https://app.hirebeat.co/payment',
            cancelUrl: 'https://app.hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
            clientReferenceId: getClientReferenceId()
        });
        error.message;
    };

    handlePayAsYouGoUpgrade = () => {
        this.handlePayAsYouGoClickUpgrade();
    };
    handlePayAsYouGoClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1K7QhOKxU1MN2zWM6f54d41L', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'payment',
            successUrl: 'https://app.hirebeat.co/paygpayment',
            cancelUrl: 'https://app.hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
            clientReferenceId: getClientReferenceId()
        });
        error.message;
    };

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    stripeCustomerPortal = () => {
        let config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        let data = { "id": this.props.user.id };

        axios.post("api/go_stripe_customer_portal", data, config).then((res) => {
            //console.log(res);
            const session_url = res['data']['session_url'];
            window.location.href = session_url;
        }).catch(error => {
            console.log(error)
        });
    }

    render() {
        var linkStyle1;
        var linkStyle2;
        var linkStyle3;
        if (this.state.hover1) {
            linkStyle1 = { outline: "6px solid #006dff", boxShadow: "0px 4px 32px 0px #518AD666", transition: "0.2s" }
        }
        if (this.state.hover2) {
            linkStyle2 = { outline: "6px solid #FF6B00", boxShadow: "0px 4px 32px 0px #C3520066", transition: "0.2s" }
        }
        if (this.state.hover3) {
            linkStyle3 = { outline: "6px solid #13C4A1", boxShadow: "0px 4px 32px 0px #079A7D66", transition: "0.2s" }
        }
        return (
            <section className="pricing-area pt-100" id="go-to-pricing">
                <div className="container-xl">
                    {/* {(this.props.profile.membership == "Regular" || this.props.profile.is_freetrial) &&
                        <div className="mt-1 mb-3 pb-5 pt-3" style={{ textAlign: "center", backgroundColor: "#e8edfc" }}>
                            <h2 style={{ fontWeight: "600", color: "#090d3a", marginBottom: "1rem" }}><i className="bx bxs-coupon bx-sm"></i> Enter Coupon Code</h2>
                            <input
                                className="form-control"
                                type="text"
                                name={"coupon_match"}
                                placeholder={"Enter coupon code"}
                                onChange={this.handleInputChange}
                                style={{
                                    backgroundColor: "#FFFFFF",
                                    fontSize: "16px",
                                    borderRadius: "5px",
                                    height: "3rem",
                                    color: "grey",
                                    width: "30%",
                                    display: "inline-block",
                                    paddingLeft: "0.5rem"
                                }}
                            />
                        </div>} */}
                    <div className="tab pricing-list-tab">
                        {/* Pricing Tab List */}
                        <ul className="tabs">
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span style={{ border: "1px solid #090D3A" }}>
                                    <i className="bx bxs-calendar-check"></i> &nbsp;&nbsp;Monthly &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </span>
                            </li>

                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <span style={{ border: "1px solid #090D3A" }}>
                                    <i className="bx bxs-calendar-check"></i> Annual (-25%)
                                </span>
                            </li>
                        </ul>
                        <div className="tab_content">
                            {/*Annually*/}
                            <div id="tab2" className="tabs_item">
                                <div className="row pb-5 pt-3">
                                    
                                    {/* Single pricing table 2 */}
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                        <div style={{ backgroundColor: "#ffffff", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}>Most popular</p>
                                        </div>
                                        <div className="single-pricing-table h-100" style={linkStyle1} onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover1}>
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#006dff", fontWeight: "700", fontSize: "2.5rem" }}>PAYG</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                <sup style={{ color: "#090d3a" }}>$</sup>99<sub style={{ color: "#090d3a" }}>/ job</sub>
                                                <p style={{ fontSize: "13px", color: "#fff", fontWeight: "600" }}>Billed at <span style={{ textDecoration: "line-through" }}>$2,028</span> <span style={{ fontWeight: "700", color: "#fff" }}>$1,512 /yr</span></p>
                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                    {
                                                        this.props.profile.membership == null ?
                                                            <div className="btn-box">
                                                                <Link to="/employer_register">
                                                                    <a id="id-employer-select2" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                        Start Free Trial
                                                                        <span></span>
                                                                    </a>
                                                                </Link>
                                                            </div> :
                                                            <div className="btn-box">
                                                                <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handlePayAsYouGoUpgrade}>
                                                                    Select Plan
                                                                    <span></span>
                                                                </button>
                                                            </div>
                                                    }
                                                </div>
                                                {this.props.profile.membership == null &&
                                                    <p style={{ fontSize: "0.9rem", fontWeight: "500", color: "#000", paddingBottom: "0.6rem" }}>No Credit Card Needed</p>
                                                }
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For organizations with occasional hiring needs.</p>
                                                <div className="pt-5 pb-2">
                                                    <p style={{ color: "#090d3a" }}>Create Unlimited Jobs</p>
                                                    <p style={{ color: "#090d3a" }}>Only Charged When You Publish</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                    <p style={{ color: "#090d3a" }}>Team Collaboration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single pricing table 3*/}
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                        <div style={{ backgroundColor: "#ff6b00", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}><box-icon type='solid' name='medal' color="#ffffff" size="1rem" ></box-icon> Most popular</p>
                                        </div>
                                        <div className="single-pricing-table h-100" style={linkStyle2} onMouseEnter={this.toggleHover2} onMouseLeave={this.toggleHover2}>
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#ff6b00", fontWeight: "700", fontSize: "2.5rem" }}>PRO</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                <sup style={{ color: "#090d3a" }}>$</sup><span style={{ textDecoration: "line-through", color: "#818181", marginRight: "0.3rem", fontSize: "1.8rem" }}>{this.state.anpro == 126 ? null : 126}</span><span>{this.state.anpro == 126 ? 126 : this.state.anpro}</span><sub style={{ color: "#090d3a" }}>/ mo</sub>
                                                <p style={{ fontSize: "13px", color: "#818181", fontWeight: "600" }}>Billed at <span style={{ textDecoration: "line-through" }}>${this.state.anpro == 126 ? "2,028" : "1,116"}</span> <span style={{ fontWeight: "700", color: "#090d3a" }}>${this.state.anpro == 126 ? "1,512" : "828"} /yr</span></p>
                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                    {
                                                        this.props.profile.membership == null &&
                                                        <div className="btn-box">
                                                            <Link to="/employer_register">
                                                                <a id="id-employer-select2" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }}>
                                                                    Start Free Trial
                                                                    <span></span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    }
                                                    {this.props.profile.is_freetrial ?
                                                        <div className="btn-box">
                                                            {this.state.anpro == 126 ?
                                                                <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }} onClick={this.handleYearProUpgrade}>
                                                                    Select Plan
                                                                    <span></span>
                                                                </button> :
                                                                <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }} onClick={this.handleCouponYearProUpgrade}>
                                                                    Select Plan
                                                                    <span></span>
                                                                </button>
                                                            }
                                                        </div> :
                                                        <div>
                                                            {
                                                                this.props.profile.membership == "Regular" &&
                                                                <div className="btn-box">
                                                                    {this.state.anpro == 126 ?
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }} onClick={this.handleYearProUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button> :
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }} onClick={this.handleCouponYearProUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button>
                                                                    }
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Regular") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }}>
                                                                        Premium Already
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }} onClick={this.stripeCustomerPortal}>
                                                                        Select Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                                {this.props.profile.membership == null &&
                                                    <p style={{ fontSize: "0.9rem", fontWeight: "500", color: "#000", paddingBottom: "0.6rem" }}>No Credit Card Needed</p>
                                                }
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For smaller teams looking to simplify and speed up the hiring process with the essential features.</p>
                                                <div className="pt-2 pb-2">
                                                    <p style={{ color: "#090d3a" }}>5 Active Job Postings</p>
                                                    <p style={{ color: "#090d3a" }}>Job Advertising</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                    <p style={{ color: "#090d3a" }}>Team Collaboration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single pricing table 4*/}
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                        <div style={{ backgroundColor: "#ffffff", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}>Most popular</p>
                                        </div>
                                        <div className="single-pricing-table h-100" style={linkStyle3} onMouseEnter={this.toggleHover3} onMouseLeave={this.toggleHover3}>
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#13c4a1", fontWeight: "700", fontSize: "2.5rem" }}>PREMIUM</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                <sup>$</sup><span style={{ textDecoration: "line-through", color: "#818181", marginRight: "0.3rem", fontSize: "1.8rem" }}>{this.state.anpre == 299 ? null : 299}</span><span>{this.state.anpre == 299 ? 299 : this.state.anpre}</span><sub style={{ color: "#090d3a" }}>/ mo</sub>
                                                <p style={{ fontSize: "13px", color: "#818181", fontWeight: "600" }}>Billed at <span style={{ textDecoration: "line-through" }}>${this.state.anpre == 299 ? "4,788" : "2,628"}</span> <span style={{ fontWeight: "700", color: "#090d3a" }}>${this.state.anpre == 299 ? "3,588" : "1,968"} /yr</span></p>
                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                    {
                                                        this.props.profile.membership == null &&
                                                        <div className="btn-box">
                                                            <Link to="/employer_register">
                                                                <a id="id-employer-select2" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                    Start Free Trial
                                                                    <span></span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    }
                                                    {this.props.profile.is_freetrial ?
                                                        <div className="btn-box">
                                                            {this.state.anpre == 299 ?
                                                                <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handleYearPremiumUpgrade}>
                                                                    Select Plan
                                                                    <span></span>
                                                                </button> :
                                                                <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handleCouponYearPremiumUpgrade}>
                                                                    Select Plan
                                                                    <span></span>
                                                                </button>
                                                            }
                                                        </div> :
                                                        <div>
                                                            {
                                                                this.props.profile.membership == "Regular" &&
                                                                <div className="btn-box">
                                                                    {this.state.anpre == 299 ?
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handleYearPremiumUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button> :
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handleCouponYearPremiumUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button>
                                                                    }
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Regular") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", backgroundColor: "#13c4a1", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", backgroundColor: "#13c4a1", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#13c4a1" }} onClick={this.stripeCustomerPortal}>
                                                                        Upgrade
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                                {this.props.profile.membership == null &&
                                                    <p style={{ fontSize: "0.9rem", fontWeight: "500", color: "#000", paddingBottom: "0.6rem" }}>No Credit Card Needed</p>
                                                }
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For organizations seeking hiring automation and team collaboration with an all-in-one talent acquisition suite.</p>
                                                <div className="pt-2 pb-2">
                                                    <p style={{ color: "#090d3a" }}>Unlimited Job Postings</p>
                                                    <p style={{ color: "#090d3a" }}>Job Advertising</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                    <p style={{ color: "#090d3a" }}>Team Collaboration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*Monthly*/}
                            <div id="tab1" className="tabs_item">
                                <div className="row pb-5 pt-3">
                                    {/* Single pricing table 1 */}
                                    {/*<div className="col-lg-3 col-md-3 px-4">
                                        <div className="single-pricing-table left-align h-100" style={{backgroundColor:"#F0F6FE", border:"2px solid #006dff"}}>
                                            <div className="pricing-header">
                                                <h3 style={{fontWeight:"600",  marginBottom:"0.6rem"}}>Free</h3>
                                                <p style={{color:"#090d3a", fontSize:"12px"}}>Try the essentials to get started</p>
                                            </div>

                                            <div className="price" style={{borderTop:"none", borderBottom:"2px dashed #006dff"}}>
                                                <sup>$</sup>0 <sub style={{color:"#090d3a"}}>/ mo</sub>
                                                <p style={{fontSize:"13px", color:"#F0F6FE", fontWeight:"600"}}>0</p>
                                            <div style={{marginLeft:"-2rem", marginTop:"-1.5rem", marginBottom:"1rem"}}>
                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/employer_register">
                                                <a id="id-employer-select1" className="default-btn" style={{color:"white", paddingLeft:"25px"}}>
                                                    Select Plan
                                                    <span></span>
                                                </a>
                                                </Link>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Regular" &&
                                                <div className="btn-box">
                                                    <Link to="/employer_dashboard">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#080a3c", paddingLeft:"25px"}}>
                                                        Current Plan
                                                        <span></span>
                                                    </button>
                                                    </Link>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Premium" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", paddingLeft:"25px"}}>
                                                        Default Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            </div>
                                            </div>

                                            <ul className="pricing-features pr-2">
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>1</strong> Job Position
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>25</strong> Video Screening per job 
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>3</strong> Customizable Video Questions
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Candidate Shortlisting
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Candidate Rating & Feedback
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Custom Branding
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>1</strong> Team Collaborator
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Built- in ATS
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    AI-powered Resume Evaluation
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    AI-Powered Analytics
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    API Integrations
                                                </li>
                                            </ul>
                                        </div>
                                    </div>*/}

                                    {/* Single pricing table 2 */}
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                        <div style={{ backgroundColor: "#ffffff", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}>Most popular</p>
                                        </div>
                                        <div className="single-pricing-table h-100" style={linkStyle1} onMouseEnter={this.toggleHover1} onMouseLeave={this.toggleHover1}>
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#006dff", fontWeight: "700", fontSize: "2.5rem" }}>PAYG</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                <sup style={{ color: "#090d3a" }}>$</sup>99<sub style={{ color: "#090d3a" }}>/ job</sub>
                                                <p style={{ fontSize: "13px", color: "#ffffff", fontWeight: "600" }}>0</p>
                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                    {
                                                        this.props.profile.membership == null ?
                                                            <div className="btn-box">
                                                                <Link to="/employer_register">
                                                                    <a id="id-employer-select2" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                        Start Free Trial
                                                                        <span></span>
                                                                    </a>
                                                                </Link>
                                                            </div> :
                                                            <div className="btn-box">
                                                                <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handlePayAsYouGoUpgrade}>
                                                                    Select Plan
                                                                    <span></span>
                                                                </button>
                                                            </div>
                                                    }
                                                </div>
                                                {this.props.profile.membership == null &&
                                                    <p style={{ fontSize: "0.9rem", fontWeight: "500", color: "#000", paddingBottom: "0.6rem" }}>No Credit Card Needed</p>
                                                }
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For organizations with occasional hiring needs.</p>
                                                <div className="pt-5 pb-2">
                                                    <p style={{ color: "#090d3a" }}>Create Unlimited Jobs</p>
                                                    <p style={{ color: "#090d3a" }}>Only Charged When You Publish</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                    <p style={{ color: "#090d3a" }}>Team Collaboration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single pricing table 3*/}
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                        <div style={{ backgroundColor: "#ff6b00", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}><box-icon type='solid' name='medal' color="#ffffff" size="1rem" ></box-icon> Most popular</p>
                                        </div>
                                        <div className="single-pricing-table h-100" style={linkStyle2} onMouseEnter={this.toggleHover2} onMouseLeave={this.toggleHover2}>
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#ff6b00", fontWeight: "700", fontSize: "2.5rem" }}>PRO</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                <sup style={{ color: "#090d3a" }}>$</sup><span style={{ textDecoration: "line-through", color: "#818181", marginRight: "0.3rem", fontSize: "1.8rem" }}>{this.state.mopro == 169 ? null : 169}</span><span>{this.state.mopro == 169 ? 169 : this.state.mopro}</span><sub style={{ color: "#090d3a" }}>/ mo</sub>
                                                <p style={{ fontSize: "13px", color: "#ffffff", fontWeight: "600" }}>0</p>
                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                    {
                                                        this.props.profile.membership == null &&
                                                        <div className="btn-box">
                                                            <Link to="/employer_register">
                                                                <a id="id-employer-select2" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }}>
                                                                    Start Free Trial
                                                                    <span></span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    }
                                                    {this.props.profile.is_freetrial ?
                                                        <div className="btn-box">
                                                            {this.state.mopro == 169 ?
                                                                <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }} onClick={this.handleProUpgrade}>
                                                                    Select Plan
                                                                    <span></span>
                                                                </button> :
                                                                <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }} onClick={this.handleCouponProUpgrade}>
                                                                    Select Plan
                                                                    <span></span>
                                                                </button>
                                                            }
                                                        </div> :
                                                        <div>
                                                            {
                                                                this.props.profile.membership == "Regular" &&
                                                                <div className="btn-box">
                                                                    {this.state.mopro == 169 ?
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }} onClick={this.handleProUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button> :
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }} onClick={this.handleCouponProUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button>
                                                                    }
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Regular") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }}>
                                                                        Premium Already
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }} onClick={this.stripeCustomerPortal}>
                                                                        Select Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px", backgroundColor: "#ff6b00" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                                {this.props.profile.membership == null &&
                                                    <p style={{ fontSize: "0.9rem", fontWeight: "500", color: "#000", paddingBottom: "0.6rem" }}>No Credit Card Needed</p>
                                                }
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For smaller teams looking to simplify and speed up the hiring process with the essential features.</p>
                                                <div className="pt-2 pb-2">
                                                    <p style={{ color: "#090d3a" }}>5 Active Job Postings</p>
                                                    <p style={{ color: "#090d3a" }}>Job Advertising</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                    <p style={{ color: "#090d3a" }}>Team Collaboration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single pricing table 4*/}
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                        <div style={{ backgroundColor: "#ffffff", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}>Most popular</p>
                                        </div>
                                        <div className="single-pricing-table h-100" style={linkStyle3} onMouseEnter={this.toggleHover3} onMouseLeave={this.toggleHover3}>
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#13c4a1", fontWeight: "700", fontSize: "2.5rem" }}>PREMIUM</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                <sup>$</sup><span style={{ textDecoration: "line-through", color: "#818181", marginRight: "0.3rem", fontSize: "1.8rem" }}>{this.state.mopre == 399 ? null : 399}</span><span>{this.state.mopre == 399 ? 399 : this.state.mopre}</span><sub style={{ color: "#090d3a" }}>/ mo</sub>
                                                <p style={{ fontSize: "13px", color: "#ffffff", fontWeight: "600" }}>0</p>
                                                <div style={{ marginTop: "-1rem", marginBottom: "1rem" }}>
                                                    {
                                                        this.props.profile.membership == null &&
                                                        <div className="btn-box">
                                                            <Link to="/employer_register">
                                                                <a id="id-employer-select2" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                    Start Free Trial
                                                                    <span></span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    }
                                                    {this.props.profile.is_freetrial ?
                                                        <div className="btn-box">
                                                            {this.state.mopre == 399 ?
                                                                <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handlePremiumUpgrade}>
                                                                    Select Plan
                                                                    <span></span>
                                                                </button> :
                                                                <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handleCouponPremiumUpgrade}>
                                                                    Select Plan
                                                                    <span></span>
                                                                </button>
                                                            }
                                                        </div> :
                                                        <div>
                                                            {
                                                                this.props.profile.membership == "Regular" &&
                                                                <div className="btn-box">
                                                                    {this.state.mopre == 399 ?
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handlePremiumUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button> :
                                                                        <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.handleCouponPremiumUpgrade}>
                                                                            Select Plan
                                                                            <span></span>
                                                                        </button>
                                                                    }
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Regular") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", backgroundColor: "#13c4a1", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", backgroundColor: "#13c4a1", paddingRight: "50px", paddingTop: "10px", paddingBottom: "10px" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn1" style={{ color: "white", paddingRight: "50px", backgroundColor: "#13c4a1", paddingTop: "10px", paddingBottom: "10px" }} onClick={this.stripeCustomerPortal}>
                                                                        Upgrade
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                                {this.props.profile.membership == null &&
                                                    <p style={{ fontSize: "0.9rem", fontWeight: "500", color: "#000", paddingBottom: "0.6rem" }}>No Credit Card Needed</p>
                                                }
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For organizations seeking hiring automation and team collaboration with an all-in-one talent acquisition suite.</p>
                                                <div className="pt-2 pb-2">
                                                    <p style={{ color: "#090d3a" }}>Unlimited Job Postings</p>
                                                    <p style={{ color: "#090d3a" }}>Job Advertising</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                    <p style={{ color: "#090d3a" }}>Team Collaboration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-5 d-flex justify-content-center">
                        <a target="_blank" rel="noreferrer" href="https://meetings.hubspot.com/hirebeat" className="default-btn1" style={{ paddingLeft: "25px", color: "#ffffff", textDecoration: "none", cursor: "pointer" }}>{"Talk to us >"}</a>
                    </div>

                    {/** All Features Table */}
                    <div className="text-center pt-5 pb-3">
                        <h1 style={{ fontSize: "2.4rem", fontWeight: "600", color: "#090D3A", marginBottom: "2rem" }}>
                            All Features Compared
                        </h1>
                        <MediaQuery minDeviceWidth={1224}>
                            <div className="allFeaturesIndicate" id="allFeaturesIndicate">
                                <div className="container">
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}></p>
                                        </div>
                                        <div className="col-3 pro">
                                            <p style={{ fontWeight: "700", fontSize: "1.2rem", color: "#006dff" }}>PAYG</p>
                                        </div>
                                        <div className="col-2 premium">
                                            <p style={{ fontWeight: "700", fontSize: "1.2rem", color: "#FF6B00" }}>PRO</p>
                                        </div>
                                        <div className="col-3 enterprise">
                                            <p style={{ fontWeight: "700", fontSize: "1.2rem", color: "#13C4A1" }}>PREMIUM</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={1223}>
                            <div className="container-fluid allFeaturesIndicate1" id="allFeaturesIndicate1">
                                <div className="row py-3">
                                    <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                        <p style={{ fontWeight: "500", fontSize: "0.9rem", color: "#090d3a" }}></p>
                                    </div>
                                    <div className="col-3">
                                        <p style={{ fontWeight: "700", fontSize: "0.9rem", color: "#006dff" }}>PAYG</p>
                                    </div>
                                    <div className="col-2">
                                        <p style={{ fontWeight: "700", fontSize: "0.9rem", color: "#FF6B00" }}>PRO</p>
                                    </div>
                                    <div className="col-3">
                                        <p style={{ fontWeight: "700", fontSize: "0.9rem", color: "#13C4A1" }}>PREM</p>
                                    </div>
                                </div>
                            </div>
                        </MediaQuery>

                        <div>
                            {/* TABLE 1*/}
                            {this.state.upAndDown1 ?
                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown1} onClick={this.setUpAndDown1}>Essentials<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown1} onClick={this.setUpAndDown1}>Essentials<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                            }
                            <Collapse in={this.state.upAndDown1}>
                                <div className="container-fluid">
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Active Job Postings</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Purchase Unlimited</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>5</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Candidates</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Applicants Tracking</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Built-in One-way Video Interview</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Team Collaborations</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>

                            {/* TABLE 2*/}
                            {this.state.upAndDown2 ?
                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown2} onClick={this.setUpAndDown2}>Candidate Sourcing & Job Posting<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown2} onClick={this.setUpAndDown2}>Candidate Sourcing & Job Posting<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                            }
                            <Collapse in={this.state.upAndDown2}>
                                <div className="container-fluid">
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Branded Career Website</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Job Position Advertising</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Social Recruiting</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Employee Referral</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>

                            {/* TABLE 3*/}
                            {this.state.upAndDown3 ?
                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown3} onClick={this.setUpAndDown3}>Applicant Tracking & Screening<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown3} onClick={this.setUpAndDown3}>Applicant Tracking & Screening<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                            }
                            <Collapse in={this.state.upAndDown3}>
                                <div className="container-fluid">
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Resume Parsing</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.9rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.9rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.9rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Resume Evaluation with AI Assistance</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Customizable Application Form</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Knockout Questions</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Email Candidates</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Interview Screening</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Customizable Video Questions</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>3</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>3</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>6</p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Interview Question Bank</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Library Storage</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Unlimited</p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Configurable Video Interview Response & Prep Times</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Configurable Video Interview Retakes</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Interview Assessments</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Interview Integration with 20+ ATS</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Built-in Live Interviews</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>

                            {/* TABLE 4*/}
                            {this.state.upAndDown4 ?
                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown4} onClick={this.setUpAndDown4}>Collaboration & Decision Making<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown4} onClick={this.setUpAndDown4}>Collaboration & Decision Making<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                            }
                            <Collapse in={this.state.upAndDown4}>
                                <div className="container-fluid">
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Candidate Rating & Feedback</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Candidate Shortlisting</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Real-Time Analytics</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>EEO Survey and Reporting</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Bulk Action Candidates</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Export Candidate to HRIS integrations</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "0.8rem", color: "#090d3a" }}>Coming Soon</p>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>

                            {/* TABLE 5*/}
                            {this.state.upAndDown5 ?
                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown5} onClick={this.setUpAndDown5}>Training & Support<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                                <div className="pricing-toggle-stripe" aria-expanded={this.state.upAndDown5} onClick={this.setUpAndDown5}>Training & Support<span style={{ float: "right", color: "#7C94B5" }}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                            }
                            <Collapse in={this.state.upAndDown5}>
                                <div className="container-fluid">
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Email & Web Support</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Video Tutorials</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Self-serve Onboarding</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#006dff" }}></i></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#ff6b00" }}></i></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Dedicated Onboarding Service</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                    <div className="row py-3">
                                        <div className="col-4 pl-4" style={{ textAlign: "left" }}>
                                            <p style={{ fontWeight: "500", fontSize: "1.1rem", color: "#090d3a" }}>Dedicated Success Manager</p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}></p>
                                        </div>
                                        <div className="col-2">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}></p>
                                        </div>
                                        <div className="col-3">
                                            <p style={{ fontWeight: "400", fontSize: "1rem", color: "#090d3a" }}><i class='bx-fw bx bx-check' style={{ color: "#13c4a1" }}></i></p>
                                        </div>
                                    </div>
                                </div>
                            </Collapse>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth_reducer.user,
    profile: state.auth_reducer.profile,
});

export default connect(mapStateToProps, { updateProfile, createMessage, updateUserEmail })(Employer_PricingStyleOne);