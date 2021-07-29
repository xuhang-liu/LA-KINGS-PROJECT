import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import JacobsIQ from './../interviewQuestions/JacobsIQ';
import {RevenueBar, SalaryBar, Category} from './../Components';
import LogoList from './../LogoList';
import {ResumeFooter} from "./../../resume/Components";
import {Helmet} from "react-helmet";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}


class JacobsInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Jacobs</title>
                    <meta name="Description" CONTENT="Jacobs Engineering is a technical, consulting, and scientific service provider for the government and private sector. It operates in two segments: Critical Mission Solutions and People and Places Solutions. The Critical Mission Solutions segment offers cybersecurity, data analytics, software application development, enterprise and mission IT, systems integration, and other technical consulting solutions to government agencies and aerospace, automotive, and telecom customers. The People and Places Solutions segment provides facility engineering services for projects in connected mobility, water, smart cities, advanced manufacturing, and the environment." ></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Jacobs"
                    pageDescription="How to get a job at Jacobs."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Jacobs Engineering is a technical, consulting, and scientific service provider for the government and private sector. It operates in two segments: Critical Mission Solutions and People and Places Solutions. The Critical Mission Solutions segment offers cybersecurity, data analytics, software application development, enterprise and mission IT, systems integration, and other technical consulting solutions to government agencies and aerospace, automotive, and telecom customers. The People and Places Solutions segment provides facility engineering services for projects in connected mobility, water, smart cities, advanced manufacturing, and the environment."
                                type="Public"
                                founded="1947"
                                hq="Dallas, TX"
                                website="https://www.jacobs.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={3.8}
                                jobPage="https://careers.jacobs.com/"
                            />
                        </div>

                        {/*<div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <AIGIP />
                        </div>*/}

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <h3 className="companydata-text1">Hiring Categories</h3>
                            <div style={{margin: "15% 0"}}>
                                <Category
                                    height="300"
                                    labels={["Technology", "Other"]}
                                    series={[33.3, 66.7]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <JacobsIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[10020000000, 14980000000, 12740000000]}
                                netIncomeData={[287380000, 173140000, 873220000]}
                                gpmData={[17.68, 18.88, 19.45]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Creative", "Finance", "Operations", "Technology"]}
                                salaryData={[114400, 83000, 77000, 98300, 91900]}
                            />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginLeft: "auto", marginRight:"auto", marginTop: "5%"}}>
                            <LogoList />
                        </div>
                    </div>
                </div>
                <ResumeFooter />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default JacobsInfo;