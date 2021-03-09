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
    };
    handleYearClickUpgrade = async (event) => {
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          lineItems: [{
            price: 'price_1ITARFKxU1MN2zWMctTzCR0x', // Replace with the ID of your price
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

    render() {
        return (
            <section className="pricing-area pt-100 pb-70">
                <div className="container-xl px-2">
                    <div className="tab pricing-list-tab">
                        <div className="tab_content">
                        <div id="tab2" className="tabs_item">
                                <div className="row">
                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single-pricing-table left-align" style={{backgroundColor:"#E8EDFC"}}>
                                            <div className="pricing-header">
                                                <h3 style={{fontWeight:"600"}}>Free</h3>
                                                <p style={{color:"#090d3a", fontSize:"12px"}}>Great if you are just starting out</p>
                                            </div>

                                            <div className="price" style={{borderTop:"none"}}>
                                                <sup>$</sup>0 <sub style={{color:"#090d3a"}}>/ month</sub>
                                            <div style={{marginLeft:"-2rem", marginTop:"-1.5rem", marginBottom:"1rem"}}>
                                            {
                                                this.props.profile.membership == null && 
                                                <div className="btn-box">
                                                <Link to="/employer_register">
                                                <a id="id-employer-select1" className="default-btn" style={{color:"white", paddingLeft:"25px", marginTop:"0.5rem"}}>
                                                    Select Plan
                                                    <span></span>
                                                </a>
                                                </Link>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Regular" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#080a3c", paddingLeft:"25px", marginTop:"0.5rem"}}>
                                                        Current Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Premium" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", paddingLeft:"25px", marginTop:"0.5rem"}}>
                                                        Default Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            </div>
                                            </div>

                                            <ul className="pricing-features pr-2" style={{paddingBottom:"3rem"}}>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    1 job position
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    <strong>25</strong> candidate invitaitons 
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Customize questions
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Shortlist candidate
                                                </li>
                                                <li style={{fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle"></i> 
                                                    Candidate rating
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
                                                    Collaborator account
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single-pricing-table left-align" style={{backgroundColor:"#090D3A"}}>
                                            <div className="pricing-header">
                                                <h3 style={{color:"#ffffff", fontWeight:"600"}}>Premium</h3>
                                                <p style={{color:"#ffffff", fontSize:"12px"}}>Perfect for small & medium-sized organisations</p>
                                            </div>

                                            <div className="price" style={{borderTop:"none", color:"#ffffff"}}>
                                                <sup style={{color:"#ffffff"}}>$</sup>199<sub style={{color:"#ffffff"}}>/ month</sub>
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
                                                    <button id="id-tifn5" className="default-btn" style={{color:"white", backgroundColor:"#ff6b00", paddingLeft:"25px"}} onClick={this.handleYearUpgrade}>
                                                        Select Plan
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            {
                                                this.props.profile.membership == "Premium" &&
                                                <div className="btn-box">
                                                    <button className="default-btn" style={{color:"white", backgroundColor:"#ff6b00", paddingLeft:"25px"}}>
                                                        Premium Already
                                                        <span></span>
                                                    </button>
                                                </div>
                                            }
                                            </div>
                                            </div>

                                            <ul className="pricing-features pr-2" style={{paddingBottom:"1.5rem"}}>
                                            <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    5 job positions
                                                    </li>
                                                <li style={{color:"white", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Up to 100 candidate invitaitons for each job position
                                                </li>
                                                <li style={{color:"white", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Customize questions
                                                </li>
                                                <li style={{color:"white", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Shortlist candidates
                                                </li>
                                                <li style={{color:"white", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Team collaboration
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
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Single pricing table */}
                                    <div className="col-lg-4 col-md-4">
                                        <div className="single-pricing-table left-align" style={{backgroundColor:"#67A3F3"}}>
                                            <div className="pricing-header">
                                                <h3 style={{fontWeight:"600"}}>Enterprise</h3>
                                                <p style={{color:"#090d3a", fontSize:"12px"}}>Flexible team plan for growing organisations</p>
                                            </div>

                                            <div className="price" style={{color:'#090d3a', borderTop:"none"}}>
                                                <h5 style={{fontWeight:"600", color:'#090d3a', marginTop:"1.8rem"}}>Get customizable functionality</h5>
                                            <div style={{marginLeft:"-2rem", marginTop:"0.5rem"}}>
                                            {
                                                <div className="btn-box">
                                                <a href="mailto: admin@hirebeat.co" id="id-employer-select3" className="default-btn" style={{color:"white", backgroundColor:"#090d3a", paddingLeft:"25px"}}>
                                                    Contact Us
                                                    <span></span>
                                                </a>
                                                </div>
                                            }
                                            </div>
                                            </div>

                                            <ul className="pricing-features pr-2">
                                            <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Customized number of job positions
                                                    </li>
                                                <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Customized candidate invitaitons for each job position
                                                </li>
                                                <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Flexible team collaborators
                                                </li>
                                                <li style={{color:"#e8edfc", fontSize:"1rem", fontWeight:"500"}}>
                                                    <i className="bx bxs-check-circle" style={{color:"#e8edfc"}}></i> 
                                                    Customize questions</li>
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