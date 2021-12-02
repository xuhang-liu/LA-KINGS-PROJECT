import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import VanguardIQ from './../interviewQuestions/VanguardIQ';
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


class VanguardInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Vanguard</title>
                    <meta name="Description" CONTENT="Vanguard is an investment company. It offers a range of low-cost mutual funds, exchange-traded funds, advice, and related services to individual investors, financial professionals, corporate and institutional investors." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/vanguard"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Vanguard"
                    pageDescription="How to get a job at Vanguard."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Vanguard is an investment company. It offers a range of low-cost mutual funds, exchange-traded funds, advice, and related services to individual investors, financial professionals, corporate and institutional investors."
                                type="Private"
                                founded="1975"
                                hq="Malvern, PA, US"
                                website="https://investor.vanguard.com/ "
                                growthLabels={[2019]}
                                growthData={[19164]}
                                ratings={3.8}
                                jobPage="https://www.vanguardjobs.com/"
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
                                    labels={["Administrative", "Art & design", "Business", "Customer services & support", "Finance & Accounting", "Technology", "Legal", "Human resource", "Marketing", "Media & communication", "Operation", "Product & project management", "Analyst", "Sales", "Other"]}
                                    series={[4, 8, 5, 3, 18, 27, 0.2, 1, 5, 0.8, 2.5, 12, 8, 3 , 2.5]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <VanguardIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[312000000, 355000000, 454000000,468000000]}
                                netIncomeData={[13000000, 20000000, 24000000, 14000000]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Analyst", "Marketing", "Administrative", "IT Engineering", "Operation"]}
                                salaryData={[92000, 60000, 55000, 82000, 64000]}
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

export default VanguardInfo;