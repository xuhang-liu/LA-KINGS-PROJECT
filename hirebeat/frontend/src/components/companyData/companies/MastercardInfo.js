import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import MastercardIQ from './../interviewQuestions/MastercardIQ';
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


class MastercardInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Mastercard</title>
                    <meta name="Description" CONTENT="Mastercard is a multinational financial services corporation that provides transaction processing and other payment-related products and services. It facilitates payment transactions, including authorization, clearing, settlement, and delivery of related products and services. The company also offers value-added services, such as safety and security products, loyalty and reward programs, information and consulting services, issuer, and acquirer processing solutions, and payment and mobile gateways." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/mastercard"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Mastercard"
                    pageDescription="How to get a job at Mastercard."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Mastercard is a multinational financial services corporation that provides transaction processing and other payment-related products and services. It facilitates payment transactions, including authorization, clearing, settlement, and delivery of related products and services. The company also offers value-added services, such as safety and security products, loyalty and reward programs, information and consulting services, issuer, and acquirer processing solutions, and payment and mobile gateways."
                                type="Public"
                                founded="1966"
                                hq="Purchase, NY"
                                website="https://www.mastercard.us/en-us.html"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={4.2}
                                jobPage="https://www.mastercard.us/en-us/vision/who-we-are/careers.html"
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
                            <MastercardIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[12500000000, 15000000000, 16900000000]}
                                netIncomeData={[3900000000, 5900000000, 8100000000]}
                                gpmData={[100, 100, 100]}
                            />
                            <SalaryBar
                                labels={["Admin", "Communications", "Customer Support", "Design", "Engineering"]}
                                salaryData={[63000, 248000, 137000, 94000, 144000]}
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

export default MastercardInfo;