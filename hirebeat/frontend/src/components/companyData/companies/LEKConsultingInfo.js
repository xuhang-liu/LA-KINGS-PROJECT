import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import LEKConsultingIQ from './../interviewQuestions/LEKConsultingIQ';
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


class LEKConsultingInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – L.E.K.Consulting</title>
                    <meta name="Description" CONTENT="L.E.K. Consulting is a global management consulting firm. Its core capabilities include data and analytics, digital, disruption management, marketing and sales, mergers and acquisitions, organization and performance, performance improvement, post-merger integration, private equity, strategy, transformation, and value activation. The firm serves private and public sector organizations, private equity firms, and emerging entrepreneurial businesses across a broad range of industries, such as business services, consumer products, education, energy and environment, financial services, healthcare services, industrials, life sciences, and pharma, media and entertainment, MedTech, private equity, retail, technology, and travel and transport." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/lek-consulting"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="L.E.K.Consulting"
                    pageDescription="How to get a job at L.E.K.Consulting."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="L.E.K. Consulting is a global management consulting firm. Its core capabilities include data and analytics, digital, disruption management, marketing and sales, mergers and acquisitions, organization and performance, performance improvement, post-merger integration, private equity, strategy, transformation, and value activation. The firm serves private and public sector organizations, private equity firms, and emerging entrepreneurial businesses across a broad range of industries, such as business services, consumer products, education, energy and environment, financial services, healthcare services, industrials, life sciences, and pharma, media and entertainment, MedTech, private equity, retail, technology, and travel and transport."
                                type="Private"
                                founded="1983"
                                hq="Boston, MA"
                                website="https://www.lek.com/"
                                growthLabels={[2020]}
                                growthData={[5000]}
                                ratings={3.6}
                                jobPage="https://www.lek.com/join-lek"
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
                            <LEKConsultingIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={[]}
                                revenueData={[]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Accounting", "Finance", "Healthcare", "Customer Service", "Real Estate"]}
                                salaryData={[128000, 124000, 113000, 113000, 113000]}
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

export default LEKConsultingInfo;