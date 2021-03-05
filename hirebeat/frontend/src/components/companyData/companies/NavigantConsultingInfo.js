import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import NavigantConsultingIQ from './../interviewQuestions/NavigantConsultingIQ';
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


class NavigantConsultingInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Navigant Consulting</title>
                    <meta name="Description" CONTENT="Navigant Consulting provides professional services to corporate executives and senior management, corporate counsel, law firms, corporate boards, special committees, and governmental agencies worldwide. Professional service offerings include strategic, financial, operational, technology, risk management, compliance, investigative solutions, dispute resolution services, and business process management services. The business is organized in four reporting segments – Disputes, Investigations and Economics; Financial, Risk and Compliance; Healthcare; and Energy." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/navigant-consulting"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Navigant Consulting"
                    pageDescription="How to get a job at Navigant Consulting."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Navigant Consulting provides professional services to corporate executives and senior management, corporate counsel, law firms, corporate boards, special committees, and governmental agencies worldwide. Professional service offerings include strategic, financial, operational, technology, risk management, compliance, investigative solutions, dispute resolution services, and business process management services. The business is organized in four reporting segments – Disputes, Investigations and Economics; Financial, Risk and Compliance; Healthcare; and Energy."
                                type="Private"
                                founded="1983"
                                hq="Chicago, IL"
                                website="https://guidehouse.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={3.4}
                                jobPage="https://guidehouse.com/careers"
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
                                    labels={["N/A"]}
                                    series={[100]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <NavigantConsultingIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2015", "2016", "2017", "2018"]}
                                revenueData={[919490000, 1030000, 1030000, 743610000]}
                                netIncomeData={[60350000, 58100000, 74950000, 120640000]}
                                gpmData={[28.48, 29.66, 27.61, 25.97]}
                            />
                            <SalaryBar
                                labels={["Management Consultant", "Healthcare Consultant", "Research Analyst", "Energy Consultant", "Executive Assistant"]}
                                salaryData={[132000, 126000, 71000, 118000, 76000]}
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

export default NavigantConsultingInfo;