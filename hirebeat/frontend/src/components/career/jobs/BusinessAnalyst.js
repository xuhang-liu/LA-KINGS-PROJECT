import React, { Component } from 'react';
import {Link} from "react-router-dom";
import PageTitleArea from '../../Common/PageTitleArea';
import { useEffect } from "react";
//import MediaQuery from 'react-responsive';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BusinessAnalyst extends Component {
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Business Analyst Intern"
                    pageDescription="New York / Remote"
                />
                <div className="container" style={{marginTop: "2rem"}}>
                    <div>
                        <h2 className="job-txt1">About the position</h2>
                        <p className="job-txt2" style={{marginTop: "2rem"}}>
                            HireBeat is an innovative tech company based in New York City that aims to change job seekers’
                            lives through recruitment training. We aim to help customers gain a competitive edge in the
                            recruitment industry with ease through interview training platforms.
                        </p>
                        <p className="job-txt2" style={{marginTop: "2rem"}}>
                            As a Financial Analyst Intern, you will interact directly with senior team members and will
                            develop strong analytical skills that will serve them well for the rest of their careers. The
                            candidate will perform analysis or mining of data, evangelize the insights drawn from the data
                            analysis, and work with developers or data scientists to define various models
                        </p>
                        <p className="job-txt3" style={{marginTop: "1rem"}}>
                            Note: The program is 6-8 weeks long and it is an unpaid position. You can choose either work remotely or in our New York office.
                        </p>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">What you’ll do</h3>
                        <ul className="job-txt2">
                            <li>Produce a variety of industry research reports including market overview, issues, and insights, current trends, market size, segment performance, key demand drivers, etc.</li>
                            <li>Analyze competitive landscape by utilizing data from different data sources and drafting SWOT analysis and competitor analysis to assist management on the investor presentation</li>
                            <li>Assist in conducting surveys from certain focus group and plan go-to-market strategy for product</li>
                            <li>Perform financial projection and valuation models (DCF, VC, Comps, etc.) to evaluate the company’s enterprise value</li>
                            <li>Provide data-driven analysis on the business model and revenue model</li>
                            <li>Initiate Equity pool policy including vesting period for the issuance of options and restricted stock</li>
                            <li>Build trust and effective relationships with peers/cross-functional teams and modeling, model deployment, performance tracking, and documentation</li>
                            <li>Collect human behavior data and conduct hands-on data analysis, classification & predictive analytics on datasets</li>
                        </ul>
                    </div>
                    <div style={{marginTop: "1.25rem"}}>
                        <h3 className="job-txt4">What you need</h3>
                        <ul className="job-txt2">
                            <li>Major in Business / Consulting / Finance or related field</li>
                            <li>Experience or willing to learn in industry knowledge and applying business & financial analysis</li>
                            <li>Expert ability to breakdown and clearly defines problems</li>
                            <li>Strong ability to communicate highly technical results to a diverse audience</li>
                        </ul>
                    </div>
                </div>
                <div className="row job-tail">
                    <div className="container" style={{paddingBottom: "6rem"}}>
                        <h2 className="job-txt1" style={{paddingTop: "2rem"}}>Instruction</h2>
                        <p style={{marginTop: "1rem", marginBottom: "0"}}>
                            To move forward with your application, we would like to invite you to finish our online resume
                            scanning process. Please follow the instruction below carefully:
                         </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step1:</span> Use a laptop to create an account by click apply now or visit our website at
                            https://www.hirebeat.co/register (make sure the email matches your resume)
                        </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step2:</span> Upload your resume
                            <li>Navigate to the resume section on the left-hand side of the dashboard, click new scan.</li>
                            <li>Upload your resume with the match job description you are applying, then click scan.</li>
                        </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step3:</span> Video Interview
                            <li>Navigate to the interview section on the left-had side of the dashboard and click new practice.</li>
                            <li>Chose the Behavior Question and select the Simulate Mode</li>
                            <li>Begin your interview with the default setting; after you finish, simply send for an AI review in your dashboard.</li>
                        </p>
                        <p><span className="job-step">Step4:</span> Reply to us with your user name at duke.wang@hirebeat.co</p>
                        <p style={{marginTop: "1rem"}}>We will be in touch with you as soon as possible after we have reviewed your result.</p>
                        <Link to="/register">
                            <a className="default-btn" style={{color:"white", backgroundColor:"#090D3A"}}>
                                Apply Now
                                <span></span>
                            </a>
                        </Link>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default BusinessAnalyst;
