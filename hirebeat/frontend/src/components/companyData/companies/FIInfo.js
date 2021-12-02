import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import FIIQ from './../interviewQuestions/FIIQ';
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


class FIInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Fidelity Investments</title>
                    <meta name="Description" CONTENT="Fidelity Investments is a provider of financial services and investment resources. The Company manages a large family of mutual funds that provides fund distribution and investment advice services, as well as discount brokerage services, retirement services, wealth management, securities execution and clearance, life insurance, and a number of other services. It provides its services to individual investors, businesses, financial advisors, and institutions. The Company manages equity, fixed income, and balanced mutual funds. It invests in the public equity and fixed income markets." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/fidelity-investments"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Fidelity Investments"
                    pageDescription="How to get a job at Fidelity Investments."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Fidelity Investments is a provider of financial services and investment resources. The Company manages a large family of mutual funds that provides fund distribution and investment advice services, as well as discount brokerage services, retirement services, wealth management, securities execution and clearance, life insurance, and a number of other services. It provides its services to individual investors, businesses, financial advisors, and institutions. The Company manages equity, fixed income, and balanced mutual funds. It invests in the public equity and fixed income markets."
                                type="Private"
                                founded="1946"
                                hq="Boston, MA, US"
                                website="https://www.fidelity.com/"
                                growthLabels={[2019]}
                                growthData={[10000]}
                                ratings={4.1}
                                jobPage="https://jobs.fidelity.com/"
                            />
                        </div>

                        {/*<div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <AIGIP />
                        </div>*/}

                        {/*<div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <h3 className="companydata-text1">Hiring Categories</h3>
                            <div style={{margin: "15% 0"}}>
                                <Category
                                    height="300"
                                    labels={["Artificial Intelligence", "Business Strategy & Operations", "Cutomer Service", "Finance & Accounting", "Financial Planning", "Human Resources", "Investment", "Marketing & Communications", "Product Development & Management", "Risk Management", "Sales & Relationship Management", "Technology"]}
                                    series={[]}
                                />
                            </div>
                        </div>*/}

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <FIIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[18200000000, 20400000000, 20900000000]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Financial Representative", "Software Engineer", "Customer Relationship Advocate", "Relationship Manager", "Financial Consultant"]}
                                salaryData={[50796, 81311, 46200, 68435, 132997]}
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

export default FIInfo;