import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import BBIQ from './../interviewQuestions/AIGIQ';
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


class BBInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Bloomberg</title>
                    <meta name="Description" CONTENT="Bloomberg is a financial software, data, and media company that provides financial software tools such as an analytics and equity trading platform, data services and news to financial companies and organizations through the Bloomberg terminal (via its Bloomberg Professional Service), its core money-generating product. It also includes a wire service (Bloomberg News), a global television network (Bloomberg Television), a radio station (WBBR), websites, subscription-only newsletters, and three magazines: Bloomberg Businessweek, Bloomberg Markets, and Bloomberg Pursuit." >
                    </meta>
                    <link rel="canonical" href="https://hirebeat.co/companydata-bb"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Bloomberg"
                    pageDescription="How to get a job at Bloomberg."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Bloomberg is a financial software, data, and media company that provides financial software tools such as an analytics and equity trading platform, data services and news to financial companies and organizations through the Bloomberg terminal (via its Bloomberg Professional Service), its core money-generating product. It also includes a wire service (Bloomberg News), a global television network (Bloomberg Television), a radio station (WBBR), websites, subscription-only newsletters, and three magazines: Bloomberg Businessweek, Bloomberg Markets, and Bloomberg Pursuit."
                                type="Private"
                                founded="1981"
                                hq="New York, US"
                                website="https://www.bloomberg.com/"
                                growthLabels={[2019, 2020]}
                                growthData={[20000, 22289]}
                                ratings={3.9}
                                jobPage="https://careers.bloomberg.com/"
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
                                    labels={["Creative", "Operations", "Marketing & PR", "other", "Sales & BD", "Technology", "HR", "Support", "Retail", "Finance"]}
                                    series={[0.9, 0.3, 0.3, 10.5, 4.7, 69.1, 0.3, 6.4, 4.1, 3.5]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <BBIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[52370000000, 49520000000, 47390000000, 49750000000]}
                                netIncomeData={[349000000, 6060000000, 61000000,3350000000]}
                                gpmData={[30.98, 39.47, 34.23, 48.94]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "HR", "Legal", "Marketing & PR", "Operations", "Other", "Sales & BD", "Support", "Technology"]}
                                salaryData={[125000, 92000, 60000, 107500, 95000, 117800, 137500, 155000, 65000, 110000]}
                            />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginLeft: "5%", marginTop: "5%"}}>
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

export default BBInfo;