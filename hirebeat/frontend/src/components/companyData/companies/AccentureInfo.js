import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import AccentureIQ from './../interviewQuestions/AccentureIQ';
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


class AccentureInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Accenture</title>
                    <meta name="Description" CONTENT="Accenture (formerly known as Andersen Consulting) is a strategy, consulting, interactive, technology, and operations services provider with digital capabilities. The company operates in five segments: Communications, Media & Technology, Financial Services, Health & Public Service, Products, and Resources. The Communications, Media & Technology segment helps communications, media, high tech, and software and platform companies accelerate and deliver digital transformation. The Financial Services segment serves the banking, capital markets, and insurance industries. The Health & Public Service segment offers consulting services and digital solutions to healthcare payers and providers, government departments and agencies, public service organizations, educational institutions, and non-profit organizations. The Products segment delivers distribution, sales and marketing, research and development, manufacturing, finance, human resources, procurement, and supply chain digital solutions. The Resources segment helps organizations develop and execute strategies, improve operations, manage change initiatives, and integrate digital technologies." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/accenture"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Accenture"
                    pageDescription="How to get a job at Accenture."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Accenture (formerly known as Andersen Consulting) is a strategy, consulting, interactive, technology, and operations services provider with digital capabilities. The company operates in five segments: Communications, Media & Technology, Financial Services, Health & Public Service, Products, and Resources. The Communications, Media & Technology segment helps communications, media, high tech, and software and platform companies accelerate and deliver digital transformation. The Financial Services segment serves the banking, capital markets, and insurance industries. The Health & Public Service segment offers consulting services and digital solutions to healthcare payers and providers, government departments and agencies, public service organizations, educational institutions, and non-profit organizations. The Products segment delivers distribution, sales and marketing, research and development, manufacturing, finance, human resources, procurement, and supply chain digital solutions. The Resources segment helps organizations develop and execute strategies, improve operations, manage change initiatives, and integrate digital technologies."
                                type="Public"
                                founded="1989"
                                hq="Dublin, Ireland"
                                website="https://www.accenture.com/us-en"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={4.0}
                                jobPage="https://www.accenture.com/us-en/careers"
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
                                    labels={["Support", "Technology", "Marketing & PR", "Finance", "Other"]}
                                    series={[6.3, 62.5, 6.3, 6.3, 18.8]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <AccentureIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2018", "2019", "2020"]}
                                revenueData={[41600000000, 43220000000, 44330000000]}
                                netIncomeData={[4210000000, 4850000000, 5190000000]}
                                gpmData={[29.91, 30.81, 31.53]}
                            />
                            <SalaryBar
                                labels={["Consultant", "Business Analyst", "Software Engineer", "Computer Systems Analyst II", "Programmer Analyst II"]}
                                salaryData={[105290, 92668, 72920, 105711, 70457]}
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

export default AccentureInfo;