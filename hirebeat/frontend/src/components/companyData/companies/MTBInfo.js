import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import MTBIQ from './../interviewQuestions/MTBIQ';
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


class MTBInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – M&T Bank</title>
                    <meta name="M&T Bank Info"></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="M&T Bank"
                    pageDescription="How to get a job at M&T Bank."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="M&T Bank is a company that provides commercial and retail banking services. It also offers trust and wealth management services, fiduciary and custodial services, investment management services, and insurance agency services, as well as reinsures credit life. The company provides its services through banking offices, business banking centers, telephone and Internet banking, and automated teller machines (ATMs)."
                                type="Public"
                                founded="1856"
                                hq="Buffalo, NY, US"
                                website="https://www3.mtb.com/"
                                growthLabels={[2018, 2019]}
                                growthData={[16344, 16998]}
                                ratings={3.3}
                                jobPage="https://www3.mtb.com/homepage/careers"
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
                                    labels={["N/A"]}
                                    series={[100]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <MTBIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {/*<RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[7710000000, 7970000000, 9790000000]}
                                netIncomeData={[2190000000, 2190000000, 2510000000]}
                                gpmData={[91.04, 86.92, 85.12]}
                            />*/}
                            <SalaryBar
                                labels={["Financial Analyst", "Credit Analyst", "Risk Analyst", "Vice President", "Business Analyst"]}
                                salaryData={[54547, 54739, 51264, 126509, 54760]}
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

export default MTBInfo;