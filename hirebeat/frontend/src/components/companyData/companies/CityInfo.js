import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import CityIQ from './../interviewQuestions/CityIQ';
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


class CityInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Citibank</title>
                    <meta name="Description" CONTENT="Citigroup is a company providing financial products and services. It operates through two segments: Global Consumer Banking and Institutional Clients Group. Global Consumer Banking offers traditional banking services to retail customers through retail banking, commercial banking, Citi-branded cards, and Citi retail services. Institutional Clients Group delivers wholesale banking products and services, including fixed income and equity sales and trading, foreign exchange, prime brokerage, derivative services, equity and fixed income research, corporate lending, investment banking, and advisory services, as well as private banking, cash management, trade finance, and securities services to corporate, institutional, public sector, and high-net-worth clients." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/companydata/citi"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Citi Group"
                    pageDescription="How to get a job at Citi Group."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Citigroup is a company providing financial products and services. It operates through two segments: Global Consumer Banking and Institutional Clients Group. Global Consumer Banking offers traditional banking services to retail customers through retail banking, commercial banking, Citi-branded cards, and Citi retail services. Institutional Clients Group delivers wholesale banking products and services, including fixed income and equity sales and trading, foreign exchange, prime brokerage, derivative services, equity and fixed income research, corporate lending, investment banking, and advisory services, as well as private banking, cash management, trade finance, and securities services to corporate, institutional, public sector, and high-net-worth clients."
                                type="Public"
                                founded="1812"
                                hq="New York, US"
                                website="https://www.citigroup.com/"
                                growthLabels={[2015, 2016, 2017, 2018, 2019]}
                                growthData={[231000, 219000, 209000, 204000, 200000]}
                                ratings={3.8}
                                jobPage="https://jobs.citi.com/"
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
                                    labels={["Creative", "Administrative", "Operations", "Marketing & PR", "other", "Legal", "Sales & BD", "Technology", "HR", "Health & Medical", "Support", "Retail", "Finance"]}
                                    series={[0.2, 2.7, 6.4, 0.5, 26.1, 0.1, 3.1, 32.2, 1.6, 0.1, 4.0, 1.6, 21.1]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <CityIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[83309000000, 88962000000, 97120000000, 103449000000]}
                                netIncomeData={[13640000000, -8048000000, 16671000000,18171000000]}
                                gpmData={[84.98, 81.43, 75.01, 71.81]}
                            />
                            <SalaryBar
                                labels={["Finance", "Business", "Customer Service", "Research & Science", "Information Technology", "Engineering", "Product", "Analyst", "Associate"]}
                                salaryData={[91000, 72000, 33000, 90000, 86000, 94000, 130000, 91000, 136000]}
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

export default CityInfo;