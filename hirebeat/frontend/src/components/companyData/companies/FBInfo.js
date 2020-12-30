import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import FBIQ from './../interviewQuestions/FBIQ';
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


class FBInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Facebook</title>
                    <meta name="Description" CONTENT="Facebook is a company providing an online social networking service. It allows its users to connect with friends and family as well as make new connections. The platform provides its users with the ability to create a profile, update information, add images, send friend requests and accept requests from other users. It enables users to join and create pages related to entertainment, sports, business, finance, preferences, hobbies, culture, religion, and a number of other categories." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/facebook"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Facebook"
                    pageDescription="How to get a job at Facebook."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Facebook is a company providing an online social networking service. It allows its users to connect with friends and family as well as make new connections. The platform provides its users with the ability to create a profile, update information, add images, send friend requests and accept requests from other users. It enables users to join and create pages related to entertainment, sports, business, finance, preferences, hobbies, culture, religion, and a number of other categories."
                                type="Public"
                                founded="2004"
                                hq="Menlo Park, CA, US"
                                website="https://www.facebook.com/"
                                growthLabels={[2020]}
                                growthData={[52534]}
                                ratings={4.5}
                                jobPage="https://www.facebook.com/careers/"
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
                                    labels={["Operations", "Technology"]}
                                    series={[20, 80]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <FBIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[40650000000, 55840000000, 70700000000]}
                                netIncomeData={[15930000000, 22110000000, 18490000000]}
                                gpmData={[86.58, 83.25, 81.94]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "Legal", "Marketing", "Support", "Technology", "Operations"]}
                                salaryData={[79000, 120000, 142000, 125000, 135000, 140000]}
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

export default FBInfo;