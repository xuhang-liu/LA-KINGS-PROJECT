import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import AEIQ from './../interviewQuestions/AEIQ';
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


class AEInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – American Express</title>
                    <meta name="Description" CONTENT="American Express is a globally integrated payments company. It provides credit and charge cards to consumers, small businesses, mid-sized companies, and large corporations around the world. The company also offers gift cards, rewards, travel and expense management solutions, personal savings, business services, insurance, and more." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/american-express"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="American Express"
                    pageDescription="How to get a job at American Express."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="American Express is a globally integrated payments company. It provides credit and charge cards to consumers, small businesses, mid-sized companies, and large corporations around the world. The company also offers gift cards, rewards, travel and expense management solutions, personal savings, business services, insurance, and more."
                                type="Public"
                                founded="1850"
                                hq="New York, US"
                                website="https://www.americanexpress.com/"
                                growthLabels={[2015, 2016, 2017, 2018, 2019]}
                                growthData={[54800, 56400, 55000, 59000, 64000]}
                                ratings={4.1}
                                jobPage="https://jobs.americanexpress.com/careers"
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
                                    labels={["Creative", "Sales & BD", "Technology", "HR", "Health & Medical", "Operations", "Marketing & PR", "Finance", "Administrative", "Support", "Retail", "Other"]}
                                    series={[0.7, 5.4, 50, 2.7, 0.7, 9.5, 5.4, 6.1, 1.4, 7.4, 0.7, 10]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <AEIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2018", "2019"]}
                                revenueData={[33820000000, 43280000000, 47020000000]}
                                netIncomeData={[5410000000, 6920000000, 6760000000]}
                                gpmData={[88.97, 85.46, 85.03]}
                            />
                            <SalaryBar
                                labels={["Finance", "Technology", "Marketing", "HR", "Sales"]}
                                salaryData={[110000, 98000, 100000, 85000, 72000]}
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

export default AEInfo;