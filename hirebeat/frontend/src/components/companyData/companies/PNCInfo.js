import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import RJIP from './../interviewProcess/EJIP';
import PNCIQ from './../interviewQuestions/PNCIQ';
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


class PNCInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – The PNC Financial Services Group</title>
                    <meta name="Description" CONTENT="The PNC Financial Services Group is a diversified financial services organization providing retail and business banking, residential mortgage banking, specialized services for corporations and government entities, including corporate banking, real estate finance and asset-based lending, wealth management, and asset management. The company also offers investment and risk management services to institutional and retail clients." ></meta>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="The PNC Financial Services Group"
                    pageDescription="How to get a job at The PNC Financial Services Group."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="The PNC Financial Services Group is a diversified financial services organization providing retail and business banking, residential mortgage banking, specialized services for corporations and government entities, including corporate banking, real estate finance and asset-based lending, wealth management, and asset management. The company also offers investment and risk management services to institutional and retail clients."
                                type="Public"
                                founded="1852"
                                hq="Pittsburgh, PA, US"
                                website="https://www.pnc.com/"
                                growthLabels={[2017, 2018, 2019]}
                                growthData={[52906, 53063, 51918]}
                                ratings={3.6}
                                jobPage="https://careers.pnc.com/"
                            />
                        </div>

                        {/*<div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <RJIP />
                        </div>*/}

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <h3 className="companydata-text1">Hiring Categories</h3>
                            <div style={{margin: "15% 0"}}>
                                <Category
                                    height="300"
                                    labels={["Creative", "Sales & BD", "Retail", "Other", "Legal", "Operations", "Marketing & PR", "Health & Medical", "Support", "HR", "Administrative", "Technology", "Finance"]}
                                    series={[0.2, 3.2, 0.8, 10.4, 0, 4.6, 0.1, 0, 2.8, 0.6, 0.6, 20.8, 55.8]}
                                />
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <PNCIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            {<RevenueBar
                                labels={["2018", "2019", "2020"]}
                                revenueData={[19993000000, 21624000000, 20013000000]}
                                netIncomeData={[5040000000, 5108000000, 7181000000]}
                                gpmData={[85.69, 82.44, 89.73]}
                            />}
                            <SalaryBar
                                labels={["Administrative", "Creative", "Finance", "Legal", "Marketing & PR", "Operations", "Sales & BD", "Support", "Technology"]}
                                salaryData={[91900, 78600, 86600, 89400, 90000, 108000, 85400, 90000, 94500]}
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

export default PNCInfo;