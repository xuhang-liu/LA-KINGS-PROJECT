import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import GSIQ from './../interviewQuestions/AIGIQ';
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


class GSInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Goldman Sachs</title>
                    <meta name="Description" CONTENT="Goldman Sachs (also known as The Goldman Sachs Group) is an investment banking, securities, and investment management company. It operates in four segments: Investment Banking, Global Markets, Asset Management, and Consumer & Wealth Management. The Investment Banking segment provides financial advisory services, including strategic advisory assignments related to mergers and acquisitions, divestitures, corporate defense activities, restructurings, and spin-offs; and middle-market lending, relationship lending, and acquisition financing, as well as transaction banking services. The Global Markets segment focuses on client execution activities for cash and derivative instruments, credit products, mortgages, currencies, commodities, and equities; and provision of equity intermediation, and equity financing services, as well as offers clearing, settlement and custody services. The Asset Management segment manages assets across various asset classes, including equity, fixed income, hedge funds, credit funds, private equity, real estate, currencies, and commodities. The Consumer & Wealth Management segment offers wealth advisory and banking services, including financial planning, investment management, and lending; private banking and lending services; unsecured loans; and saving and time deposits." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/companydata-gs"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Goldman Sachs"
                    pageDescription="How to get a job at Goldman Sachs."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Goldman Sachs (also known as The Goldman Sachs Group) is an investment banking, securities, and investment management company. It operates in four segments: Investment Banking, Global Markets, Asset Management, and Consumer & Wealth Management. The Investment Banking segment provides financial advisory services, including strategic advisory assignments related to mergers and acquisitions, divestitures, corporate defense activities, restructurings, and spin-offs; and middle-market lending, relationship lending, and acquisition financing, as well as transaction banking services. The Global Markets segment focuses on client execution activities for cash and derivative instruments, credit products, mortgages, currencies, commodities, and equities; and provision of equity intermediation, and equity financing services, as well as offers clearing, settlement and custody services. The Asset Management segment manages assets across various asset classes, including equity, fixed income, hedge funds, credit funds, private equity, real estate, currencies, and commodities. The Consumer & Wealth Management segment offers wealth advisory and banking services, including financial planning, investment management, and lending; private banking and lending services; unsecured loans; and saving and time deposits."
                                type="Public"
                                founded="1869"
                                hq="New York, US"
                                website="https://www.goldmansachs.com/"
                                growthLabels={[2015, 2016, 2017, 2018, 2019]}
                                growthData={[36800, 34400, 36600, 36600, 38300]}
                                ratings={3.3}
                                jobPage="https://www.goldmansachs.com/careers/"
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
                                    labels={["Legal", "Administrative", "Support", "Marketing & PR", "other", "Creative", "Sales & BD", "Technology", "HR", "Health & Medical", "Operations", "Retail", "Finance"]}
                                    series={[1.4, 1.0, 2.4, 1.0, 15.8, 0.5, 2.0, 52.0, 1.0, 0.2, 3.9, 4.0, 14.7]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <GSIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[30790000000, 32730000000, 36616000000, 36546000000]}
                                netIncomeData={[7087000000, 3685000000, 9860000000, 7897000000]}
                                gpmData={[90.83, 91.21, 91.26, 91.10]}
                            />
                            <SalaryBar
                                labels={["Research & Science", "Finance & Accounting", "Business", "Information Technology", "Engineering", "Operations"]}
                                salaryData={[90000, 87000, 87000, 100000, 114000, 89000]}
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

export default GSInfo;