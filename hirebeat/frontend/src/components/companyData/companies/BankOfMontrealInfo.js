import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import BankOfMontrealIQ from './../interviewQuestions/BankOfMontrealIQ';
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


class BankOfMontrealInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Bank of Montreal</title>
                    <meta name="Description" CONTENT="Bank of Montreal (BMO Financial Group, BMO) is a diversified financial services provider. It operates through three operating groups: Personal and Commercial Banking, BMO Wealth Management, and BMO Capital Markets. The company offers a broad range of personal and commercial banking, wealth management, global markets, and investment banking products and services to individuals, corporate, institutional, and government clients." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/bank-of-montreal"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Bank of Montreal"
                    pageDescription="How to get a job at Bank of Montreal."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Bank of Montreal (BMO Financial Group, BMO) is a diversified financial services provider. It operates through three operating groups: Personal and Commercial Banking, BMO Wealth Management, and BMO Capital Markets. The company offers a broad range of personal and commercial banking, wealth management, global markets, and investment banking products and services to individuals, corporate, institutional, and government clients."
                                type="Public"
                                founded="1817"
                                hq="Toronto, Canada"
                                website="https://www.bmo.com/main/personal"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={3.8}
                                jobPage="jobs.bmo.com/ca/en"
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
                                    labels={["Support", "Technology", "Finance", "Other"]}
                                    series={[25, 25, 25, 25]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <BankOfMontrealIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[16600000000, 17540000000, 18090000000, 20060000000]}
                                netIncomeData={[3620000000, 4250000000, 4330000000, 4560000000]}
                                gpmData={[85.62, 80.66, 74, 66]}
                            />
                            <SalaryBar
                                labels={["Universal Banker", "Mortgage Banker", "Private Banker", "Manager", "Analyst"]}
                                salaryData={[38937, 49761, 120125, 73431, 61745]}
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

export default BankOfMontrealInfo;