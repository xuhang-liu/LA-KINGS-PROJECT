import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import MerrillLynchIQ from './../interviewQuestions/MerrillLynchIQ';
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


class MerrillLynchInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Merrill Lynch</title>
                    <meta name="Description" CONTENT="Merrill Lynch is a company providing wealth management and financial services. It offers account programs, wealth transfer and trust services, life insurance, investment advisory services, annuities, bond ladders, impact investing, retirement services, alternative investments, and other solutions." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/merrill-lynch"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Merrill Lynch"
                    pageDescription="How to get a job at Merrill Lynch."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Merrill Lynch is a company providing wealth management and financial services. It offers account programs, wealth transfer and trust services, life insurance, investment advisory services, annuities, bond ladders, impact investing, retirement services, alternative investments, and other solutions."
                                type="Subsidiary"
                                founded="1914"
                                hq="New York, NY, US"
                                website="https://www.ml.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={3.9}
                                jobPage="https://www.bofaml.com/en-us/content/careers.html"
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
                            <MerrillLynchIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2012"]}
                                revenueData={[13800000000]}
                                netIncomeData={[290000000]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Financial Advisor", "Technology Analyst", "Investment Banking Analyst", "Director", "Stock Broker"]}
                                salaryData={[64307, 74967, 153121, 253992, 76163]}
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

export default MerrillLynchInfo;