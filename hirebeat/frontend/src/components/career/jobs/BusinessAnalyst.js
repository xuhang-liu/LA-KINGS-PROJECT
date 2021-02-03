import React, { Component } from 'react';
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
                <div className="container pb-100" style={{marginTop: "2rem"}}>
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
            </React.Fragment>
        );
    }
}

export default BusinessAnalyst;
