import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import SEBIQ from './../interviewQuestions/SEBIQ';
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


class SEBInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Skandinaviska Enskilda Banken AB</title>
                    <meta name="Description" CONTENT="SEB is a leading Nordic financial services group. As a relationship bank, SEB in Sweden and the Baltic countries offers financial advice and a wide range of financial services. In Denmark, Finland, Norway and Germany the bank's operations have a strong focus on corporate and investment banking based on a full-service offering to corporate and institutional clients." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/skandinaviska-enskilda-banken"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Skandinaviska Enskilda Banken AB"
                    pageDescription="How to get a job at Skandinaviska Enskilda Banken AB."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="SEB is a leading Nordic financial services group. As a relationship bank, SEB in Sweden and the Baltic countries offers financial advice and a wide range of financial services. In Denmark, Finland, Norway and Germany the bank's operations have a strong focus on corporate and investment banking based on a full-service offering to corporate and institutional clients."
                                type="Public"
                                founded="1856"
                                hq="Stockholm, SE"
                                website="https://sebgroup.com/"
                                growthLabels={[2020]}
                                growthData={[15000]}
                                ratings={3.8}
                                jobPage="https://sebgroup.com/career"
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
                            <SEBIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2019"]}
                                revenueData={[10000000000]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Customer Services & Support", "Engineering", "Finance & Accounting", "Information Technology", "Others"]}
                                salaryData={[58000, 71000, 175000, 72000, 36000]}
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

export default SEBInfo;