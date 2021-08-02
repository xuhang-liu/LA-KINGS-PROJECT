import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import MetLifeIQ from './../interviewQuestions/MetLifeIQ';
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


class MetLifeInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – MetLife</title>
                    <meta name="Description" CONTENT="MetLife Info"></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="MetLife"
                    pageDescription="How to get a job at MetLife."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="MetLife is a financial services company providing insurance and employee benefits. It offers various insurance and financial services products, including life, medical, dental, disability, property, casualty, credit and other accident and health insurance, guaranteed interest, stable value, annuities, endowment, and retirement savings products for individuals and groups. The company also operates as an institutional investor focused primarily on investment-grade corporate bonds, structured finance securities, mortgage loans, agency securities, and real estate and corporate equity."
                                type="Public"
                                founded="1868"
                                hq="New York, NY"
                                website="https://www.metlife.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={3.8}
                                jobPage="https://jobs.metlife.com/"
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
                            <MetLifeIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2015", "2016", "2017", "2018", "2019"]}
                                revenueData={[61300000000, 60800000000, 62300000000, 67900000000, 69600000000]}
                                netIncomeData={[5400000000, 854000000, 4000000000, 5100000000, 5900000000]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Systems Analyst", "Business Analyst", "Manager", "Claims Adjuster", "Associate"]}
                                salaryData={[109262, 65012, 111405, 58711, 105345]}
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

export default MetLifeInfo;