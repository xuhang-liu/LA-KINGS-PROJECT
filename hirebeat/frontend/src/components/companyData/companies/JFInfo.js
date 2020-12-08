import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import JFIQ from './../interviewQuestions/JFIQ';
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


class JFInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Jefferies Financial Group</title>
                    <meta name="Description" CONTENT="Jefferies Financial Group is an investment and financial services company that offers a range of products and services in investment banking, equities, fixed income, and wealth management. It specializes in the debt capital market, merger and acquisition, private capital advisory, restructuring, and recapitalization businesses. It offers cash equities, electronic trading solutions, such as global algorithmic and portfolio trading solutions. The company also provides wealth management services, such as portfolio management services, executive services, and family office services to high-net-worth individuals, family offices, and others." >
                    </meta>
                    <link rel="canonical" href="https://hirebeat.co/jefferies-financial-group"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Jefferies Financial Group"
                    pageDescription="How to get a job at Jefferies Financial Group."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Jefferies Financial Group is an investment and financial services company that offers a range of products and services in investment banking, equities, fixed income, and wealth management. It specializes in the debt capital market, merger and acquisition, private capital advisory, restructuring, and recapitalization businesses. It offers cash equities, electronic trading solutions, such as global algorithmic and portfolio trading solutions. The company also provides wealth management services, such as portfolio management services, executive services, and family office services to high-net-worth individuals, family offices, and others."
                                type="Public"
                                founded="1962"
                                hq="New York, US"
                                website="https://www.jefferies.com/"
                                growthLabels={[2016, 2017, 2018, 2019]}
                                growthData={[0, 12700, 4700, 4800]}
                                ratings={4.1}
                                jobPage="https://www.jefferies.com/Careers/"
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
                                    labels={["Administrative", "Sales & BD", "Support", "Technology", "Retail", "HR", "Finance", "Other"]}
                                    series={[1.3, 3.9, 9.1, 35.1, 15.6, 1.3, 22.1, 11.7]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <JFIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[10100000000, 11400000000, 3800000000, 5400000000]}
                                netIncomeData={[194300000, 252800000, 1100000000, 962600000]}
                                gpmData={[11.98, 18.5, 35.09, 94.04]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "HR", "Legal", "Marketing & PR", "Operations", "IT", "Sales & BD", "Support", "Technology"]}
                                salaryData={[63532, 148000, 77000, 268000, 140000, 67294, 68000, 142000, 133000, 87000]}
                            />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginLeft: "auto", marginRight: "auto", marginTop: "5%"}}>
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

export default JFInfo;