import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import CreditSuisseIQ from './../interviewQuestions/CreditSuisseIQ';
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


class CreditSuisseInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Credit Suisse</title>
                    <meta name="Description" CONTENT="Credit Suisse is a company operating as a global provider of private banking and investment banking services. The company offers a range of advice and financial solutions, including structured advisory, wealth management solutions, investment advice, discretionary asset management services, and advisory services related to mergers and acquisitions. It also delivers various banking services, such as lending, payment, capital goods leasing, syndications, and structured finance, trade finance, ship, and aviation finance, securities, treasury, foreign exchange services, as well as fund solutions and fund-linked services." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/credit-suisse"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Credit Suisse"
                    pageDescription="How to get a job at Credit Suisse."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Credit Suisse is a company operating as a global provider of private banking and investment banking services. The company offers a range of advice and financial solutions, including structured advisory, wealth management solutions, investment advice, discretionary asset management services, and advisory services related to mergers and acquisitions. It also delivers various banking services, such as lending, payment, capital goods leasing, syndications, and structured finance, trade finance, ship, and aviation finance, securities, treasury, foreign exchange services, as well as fund solutions and fund-linked services."
                                type="Public"
                                founded="1856"
                                hq="Zürich, CH"
                                website="https://www.credit-suisse.com/us/en.html"
                                growthLabels={[]}
                                growthData={[]}
                                ratings={3.9}
                                jobPage="https://www.credit-suisse.com/careers/en/apply.html"
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
                            <CreditSuisseIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[30100000000, 31400000000, 33500000000, 35600000000]}
                                netIncomeData={[2700000000, 948000000, 2000000000, 3400000000]}
                                gpmData={[67, 67, 62, 63]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Business", "Legal", "Marketing", "Operations"]}
                                salaryData={[95000, 90000, 131000, 83000, 95000]}
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

export default CreditSuisseInfo;