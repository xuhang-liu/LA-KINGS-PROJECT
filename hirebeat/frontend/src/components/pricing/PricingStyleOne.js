import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { updateProfile, updateUserEmail } from "../../redux/actions/auth_actions";
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

    confirmEmailCoupon = () => {
        let email1 = document.getElementById("email1").value;
        let email2 = document.getElementById("email2").value;
        let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

        if (email1 != email2) {
            // check the input emails are equal
            return alert("Your input email addresses are not consistent!");
        } else if (!reg.test(email2)) {
            // check email format
            return alert("Please Enter Your Email In Correct Format.");
        } else {
            // save email to User model
            let user = {"id": this.props.user.id , "email": email2};
            this.props.updateUserEmail(user);
            // redirect to payment
            if(this.state.coupon_match == 'PRODUCTHUNT2020' || this.state.coupon_match == 'DBCVIP' || this.state.coupon_match == 'BETALIST2020'){
                this.handleClickCouponUpgrade2(email2);
            }else if(this.state.coupon_match == 'DRNANCYLI'){
                this.handleClickCouponUpgrade4(email2);
            }
        }
    }

    confirmEmailMonth1 = () => {
        let email1 = document.getElementById("email1").value;
        let email2 = document.getElementById("email2").value;
        let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

        if (email1 != email2) {
            // check the input emails are equal
            return alert("Your input email addresses are not consistent!");
        } else if (!reg.test(email2)) {
            // check email format
            return alert("Please Enter Your Email In Correct Format.");
        } else {
            // save email to User model
            let user = {"id": this.props.user.id , "email": email2};
            this.props.updateUserEmail(user);
            // redirect to payment
            this.handleClickUpgrade2(email2);
        }
    }
    confirmResumeEmailMonth1 = () => {
        let email1 = document.getElementById("email1").value;
        let email2 = document.getElementById("email2").value;
        let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

        if (email1 != email2) {
            // check the input emails are equal
            return alert("Your input email addresses are not consistent!");
        } else if (!reg.test(email2)) {
            // check email format
            return alert("Please Enter Your Email In Correct Format.");
        } else {
            // save email to User model
            let user = {"id": this.props.user.id , "email": email2};
            this.props.updateUserEmail(user);
            // redirect to payment
            this.handleClickResumeUpgrade2(email2);
        }
    }
    confirmInterviewEmailMonth1 = () => {
        let email1 = document.getElementById("email1").value;
        let email2 = document.getElementById("email2").value;
        let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

        if (email1 != email2) {
            // check the input emails are equal
            return alert("Your input email addresses are not consistent!");
        } else if (!reg.test(email2)) {
            // check email format
            return alert("Please Enter Your Email In Correct Format.");
        } else {
            // save email to User model
            let user = {"id": this.props.user.id , "email": email2};
            this.props.updateUserEmail(user);
            // redirect to payment
            this.handleClickInterviewUpgrade2(email2);
        }
    }

    confirmEmailMonth3 = () => {
        let email1 = document.getElementById("email1").value;
        let email2 = document.getElementById("email2").value;
        let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

        if (email1 != email2) {
            // check the input emails are equal
            return alert("Your input email addresses are not consistent!");
        } else if (!reg.test(email2)) {
            // check email format
            return alert("Please Enter Your Email In Correct Format.");
        } else {
            // save email to User model
            let user = {"id": this.props.user.id , "email": email2};
            this.props.updateUserEmail(user);
            // redirect to payment
            this.handleYearClickUpgrade2(email2);
        }
    }
    confirmEmailResumeMonth3 = () => {
        let email1 = document.getElementById("email1").value;
        let email2 = document.getElementById("email2").value;
        let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

        if (email1 != email2) {
            // check the input emails are equal
            return alert("Your input email addresses are not consistent!");
        } else if (!reg.test(email2)) {
            // check email format
            return alert("Please Enter Your Email In Correct Format.");
        } else {
            // save email to User model
            let user = {"id": this.props.user.id , "email": email2};
            this.props.updateUserEmail(user);
            // redirect to payment
            this.handleYearClickResumeUpgrade2(email2);
        }
    }
    confirmEmailInterviewMonth3 = () => {
        let email1 = document.getElementById("email1").value;
        let email2 = document.getElementById("email2").value;
        let reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;

        if (email1 != email2) {
            // check the input emails are equal
            return alert("Your input email addresses are not consistent!");
        } else if (!reg.test(email2)) {
            // check email format
            return alert("Please Enter Your Email In Correct Format.");
        } else {
            // save email to User model
            let user = {"id": this.props.user.id , "email": email2};
            this.props.updateUserEmail(user);
            // redirect to payment
            this.handleYearClickInterviewUpgrade2(email2);
        }
    }

    addUserEmailCoupon = () => {
        confirmAlert({
            title: 'Please enter your personal email',
            message: <form>
                        <label style={{width: "6rem"}}>Email</label><input id="email1" type="text"></input><br/>
                        <label style={{width: "6rem"}}>Confirm Email</label><input id="email2" type="text"></input>
                    </form>,
            buttons: [
                {
                    label: 'ok',
                    onClick: () => this.confirmEmailCoupon()
                }
            ],
        });
    }

    addUserEmailMonth1 = () => {
        confirmAlert({
            title: 'Please enter your personal email',
            message: <form>
                        <label style={{width: "6rem"}}>Email</label><input id="email1" type="text"></input><br/>
                        <label style={{width: "6rem"}}>Confirm Email</label><input id="email2" type="text"></input>
                    </form>,
            buttons: [
                {
                    label: 'ok',
                    onClick: () => this.confirmEmailMonth1()
                }
            ],
        });
    }
    addUserResumeEmailMonth1 = () => {
        confirmAlert({
            title: 'Please enter your personal email',
            message: <form>
                        <label style={{width: "6rem"}}>Email</label><input id="email1" type="text"></input><br/>
                        <label style={{width: "6rem"}}>Confirm Email</label><input id="email2" type="text"></input>
                    </form>,
            buttons: [
                {
                    label: 'ok',
                    onClick: () => this.confirmResumeEmailMonth1()
                }
            ],
        });
    }
    addUserInterviewEmailMonth1 = () => {
        confirmAlert({
            title: 'Please enter your personal email',
            message: <form>
                        <label style={{width: "6rem"}}>Email</label><input id="email1" type="text"></input><br/>
                        <label style={{width: "6rem"}}>Confirm Email</label><input id="email2" type="text"></input>
                    </form>,
            buttons: [
                {
                    label: 'ok',
                    onClick: () => this.confirmInterviewEmailMonth1()
                }
            ],
        });
    }

    addUserEmailMonth3 = () => {
        confirmAlert({
            title: 'Please enter your personal email',
            message: <form>
                        <label style={{width: "6rem"}}>Email</label><input id="email1" type="text"></input><br/>
                        <label style={{width: "6rem"}}>Confirm Email</label><input id="email2" type="text"></input>
                    </form>,
            buttons: [
                {
                    label: 'ok',
                    onClick: () => this.confirmEmailMonth3()
                }
            ],
        });
    }
    addUserEmailResumeMonth3 = () => {
        confirmAlert({
            title: 'Please enter your personal email',
            message: <form>
                        <label style={{width: "6rem"}}>Email</label><input id="email1" type="text"></input><br/>
                        <label style={{width: "6rem"}}>Confirm Email</label><input id="email2" type="text"></input>
                    </form>,
            buttons: [
                {
                    label: 'ok',
                    onClick: () => this.confirmEmailResumeMonth3()
                }
            ],
        });
    }
    addUserEmailInterviewMonth3 = () => {
        confirmAlert({
            title: 'Please enter your personal email',
            message: <form>
                        <label style={{width: "6rem"}}>Email</label><input id="email1" type="text"></input><br/>
                        <label style={{width: "6rem"}}>Confirm Email</label><input id="email2" type="text"></input>
                    </form>,
            buttons: [
                {
                    label: 'ok',
                    onClick: () => this.confirmEmailInterviewMonth3()
                }
            ],
        });
    }

      handleCounponUpgrade = () => {
        if(this.state.coupon_match != 'PRODUCTHUNT2020' && this.state.coupon_match != 'DBCVIP' && this.state.coupon_match != 'BETALIST2020' && this.state.coupon_match != 'DRNANCYLI'){
          confirmAlert({
            title: 'Enter A Valid Code',
            message: '',
            buttons: [
              {
                label: 'Ok'
              }
            ]
            });
        }else if (this.props.user.email == "" || this.props.user.email == null) {
            this.addUserEmailCoupon();
        }else{
            if(this.state.coupon_match == 'PRODUCTHUNT2020' || this.state.coupon_match == 'DBCVIP' || this.state.coupon_match == 'BETALIST2020'){
                this.handleClickCouponUpgrade();
            }else if(this.state.coupon_match == 'DRNANCYLI'){
                this.handleClickCouponUpgrade3();
            }
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
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: this.props.user.email,
        });
        error.message;
    };

    handleClickCouponUpgrade2 = async (email) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1HRUQJKxU1MN2zWMo9p8tKjJ', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: email,
        });
        error.message;
    };

    handleClickCouponUpgrade3 = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1I3o3eKxU1MN2zWM2sNedHQ9', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: this.props.user.email,
        });
        error.message;
    };

    handleClickCouponUpgrade4 = async (email) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1I3o3eKxU1MN2zWM2sNedHQ9', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: email,
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
        }else if (this.props.user.email == "" || this.props.user.email == null) {
            this.addUserEmailMonth1();
        }else{
          this.handleClickUpgrade();
        }
    };
    handleResumeUpgrade = () => {
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
        }else if (this.props.user.email == "" || this.props.user.email == null) {
            this.addUserResumeEmailMonth1();
        }else{
          this.handleClickResumeUpgrade();
        }
    };
    handleInterviewUpgrade = () => {
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
        }else if (this.props.user.email == "" || this.props.user.email == null) {
            this.addUserInterviewEmailMonth1();
        }else{
          this.handleClickInterviewUpgrade();
        }
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
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: this.props.user.email,
        });
        error.message;
    };
    handleClickResumeUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1IPDzBKxU1MN2zWM2R4WdI69', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: this.props.user.email,
        });
        error.message;
    };
    handleClickInterviewUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1IPBvWKxU1MN2zWMCfezKW7o', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: this.props.user.email,
        });
        error.message;
    };

    handleClickUpgrade2 = async (email) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1H8WhZKxU1MN2zWMo3Cu8kLn', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: email,
        });
        error.message;
    };
    handleClickResumeUpgrade2 = async (email) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1IPDzBKxU1MN2zWM2R4WdI69', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: email,
        });
        error.message;
    };
    handleClickInterviewUpgrade2 = async (email) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1IPBvWKxU1MN2zWMCfezKW7o', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: email,
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
        }else if (this.props.user.email == "" || this.props.user.email == null) {
            this.addUserEmailMonth3();
        }else{
          this.handleYearClickUpgrade();
        }
    };
    handleYearResumeUpgrade = () => {
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
        }else if (this.props.user.email == "" || this.props.user.email == null) {
            this.addUserEmailResumeMonth3();
        }else{
          this.handleYearClickResumeUpgrade();
        }
    };
    handleYearInterviewUpgrade = () => {
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
        }else if (this.props.user.email == "" || this.props.user.email == null) {
            this.addUserEmailInterviewMonth3();
        }else{
          this.handleYearClickInterviewUpgrade();
        }
    };

    handleYearClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1IPDvWKxU1MN2zWM0ZgjDTYJ', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: this.props.user.email,
        });
        error.message;
    };
    handleYearClickResumeUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1IPDxaKxU1MN2zWMSEdCAxBu', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: this.props.user.email,
        });
        error.message;
    };
    handleYearClickInterviewUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1IPC0qKxU1MN2zWMnwuVC8L6', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: this.props.user.email,
        });
        error.message;
    };

    handleYearClickUpgrade2 = async (email) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1IPDvWKxU1MN2zWM0ZgjDTYJ', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: email,
        });
        error.message;
    };
    handleYearClickResumeUpgrade2 = async (email) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1IPDxaKxU1MN2zWMSEdCAxBu', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: email,
        });
        error.message;
    };
    handleYearClickInterviewUpgrade2 = async (email) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1IPC0qKxU1MN2zWMnwuVC8L6', // Replace with the ID of your price
            quantity: 1,
          }],
          mode: 'subscription',
          successUrl: 'https://app.hirebeat.co/payment',
          cancelUrl: 'https://app.hirebeat.co/pricing',
          billingAddressCollection: 'auto',
          customerEmail: email,
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
                <div className="container-fluid px-4">
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
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Free</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>0 <sub>/ month</sub>
                                                <div style={{marginTop:'-1rem'}}><sub></sub></div>
                                            </div>

                                            <ul className="pricing-features pb-3 pr-2">
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    3 interview simulations & practices
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    2 AI or expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    1 resume-to-job evaluation reports
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Access to top company tips & data
                                                </li>
                                                <li style={{textDecoration:"line-through"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    24/7 customer support
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a id="id-tifn1" className="default-btn" style={{color:"white"}}>
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
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Resume Package</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>7.49 <sub>/ month</sub>
                                                <div style={{marginTop:'-1rem'}}><sub>$22.49 in total - </sub><sub style={{color:'#ff6b00'}}><b>Save 25%</b></sub></div>
                                            </div>

                                            <ul className="pricing-features pb-3 pr-2">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    3 interview simulations & practices
                                                    </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    2 AI or expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> resume-to-job evaluation reports
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Access to top company tips & data
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    24/7 customer support
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a id="id-tifn2" className="default-btn" style={{color:"white"}}>
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
                                                    <button id="id-tifn5" className="default-btn" style={{color:"white"}} onClick={this.handleYearResumeUpgrade}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Select Plan
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

                                    {/* Single pricing table */}
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Interview Package</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>11.25 <sub>/ month</sub>
                                                <div style={{marginTop:'-1rem'}}><sub>$33.75 in total - </sub><sub style={{color:'#ff6b00'}}><b>Save 25%</b></sub></div>
                                            </div>

                                            <ul className="pricing-features pb-3 pr-2">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> interview simulations & practices
                                                    </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> AI or expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    1 resume-to-job evaluation reports
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Access to top company tips & data
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    24/7 customer support
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a id="id-tifn2" className="default-btn" style={{color:"white"}}>
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
                                                    <button id="id-tifn5" className="default-btn" style={{color:"white"}} onClick={this.handleYearInterviewUpgrade}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Select Plan
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

                                    {/* Single pricing table */}
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Professional Bundle</h3>
                                            </div>

                                            <div className="price" style={{color:'#ff6b00'}}>
                                                <sup>$</sup>14.99<sub style={{color:'#ff6b00'}}>/ month</sub>
                                                <div style={{marginTop:'-1rem'}}><sub>$44.99 in total - </sub><sub style={{color:'#ff6b00'}}><b>Save 25%</b></sub></div>
                                            </div>

                                            <ul className="pricing-features pb-3 pr-2">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> interview simulations & practices
                                                    </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> AI or expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> resume-to-job evaluation reports
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Access to top company tips & data</li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    24/7 customer support
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a id="id-tifn2" className="default-btn" style={{color:"white"}}>
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
                                                    <button id="id-tifn5" className="default-btn" style={{color:"white"}} onClick={this.handleYearUpgrade}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Select Plan
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

                            {/* Monthly */}
                            <div id="tab1" className="tabs_item">
                                <div className="row">
                                    {/* Single pricing table */}
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Free</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>0 <sub>/ month</sub>
                                            </div>

                                            <ul className="pricing-features pb-3 pr-2">
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    3 interview simulations & practices
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    2 AI or expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    1 resume-to-job evaluation reports
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Access to top company tips & data
                                                </li>
                                                <li style={{textDecoration:"line-through"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    24/7 customer support
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a id="id-tifn1" className="default-btn" style={{color:"white"}}>
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
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Resume Package</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>9.99 <sub>/ month</sub>
                                            </div>

                                            <ul className="pricing-features pb-3 pr-2">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    3 interview simulations & practices
                                                    </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    2 AI or expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> resume-to-job evaluation reports
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Access to top company tips & data
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    24/7 customer support
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a id="id-tifn2" className="default-btn" style={{color:"white"}}>
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
                                                    <button id="id-tifn5" className="default-btn" style={{color:"white"}} onClick={this.handleResumeUpgrade}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Select Plan
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

                                    {/* Single pricing table */}
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Interview Package</h3>
                                            </div>

                                            <div className="price">
                                                <sup>$</sup>14.99 <sub>/ month</sub>
                                            </div>

                                            <ul className="pricing-features pb-3 pr-2">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> interview simulations & practices
                                                    </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> AI or expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    1 resume-to-job evaluation reports
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Access to top company tips & data
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    24/7 customer support
                                                </li>
                                            </ul>

                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a id="id-tifn2" className="default-btn" style={{color:"white"}}>
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
                                                    <button id="id-tifn5" className="default-btn" style={{color:"white"}} onClick={this.handleInterviewUpgrade}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Select Plan
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

                                    {/* Single pricing table */}
                                    <div className="col-lg-3 col-md-3">
                                        <div className="single-pricing-table left-align">
                                            <div className="pricing-header">
                                                <h3>Professional Bundle</h3>
                                            </div>

                                            <div className="price" style={{color:'#ff6b00'}}>
                                                <sup>$</sup>19.99<sub style={{color:'#ff6b00'}}>/ month</sub>
                                            </div>

                                            <ul className="pricing-features pb-3 pr-2">
                                            <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> interview simulations & practices
                                                    </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> AI or expert reports on your interview performance
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>Unlimited</strong> resume-to-job evaluation reports
                                                </li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Access to top company tips & data</li>
                                                <li>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    24/7 customer support</li>
                                            </ul>

                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/register">
                                                <a id="id-tifn2" className="default-btn" style={{color:"white"}}>
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
                                                    <button id="id-tifn5" className="default-btn" style={{color:"white"}} onClick={this.handleUpgrade}>
                                                        <i className="bx bxs-hot"></i> 
                                                        Select Plan
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
                    {/*
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
                    </div>*/}
                </div>
            </section>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.auth_reducer.user,
    profile: state.auth_reducer.profile,
});

export default connect(mapStateToProps, { updateProfile, createMessage, updateUserEmail }) (PricingStyleOne);