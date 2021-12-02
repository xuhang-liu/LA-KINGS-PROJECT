import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import HCIGroupIQ from './../interviewQuestions/HCIGroupIQ';
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


class HCIGroupInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – HCI Group</title>
                    <meta name="Description" CONTENT="The Company is engaged in providing property and casualty insurance to homeowners, condominium owners, and tenants in the state of Florida through its subsidiaries. The Company operates through the property and casualty insurance operations segment. The Company's operations include Insurance Operations and Other Operations. The Company's Insurance Operations include property and casualty insurance and reinsurance. HCI's Other Operations include information technology (IT) and real estate. Through its subsidiary, the Company, Homeowners Choice Property & Casualty Insurance Company, Inc., provides property and casualty insurance. Its real estate operations consist of properties it owns, functions located at those owned properties, and investments in approximately three commercial development projects. Its IT operations are focused on developing cloud-based products or services, including Exzeo, Proplet, and Atlas Viewer." ></meta>
                    <link rel="canonical" href="https://app.hirebeat.co/hci-group"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="HCI Group"
                    pageDescription="How to get a job at HCI Group."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="The Company is engaged in providing property and casualty insurance to homeowners, condominium owners, and tenants in the state of Florida through its subsidiaries. The Company operates through the property and casualty insurance operations segment. The Company's operations include Insurance Operations and Other Operations. The Company's Insurance Operations include property and casualty insurance and reinsurance. HCI's Other Operations include information technology (IT) and real estate. Through its subsidiary, the Company, Homeowners Choice Property & Casualty Insurance Company, Inc., provides property and casualty insurance. Its real estate operations consist of properties it owns, functions located at those owned properties, and investments in approximately three commercial development projects. Its IT operations are focused on developing cloud-based products or services, including Exzeo, Proplet, and Atlas Viewer."
                                type="Public"
                                founded="N/A"
                                hq="Tampa, FL, US"
                                website="www.hcigroup.com"
                                growthLabels={[2019, 2020]}
                                growthData={[386, 413]}
                                ratings={3.7}
                                jobPage="https://hcigroup.com/careers"
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
                            <HCIGroupIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2015", "2016", "2017", "2018", "2019"]}
                                revenueData={[286000000, 264400000, 244400000, 231300000, 242500000]}
                                netIncomeData={[65900000, 29000000, 6900000, 17700000, 26600000]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Assistant General Counsel", "Senior Database Administrator"]}
                                salaryData={[138000, 108000]}
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

export default HCIGroupInfo;