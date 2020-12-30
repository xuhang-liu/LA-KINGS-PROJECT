import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import AmazonIQ from './../interviewQuestions/AmazonIQ';
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


class AmazonInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Amazon</title>
                    <meta name="Description" CONTENT="Amazon is a company operating a marketplace for consumers, sellers, and content creators. It offers merchandise and content purchased for resale from vendors and those offered by third-party sellers. The company enables authors, musicians, filmmakers, app developers, and others to publish and sell content via its branded websites. Amazon also provides Kindle Direct Publishing, an online platform that allows independent authors and publishers to make their books available in the Kindle Store. In addition, the сompany offers co-branded credit card agreements and advertising services, serves developers and enterprises through Amazon Web Services, and manufactures and sells electronic devices. Currently, Amazon operates in three segments: North America, International, and Amazon Web Services (AWS)" ></meta>
                    <link rel="canonical" href="https://hirebeat.co/amazon"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Amazon"
                    pageDescription="How to get a job at Amazon."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Amazon is a company operating a marketplace for consumers, sellers, and content creators. It offers merchandise and content purchased for resale from vendors and those offered by third-party sellers. The company enables authors, musicians, filmmakers, app developers, and others to publish and sell content via its branded websites. Amazon also provides Kindle Direct Publishing, an online platform that allows independent authors and publishers to make their books available in the Kindle Store. In addition, the сompany offers co-branded credit card agreements and advertising services, serves developers and enterprises through Amazon Web Services, and manufactures and sells electronic devices. Currently, Amazon operates in three segments: North America, International, and Amazon Web Services (AWS)"
                                type="Public"
                                founded="1994"
                                hq="Seattle, WA, US"
                                website="https://www.amazon.com/"
                                growthLabels={[2020]}
                                growthData={[1125300]}
                                ratings={3.9}
                                jobPage="https://www.amazon.jobs/en/"
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
                                    labels={["Creative", "Legal", "Administrative", "Sales & BD", "Support", "Operations", "Technology", "Retail", "Marketing & PR", "Finance", "Other"]}
                                    series={[1.6, 1.6, 1.6, 3.2, 4.8, 4.8, 25.8, 1.6, 1.6, 6.5, 46.8]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <AmazonIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[177870000000, 232890000000, 280520000000]}
                                netIncomeData={[3030000000, 10070000000, 11590000000]}
                                gpmData={[37.07, 40.25, 40.99]}
                            />
                            <SalaryBar
                                labels={["Software Development Engineer", "Business Intelligence Engineer", "Cloud Support Engineer", "Program Manager", "Financial Analyst"]}
                                salaryData={[131056, 101511, 95049, 90780, 78178]}
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

export default AmazonInfo;