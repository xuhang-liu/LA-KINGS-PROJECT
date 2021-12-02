import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import FTBIQ from './../interviewQuestions/FTBIQ';
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


class FTBInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Fifth Third Bancorp</title>
                    <meta name="Fifth Third Bancorp is a diversified financial services company. It operates four main businesses: Commercial Banking, Branch Banking, Consumer Lending, and Wealth & Asset Management. The company provides a range of financial products and services including checking, savings and money market accounts, wealth management solutions, payments and commerce solutions, insurance services, and credit products. It serves commercial, financial, retail, governmental, educational, energy, and healthcare sectors." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/fifth-third-bancorp"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Fifth Third Bancorp"
                    pageDescription="How to get a job at Fifth Third Bancorp."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Fifth Third Bancorp is a diversified financial services company. It operates four main businesses: Commercial Banking, Branch Banking, Consumer Lending, and Wealth & Asset Management. The company provides a range of financial products and services including checking, savings and money market accounts, wealth management solutions, payments and commerce solutions, insurance services, and credit products. It serves commercial, financial, retail, governmental, educational, energy, and healthcare sectors."
                                type="Public"
                                founded="1858"
                                hq="Cincinnati, OH, US"
                                website="https://www.53.com/"
                                growthLabels={[2017, 2018, 2019]}
                                growthData={[18125, 17437, 19869]}
                                ratings={3.6}
                                jobPage="https://www.53.com/content/fifth-third/en/careers.html"
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
                                    labels={["Creative", "Support", "HR", "Legal", "Operations", "Finance", "Administrative", "Retail", "Other", "Sales & BD", "Technology"]}
                                    series={[0.6, 2.6, 0.1, 0.1, 0.6, 33.6, 1.7, 17.3, 26.1, 4.1, 13.1]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <FTBIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[7710000000, 7970000000, 9790000000]}
                                netIncomeData={[2190000000, 2190000000, 2510000000]}
                                gpmData={[91.04, 86.92, 85.12]}
                            />}
                            <SalaryBar
                                labels={["Credit Analyst", "Quantitative Analyst", "Investment Banker", "Business Analyst", "Vice President"]}
                                salaryData={[61833, 87996, 56927, 63786, 120051]}
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

export default FTBInfo;