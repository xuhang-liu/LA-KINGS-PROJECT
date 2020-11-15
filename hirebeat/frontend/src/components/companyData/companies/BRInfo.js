import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import BRIQ from './../interviewQuestions/BRIQ';
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


class BRInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – BlackRock</title>
                    <meta name="Description" CONTENT="BlackRock is an investment management company providing investment and technology services to institutional and retail clients. Its diverse platform of alpha-seeking active, index, and cash management investment strategies across asset classes enables the company to tailor investment outcomes and asset allocation solutions for clients. The company offers single- and multi-asset portfolios investing in equities, fixed income, alternatives, and money market instruments. BlackRock also delivers technology services, including the investment and risk management technology platform, Aladdin, Aladdin Wealth, eFront, Cachematrix, and FutureAdvisor, as well as advisory services and solutions to institutional and wealth management clients." ></meta>
                    <link rel="canonical" href="https://hirebeat.co/companydata/blackrock"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="BlackRock"
                    pageDescription="How to get a job at BlackRock."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="BlackRock is an investment management company providing investment and technology services to institutional and retail clients. Its diverse platform of alpha-seeking active, index, and cash management investment strategies across asset classes enables the company to tailor investment outcomes and asset allocation solutions for clients. The company offers single- and multi-asset portfolios investing in equities, fixed income, alternatives, and money market instruments. BlackRock also delivers technology services, including the investment and risk management technology platform, Aladdin, Aladdin Wealth, eFront, Cachematrix, and FutureAdvisor, as well as advisory services and solutions to institutional and wealth management clients."
                                type="Public"
                                founded="1988"
                                hq="New York, US"
                                website="https://www.blackrock.com/"
                                growthLabels={[2015, 2016, 2017, 2018, 2019]}
                                growthData={[13000, 13000, 13900, 14900, 16200]}
                                ratings={3.9}
                                jobPage="https://careers.blackrock.com/"
                            />
                        </div>

                        {/*<div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <BRIP />
                        </div>*/}

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <h3 className="companydata-text1">Hiring Categories</h3>
                            <div style={{margin: "15% 0"}}>
                                <Category
                                    height="300"
                                    labels={["Administrative", "Support", "Marketing & PR", "other", "Sales & BD", "Technology", "HR", "Operations", "Retail", "Finance"]}
                                    series={[1.1, 4.4, 4.0, 11.7, 3.3, 38.0, 2.2, 4.0, 10.6, 20.8]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <BRIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[12261000000, 13600000000, 14198000000, 14539000000]}
                                netIncomeData={[3168000000, 4952000000, 4305000000, 4476000000]}
                                gpmData={[100, 100, 100, 100]}
                            />
                            <SalaryBar
                                labels={["Business", "Research & Science", "Finance & Accounting", "Engineering", "Other", "Administrative", "Product Management"]}
                                salaryData={[95000, 126000, 92000, 116000,  75000, 86000, 144000]}
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

export default BRInfo;