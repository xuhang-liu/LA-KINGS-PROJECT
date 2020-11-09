import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import TSMIQ from './../interviewQuestions/TSMIQ';
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


class TSMInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Two Sigma</title>
                    <meta name="Description" CONTENT="Two Sigma Investments is a hedge fund that utilizes machine learning, distributed computing, and other technologies to improve investment strategies. It primarily focuses on equities, fixed income, currencies, and credit markets. The company serves public and corporate pension plans, sovereign wealth funds, insurance companies, research institutions, educational endowments, healthcare systems, and foundations." >
                    </meta>
                    <link rel="canonical" href="https://hirebeat.co/companydata/two-sigma"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Two Sigma"
                    pageDescription="How to get a job at Two Sigma."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Two Sigma Investments is a hedge fund that utilizes machine learning, distributed computing, and other technologies to improve investment strategies. It primarily focuses on equities, fixed income, currencies, and credit markets. The company serves public and corporate pension plans, sovereign wealth funds, insurance companies, research institutions, educational endowments, healthcare systems, and foundations."
                                type="Private"
                                founded="2001"
                                hq="New York, US"
                                website="https://www.twosigma.com/"
                                growthLabels={[2018, 2019, 2020]}
                                growthData={[2000, 2100, 1667]}
                                ratings={4.4}
                                jobPage="https://www.twosigma.com/careers/"
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
                                    labels={["Administrative", "Sales & BD", "Operations", "Technology", "Marketing & PR", "Retail", "Finance", "Other"]}
                                    series={[2.8, 4.2, 4.2, 72.2, 1.4, 2.8, 1.4, 11.1]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <TSMIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2019"]}
                                revenueData={[24900000]}
                                netIncomeData={[11900000]}
                                gpmData={[39]}
                            />
                            <SalaryBar
                                labels={["Finance", "Legal", "Marketing & PR", "Operations", "Sales & BD", "Support", "Technology", "Data Analyst", "Intern", "Executive Assistant"]}
                                salaryData={[132500, 214000, 155000, 180000, 110000, 99000, 145000, 115000, 110369, 90000]}
                            />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginLeft: "auto", marginRight:'auto', marginTop: "5%"}}>
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

export default TSMInfo;