import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import RCIQ from './../interviewQuestions/RCIQ';
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


class RCInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Rothschild & Co</title>
                    <meta name="Rothschild & Co is a global financial advisory group which provides M&A, strategy and financing advice, as well as investment and wealth management solutions to large institutions, families, individuals and governments. There are three business lines in the Company: Rothschild Global Advisory, Rothschild Private Wealth and Asset Management, and Rothschild Merchant Banking. Rothschild & Co invests in corporate private equity, secondaries, multi-managers funds and co-investments, direct lending, and credit management businesses." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/rothschild-co"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Rothschild & Co"
                    pageDescription="How to get a job at Rothschild & Co."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Rothschild & Co is a global financial advisory group which provides M&A, strategy and financing advice, as well as investment and wealth management solutions to large institutions, families, individuals and governments. There are three business lines in the Company: Rothschild Global Advisory, Rothschild Private Wealth and Asset Management, and Rothschild Merchant Banking. Rothschild & Co invests in corporate private equity, secondaries, multi-managers funds and co-investments, direct lending, and credit management businesses."
                                type="Public"
                                founded="1798"
                                hq="Paris, FR"
                                website="https://www.rothschildandco.com/"
                                growthLabels={[2020]}
                                growthData={[3557]}
                                ratings={4.3}
                                jobPage="https://www.rothschildandco.com/en/careers/"
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
                                    labels={["Technology", "Sales & BD", "Finance", "Operations", "Other", "Support"]}
                                    series={[13, 4.3, 8.7, 4.3, 60.9, 8.7]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RCIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {/*<RevenueBar
                                labels={["2016", "2017", "2018"]}
                                revenueData={[2630000000, 3060000000, 3300000000]}
                                netIncomeData={[422060000, 572500000, 595940000]}
                                gpmData={[75.64, 76.17, 76.42]}
                            />*/}
                            <SalaryBar
                                labels={["Analyst", "Investment Banking Analyst", "Financial Analyst", "Administrative Assistant"]}
                                salaryData={[151945, 135000, 85000, 81000]}
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

export default RCInfo;