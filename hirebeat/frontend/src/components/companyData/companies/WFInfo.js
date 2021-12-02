import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import WFIQ from './../interviewQuestions/WFIQ';
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


class WFInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Wells Fargo</title>
                    <meta name="Description" CONTENT="Wells Fargo is a banking and financial services holding company. It operates in three segments: Community Banking, Wholesale Banking, and Wealth and Investment Management. The Community Banking segment offers checking and savings accounts, credit and debit cards, and automobile, student, mortgage, home equity, and small business loans. The Wholesale Banking segment offers commercial loans and lines of credit, letters of credit, asset-based lending, equipment leasing, international trade facilities, trade financing, collection, foreign exchange, treasury management, merchant payment processing, institutional fixed-income sales, commodity and equity risk management, corporate trust fiduciary and agency, and investment banking services, as well as online/electronic products. The Wealth and Investment Management segment offers financial planning, private banking, credit, investment management, and fiduciary services, as well as retirement and trust services. The company caters to individuals, businesses, and institutions." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/wells-fargo"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Wells Fargo"
                    pageDescription="How to get a job at Wells Fargo."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Wells Fargo is a banking and financial services holding company. It operates in three segments: Community Banking, Wholesale Banking, and Wealth and Investment Management. The Community Banking segment offers checking and savings accounts, credit and debit cards, and automobile, student, mortgage, home equity, and small business loans. The Wholesale Banking segment offers commercial loans and lines of credit, letters of credit, asset-based lending, equipment leasing, international trade facilities, trade financing, collection, foreign exchange, treasury management, merchant payment processing, institutional fixed-income sales, commodity and equity risk management, corporate trust fiduciary and agency, and investment banking services, as well as online/electronic products. The Wealth and Investment Management segment offers financial planning, private banking, credit, investment management, and fiduciary services, as well as retirement and trust services. The company caters to individuals, businesses, and institutions."
                                type="Public"
                                founded="1852"
                                hq="San Francisco, CA, US"
                                website="https://www.wellsfargo.com/"
                                growthLabels={[2017, 2018, 2019]}
                                growthData={[263000, 259000, 260000]}
                                ratings={3.6}
                                jobPage="https://www.wellsfargo.com/about/careers/"
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
                                    labels={["Legal", "Support", "Marketing & PR", "Health & Medical", "Operations", "HR", "Administrative", "Technology", "Finance", "Sales & BD", "Retail", "Other"]}
                                    series={[0.6, 6, 0.3, 0.6, 5.1, 0.4, 1.8, 45.9, 22.3, 1.0, 0.9, 15.1]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <WFIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[94180000000, 97740000000, 101060000000, 85060000000]}
                                netIncomeData={[22050000000, 22460000000, 22880000000, 19550000000]}
                                gpmData={[93.73, 90.43, 85.5, 85.06]}
                            />}
                            <SalaryBar
                                labels={["Administrative", "Finance", "HR", "Legal", "Marketing & PR", "Operations", "Other", "Sales & BD", "Support", "Technology"]}
                                salaryData={[126500, 149000, 164200, 200000, 141500, 114000, 125000, 125000, 110500, 122400]}
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

export default WFInfo;