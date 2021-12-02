import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import DeutscheBankIQ from './../interviewQuestions/DeutscheBankIQ';
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


class DeutscheBankInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Deutsche Bank</title>
                    <meta name="Description" CONTENT="Deutsche Bank is a financial service provider delivering commercial, investment, private, and retail banking. The сompany offers debt, foreign exchange, derivatives, commodities, money markets, repo and securitization, cash equities, research, equity prime services, loans, convertibles, advice on M&A and IPO's, trade finance, retail banking, asset management, and corporate investments." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/deutsche-bank"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Deutsche Bank"
                    pageDescription="How to get a job at Deutsche Bank."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Deutsche Bank is a financial service provider delivering commercial, investment, private, and retail banking. The сompany offers debt, foreign exchange, derivatives, commodities, money markets, repo and securitization, cash equities, research, equity prime services, loans, convertibles, advice on M&A and IPO's, trade finance, retail banking, asset management, and corporate investments."
                                type="Public"
                                founded="1870"
                                hq="Frankfurt am Main, DE"
                                website="https://www.db.com/"
                                growthLabels={[2020]}
                                growthData={[86984]}
                                ratings={3.7}
                                jobPage="https://www.db.com/careers/index_e.html"
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
                                    labels={["Legal", "Administrative", "Sales & BD", "Operations", "Support", "Technology", "Retail", "Marketing & PR", "HR", "Finance", "Other"]}
                                    series={[0.4, 4.9, 1.9, 4, 3.5, 44.1, 4.1, 0.6, 0.6, 13.7, 22.2]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <DeutscheBankIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2015", "2016", "2017", "2018"]}
                                revenueData={[41090000000, 35060000000, 31740000000, 30360000000]}
                                netIncomeData={[8290000000, 1670000000, 900000000, 418000000]}
                                gpmData={[69.94, 58.53, 52.73, 52.35]}
                            />
                            <SalaryBar
                                labels={["Finance", "Legal", "Marketing & PR", "Sales & BD", "Support"]}
                                salaryData={[70000, 100000, 225000, 125000, 90000]}
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

export default DeutscheBankInfo;