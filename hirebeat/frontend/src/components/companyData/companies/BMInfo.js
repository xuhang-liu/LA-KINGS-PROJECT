import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import BMIQ from './../interviewQuestions/BMIQ';
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


class BMInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Bank Of New York Mellon Corporation(BNY Mellon)</title>
                    <meta name="Description" CONTENT="The Bank of New York Mellon Corporation, which does business as BNY Mellon, is an American worldwide banking and financial services holding company. The Bank's primary functions are managing and servicing the investments of institutions and high-net-worth individuals. BNY Mellon's two primary businesses are Investment Services and Investment Management, which offer services for each stage of investment, from creation through to trading, holding, management, distribution, and restructuring." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/companydata/bny-mellon"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="BNY MELLON"
                    pageDescription="How to get a job at Bank Of New York Mellon Corporation(BNY Mellon)."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="The Bank of New York Mellon Corporation, which does business as BNY Mellon, is an American worldwide banking and financial services holding company. The Bank's primary functions are managing and servicing the investments of institutions and high-net-worth individuals. BNY Mellon's two primary businesses are Investment Services and Investment Management, which offer services for each stage of investment, from creation through to trading, holding, management, distribution, and restructuring."
                                type="Public"
                                founded="1784"
                                hq="New York, US"
                                website="https://www.bnymellon.com/"
                                growthLabels={[2015, 2016, 2017, 2018, 2019]}
                                growthData={[51200, 52000, 52500, 51300, 48400]}
                                ratings={3.2}
                                jobPage="https://jobs.bnymellon.com/"
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
                                    labels={["Legal", "Support", "Retail", "Finance", "Administrative", "Operations", "Marketing & PR", "other", "Sales & BD", "Technology", "HR"]}
                                    series={[0.9, 14.7, 1.3, 12.3, 4.2, 2.0, 0.4, 26.6, 4.7, 32.4, 0.5]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <BMIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019", "2020"]}
                                revenueData={[16617000000, 19213000000, 20822000000, 18685000000]}
                                netIncomeData={[3872000000, 4070000000, 4254000000, 4102000000]}
                                gpmData={[93.54, 85.32, 79.06, 89.61]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "Legal", "Marketing & PR", "Operations", "Other", "Sales & BD", "Support", "Technology"]}
                                salaryData={[100000, 99500, 80000, 128800, 92800, 129100, 90900, 87500, 140000]}
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

export default BMInfo;