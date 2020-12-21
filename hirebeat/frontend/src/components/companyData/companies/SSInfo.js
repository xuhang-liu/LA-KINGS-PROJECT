import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import SSIQ from './../interviewQuestions/SSIQ';
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


class SSInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – State Street</title>
                    <meta name="Description" CONTENT="State Street is a financial holding company providing a range of financial products and services to institutional investors. It operates in 2 lines of business, which are Investment Servicing and Investment Management. The Investment Servicing line of business performs core custody and related functions, such as providing institutional investors with clearing, settlement, and payment services. The Investment Management line of business, through State Street Global Advisors, offers a range of investment management strategies and products for its clients." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/state-street"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="State Street"
                    pageDescription="How to get a job at State Street."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="State Street is a financial holding company providing a range of financial products and services to institutional investors. It operates in 2 lines of business, which are Investment Servicing and Investment Management. The Investment Servicing line of business performs core custody and related functions, such as providing institutional investors with clearing, settlement, and payment services. The Investment Management line of business, through State Street Global Advisors, offers a range of investment management strategies and products for its clients."
                                type="Public"
                                founded="1792"
                                hq="Boston, MA, US"
                                website="https://www.statestreet.com/"
                                growthLabels={[2018, 2019, 2020]}
                                growthData={[40142, 39103, 39068]}
                                ratings={3.2}
                                jobPage="https://www.statestreet.com/about/careers.html"
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
                                    series={[0.9, 5.6, 0.3, 0.2, 6.0, 0.7, 4.3, 31.8, 24.8, 2.6, 2.9, 20.0]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <SSIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2018", "2019", "2020"]}
                                revenueData={[13122000000, 13131000000, 12465000000]}
                                netIncomeData={[2404000000, 2009000000, 2251000000]}
                                gpmData={[92.45, 89.53, 94.94]}
                            />}
                            <SalaryBar
                                labels={["Finance Accountant", "Quantitative Analyst", "Financial Analyst", "Application Developer", "Software Engineer"]}
                                salaryData={[42054, 124789, 65620, 97216, 100604]}
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

export default SSInfo;