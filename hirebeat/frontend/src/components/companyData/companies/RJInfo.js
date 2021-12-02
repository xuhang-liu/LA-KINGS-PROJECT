import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import RJIQ from './../interviewQuestions/RJIQ';
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


class RJInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Raymond James</title>
                    <meta name="Description" CONTENT="Raymond James Financial (RJF) is a financial services company providing private client group, capital markets, asset management, banking, and other services to individuals, corporations, and municipalities. It is engaged in financial services activities, including providing investment management services for retail and institutional clients, the underwriting, distribution, trading and brokerage of equity and debt securities, and the sale of mutual funds and other investment products. The company also provides corporate and retail banking services and trust services." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/raymond-james"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Raymond James"
                    pageDescription="How to get a job at Raymond James."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Raymond James Financial (RJF) is a financial services company providing private client group, capital markets, asset management, banking, and other services to individuals, corporations, and municipalities. It is engaged in financial services activities, including providing investment management services for retail and institutional clients, the underwriting, distribution, trading and brokerage of equity and debt securities, and the sale of mutual funds and other investment products. The company also provides corporate and retail banking services and trust services. "
                                type="Public"
                                founded="1962"
                                hq="St. Petersburg, FL, US"
                                website="https://www.raymondjames.com/"
                                growthLabels={[2018, 2019]}
                                growthData={[13786, 14200]}
                                ratings={3.9}
                                jobPage="https://www.raymondjames.com/careers"
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
                                    labels={["Creative", "Support", "Retail", "Health & Medical", "Operations", "HR", "Administrative", "Marketing & PR", "Finance", "Sales & BD", "Technology", "Other"]}
                                    series={[1.2, 12.2, 2.3, 3.5, 4.1, 4.1, 0.6, 1.2, 39.5, 4.7, 7.0, 19.8]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RJIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2018", "2019", "2020"]}
                                revenueData={[7476000000, 8023000000, 8168000000]}
                                netIncomeData={[856000000, 1032000000, 817000000]}
                                gpmData={[100, 100, 100]}
                            />}
                            <SalaryBar
                                labels={["Finance Advisor", "Investment Banking Analyst", "Equity Research Associate", "Vice President", "Business Analyst"]}
                                salaryData={[63851, 145060, 96016, 241607, 80236]}
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

export default RJInfo;