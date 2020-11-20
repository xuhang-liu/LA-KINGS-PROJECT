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
                    pageTitle="Financial Analyst Intern"
                    pageDescription="New York / Remote"
                />
                <div className="container" style={{marginTop: "2rem"}}>
                    <div>
                        <h2 className="job-txt1">About the position</h2>
                        <p className="job-txt2" style={{marginTop: "2rem"}}>
                            As a <b>Financial Analyst Intern</b>, you will interact directly with senior team members and will
                            develop strong analytical skills that will serve them well for the rest of their careers. The
                            candidate will perform analysis or mining of data, evangelize the insights drawn from the data
                            analysis, and work with developers or data scientists to define various models
                        </p>
                        <p className="job-txt3" style={{marginTop: "1rem"}}>
                        The program is 6-8 weeks long and it is an <b>unpaid position</b>. You can choose either work remotely or in our New York office.
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
                        <h2 className="job-txt1" style={{paddingTop: "2rem", color:'#ff6b00'}}>Instructions:</h2>
                        <p style={{marginTop: "1rem", marginBottom: "0"}}>
                        To move forward with your application, we would like to invite you to finish our online video interview process. Please follow the instruction below carefully:
                         </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step1:</span> Use a laptop to create an account by click <Link to='/register'>apply now</Link> or visit our website at <Link to='/register'>https://www.hirebeat.co/register</Link> (Please make sure that your email address is consistent with your resume)
                        </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step2:</span> <Link to='/resume'>Upload your resume</Link>
                            <li>Navigate to the resume section on the left-hand side of the dashboard, click new scan.</li>
                            <li>Upload your resume with the match job description you are applying for, then click scan.</li>
                        </p>
                        <p style={{marginBottom: "0"}}>
                            <span className="job-step">Step3:</span> <Link to='/practice'>Video Interview</Link>
                            <li>Navigate to the interview section on the left-hand side of the dashboard and click new practice.</li>
                            <li>Chose the <b>Behavior Question</b> and select the <b>Simulate Mode</b>.</li>
                            <li>Begin your interview with the default setting; after you finish, simply send for an <b>AI review</b> in your dashboard.</li>
                        </p>
                        <p style={{marginTop: "1rem"}}>We will be in touch with you shortly after reviewing your result.</p>
                        <Link to="/register">
                            <a className="default-btn" style={{color:"white", backgroundColor:"#090D3A", paddingLeft:'25px'}}>
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
