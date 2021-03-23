import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile, updateUserEmail } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";
import { loadStripe } from '@stripe/stripe-js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const stripePromise = loadStripe('pk_live_51H4wpRKxU1MN2zWM7NHs8vqQsc7FQtnL2atz6OnBZKzBxJLvdHAivELe5MFetoqGOHw3SD5yrtanVVE0iOUQFSHj00NmcZWpPd');

class Employer_PricingStyleOne extends Component {

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
            <section className="pricing-area pt-100 pb-70">
                <div className="container-fluid">
                    <div className="tab pricing-list-tab">
                        <div className="tab_content">
                        <div id="tab2" className="tabs_item">
                                <div className="row pb-5">
                                    {/* Single pricing table 1 */}
                                    <div className="col-lg-3 col-md-3 px-4">
                                        <div className="single-pricing-table left-align h-100" style={{backgroundColor:"#E8EDFC"}}>
                                            <div className="pricing-header">
                                                <h3 style={{fontWeight:"600"}}>Free</h3>
                                                <p style={{color:"#090d3a", fontSize:"12px"}}>Great if you are going to start a new business</p>
                                            </div>

                                            <div className="price" style={{borderTop:"none"}}>
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
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#080a3c", paddingLeft:"25px"}}>
                                                        Current Plan
                                                        <span></span>
                                                    </button>
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
                                                    <strong>1</strong> job position
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>25</strong> candidate invitaitons 
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>3</strong> Customize questions
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Shortlist candidate
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Candidate rating & comments
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    ATS intergration
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    Resume evaluation
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    Team collaboration
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table 2 */}
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align h-100" style={{backgroundColor:"#090D3A"}}>
                                            <div className="pricing-header">
                                                <h3 style={{color:"#ffffff", fontWeight:"600"}}>Pro</h3>
                                                <p style={{color:"#ffffff", fontSize:"12px"}}>Perfect for small & medium-sized organisations</p>
                                            </div>

                                            <div className="price" style={{borderTop:"none", color:"#ffffff"}}>
                                                <sup style={{color:"#ffffff"}}>$</sup>169<sub style={{color:"#ffffff"}}>/ month</sub>
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
                                                    <button id="id-tifn5" className="default-btn" style={{color:"white", backgroundColor:"#ff6b00", paddingLeft:"25px"}} onClick={this.handleProUpgrade}>
                                                        Select Plan
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
                                            <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    <strong>5</strong> job positions
                                                    </li>
                                                <li style={{color:"white", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    <strong>100</strong> candidate invitaitons for each job position
                                                </li>
                                                <li style={{color:"white", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    <strong>3</strong> Customize questions
                                                </li>
                                                <li style={{color:"white", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Shortlist candidates
                                                </li>
                                                <li style={{color:"white", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Resume evaluation & analytics
                                                </li>
                                                <li style={{color:"white", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Candidate rating & comments
                                                </li>
                                                <li style={{color:"white", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    ATS intergration
                                                </li>
                                                <li style={{textDecoration:"line-through", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bx-x" style={{color:"#ff0000"}}></i> 
                                                    Team collaboration
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table 3*/}
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align h-100" style={{backgroundColor:"#67A3F3"}}>
                                        <div className="pricing-header">
                                                <h3 style={{fontWeight:"600"}}>Premium</h3>
                                                <p style={{fontSize:"12px", color:"#090d3a"}}>Flexible team plan for growing organizations</p>
                                            </div>

                                            <div className="price" style={{borderTop:"none"}}>
                                                <sup>$</sup>599<sub style={{color:"#090d3a"}}>/ month</sub>
                                            <div style={{marginLeft:"-2rem", marginTop:"-1.5rem", marginBottom:"1rem"}}>
                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/employer_register">
                                                <a id="id-employer-select2" className="default-btn" style={{color:"#090d3a", backgroundColor:"#e8edfc", paddingLeft:"25px"}}>
                                                    Select Plan
                                                    <span></span>
                                                </a>
                                                </Link>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Regular" &&
                                                <div className="btn-box">
                                                    <button id="id-tifn5" className="default-btn" style={{color:"#090d3a", backgroundColor:"#e8edfc", paddingLeft:"25px"}} onClick={this.handlePremiumUpgrade}>
                                                        Select Plan
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
                                                    <button className="default-btn" style={{color:"#090d3a", backgroundColor:"#e8edfc", paddingLeft:"25px"}} onClick={this.handlePremiumUpgrade}>
                                                        Upgrade
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            </div>
                                            </div>

                                            <ul className="pricing-features pr-2">
                                            <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    <strong>Unlimited</strong> job positions
                                                    </li>
                                                <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    <strong>Unlimited</strong> invitaitons for each job position
                                                </li>
                                                <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    <strong>3</strong> team collaborators
                                                </li>
                                                <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Up to <strong>6</strong> customized questions</li>
                                                <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Candidate rating & comments
                                                </li>
                                                <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Shortlist candidates
                                                </li>
                                                <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Resume evaluation & analytics
                                                </li>
                                                <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    ATS intergration
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table 4*/}
                                    <div className="col-lg-3 col-md-3 px-4">
                                        <div className="single-pricing-table left-align h-100" style={{backgroundColor:"#E8EDFC"}}>
                                        <div className="pricing-header">
                                                <h3 style={{fontWeight:"600"}}>Enterprise</h3>
                                                <p style={{color:"#090d3a", fontSize:"12px"}}>Ideal chocie if you are large sized organizations</p>
                                            </div>

                                            <div className="price" style={{color:'#090d3a', borderTop:"none", fontSize:"2rem"}}>
                                                <sup style={{color:"#090d3a"}}>$</sup>Customized
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
                                                    Customized number of job positions
                                                    </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    Customized candidate invitaitons
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    Flexible team collaborators
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    Shortlist candidates
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    Candidate rating & comments
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    Resume evaluation & analytics
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    ATS intergration
                                                </li>
                                                <li style={{color:"#4a6f8a", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#4a6f8a"}}></i> 
                                                    Priority Support</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
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

export default connect(mapStateToProps, { updateProfile, createMessage, updateUserEmail }) (Employer_PricingStyleOne);