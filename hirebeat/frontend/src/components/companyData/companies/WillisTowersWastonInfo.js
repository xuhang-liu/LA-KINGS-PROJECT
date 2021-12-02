import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import WillisTowersWastonIQ from './../interviewQuestions/WillisTowersWastonIQ';
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


class WillisTowersWastonInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Willis Towers Waston</title>
                    <meta name="Description" CONTENT="Willis Towers Watson is an advisory, broking, and solutions company. Its activities include four segments. The Human Capital and Benefits segment provides actuarial support, plan design, and administrative services for traditional pension and retirement savings plans, plan management consulting, and broking. The Corporate Risk and Broking segment provides risk advice, insurance brokerage, and consulting services in property and casualty. The Investment, Risk and Reinsurance segment offers capital markets-based products to insurance and reinsurance companies, software and technology, risk and capital management, products and pricing, financial and regulatory reporting, and capital markets and advisory services. The Benefits Delivery and Administration segment provides primary medical and ancillary benefit exchange, outsourcing services and delivers health savings and flexible spending accounts and health reimbursement arrangements." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/willis-towers-waston"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Willis Towers Waston"
                    pageDescription="How to get a job at Willis Towers Waston."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Willis Towers Watson is an advisory, broking, and solutions company. Its activities include four segments. The Human Capital and Benefits segment provides actuarial support, plan design, and administrative services for traditional pension and retirement savings plans, plan management consulting, and broking. The Corporate Risk and Broking segment provides risk advice, insurance brokerage, and consulting services in property and casualty. The Investment, Risk and Reinsurance segment offers capital markets-based products to insurance and reinsurance companies, software and technology, risk and capital management, products and pricing, financial and regulatory reporting, and capital markets and advisory services. The Benefits Delivery and Administration segment provides primary medical and ancillary benefit exchange, outsourcing services and delivers health savings and flexible spending accounts and health reimbursement arrangements."
                                type="Public"
                                founded="1828"
                                hq="London, United Kingdom"
                                website="https://www.willistowerswatson.com/"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={3.8}
                                jobPage="https://careers.willistowerswatson.com/"
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
                            <WillisTowersWastonIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2017", "2018", "2019"]}
                                revenueData={[8200000000, 8510000000, 9040000000]}
                                netIncomeData={[5921000000, 715000000, 1070000000]}
                                gpmData={[42.15, 39.82, 41.93]}
                            />
                            <SalaryBar
                                labels={["Actuarial Analyst", "Actuary", "Software Developer", "Business Analyst", "Account Manager"]}
                                salaryData={[61271, 88095, 72660, 63360, 63580]}
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

export default WillisTowersWastonInfo;