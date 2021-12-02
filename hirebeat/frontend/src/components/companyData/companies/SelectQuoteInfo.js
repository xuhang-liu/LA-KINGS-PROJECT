import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import SelectQuoteIQ from './../interviewQuestions/SelectQuoteIQ';
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


class SelectQuoteInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – SelectQuote</title>
                    <meta name="Description" CONTENT="SelectQuote is a provider of an insurance policy comparison website. It allows consumers to compare insurance policies for complex senior health, life and auto, and home insurance policies." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/selectquote"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="SelectQuote"
                    pageDescription="How to get a job at SelectQuote."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="SelectQuote is a provider of an insurance policy comparison website. It allows consumers to compare insurance policies for complex senior health, life and auto, and home insurance policies."
                                type="Public"
                                founded="1985"
                                hq="Overland Park, KS"
                                website="https://life.selectquote.com/"
                                growthLabels={[2020]}
                                growthData={[5000]}
                                ratings={3.2}
                                jobPage="https://www.selectquotecareer.com/"
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
                            <SelectQuoteIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2020"]}
                                revenueData={[141000000]}
                                netIncomeData={[20000000]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Insurance", "Accounting", "Customer Service", "Management", "Software Development"]}
                                salaryData={[81000, 50000, 35000, 80000, 87000]}
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

export default SelectQuoteInfo;