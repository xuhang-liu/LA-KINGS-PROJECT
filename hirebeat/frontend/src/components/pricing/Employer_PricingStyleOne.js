import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile, updateUserEmail } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";
import { loadStripe } from '@stripe/stripe-js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'boxicons';

const stripePromise = loadStripe('pk_live_51H4wpRKxU1MN2zWM7NHs8vqQsc7FQtnL2atz6OnBZKzBxJLvdHAivELe5MFetoqGOHw3SD5yrtanVVE0iOUQFSHj00NmcZWpPd');

class Employer_PricingStyleOne extends Component {
    state = {
        upAndDown1: false,
        upAndDown2: false,
        upAndDown3: false,
        upAndDown4: false,
        upAndDown5: false,
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

    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    handleCounponUpgrade = () => {
        if (this.state.coupon_match != 'PH2021PRO' && this.state.coupon_match != 'PH2021PREMIUM' && this.state.coupon_match != 'BL2021PRO' && this.state.coupon_match != 'BL2021PREMIUM') {
            confirmAlert({
                title: 'Please Enter A Valid Code',
                message: '',
                buttons: [
                    {
                        label: 'Ok'
                    }
                ]
            });
        } else {
            if (this.state.coupon_match == 'PH2021PRO' || this.state.coupon_match == 'BL2021PRO') {
                this.handleCouponProClickUpgrade();
            } else if (this.state.coupon_match == 'PH2021PREMIUM' || this.state.coupon_match == 'BL2021PREMIUM') {
                this.handleCouponPremiumClickUpgrade();
            }
        }
    };

    handleCouponProClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1IYahXKxU1MN2zWMFL1rjh6G', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'subscription',
            successUrl: 'https://hirebeat.co/payment',
            cancelUrl: 'https://hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
        });
        error.message;
    };

    handleCouponPremiumClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1IYaihKxU1MN2zWMaSeWfXrU', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'subscription',
            successUrl: 'https://hirebeat.co/payment',
            cancelUrl: 'https://hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
        });
        error.message;
    };

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
            successUrl: 'https://hirebeat.co/payment',
            cancelUrl: 'https://hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
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
            successUrl: 'https://hirebeat.co/payment',
            cancelUrl: 'https://hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
        });
        error.message;
    };

    handlePremiumUpgrade = () => {
        if (this.props.profile.membership == 'Premium' && (!this.props.profile.is_freetrial)) {
            this.handlePremiumClickUpgrade2();
        } else {
            this.handlePremiumClickUpgrade();
        }
    };
    handlePremiumClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1IXyNWKxU1MN2zWMYYlG6Rmp', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'subscription',
            successUrl: 'https://hirebeat.co/payment',
            cancelUrl: 'https://hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
        });
        error.message;
    };

    handlePremiumClickUpgrade2 = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1IXz0yKxU1MN2zWMEco7GNHO', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'subscription',
            successUrl: 'https://hirebeat.co/payment',
            cancelUrl: 'https://hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
        });
        error.message;
    };

    handleYearPremiumUpgrade = () => {
        if (this.props.profile.membership == 'Premium' && (!this.props.profile.is_freetrial)) {
            this.handleYearPremiumClickUpgrade2();
        } else {
            this.handleYearPremiumClickUpgrade();
        }
    };
    handleYearPremiumClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1JAcMmKxU1MN2zWMzUmtM0Iv', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'subscription',
            successUrl: 'https://hirebeat.co/payment',
            cancelUrl: 'https://hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
        });
        error.message;
    };

    handleYearPremiumClickUpgrade2 = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            lineItems: [{
                price: 'price_1JAcdAKxU1MN2zWMWGA4eG9r', // Replace with the ID of your price
                quantity: 1,
            }],
            mode: 'subscription',
            successUrl: 'https://hirebeat.co/payment',
            cancelUrl: 'https://hirebeat.co/employer-pricing',
            billingAddressCollection: 'auto',
            customerEmail: this.props.user.email,
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

    render() {
        return (
            <section className="pricing-area pt-100" id="go-to-pricing">
                <div className="container-xl">
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
                                    {/* Single pricing table 1 */}
                                    {/*<div className="col-lg-3 col-md-3 px-4">
                                        <div className="single-pricing-table left-align h-100" style={{backgroundColor:"#F0F6FE", border:"2px solid #67A3F3"}}>
                                            <div className="pricing-header">
                                                <h3 style={{fontWeight:"600",  marginBottom:"0.6rem"}}>Free</h3>
                                                <p style={{color:"#090d3a", fontSize:"12px"}}>Try the essentials to get started</p>
                                            </div>

                                            <div className="price" style={{borderTop:"none", borderBottom:"2px dashed #67A3F3"}}>
                                                <sup>$</sup>0 <sub style={{color:"#090d3a"}}>/ mo</sub>
                                                <p style={{fontSize:"13px", color:"#F0F6FE", fontWeight:"600"}}>Billed at $0</p>
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
                                        <div className="single-pricing-table h-100">
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#67a3f3", fontWeight: "700", fontSize: "2.5rem" }}>PRO</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                <sup style={{ color: "#090d3a" }}>$</sup>126<sub style={{ color: "#090d3a" }}>/ mo</sub>
                                                <p style={{ fontSize: "13px", color: "#818181", fontWeight: "600" }}>Billed at <span style={{ textDecoration: "line-through" }}>$2,028</span> <span style={{ fontWeight: "700", color: "#090d3a" }}>$1,512 /yr</span></p>
                                                <div style={{ marginTop: "-1.5rem", marginBottom: "1rem" }}>
                                                    {
                                                        this.props.profile.membership == null &&
                                                        <div className="btn-box">
                                                            <Link to="/employer_register">
                                                                <a id="id-employer-select2" className="default-btn" style={{ color: "white", paddingRight: "50px" }}>
                                                                    Start Free Trial
                                                                    <span></span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    }
                                                    {this.props.profile.is_freetrial ?
                                                        <div className="btn-box">
                                                            <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px" }} onClick={this.handleYearProUpgrade}>
                                                                Select Plan
                                                                <span></span>
                                                            </button>
                                                        </div> :
                                                        <div>
                                                            {
                                                                this.props.profile.membership == "Regular" &&
                                                                <div className="btn-box">
                                                                    <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px" }} onClick={this.handleYearProUpgrade}>
                                                                        Select Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Regular") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px" }}>
                                                                        Premium Already
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px" }}>
                                                                        Premium Already
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For smaller teams looking to simplify and speed up the hiring process with the essential features.</p>
                                                <div className="pt-2 pb-2">
                                                    <p style={{ color: "#090d3a" }}>5 Active Job Postings</p>
                                                    <p style={{ color: "#090d3a" }}>Standard Job Advertising</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single pricing table 3*/}
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                        <div style={{ backgroundColor: "#ff6b00", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}><box-icon type='solid' name='medal' color="#ffffff" size="1rem" ></box-icon> Most popular</p>
                                        </div>
                                        <div className="single-pricing-table h-100">
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#ff6b00", fontWeight: "700", fontSize: "2.5rem" }}>PREMIUM</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                <sup>$</sup>457<sub style={{ color: "#090d3a" }}>/ mo</sub>
                                                <p style={{ fontSize: "13px", color: "#818181", fontWeight: "600" }}>Billed at <span style={{ textDecoration: "line-through" }}>$7,188</span> <span style={{ fontWeight: "700", color: "#090d3a" }}>$5,391 /yr</span></p>
                                                <div style={{ marginTop: "-1.5rem", marginBottom: "1rem" }}>
                                                    {
                                                        this.props.profile.membership == null &&
                                                        <div className="btn-box">
                                                            <Link to="/employer_register">
                                                                <a id="id-employer-select2" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#ff6b00" }}>
                                                                    Start Free Trial
                                                                    <span></span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    }
                                                    {this.props.profile.is_freetrial ?
                                                        <div className="btn-box">
                                                            <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#ff6b00" }} onClick={this.handleYearPremiumUpgrade}>
                                                                Select Plan
                                                                <span></span>
                                                            </button>
                                                        </div> :
                                                        <div>
                                                            {
                                                                this.props.profile.membership == "Regular" &&
                                                                <div className="btn-box">
                                                                    <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#ff6b00" }} onClick={this.handleYearPremiumUpgrade}>
                                                                        Select Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Regular") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", backgroundColor: "#ff6b00", paddingRight: "50px" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", backgroundColor: "#ff6b00", paddingRight: "50px" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn1" style={{ color: "white", paddingRight: "50px", backgroundColor: "#ff6b00" }} onClick={this.handleYearPremiumUpgrade}>
                                                                        Upgrade
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For organizations seeking hiring automation and team collaboration with an all-in-one talent acquisition suite.</p>
                                                <div className="pt-2 pb-2">
                                                    <p style={{ color: "#090d3a" }}>Unlimited Job Postings</p>
                                                    <p style={{ color: "#090d3a" }}>Premium Job Advertising</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                    <p style={{ color: "#090d3a" }}>Integration with Major HRIS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single pricing table 4*/}
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                        <div style={{ backgroundColor: "#ffffff", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}>Most popular</p>
                                        </div>
                                        <div className="single-pricing-table h-100">
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#13c4a1", fontWeight: "700", fontSize: "2.5rem" }}>ENTERPRISE</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)", fontSize: "2rem" }}>
                                                Custom
                                                <p style={{ fontSize: "13px", color: "#ffffff", fontWeight: "600" }}>Billed at $0</p>
                                                <div style={{ marginBottom: "1.3rem", marginTop: "-0.8rem" }}>
                                                    {
                                                        <div className="btn-box">
                                                            <a href="/employer_contact" id="id-employer-select3" className="default-btn" style={{ color: "white", paddingRight: "50px", textDecoration: "none", backgroundColor: "#13c4a1" }}>
                                                                Contact Us
                                                                <span></span>
                                                            </a>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For smaller teams looking to simplify and speed up the hiring process with the essential features.</p>
                                                <div className="pt-2 pb-2">
                                                    <p style={{ color: "#090d3a" }}>Unlimited Job Postings</p>
                                                    <p style={{ color: "#090d3a" }}>Premium Job Advertising</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                    <p style={{ color: "#090d3a" }}>Integration with Major HRIS</p>
                                                    <p style={{ color: "#090d3a" }}>Employee Referral</p>
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
                                        <div className="single-pricing-table left-align h-100" style={{backgroundColor:"#F0F6FE", border:"2px solid #67A3F3"}}>
                                            <div className="pricing-header">
                                                <h3 style={{fontWeight:"600",  marginBottom:"0.6rem"}}>Free</h3>
                                                <p style={{color:"#090d3a", fontSize:"12px"}}>Try the essentials to get started</p>
                                            </div>

                                            <div className="price" style={{borderTop:"none", borderBottom:"2px dashed #67A3F3"}}>
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
                                        <div className="single-pricing-table h-100">
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#67a3f3", fontWeight: "700", fontSize: "2.5rem" }}>PRO</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                <sup style={{ color: "#090d3a" }}>$</sup>169<sub style={{ color: "#090d3a" }}>/ mo</sub>
                                                <p style={{ fontSize: "13px", color: "#ffffff", fontWeight: "600" }}>0</p>
                                                <div style={{ marginTop: "-1.5rem", marginBottom: "1rem" }}>
                                                    {
                                                        this.props.profile.membership == null &&
                                                        <div className="btn-box">
                                                            <Link to="/employer_register">
                                                                <a id="id-employer-select2" className="default-btn" style={{ color: "white", paddingRight: "50px" }}>
                                                                    Start Free Trial
                                                                    <span></span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    }
                                                    {this.props.profile.is_freetrial ?
                                                        <div className="btn-box">
                                                            <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px" }} onClick={this.handleProUpgrade}>
                                                                Select Plan
                                                                <span></span>
                                                            </button>
                                                        </div> :
                                                        <div>
                                                            {
                                                                this.props.profile.membership == "Regular" &&
                                                                <div className="btn-box">
                                                                    <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px" }} onClick={this.handleProUpgrade}>
                                                                        Select Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Regular") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px" }}>
                                                                        Premium Already
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px" }}>
                                                                        Premium Already
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", paddingRight: "50px" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For smaller teams looking to simplify and speed up the hiring process with the essential features.</p>
                                                <div className="pt-2 pb-2">
                                                    <p style={{ color: "#090d3a" }}>5 Active Job Postings</p>
                                                    <p style={{ color: "#090d3a" }}>Standard Job Advertising</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single pricing table 3*/}
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                        <div style={{ backgroundColor: "#ff6b00", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}><box-icon type='solid' name='medal' color="#ffffff" size="1rem" ></box-icon> Most popular</p>
                                        </div>
                                        <div className="single-pricing-table h-100">
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#ff6b00", fontWeight: "700", fontSize: "2.5rem" }}>PREMIUM</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)" }}>
                                                <sup>$</sup>599<sub style={{ color: "#090d3a" }}>/ mo</sub>
                                                <p style={{ fontSize: "13px", color: "#ffffff", fontWeight: "600" }}>0</p>
                                                <div style={{ marginTop: "-1.5rem", marginBottom: "1rem" }}>
                                                    {
                                                        this.props.profile.membership == null &&
                                                        <div className="btn-box">
                                                            <Link to="/employer_register">
                                                                <a id="id-employer-select2" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#ff6b00" }}>
                                                                    Start Free Trial
                                                                    <span></span>
                                                                </a>
                                                            </Link>
                                                        </div>
                                                    }
                                                    {this.props.profile.is_freetrial ?
                                                        <div className="btn-box">
                                                            <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#ff6b00" }} onClick={this.handlePremiumUpgrade}>
                                                                Select Plan
                                                                <span></span>
                                                            </button>
                                                        </div> :
                                                        <div>
                                                            {
                                                                this.props.profile.membership == "Regular" &&
                                                                <div className="btn-box">
                                                                    <button id="id-tifn5" className="default-btn" style={{ color: "white", paddingRight: "50px", backgroundColor: "#ff6b00" }} onClick={this.handlePremiumUpgrade}>
                                                                        Select Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Regular") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", backgroundColor: "#ff6b00", paddingRight: "50px" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn" style={{ color: "white", backgroundColor: "#ff6b00", paddingRight: "50px" }}>
                                                                        Current Plan
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                            {
                                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") &&
                                                                <div className="btn-box">
                                                                    <button className="default-btn1" style={{ color: "white", paddingRight: "50px", backgroundColor: "#ff6b00" }} onClick={this.handlePremiumUpgrade}>
                                                                        Upgrade
                                                                        <span></span>
                                                                    </button>
                                                                </div>
                                                            }
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For organizations seeking hiring automation and team collaboration with an all-in-one talent acquisition suite.</p>
                                                <div className="pt-2 pb-2">
                                                    <p style={{ color: "#090d3a" }}>Unlimited Job Postings</p>
                                                    <p style={{ color: "#090d3a" }}>Premium Job Advertising</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                    <p style={{ color: "#090d3a" }}>Integration with Major HRIS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Single pricing table 4*/}
                                    <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12 min-width-350 py-4">
                                        <div style={{ backgroundColor: "#ffffff", borderRadius: "7px 7px 0px 0px", height: "2.5rem", textAlign: "center" }}>
                                            <p style={{ color: "#ffffff", fontWeight: "600", fontSize: "1rem", paddingTop: "5px", paddingBottom: "5px" }}>Most popular</p>
                                        </div>
                                        <div className="single-pricing-table h-100">
                                            <div className="pricing-header">
                                                <h3 style={{ color: "#13c4a1", fontWeight: "700", fontSize: "2.5rem" }}>ENTERPRISE</h3>
                                            </div>

                                            <div className="price" style={{ borderTop: "none", color: "#090d3a", borderBottom: "1px dashed rgba(103, 163, 243, 0.3)", fontSize: "2rem" }}>
                                                Custom
                                                <p style={{ fontSize: "13px", color: "#ffffff", fontWeight: "600" }}>0</p>
                                                <div style={{ marginBottom: "1.3rem", marginTop: "-0.8rem" }}>
                                                    {
                                                        <div className="btn-box">
                                                            <a href="/employer_contact" id="id-employer-select3" className="default-btn" style={{ color: "white", paddingRight: "50px", textDecoration: "none", backgroundColor: "#13c4a1" }}>
                                                                Contact Us
                                                                <span></span>
                                                            </a>
                                                        </div>
                                                    }
                                                </div>
                                            </div>
                                            <div className="px-5 py-4">
                                                <p>For smaller teams looking to simplify and speed up the hiring process with the essential features.</p>
                                                <div className="pt-2 pb-2">
                                                    <p style={{ color: "#090d3a" }}>Unlimited Job Postings</p>
                                                    <p style={{ color: "#090d3a" }}>Premium Job Advertising</p>
                                                    <p style={{ color: "#090d3a" }}>Applicants Tracking</p>
                                                    <p style={{ color: "#090d3a" }}>One-way Video Interview</p>
                                                    <p style={{ color: "#090d3a" }}>Integration with Major HRIS</p>
                                                    <p style={{ color: "#090d3a" }}>Employee Referral</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.props.profile.membership == "Regular" &&
                        <div className="mt-3 pb-5 pt-5" style={{ textAlign: "center", backgroundColor: "#e8edfc" }}>
                            <h2 style={{ width: "80%", fontWeight: "600", color: "#090d3a", marginBottom: "1rem" }}><i className="bx bxs-coupon bx-sm"></i> Enter Coupon Code</h2>
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
                            <button
                                onClick={this.handleCounponUpgrade}
                                type="button"
                                className="default-btn" style={{ color: "white", display: "inline-block", marginLeft: "1rem", backgroundColor: "#ff6b00" }}
                            >
                                <i className="bx bxs-hot"></i>
                                Apply
                                <span></span>
                            </button>
                        </div>}
                    <div className="mb-5">
                        <a target="_blank" rel="noreferrer" href="https://meetings.hubspot.com/hirebeat" className="default-btn1" style={{ paddingLeft: "25px", position: "absolute", color: "#ffffff", textDecoration: "none", left: "46%", cursor: "pointer" }}>Talk to us ></a>
                    </div>
                    <div className="text-center py-5">
                        <h1 style={{ fontSize: "2.4rem", fontWeight: "600", color: "#090D3A", marginBottom: "2rem" }}>
                            All Features Compared
                        </h1>
                        {this.state.upAndDown1 ?
                            <div className="pricing-toggle-stripe" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="true" aria-controls="multiCollapseExample1">Essentials<span style={{ float: "right", color: "#7C94B5" }} onClick={this.setUpAndDown1}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                            <div className="pricing-toggle-stripe" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="true" aria-controls="multiCollapseExample1">Essentials<span style={{ float: "right", color: "#7C94B5" }} onClick={this.setUpAndDown1}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                        }
                        <div class="collapse multi-collapse show" id="multiCollapseExample1">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                        {!this.state.upAndDown2 ?
                            <div className="pricing-toggle-stripe" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="true" aria-controls="multiCollapseExample2">Candidate Sourcing & Job Posting<span style={{ float: "right", color: "#7C94B5" }} onClick={this.setUpAndDown2}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                            <div className="pricing-toggle-stripe" data-toggle="collapse" href="#multiCollapseExample2" role="button" aria-expanded="true" aria-controls="multiCollapseExample2">Candidate Sourcing & Job Posting<span style={{ float: "right", color: "#7C94B5" }} onClick={this.setUpAndDown2}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                        }
                        <div class="collapse multi-collapse" id="multiCollapseExample2">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                        {!this.state.upAndDown3 ?
                            <div className="pricing-toggle-stripe" data-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="true" aria-controls="multiCollapseExample3">Applicant Tracking & Screening<span style={{ float: "right", color: "#7C94B5" }} onClick={this.setUpAndDown3}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                            <div className="pricing-toggle-stripe" data-toggle="collapse" href="#multiCollapseExample3" role="button" aria-expanded="true" aria-controls="multiCollapseExample3">Applicant Tracking & Screening<span style={{ float: "right", color: "#7C94B5" }} onClick={this.setUpAndDown3}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                        }
                        <div class="collapse multi-collapse" id="multiCollapseExample3">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                        {!this.state.upAndDown4 ?
                            <div className="pricing-toggle-stripe" data-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="true" aria-controls="multiCollapseExample4">Collaboration and decision making<span style={{ float: "right", color: "#7C94B5" }} onClick={this.setUpAndDown4}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                            <div className="pricing-toggle-stripe" data-toggle="collapse" href="#multiCollapseExample4" role="button" aria-expanded="true" aria-controls="multiCollapseExample4">Collaboration and decision making<span style={{ float: "right", color: "#7C94B5" }} onClick={this.setUpAndDown4}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                        }
                        <div class="collapse multi-collapse" id="multiCollapseExample4">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </div>
                        {!this.state.upAndDown5 ?
                            <div className="pricing-toggle-stripe" data-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="true" aria-controls="multiCollapseExample5">Training and Support<span style={{ float: "right", color: "#7C94B5" }} onClick={this.setUpAndDown5}><i class='bx-fw bx bx-chevron-down'></i></span></div> :
                            <div className="pricing-toggle-stripe" data-toggle="collapse" href="#multiCollapseExample5" role="button" aria-expanded="true" aria-controls="multiCollapseExample5">Training and Support<span style={{ float: "right", color: "#7C94B5" }} onClick={this.setUpAndDown5}><i class='bx-fw bx bx-chevron-up'></i></span></div>
                        }
                        <div class="collapse multi-collapse" id="multiCollapseExample5">
                            <div class="card card-body">
                                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
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