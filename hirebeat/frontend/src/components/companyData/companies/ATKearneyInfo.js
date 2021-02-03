import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import ATKearneyIQ from './../interviewQuestions/ATKearneyIQ';
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


class ATKearneyInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Kearney</title>
                    <meta name="Description" CONTENT="Kearney is a management consulting firm. It focuses on strategic and operational CEO-agenda issues facing businesses, governments, and institutions around the globe. Its industry specialties include aerospace and defense, automotive, chemicals, communications, media and technology, consumer products and retail, energy, financial institutions, health, industrial goods and services, infrastructure, metals and mining, private equity, public sector, transportation, and travel. Major service lines are in strategy, analytics, mergers and acquisitions, innovation, operations, technology strategy, organization and transformation, marketing and sales, procurement, and sustainability." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/kearney"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Kearney"
                    pageDescription="How to get a job at Kearney."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Kearney is a management consulting firm. It focuses on strategic and operational CEO-agenda issues facing businesses, governments, and institutions around the globe. Its industry specialties include aerospace and defense, automotive, chemicals, communications, media and technology, consumer products and retail, energy, financial institutions, health, industrial goods and services, infrastructure, metals and mining, private equity, public sector, transportation, and travel. Major service lines are in strategy, analytics, mergers and acquisitions, innovation, operations, technology strategy, organization and transformation, marketing and sales, procurement, and sustainability."
                                type="Private"
                                founded="1926"
                                hq="Chicago, IL"
                                website="https://www.kearney.com/"
                                growthLabels={[2020]}
                                growthData={[5000]}
                                ratings={4.2}
                                jobPage="https://www.kearney.com/working-here"
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
                            <ATKearneyIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018"]}
                                revenueData={[1100000000, 1100000000, 1300000000]}
                                netIncomeData={[10700000, 3800000, 10000000]}
                                gpmData={[76.92, 76.03, 73.78]}
                            />
                            <SalaryBar
                                labels={["Analytics Analyst", "Associate", "Data Associate", "Management Consultant", "Principal"]}
                                salaryData={[145875, 154061, 124024, 162493, 152151]}
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

export default ATKearneyInfo;