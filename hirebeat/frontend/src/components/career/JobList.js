import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PageTitleArea from '../Common/PageTitleArea';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import MediaQuery from 'react-responsive';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class JobList extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Join Us"
                    pageDescription="HireBeat's mission is to be your partner in your career path."
                />
                <section className="blog-details-area ptb-100" style={{backgroundColor:"#f4f5fe"}}>
                    <div className="container" style={{marginBottom:"3%"}}>
                        <div className="clients-logo-list justify-items" style={{marginBottom:"3%"}}>
                            <MediaQuery minDeviceWidth={1224}>
                                <h1 className="company-data-title">We are hiring for these roles</h1>
                            </MediaQuery>
                        </div>
                        <div className="clients-logo-list justify-items">
                            <div className="col-3 single-clients-logo">
                                <Link to="/jobs/software-engineer" style={{textDecoration: "none", height: "12.5rem"}}>
                                    <h3 className="job-title">Software Engineer</h3>
                                    <p className="job-des">We’re looking for software engineers with strong front-end development skills who love to implement beautiful design</p>
                                </Link>
                            </div>
                            <div className="col-3 single-clients-logo">
                                <Link to="/jobs/product-manager" style={{textDecoration: "none", height: "12.5rem"}}>
                                    <h3 className="job-title">Product Manager</h3>
                                    <p className="job-des">We’re looking for product manager from tier-1 institutions with skills to manage a product or set of products all the way from ideation to launch.</p>
                                </Link>
                            </div>
                            <div className="col-3 single-clients-logo">
                                <Link to="/jobs/marketing" style={{textDecoration: "none", height: "12.5rem"}}>
                                    <h3 className="job-title">Marketing</h3>
                                    <p className="job-des">If you’re a person who likes solving complex problems and gets excited by big ideas, come to join our marketing team.</p>
                                </Link>
                            </div>
                        </div>
                        <div className="clients-logo-list justify-items" style={{marginTop: "1rem"}}>
                            <div className="col-3 single-clients-logo">
                                <Link to="/jobs/business-analyst" style={{textDecoration: "none", height: "12.5rem"}}>
                                    <h3 className="job-title">Financial Analyst</h3>
                                    <p className="job-des">We’re looking for a business analyst who can plan and analyse different product features in collaboration with the product team.</p>
                                </Link>
                            </div>
                            <div className="col-3 single-clients-logo">
                                <Link to="/jobs/ui-designer" style={{textDecoration: "none", height: "12.5rem"}}>
                                    <h3 className="job-title">UI Designer</h3>
                                    <p className="job-des">Are you a designer who specializes in UI or visual design? We’re always looking to hire talented designers at all levels of experience.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <MediaQuery minDeviceWidth={1224}>
                        <div className="row" style={{backgroundColor: "white"}}>
                            <div className="contact-cta-box" style={{minWidth: "62.5rem"}}>
                                <h3 style={{color: "#080A3C"}}>Can’t find your role?</h3>
                                <p style={{color: "#080A3C"}}>Let’s talk</p>
                                <Link to="/contact">
                                    <a class="default-btn" style={{color: "white"}}>
                                        Contact Us
                                        <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </MediaQuery>
                </section>
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default JobList;
