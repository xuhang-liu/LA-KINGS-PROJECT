import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import CharlesIQ from './../interviewQuestions/CharlesIQ';
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


class CharlesInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Charles Schwab</title>
                    <meta name="Description" CONTENT="The Charles Schwab Corporation is a savings and loan holding company providing wealth management, securities brokerage, banking, asset management, custody, and financial advisory services. It operates in 2 segments: Investor Services and Advisor Services. The Investor Services segment provides retail brokerage and banking services to individual investors, and retirement plan services, as well as other corporate brokerage services, to businesses and their employees. The Advisor Services segment provides custodial, trading, banking, and support services, as well as retirement business services, to independent registered investment advisors (RIAs), independent retirement advisors, and recordkeepers." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/charles-schwab"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Charles Schwab"
                    pageDescription="How to get a job at Charles Schwab."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="The Charles Schwab Corporation is a savings and loan holding company providing wealth management, securities brokerage, banking, asset management, custody, and financial advisory services. It operates in 2 segments: Investor Services and Advisor Services. The Investor Services segment provides retail brokerage and banking services to individual investors, and retirement plan services, as well as other corporate brokerage services, to businesses and their employees. The Advisor Services segment provides custodial, trading, banking, and support services, as well as retirement business services, to independent registered investment advisors (RIAs), independent retirement advisors, and recordkeepers."
                                type="Public"
                                founded="1971"
                                hq="San Francisco, CA, US"
                                website="https://www.schwab.com/"
                                growthLabels={[2018, 2019]}
                                growthData={[19314, 19700]}
                                ratings={3.7}
                                jobPage="https://www.aboutschwab.com/careers"
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
                                    labels={["Creative", "Support", "HR", "Administrative", "Technology", "Finance", "Sales & BD", "Retail", "Other", "Operations", "Marketing & PR"]}
                                    series={[0.3, 13.9, 0.3, 1.2, 50, 13, 3.6, 1.5, 8.8, 6.7, 0.6]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <CharlesIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[8618000000, 10132000000, 10721000000]}
                                netIncomeData={[2180000000, 3329000000, 5920000000]}
                                gpmData={[100, 100, 100]}
                            />
                            <SalaryBar
                                labels={["Senior Manager", "Financial Consultant", "Business Analyst", "Software Developers", "Customer Service Representative"]}
                                salaryData={[134266, 117138, 86625, 120135, 42373]}
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

export default CharlesInfo;