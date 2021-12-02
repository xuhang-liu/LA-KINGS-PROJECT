import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import CFGIQ from './../interviewQuestions/CFGIQ';
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


class CFGInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Citizens Financial Group</title>
                    <meta name="Description" CONTENT="Citizens Financial Group (CFG) is a retail bank holding company. The company offers a range of retail and commercial banking products and services through its banking subsidiary, Citizens Bank. It operates in two segments: Consumer Banking and Commercial Banking. The Consumer Banking segment provides retail customers and small businesses with deposit products, mortgage, home equity lending, auto financing, student loans, personal unsecured lines and loans, credit cards, business loans, wealth management, and investment services. The Commercial Banking delivers lending and leasing, deposit and treasury management services, foreign exchange, interest rate and commodity risk management solutions, as well as loan syndications, corporate finance, merger and acquisition, and debt and equity capital markets capabilities to companies and institutions." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/citizens-financial-group"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Citizens Financial Group"
                    pageDescription="How to get a job at Citizens Financial Group."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Citizens Financial Group (CFG) is a retail bank holding company. The company offers a range of retail and commercial banking products and services through its banking subsidiary, Citizens Bank. It operates in two segments: Consumer Banking and Commercial Banking. The Consumer Banking segment provides retail customers and small businesses with deposit products, mortgage, home equity lending, auto financing, student loans, personal unsecured lines and loans, credit cards, business loans, wealth management, and investment services. The Commercial Banking delivers lending and leasing, deposit and treasury management services, foreign exchange, interest rate and commodity risk management solutions, as well as loan syndications, corporate finance, merger and acquisition, and debt and equity capital markets capabilities to companies and institutions."
                                type="Public"
                                founded="1828"
                                hq="Providence, RI, US"
                                website="https://www.citizensbank.com/"
                                growthLabels={[2017, 2018, 2019]}
                                growthData={[17600, 18100, 18000]}
                                ratings={3.4}
                                jobPage="https://jobs.citizensbank.com/"
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
                                    labels={["Legal", "Support", "HR", "Creative", "Operations", "Finance", "Administrative", "Technology", "Other", "Sales & BD", "Retail"]}
                                    series={[0, 8.1, 0.4, 1.9, 2.7, 47.7, 1.2, 15.8, 16.2, 5.2, 0.8]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <CFGIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[6450000000, 7350000000, 8070000000]}
                                netIncomeData={[1650000000, 1720000000, 1790000000]}
                                gpmData={[88.43, 83.33, 80.47]}
                            />}
                            <SalaryBar
                                labels={["Finance", "Legal", "Marketing & PR", "Operations", "Other", "Sales & BD", "Support", "Technology"]}
                                salaryData={[80700, 142300, 85400, 93200, 93200, 87400, 82500, 91000]}
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

export default CFGInfo;