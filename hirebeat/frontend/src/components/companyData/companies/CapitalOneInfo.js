import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import CapitalOneIQ from './../interviewQuestions/CapitalOneIQ';
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


class CapitalOneInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Capital One</title>
                    <meta name="Description" CONTENT="Capital One Financial Corporation is a diversified financial services holding company specializing in credit cards, home loans, auto loans, and banking and savings products. Capital One operates in 3 segments: Credit Card, Consumer Banking, and Commercial Banking. The Credit Card segment consists of domestic consumer and small business card lending and international card businesses. The Consumer Banking segment consists of deposit gathering and lending activities for consumers and small businesses, and national auto lending. The Commercial Banking segment consists of our lending, deposit gathering, capital markets, and treasury management services to commercial real estate and commercial and industrial customers." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/capital-one"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Capital One"
                    pageDescription="How to get a job at Capital One."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Capital One Financial Corporation is a diversified financial services holding company specializing in credit cards, home loans, auto loans, and banking and savings products. Capital One operates in 3 segments: Credit Card, Consumer Banking, and Commercial Banking. The Credit Card segment consists of domestic consumer and small business card lending and international card businesses. The Consumer Banking segment consists of deposit gathering and lending activities for consumers and small businesses, and national auto lending. The Commercial Banking segment consists of our lending, deposit gathering, capital markets, and treasury management services to commercial real estate and commercial and industrial customers."
                                type="Public"
                                founded="1994"
                                hq="Mc Lean, VA"
                                website="https://www.capitalone.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={4.1}
                                jobPage="https://www.capitalonecareers.com/"
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
                            <CapitalOneIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[30000000000, 32380000000, 33770000000]}
                                netIncomeData={[1980000000, 6020000000, 5550000000]}
                                gpmData={[90.79, 86.72, 84.68]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Creative", "Finance", "Operations", "Technology"]}
                                salaryData={[95000, 117800, 79000, 99300, 86900]}
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

export default CapitalOneInfo;