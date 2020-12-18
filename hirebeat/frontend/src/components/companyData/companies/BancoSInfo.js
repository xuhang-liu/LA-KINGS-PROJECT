import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import BancoSIQ from './../interviewQuestions/BancoSIQ';
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


class BancoSInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Banco Santander</title>
                    <meta name="Banco Santander, together with its subsidiaries, provides various retail and commercial banking products and services. It offers deposits, insurance, lending and operates through the following segments: Retail Banking, Santander Global Corporate Banking, and Spain Real Estate Activity. The Retail Banking segment covers all customer banking businesses, including consumer finance. The Santander Global Corporate Banking segment involves global corporate banking, investment banking, and markets worldwide including all treasuries managed globally, both trading and distribution to customers." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/banco-santander"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Banco Santander"
                    pageDescription="How to get a job at Banco Santander."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Banco Santander, together with its subsidiaries, provides various retail and commercial banking products and services. It offers deposits, insurance, lending and operates through the following segments: Retail Banking, Santander Global Corporate Banking, and Spain Real Estate Activity. The Retail Banking segment covers all customer banking businesses, including consumer finance. The Santander Global Corporate Banking segment involves global corporate banking, investment banking, and markets worldwide including all treasuries managed globally, both trading and distribution to customers."
                                type="Public"
                                founded="1857"
                                hq="Boadilla del Monte, ES"
                                website="https://www.santander.com/"
                                growthLabels={[2017, 2018, 2019]}
                                growthData={[202251, 202713, 196419]}
                                ratings={3.3}
                                jobPage="https://www.santander.com/en/careers"
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
                                    labels={["Sale & BD", "Support", "Technology", "Other"]}
                                    series={[4.8, 2.4, 14.3, 78.6]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <BancoSIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2017", "2018", "2019", "2020"]}
                                revenueData={[79234000000, 80790000000, 79219000000, 46047000000]}
                                netIncomeData={[7035000000, 8562000000, 6630000000, 5896000000]}
                                gpmData={[68.98, 70.79, 69.9, 74.88]}
                            />}
                            <SalaryBar
                                labels={["Credit Analyst", "Risk Analyst", "Financial Analyst", "Quantitative Analyst"]}
                                salaryData={[67532, 71568, 76201, 81971]}
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

export default BancoSInfo;