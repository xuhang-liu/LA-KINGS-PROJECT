import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile } from "../../redux/actions/auth_actions";
import { createMessage } from "../../redux/actions/message_actions";
import { loadStripe } from '@stripe/stripe-js';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const stripePromise = loadStripe('pk_live_51H4wpRKxU1MN2zWM7NHs8vqQsc7FQtnL2atz6OnBZKzBxJLvdHAivELe5MFetoqGOHw3SD5yrtanVVE0iOUQFSHj00NmcZWpPd');

class PricingStyleOne extends Component {

    handleUpgrade = () => {
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
          this.handleClickUpgrade();
        }
        /*if(this.handleClickUpgrade()){
          var profile = this.makeProfile();
          this.props.updateProfile(profile);
        }*/
    };

    handleClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1H8WhZKxU1MN2zWMo3Cu8kLn', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://hirebeat.co/payment',
          cancelUrl: 'https://hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: this.props.user.email,
        });
        error.message;
    };

    handleYearUpgrade = () => {
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
          this.handleYearClickUpgrade();
        }
        /*if(this.handleClickUpgrade()){
          var profile = this.makeProfile();
          this.props.updateProfile(profile);
        }*/
    };

    handleYearClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1HK8ZnKxU1MN2zWMDvkw1zJy', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://hirebeat.co/payment',
          cancelUrl: 'https://hirebeat.co/pricing',
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
            <section className="pricing-area pt-100 pb-70 bg-f4f5fe">
                <div className="container">
                    <div className="section-title">
                        <h2>Choose The Pricing Plan</h2>
                    </div>

                    <div className="tab pricing-list-tab">
                        {/* Pricing Tab List */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>
                                    <i className="bx bxs-calendar-check"></i> Monthly
                                </span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <span>
                                    <i className="bx bxs-calendar-check"></i> Yearly
                                </span>
                            </li>
                        </ul>

                        <div className="tab_content">
                            <div id="tab1" className="tabs_item">
                                <div className="row">
                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Free</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>0 <sub>/ monthly</sub>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited behavioral practice </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited technical practice
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    10+ different industry selections
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Share interview for feedback</li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    5 AI analysis
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    5 HR expert reviews
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    5 saved recorded interviews
                                                </li>
                                                <li style={{color:"#979797"}}>
                                                    <i className="bx bxs-x-circle"  style={{color:"#979797"}}></i> 
                                                    Full access to interview training program
                                                </li>
                                                <li  style={{color:"#979797"}}>
                                                    <i className="bx bxs-x-circle"  style={{color:"#979797"}}></i> Full access to AI & HR evaluation
                                                </li>
                                                <li  style={{color:"#979797"}}>
                                                    <i className="bx bxs-x-circle"  style={{color:"#979797"}}></i> 
                                                    Unlimited interview recording storage
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a className="default-btn" style={{color:"white"}}>
                                                    <i className="bx bxs-hot"></i> 
                                                    Try It Free Now
                                                    <span></span>
                                                </a>
                                                </Link>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Regular" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#080a3c"}}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Current Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Premium" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white"}}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Default Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-sm-6">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Premium</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>19.99 <sub>/ monthly</sub>
                                            </div>

                                            <ul className="pricing-features">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited behavioral practice </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited technical practice
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    10+ different industry selections
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Share interview for feedback</li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited AI analysis
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited HR expert reviews
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited saved recorded interviews
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Full access to interview training program
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> Full access to AI & HR evaluation
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited interview recording storage 
                                                </li>
                                            </ul>
                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a className="default-btn" style={{color:"white"}}>
                                                    <i className="bx bxs-hot"></i> 
                                                    Try It Free Now
                                                    <span></span>
                                                </a>
                                                </Link>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Regular" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white"}} onClick={this.handleUpgrade}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Upgrade Now
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Premium" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#080a3c"}}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Current Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Enterprise & University</h3>
                                            </div>

                                            <div className="price">
                                                <sub>- Advanced solutions with multiple users -</sub>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited job posting </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Integrated job board
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Passive Candidate Source
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Online application system </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Advanced ATS integration
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Pre-employment assessments
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited on demand video interview
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Share recorded interview internally
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Full access to recorded interviews
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited AI analysis access
                                                </li>
                                            </ul>

                                            <div className="btn-box">
                                                    <a href = "mailto: admin@hirebeat.co" className="default-btn" style={{color:"white"}}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Contact Us
                                                        <span></span>
                                                    </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div id="tab2" className="tabs_item">
                                <div className="row">
                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Free</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>0 <sub>/ yearly</sub>
                                            </div>

                                            <ul className="pricing-features">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited behavioral practice </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited technical practice
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    10+ different industry selections
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Share interview for feedback</li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    5 AI analysis
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    5 HR expert reviews
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    5 saved recorded interviews
                                                </li>
                                                <li  style={{color:"#979797"}}>
                                                    <i className="bx bxs-x-circle"  style={{color:"#979797"}}></i> 
                                                    Full access to interview training program
                                                </li>
                                                <li  style={{color:"#979797"}}>
                                                    <i className="bx bxs-x-circle"  style={{color:"#979797"}}></i> Full access to AI & HR evaluation
                                                </li>
                                                <li  style={{color:"#979797"}}>
                                                    <i className="bx bxs-x-circle"  style={{color:"#979797"}}></i> 
                                                    Unlimited interview recording storage 
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a className="default-btn" style={{color:"white"}}>
                                                    <i className="bx bxs-hot"></i> 
                                                    Try It Free Now
                                                    <span></span>
                                                </a>
                                                </Link>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Regular" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#080a3c"}}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Current Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Premium" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white"}}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Default Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Premium</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>99.99 <sub>/ yearly</sub>
                                            </div>

                                            <ul className="pricing-features">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited behavioral practice </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited technical practice
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    10+ different industry selections
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Share interview for feedback</li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited AI analysis
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited HR expert reviews
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited saved recorded interviews
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Full access to interview training program
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> Full access to AI & HR evaluation
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited interview recording storage 
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a className="default-btn" style={{color:"white"}}>
                                                    <i className="bx bxs-hot"></i> 
                                                    Try It Free Now
                                                    <span></span>
                                                </a>
                                                </Link>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Regular" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white"}} onClick={this.handleYearUpgrade}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Upgrade Now
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Premium" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#080a3c"}}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Current Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Enterprise & University</h3>
                                            </div>

                                            <div className="price">
                                                <sub>- Advanced solutions with multiple users -</sub>
                                            </div>

                                            <ul className="pricing-features">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited job posting </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Integrated job board
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Passive Candidate Source
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Online application system </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Advanced ATS integration
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Pre-employment assessments
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited on demand video interview
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Share recorded interview internally
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Full access to recorded interviews
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited AI analysis access
                                                </li>
                                            </ul>

                                            <div className="btn-box">
                                                    <a className="default-btn" style={{color:"white"}} href="mailto: admin@hirebeat.co">
                                                        <i className="bx bxs-hot"></i> 
                                                        Contact Us 
                                                        <span></span>
                                                    </a>
                                            </div>
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

export default connect(mapStateToProps, { updateProfile, createMessage }) (PricingStyleOne);