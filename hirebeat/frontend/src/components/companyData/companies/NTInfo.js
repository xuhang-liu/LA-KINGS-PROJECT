import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import NTIQ from './../interviewQuestions/NTIQ';
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


class NTInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Northern Trust</title>
                    <meta name="Description" CONTENT="Northern Trust is a provider of wealth management, asset servicing, asset management, and banking solutions to corporations, institutions, families, and individuals. It is a financial holding company conducting business through various subsidiaries, including The Northern Trust Company (Bank). The company focuses on managing and servicing client assets through its two client-focused segments: Corporate & Institutional Services (C&IS) and Wealth Management. It also supports the C&IS and Wealth Management segments by providing a range of asset management and related services through its subsidiaries." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/northern-trust"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Northern Trust"
                    pageDescription="How to get a job at Northern Trust."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Northern Trust is a provider of wealth management, asset servicing, asset management, and banking solutions to corporations, institutions, families, and individuals. It is a financial holding company conducting business through various subsidiaries, including The Northern Trust Company (Bank). The company focuses on managing and servicing client assets through its two client-focused segments: Corporate & Institutional Services (C&IS) and Wealth Management. It also supports the C&IS and Wealth Management segments by providing a range of asset management and related services through its subsidiaries."
                                type="Public"
                                founded="1889"
                                hq="Chicago, IL, US"
                                website="https://www.northerntrust.com/"
                                growthLabels={[2018, 2019]}
                                growthData={[18679, 19800]}
                                ratings={3.9}
                                jobPage="https://careers.northerntrust.com/"
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
                                    labels={["Administrative", "Technology", "Finance", "Sales & BD", "Retail", "Other", "Support", "Marketing & PR", "Operations", "HR"]}
                                    series={[1.0, 44.6, 20.0, 3.1, 1.5, 16.9, 6.7, 1.0, 4.1, 1.0]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <NTIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2018", "2019", "2020"]}
                                revenueData={[6659000000, 6895000000, 6464000000]}
                                netIncomeData={[1490000000, 1429000000, 1265000000]}
                                gpmData={[89.51, 88.08, 94.78]}
                            />}
                            <SalaryBar
                                labels={["Finance Analyst", "Investment Associate", "Vice President", "Operation Analyst", "Consultant"]}
                                salaryData={[50042, 68749, 143386, 50198, 70785]}
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

export default NTInfo;