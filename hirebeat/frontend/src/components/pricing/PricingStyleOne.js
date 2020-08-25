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
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Up to 3 chat operators 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    100 ChatBot Triggers
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    24/7 Live Chat
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Email Integration 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Messenger Integration
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Info
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Mobile + Desktop Apps
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Quick Responses 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> Drag & Drop Widgets
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Notes 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> Google Analytics
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership != "Regular" && 
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
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Up to 4 chat operators 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    150 ChatBot Triggers
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    24/7 Live Chat
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Email Integration 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Messenger Integration
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Info
                                                    </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Mobile + Desktop Apps
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Quick Responses 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> Drag & Drop Widgets
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Notes 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Google Analytics
                                                </li>
                                            </ul>
                                            {
                                                this.props.profile.membership != "Regular" && 
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
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-sm-6 offset-lg-0 offset-sm-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Enterprise</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>299<sub> / monthly</sub>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Up to 5 chat operators 
                                                    <span className="tooltips bx bxs-info-circle"  data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    200 ChatBot Triggers
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    24/7 Live Chat
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Email Integration 
                                                    <span className="tooltips bx bxs-info-circle"  data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Messenger Integration
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Info
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Mobile + Desktop Apps
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Quick Responses 
                                                    <span className="tooltips bx bxs-info-circle"  data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Drag & Drop Widgets
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Notes 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Google Analytics
                                                </li>
                                            </ul>

                                            <div className="btn-box">
                                                <Link to="#">
                                                    <a className="default-btn" style={{color:"white"}}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Coming Soon 
                                                        <span></span>
                                                    </a>
                                                </Link>
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
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Up to 5 chat operators 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    150 ChatBot Triggers
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    24/7 Live Chat
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Email Integration
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Messenger Integration
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Info
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Mobile + Desktop Apps
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Quick Responses 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Drag & Drop Widgets
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Notes <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Google Analytics
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership != "Regular" && 
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
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Up to 6 chat operators 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    200 ChatBot Triggers
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    24/7 Live Chat
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Email Integration 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Messenger Integration
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Info
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Mobile + Desktop Apps
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Quick Responses 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Drag & Drop Widgets
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Notes 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Google Analytics
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership != "Regular" && 
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
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Enterprise</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>1999 <sub>/ yearly</sub>
                                            </div>

                                            <ul className="pricing-features">
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Up to 7 chat operators 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    250 ChatBot Triggers
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    24/7 Live Chat
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Email Integration 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Messenger Integration
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Info</li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Mobile + Desktop Apps
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Quick Responses 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Drag & Drop Widgets
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Visitor Notes 
                                                    <span className="tooltips bx bxs-info-circle" data-toggle="tooltip" data-placement="right" title="Tight pants next level keffiyeh you probably haven't heard of them."></span>
                                                </li>
                                                <li>
                                                    <i className="bx bxs-badge-check"></i> 
                                                    Google Analytics
                                                </li>
                                            </ul>

                                            <div className="btn-box">
                                                <Link to="#">
                                                    <a className="default-btn" style={{color:"white"}}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Coming Soon 
                                                        <span></span>
                                                    </a>
                                                </Link>
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