import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PageTitleArea from '../Common/PageTitleArea';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import amazon from '../../assets/companydata/amazon-logo.png'
import apple from '../../assets/companydata/apple-logo.png'
import google from '../../assets/companydata/google-logo.png'
import facebook from '../../assets/companydata/facebook-logo.png'
import microsoft from '../../assets/companydata/microsoft-logo.png'
import netflix from '../../assets/companydata/netflix-logo.png'
import linkedin from '../../assets/companydata/linkedin-logo.png'
import adobe from '../../assets/companydata/adobe-logo.png'
import stripe from '../../assets/companydata/stripe-logo.png'

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class CompanyList extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Company Data" 
                    pageDescription="Ace the interview process at top tech companies like Google, Amazon, Apple, and Stripe." 
                />
                <section className="blog-details-area ptb-100" style={{backgroundColor:"#f4f5fe"}}>
                    <div className="container" style={{marginBottom:"3%"}}>
                        <div className="row" style={{marginBottom:"3%"}}>
                            <div className="col-lg-8 col-md-12" style={{paddingLeft:"44%", paddingTop:"2%"}}>
                                <h1 style={{fontFamily:"Avenir Next"}}>Popular</h1>
                            </div>

                            <div class="col-lg-4 col-md-12">
                                <div className="widget-area" id="secondary">
                                    <div className="widget widget_search">
                                        <form className="search-form">
                                            <label>
                                                <span className="screen-reader-text">Search for:</span>
                                                <input type="search" className="search-field" placeholder="Search..." />
                                            </label>
                                            <button type="submit">
                                                <i className='bx bx-search-alt'></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="clients-logo-list align-items-center">
                            <div className="single-clients-logo">
                                <Link to="/companyinfo" className="company-list-img">
                                    <img src={amazon} alt="image" style={{marginTop:"13%"}}/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companyinfo" className="company-list-img" style={{padding:"15px"}}>
                                    <img src={apple} alt="image" />
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companyinfo" className="company-list-img">
                                    <img src={google} alt="image" />
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companyinfo" className="company-list-img">
                                    <img src={facebook} alt="image" style={{marginTop:"15%"}}/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companyinfo" className="company-list-img">
                                    <img src={microsoft} alt="image" />
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companyinfo" className="company-list-img">
                                    <img src={netflix} alt="image" style={{marginTop:"13%"}}/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companyinfo" className="company-list-img">
                                    <img src={linkedin} alt="image" style={{marginTop:"6%"}}/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companyinfo" className="company-list-img">
                                    <img src={adobe} alt="image" style={{marginTop:"13%"}}/>
                                </Link>
                            </div>

                            <div className="single-clients-logo">
                                <Link to="/companyinfo" className="company-list-img">
                                    <img src={stripe} alt="image" style={{marginTop:"13%"}}/>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="row company-list-help-box">
                        <h3 className="col-md-3 company-list-help-text" style={{paddingLeft:"4%"}}>
                            We also help you on </h3>
                            
                        <div className="col-md-3" style={{maxWidth:"18%"}}>
                            <Link to="/practice">
                                <a className="default-btn" style={{color:"white", backgroundColor:"#090D3A"}}>
                                    <i className="bx bxs-arrow-to-right"></i> 
                                    Interview Praciting
                                    <span></span>
                                </a>
                            </Link>
                        </div>

                        <div className="col-md-3" style={{maxWidth:"18%"}}>
                            <Link to="/resume">
                                <a className="default-btn" style={{color:"white", backgroundColor:"#090D3A"}}>
                                    <i className="bx bxs-arrow-to-right"></i> 
                                    Resume Matching
                                    <span></span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </section>
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default CompanyList;