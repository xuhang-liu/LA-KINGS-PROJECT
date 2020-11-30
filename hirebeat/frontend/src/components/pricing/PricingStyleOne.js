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

    state = {
        coupon_match: "",
    }

    handleInputChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };

      handleCounponUpgrade = () => {
        if(this.state.coupon_match != 'PRODUCTHUNT2020' && this.state.coupon_match != 'DBCVIP'){
          confirmAlert({
            title: 'Enter A Valid Code',
            message: '',
            buttons: [
              {
                label: 'Ok'
              }
            ]
            });
        }else{
          this.handleClickCouponUpgrade();
        }
        /*if(this.handleClickUpgrade()){
          var profile = this.makeProfile();
          this.props.updateProfile(profile);
        }*/
    };

      handleClickCouponUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1HRUQJKxU1MN2zWMo9p8tKjJ', // Replace with the ID of your price
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
            price: 'price_1HmmhzKxU1MN2zWMlxYp4I0z', // Replace with the ID of your price
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
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>
                                    <i className="bx bxs-calendar-check"></i> 1-Month
                                </span>
                            </li>

                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <span>
                                    <i className="bx bxs-calendar-check"></i> 3-Month
                                </span>
                            </li>
                        </ul>

                        <div className="tab_content">
                        <div id="tab2" className="tabs_item">
                                <div className="row">
                                    {/* Single pricing table */}
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Free</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>0 <sub>/ month</sub>
                                                <div style={{marginTop:'-1rem'}}><sub></sub></div>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited Interview simulations & practices
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    3 AI or expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    2 resume-to-job evaluation reports
                                                </li>
                                                <li style={{color:"#ffffff"}}>empty
                                                </li>
                                                <li style={{color:"#ffffff"}}>empty
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
                                    <div className="col-lg-6 col-md-6">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>3 Months Bundle</h3>
                                            </div>

                                            <div className="price" style={{color:'#ff6b00'}}>
                                                <sup>$</sup>9.99 <sub style={{color:'#ff6b00'}}>/ month</sub>
                                                <div style={{marginTop:'-1rem'}}><sub>$29.97 in total - </sub><sub style={{color:'#ff6b00'}}><b>Save 50%</b></sub></div>
                                            </div>

                                            <ul className="pricing-features">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited interview simulations & practices
                                                    </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <b>Unlimited</b> AI and expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <b>Unlimited</b> resume-to-job evaluation reports
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Priority 24/7 customer support</li>
                                                
                                                <li style={{color:"#ffffff"}}>empty
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
                                                        Premium Already
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab1" className="tabs_item">
                                <div className="row">
                                    {/* Single pricing table */}
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Free</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>0 <sub>/ month</sub>
                                            </div>

                                            <ul className="pricing-features">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited Interview simulations & practices
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    3 AI or expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    2 resume-to-job evaluation reports
                                                </li>
                                                <li style={{color:"#ffffff"}}>empty
                                                </li>
                                                <li style={{color:"#ffffff"}}>empty
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
                                    <div className="col-lg-6 col-sm-6">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Monthly</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>19.99<sub>/ month</sub>
                                            </div>

                                            <ul className="pricing-features">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Unlimited interview simulations & practices
                                                    </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <b>Unlimited</b> AI and expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <b>Unlimited</b> resume-to-job evaluation reports
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Priority 24/7 customer support</li>
                                                
                                                <li style={{color:"#ffffff"}}>empty
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
                                                        Premium Already
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {
                    this.props.profile.membership == "Regular" &&
                    <div style={{textAlign:"center"}}>
                    <h2 style={{display:"inline-block", marginRight:'0.5rem'}}>Coupon:</h2>
                    <input
                    className="form-control"
                    type="text"
                    name={"coupon_match"}
                    placeholder={"Type your coupon code here"}
                    onChange={this.handleInputChange}
                    style={{  
                      backgroundColor:"#FFFFFF",
                      fontSize: "16px",
                      borderRadius: "5px",
                      color:"grey",
                      width:"30%",
                      display:"inline-block",
                      paddingLeft: "0.5rem"
                    }}
                    />
                    <button
                    onClick={this.handleCounponUpgrade}
                    type="button"
                    className="default-btn" style={{color:"white", display:"inline-block", marginLeft:"1rem"}} 
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

export default connect(mapStateToProps, { updateProfile, createMessage }) (PricingStyleOne);