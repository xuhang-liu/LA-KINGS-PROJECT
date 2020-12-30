import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import ABSAIQ from './../interviewQuestions/ABSAIQ';
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


class ABSAInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Absa Group</title>
                    <meta name="Description" CONTENT="Absa Group is a provider of financial services. It offers credit cards, loans, deposits, savings, insurance products, and more. The company provides investment banking, wealth and asset management, treasury, financial advisory, and other services." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/absa-group"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Absa Group"
                    pageDescription="How to get a job at Absa Group."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Absa Group is a provider of financial services. It offers credit cards, loans, deposits, savings, insurance products, and more. The company provides investment banking, wealth and asset management, treasury, financial advisory, and other services."
                                type="Public"
                                founded="1991"
                                hq="Johannesburg, ZA"
                                website="https://www.absa.africa/absaafrica/"
                                growthLabels={[2020]}
                                growthData={[24892]}
                                ratings={3.6}
                                jobPage="https://www.absa.africa/absaafrica/careers/"
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
                            <ABSAIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2019"]}
                                revenueData={[5480000000]}
                                netIncomeData={[99000000]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Vice President", "Head of Strategy & Planning", "Manager", "Credit Analyst", "Quantitative Risk Analyst", "Financial Advisor"]}
                                salaryData={[85000, 98000, 73000, 50000, 30000, 82000]}
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

export default ABSAInfo;