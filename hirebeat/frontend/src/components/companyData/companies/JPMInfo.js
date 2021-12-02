import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import JPMIQ from './../interviewQuestions/JPMIQ';
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


class JPMInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – JPMorgan Chase</title>
                    <meta name="Description" CONTENT="JP Morgan Chase is a financial services provider that offers investment banking, asset management, treasury, and other services. It includes four major sectors: Consumer and Community Banking, Corporate and Investment Bank, Commercial Banking, and Asset Management. The Consumer and Community Banking division derives its revenues from its credit card business, consumer and business banking, and mortgage banking. The Corporate and Investment Bank segment offers investment banking, market-making, prime brokerage, and treasury and securities products and services. The Commercial Banking division provides credit, banking, and treasury services to clients including mid-sized businesses, corporations, municipalities, financial institutions, nonprofit entities, and real estate owners and investors. The Asset Management segment provides its clients with strategies and expertise that span the spectrum of asset classes. JPMorgan Chase was formed as a result of a merger between Chase Manhattan Corporation and J.P. Morgan." >
                    </meta>
                    <link rel="canonical" href="https://app.hirebeat.co/jpmorgan-chase"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="JPMorgan Chase"
                    pageDescription="How to get a job at JPMorgan Chase."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="JP Morgan Chase is a financial services provider that offers investment banking, asset management, treasury, and other services. It includes four major sectors: Consumer and Community Banking, Corporate and Investment Bank, Commercial Banking, and Asset Management. The Consumer and Community Banking division derives its revenues from its credit card business, consumer and business banking, and mortgage banking. The Corporate and Investment Bank segment offers investment banking, market-making, prime brokerage, and treasury and securities products and services. The Commercial Banking division provides credit, banking, and treasury services to clients including mid-sized businesses, corporations, municipalities, financial institutions, nonprofit entities, and real estate owners and investors. The Asset Management segment provides its clients with strategies and expertise that span the spectrum of asset classes. JPMorgan Chase was formed as a result of a merger between Chase Manhattan Corporation and J.P. Morgan."
                                type="Public"
                                founded="2000"
                                hq="New York, US"
                                website="https://www.jpmorganchase.com/"
                                growthLabels={[2016, 2017, 2018, 2019]}
                                growthData={[243355, 252539, 256105, 256981]}
                                ratings={4.5}
                                jobPage="https://careers.jpmorgan.com/"
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
                                    labels={["Legal", "Creative", "Health & Medical", "Administrative", "Sales & BD", "Support", "Operations", "Technology", "Retail", "Marketing & PR", "HR", "Finance", "Other"]}
                                    series={[0.2, 0.2, 0.3, 1.9, 2.5, 3.8, 5.5, 36.6, 2.8, 0.4, 0.3, 28.1, 17.4 ]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <JPMIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[11390000000, 13141000000, 14242000000]}
                                netIncomeData={[24440000000, 32470000000,36430000000]}
                                gpmData={[87.47, 82.97, 81.19]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "Banker", "Legal", "Marketing & PR", "Operations", "Consultant", "Sales & BD", "Support", "Technology"]}
                                salaryData={[62000, 89281, 36593, 221000, 65000, 95000, 68000, 76000, 105000, 103000]}
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

export default JPMInfo;