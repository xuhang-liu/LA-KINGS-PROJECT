import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import KCIQ from './../interviewQuestions/KCIQ';
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


class KCInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – KeyCorp</title>
                    <meta name="KeyCorp is a bank-based financial services company, a holding company for KeyBank National Association. Through KeyBank and certain other subsidiaries, the company provides a range of retail and commercial banking, commercial leasing, investment management, consumer finance, student loan refinancing, commercial mortgage servicing and special servicing, and investment banking products and services. It serves individual, corporate, and institutional clients through two major business segments: Consumer Bank and Commercial Bank." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/keycorp"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="KeyCorp"
                    pageDescription="How to get a job at KeyCorp."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="KeyCorp is a bank-based financial services company, a holding company for KeyBank National Association. Through KeyBank and certain other subsidiaries, the company provides a range of retail and commercial banking, commercial leasing, investment management, consumer finance, student loan refinancing, commercial mortgage servicing and special servicing, and investment banking products and services. It serves individual, corporate, and institutional clients through two major business segments: Consumer Bank and Commercial Bank."
                                type="Public"
                                founded="1994"
                                hq="Cleveland, OH, US"
                                website="https://www.key.com/"
                                growthLabels={[2017, 2018, 2019]}
                                growthData={[18415, 18180, 17045]}
                                ratings={3.5}
                                jobPage="https://www.key.com/about/careers.jsp"
                            />
                        </div>

                        {/*<div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <RJIP />
                        </div>*/}

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <h3 className="companydata-text1">Hiring Categories</h3>
                            <div style={{margin: "15% 0"}}>
                                <Category
                                    height="300"
                                    labels={["Creative", "Operations", "Marketing & PR", "Health & Medical", "Support", "HR", "Administrative", "Retail", "Finance", "Sales & BD", "Technology", "Other"]}
                                    series={[0, 6.4, 0, 6.9, 1.2, 0.2, 2.1, 4.3, 55.3, 1.6, 9.7, 12.1]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <KCIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2017", "2018", "2019", "2020"]}
                                revenueData={[6868000000, 7393000000, 7694000000, 7346000000]}
                                netIncomeData={[1226000000, 1800000000, 1620000000, 1123000000]}
                                gpmData={[91.07, 86.89, 82.77, 88.2]}
                            />}
                            <SalaryBar
                                labels={["Investment Banking Analyst", "Financial Advisor", "Credit Risk Analyst", "Equity Research Associate", "Business Analyst"]}
                                salaryData={[108257, 59890, 65635, 103134, 62808]}
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

export default KCInfo;