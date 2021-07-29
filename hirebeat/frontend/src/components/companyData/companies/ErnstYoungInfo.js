import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import ErnstYoungIQ from './../interviewQuestions/ErnstYoungIQ';
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


class ErnstYoungInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Ernst & Young</title>
                    <meta name="Description" CONTENT="Ernst & Young (doing business as EY) is a multinational professional services company. It provides assurance, auditing, technology and security risk, enterprise risk management, transaction support, merger and acquisition, actuarial, and real estate advisory services. The company also offers employee benefit plan, taxation, and entrepreneurial services. EY serves telecommunications, energy, insurance, consumer products and retail, health, automotive, and power and utilities industries." ></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Ernst & Young"
                    pageDescription="How to get a job at Ernst & Young."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Ernst & Young (doing business as EY) is a multinational professional services company. It provides assurance, auditing, technology and security risk, enterprise risk management, transaction support, merger and acquisition, actuarial, and real estate advisory services. The company also offers employee benefit plan, taxation, and entrepreneurial services. EY serves telecommunications, energy, insurance, consumer products and retail, health, automotive, and power and utilities industries."
                                type="Private"
                                founded="1989"
                                hq="London, United Kingdom"
                                website="https://www.ey.com/en_us"
                                growthLabels={[2020]}
                                growthData={[10000]}
                                ratings={3.9}
                                jobPage="https://www.ey.com/en_us/careers"
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
                            <ErnstYoungIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[29630000000, 31400000000, 34770000000, 36390000000]}
                                netIncomeData={[]}
                                gpmData={[]}
                            />
                            <SalaryBar
                                labels={["Banking & Finance", "Administrative Assistance", "Accounting", "Insurance", "Software Development"]}
                                salaryData={[96500, 70500, 95600, 134000, 111300]}
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

export default ErnstYoungInfo;