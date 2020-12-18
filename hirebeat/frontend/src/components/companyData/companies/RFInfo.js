import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import RFIQ from './../interviewQuestions/RFIQ';
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


class RFInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Regions Financial</title>
                    <meta name="Description" CONTENT="Regions Financial Corporation is a full-service provider of consumer and commercial banking, wealth management, and mortgage products and services. It operates in three segments: Corporate Bank, Consumer Bank, and Wealth Management. The Corporate Bank segment represents its commercial banking functions, including commercial and industrial, commercial real estate, and investor real estate lending. The Consumer Bank segment represents its branch network, including consumer banking products and services related to residential first mortgages, home equity lines and loans, small business loans, indirect loans, consumer credit cards and other consumer loans, as well as the corresponding deposit relationships. The Wealth Management segment offers individuals, businesses, governmental institutions, and non-profit entities a range of solutions to enable the transfer of wealth." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/regions-financial"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Regions Financial"
                    pageDescription="How to get a job at Regions Financial."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Regions Financial Corporation is a full-service provider of consumer and commercial banking, wealth management, and mortgage products and services. It operates in three segments: Corporate Bank, Consumer Bank, and Wealth Management. The Corporate Bank segment represents its commercial banking functions, including commercial and industrial, commercial real estate, and investor real estate lending. The Consumer Bank segment represents its branch network, including consumer banking products and services related to residential first mortgages, home equity lines and loans, small business loans, indirect loans, consumer credit cards and other consumer loans, as well as the corresponding deposit relationships. The Wealth Management segment offers individuals, businesses, governmental institutions, and non-profit entities a range of solutions to enable the transfer of wealth."
                                type="Public"
                                founded="1971"
                                hq="Birmingham, AL, US"
                                website="https://www.regions.com/"
                                growthLabels={[2017, 2018, 2019]}
                                growthData={[21714, 19969, 19564]}
                                ratings={3.5}
                                jobPage="https://www.regions.com/about-regions/careers"
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
                                    labels={["Administrative", "Technology", "Other", "Operations", "Retail", "Support", "HR", "Marketing & PR", "Finance"]}
                                    series={[0.7, 9.1, 3.5, 5.7, 0.3, 1.5, 0.4, 0.4, 78.4]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RFIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2017", "2018", "2019", "2020"]}
                                revenueData={[5949000000, 6412000000, 6755000000, 6617000000]}
                                netIncomeData={[1199000000, 1695000000, 1503000000, 769000000]}
                                gpmData={[92.47, 89.74, 86.77, 91.9]}
                            />}
                            <SalaryBar
                                labels={["Administrative", "Finance", "Legal", "Marketing & PR", "Sales & BD", "Support", "Technology"]}
                                salaryData={[63400, 56900, 48800, 80000, 105000, 75400, 79000]}
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

export default RFInfo;