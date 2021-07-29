import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import HSBCIQ from './../interviewQuestions/HSBCIQ';
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


class HSBCInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – HSBC</title>
                    <meta name="Description" CONTENT="HSBC Holdings is a banking and financial services holding company. It operates in three segments: Wealth and Personal Banking, Commercial Banking, and Global Banking & Markets. The Wealth and Personal Banking offers personal banking services, such as current accounts, loans and savings products, as well as investment and wealth management solutions to individuals and their families. The Commercial Banking delivers provides financial services to small, medium-sized, and middle-market enterprises. The Global Banking & Markets segment provides investment banking and financing solutions for corporate and institutional clients, including corporate banking, investment banking, capital markets, trade services, payments and cash management, and leveraged acquisition finance." ></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="HSBC"
                    pageDescription="How to get a job at HSBC."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="HSBC Holdings is a banking and financial services holding company. It operates in three segments: Wealth and Personal Banking, Commercial Banking, and Global Banking & Markets. The Wealth and Personal Banking offers personal banking services, such as current accounts, loans and savings products, as well as investment and wealth management solutions to individuals and their families. The Commercial Banking delivers provides financial services to small, medium-sized, and middle-market enterprises. The Global Banking & Markets segment provides investment banking and financing solutions for corporate and institutional clients, including corporate banking, investment banking, capital markets, trade services, payments and cash management, and leveraged acquisition finance."
                                type="Public"
                                founded="1865"
                                hq="London, GB"
                                website="https://www.hsbc.com/"
                                growthLabels={[2017, 2018, 2019]}
                                growthData={[228687, 235217, 235351]}
                                ratings={3.8}
                                jobPage="https://www.hsbc.com/careers"
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
                                    labels={["Creative", "Support", "Marketing & PR", "Legal", "Operations", "HR", "Administrative", "Technology", "Finance", "Sales & BD", "Retail", "Other"]}
                                    series={[0.7, 13.4, 0.4, 0.4, 6.0, 0.4, 7.9, 12.8, 32.1, 4.8, 3.0, 18.1]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <HSBCIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2016", "2017", "2018"]}
                                revenueData={[80280000000, 79640000000, 87720000000]}
                                netIncomeData={[3450000000, 11880000000, 15030000000]}
                                gpmData={[55.52, 62.38, 59.3]}
                            />}
                            <SalaryBar
                                labels={["Administrative", "Creative", "Finance", "Legal", "Marketing & PR", "Operations", "Other", "Sales & BD", "Support", "Technology"]}
                                salaryData={[107500, 161000, 110000, 125000, 125000, 148500, 202200, 125000, 134000, 135000]}
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

export default HSBCInfo;