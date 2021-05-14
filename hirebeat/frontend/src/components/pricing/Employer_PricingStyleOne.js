import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile, updateUserEmail } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";
import { loadStripe } from '@stripe/stripe-js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import 'boxicons';

const stripePromise = loadStripe('pk_live_51H4wpRKxU1MN2zWM7NHs8vqQsc7FQtnL2atz6OnBZKzBxJLvdHAivELe5MFetoqGOHw3SD5yrtanVVE0iOUQFSHj00NmcZWpPd');

class Employer_PricingStyleOne extends Component {
    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
    };

    handleCounponUpgrade = () => {
        if(this.state.coupon_match != 'PH2021PRO' && this.state.coupon_match != 'PH2021PREMIUM' && this.state.coupon_match != 'BL2021PRO' && this.state.coupon_match != 'BL2021PREMIUM'){
          confirmAlert({
            title: 'Please Enter A Valid Code',
            message: '',
            buttons: [
              {
                label: 'Ok'
              }
            ]
            });
        }else{
            if(this.state.coupon_match == 'PH2021PRO' || this.state.coupon_match == 'BL2021PRO'){
                this.handleCouponProClickUpgrade();
            }else if(this.state.coupon_match == 'PH2021PREMIUM' || this.state.coupon_match == 'BL2021PREMIUM'){
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
        if(this.props.profile.membership == 'Premium'){
          confirmAlert({
            title: 'Premium Member Already',
            message: '',
            buttons: [
              {
                label: 'Sure'
              }
            ]
            });
        }else{
          this.handleProClickUpgrade();
        }
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

    handlePremiumUpgrade = () => {
        if(this.props.profile.membership == 'Premium'){
            this.handlePremiumClickUpgrade2();
        }else{
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

    render() {
        return (
            <section className="pricing-area pt-100" id="go-to-pricing">
                <div className="container-fluid">
                    <div className="tab pricing-list-tab">
                        <div className="tab_content">
                        <div id="tab2" className="tabs_item">
                                <div className="row pb-5 pt-3">
                                    {/* Single pricing table 1 */}
                                    <div className="col-lg-3 col-md-3 px-4">
                                        <div className="single-pricing-table left-align h-100" style={{backgroundColor:"#F0F6FE", border:"2px solid #67A3F3"}}>
                                            <div className="pricing-header">
                                                <h3 style={{fontWeight:"600",  marginBottom:"0.6rem"}}>Free</h3>
                                                <p style={{color:"#090d3a", fontSize:"12px"}}>Try the essentials to get started</p>
                                            </div>

                                            <div className="price" style={{borderTop:"none", borderBottom:"2px dashed #67A3F3"}}>
                                                <sup>$</sup>0 <sub style={{color:"#090d3a"}}>/ month</sub>
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
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
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
                                                    Team Collaboration
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    API Integrations
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    Custom Branding
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table 2 */}
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align h-100" style={{backgroundColor:"#FFF0E6", border:"2px solid #ff6b00"}}>
                                            <div className="pricing-header">
                                                <h3 style={{color:"#ff6b00", fontWeight:"600", marginBottom:"0.6rem"}}>Pro <span style={{color:"#ffffff", fontWeight:"600", marginLeft:"1rem", fontSize:"0.8rem", backgroundColor:"#ff6b00", paddingTop:"5px", paddingBottom:"5px", paddingLeft:"5px", paddingRight:"5px", borderRadius:"7px"}}><box-icon type='solid' name='medal' color="#ffffff" size="xs"></box-icon>Most popular</span></h3>
                                                <p style={{color:"#090d3a", fontSize:"12px"}}>Best Value for SME companies</p>
                                            </div>

                                            <div className="price" style={{borderTop:"none", color:"#090d3a", borderBottom:"2px dashed #ff6b00"}}>
                                                <sup style={{color:"#090d3a"}}>$</sup>169<sub style={{color:"#090d3a"}}>/ month</sub>
                                            <div style={{marginLeft:"-2rem", marginTop:"-1.5rem", marginBottom:"1rem"}}>
                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/employer_register">
                                                <a id="id-employer-select2" className="default-btn" style={{color:"white", backgroundColor:"#ff6b00", paddingLeft:"25px"}}>
                                                    Select Plan
                                                    <span></span>
                                                </a>
                                                </Link>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Regular" &&
                                                <div className="btn-box">
                                                    <button id="id-tifn5" className="default-btn" style={{color:"white", paddingLeft:"25px"}} onClick={this.handleProUpgrade}>
                                                        Select Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Regular") &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#ff6b00", paddingLeft:"25px"}}>
                                                        Premium Already
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium") &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#ff6b00", paddingLeft:"25px"}}>
                                                        Premium Already
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#ff6b00", paddingLeft:"25px"}}>
                                                        Pro Already
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            </div>
                                            </div>

                                            <ul className="pricing-features pr-2">
                                            <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>5</strong> Job Positions
                                                    </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>100</strong> Video Screening per job 
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
                                                    Built-in ATS
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    AI-powered Resume Evaluation
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    AI-Powered Analytics
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    Team collaboration
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    API Integrations
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    Custom Branding
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table 3*/}
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align h-100" style={{backgroundColor:"#E7F9F6", border:"2px solid #13c4a1"}}>
                                        <div className="pricing-header">
                                                <h3 style={{fontWeight:"600",  marginBottom:"0.6rem", color:"#13c4a1"}}>Premium</h3>
                                                <p style={{fontSize:"12px", color:"#090d3a"}}>Great for growing organizations</p>
                                            </div>

                                            <div className="price" style={{borderTop:"none", borderBottom:"2px dashed #13c4a1"}}>
                                                <sup>$</sup>599<sub style={{color:"#090d3a"}}>/ month</sub>
                                            <div style={{marginLeft:"-2rem", marginTop:"-1.5rem", marginBottom:"1rem"}}>
                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/employer_register">
                                                <a id="id-employer-select2" className="default-btn" style={{color:"white", paddingLeft:"25px"}}>
                                                    Select Plan
                                                    <span></span>
                                                </a>
                                                </Link>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Regular" &&
                                                <div className="btn-box">
                                                    <button id="id-tifn5" className="default-btn" style={{color:"white", paddingLeft:"25px"}} onClick={this.handlePremiumUpgrade}>
                                                        Select Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Regular") &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#ff6b00", paddingLeft:"25px"}}>
                                                        Premium Already
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Premium") &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#ff6b00", paddingLeft:"25px"}}>
                                                        Premium Already
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                (this.props.profile.membership == "Premium" && this.props.profile.plan_interval == "Pro") &&
                                                <div className="btn-box">
                                                    <button className="default-btn1" style={{color:"white", paddingLeft:"25px"}} onClick={this.handlePremiumUpgrade}>
                                                        Upgrade
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            </div>
                                            </div>

                                            <ul className="pricing-features pr-2">
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> Job Positions
                                                    </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> Video Screening 
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>6</strong> Customizable Video Questions
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Candidate Shortlisting</li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Candidate Rating & Feedback
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Built-in ATS
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    AI-powered Resume Evaluation
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    AI-Powered Analytics
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>3</strong> Team Collaborators
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    API Integrations
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Custom Branding
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table 4*/}
                                    <div className="col-lg-3 col-md-3 px-4">
                                        <div className="single-pricing-table left-align h-100" style={{backgroundColor:"#E7EAFD", border:"2px solid #5269F3"}}>
                                        <div className="pricing-header">
                                                <h3 style={{fontWeight:"600",  marginBottom:"0.6rem", color:"#5269f3"}}>Enterprise</h3>
                                                <p style={{color:"#090d3a", fontSize:"12px"}}>Perfect for large enterprise</p>
                                            </div>

                                            <div className="price" style={{color:'#090d3a', borderTop:"none", fontSize:"2rem", borderBottom:"2px dashed #5269f3"}}>
                                                Custom
                                            <div style={{marginLeft:"-2rem", marginBottom:"0.3rem"}}>
                                            {
                                                <div className="btn-box">
                                                <a href="/employer_contact" id="id-employer-select3" className="default-btn" style={{color:"white", paddingLeft:"25px", textDecoration:"none"}}>
                                                    Contact Us
                                                    <span></span>
                                                </a>
                                                </div>
                                            }
                                            </div>
                                            </div>

                                            <ul className="pricing-features pr-2">
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    <strong>Unlimited</strong> Job Positions
                                                    </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    <strong>Unlimited</strong> Video Screening 
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    <strong>Unlimited</strong> Video Questions
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    Candidate Shortlisting
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    Candidate Rating & Feedback
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    Built-in ATS
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    AI-powered Resume Evaluation
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    AI-Powered Analytics</li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    <strong>Unlimited</strong> Team Collaborators
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    API Integrations
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    Custom Branding
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.props.profile.membership == "Regular" &&
                    <div className="mt-3 pb-5 pt-5" style={{textAlign:"center", backgroundColor:"#e8edfc"}}>
                    <h2 style={{width:"80%", fontWeight:"600", color:"#090d3a", marginBottom:"1rem"}}><i className="bx bxs-coupon bx-sm"></i> Enter Coupon Code</h2>
                    <input
                    className="form-control"
                    type="text"
                    name={"coupon_match"}
                    placeholder={"Enter coupon code"}
                    onChange={this.handleInputChange}
                    style={{  
                      backgroundColor:"#FFFFFF",
                      fontSize: "16px",
                      borderRadius: "5px",
                      height: "3rem",
                      color:"grey",
                      width:"30%",
                      display:"inline-block",
                      paddingLeft: "0.5rem"
                    }}
                    />
                    <button
                    onClick={this.handleCounponUpgrade}
                    type="button"
                    className="default-btn" style={{color:"white", display:"inline-block", marginLeft:"1rem", backgroundColor:"#ff6b00"}} 
                    >
                      <i className="bx bxs-hot"></i>
                        Apply
                        <span></span>
                    </button>
                    </div>}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth_reducer.user,
    profile: state.auth_reducer.profile,
});

export default connect(mapStateToProps, { updateProfile, createMessage, updateUserEmail }) (Employer_PricingStyleOne);