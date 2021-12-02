import React, { Component } from 'react';
import PageTitleArea from './../../Common/PageTitleArea';
import FreeTrialArea from './../../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Overview from './../Overview';
//import AIGIP from './../interviewProcess/AIGIP';
import NDQIQ from './../interviewQuestions/NDQIQ';
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


class NDQInfo extends Component {
    render() {
        return (
            <React.Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>HireBeat Company Data – Nasdaq</title>
                    <meta name="Description" CONTENT="Nasdaq is a global provider of trading, clearing, exchange technology, listing, information, and public company services. It operates in four business segments: Market Services, Corporate Services, Information Services, and Market Technology. The company operates exchanges and other marketplace facilities across several asset classes. The Market Services segment is comprised of equity derivative trading and clearing, cash equity trading, FICC and trade management services businesses. The Corporate Services segment includes listing services and corporate solutions businesses. The Information Services segment offers market data, index and investment data, as well as analytics. The Market Technology segment provides technology solutions to exchanges, clearing organizations, central securities depositories, regulators, banks, brokers, buy-side firms, and corporate businesses." >
                    </meta>
                    <link rel="canonical" href="https://app.hirebeat.co/nasdaq"/>
                </Helmet>
                <ScrollToTopOnMount />
                <PageTitleArea
                    pageTitle="Nasdaq"
                    pageDescription="How to get a job at Nasdaq."
                />
                <div className="Container" style={{margin: "2% 3%"}}>
                    <div className="row">
                        <div className="col-lg-5 col-md-5 company-align" style={{marginLeft: "5%", marginTop: "5%"}} >
                            <Overview
                                overview="Nasdaq is a global provider of trading, clearing, exchange technology, listing, information, and public company services. It operates in four business segments: Market Services, Corporate Services, Information Services, and Market Technology. The company operates exchanges and other marketplace facilities across several asset classes. The Market Services segment is comprised of equity derivative trading and clearing, cash equity trading, FICC and trade management services businesses. The Corporate Services segment includes listing services and corporate solutions businesses. The Information Services segment offers market data, index and investment data, as well as analytics. The Market Technology segment provides technology solutions to exchanges, clearing organizations, central securities depositories, regulators, banks, brokers, buy-side firms, and corporate businesses."
                                type="Public"
                                founded="1971"
                                hq="New York, US"
                                website="https://www.nasdaq.com/"
                                growthLabels={[2016, 2017, 2018, 2019]}
                                growthData={[4325, 4734, 4099, 4361]}
                                ratings={3.8}
                                jobPage="https://www.nasdaq.com/about/careers"
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
                                    labels={["Support","other","Sales & BD", "Technology", "Retail", "Finance"]}
                                    series={[7.0, 12.7, 7.0, 60.6, 1.4, 11.3]}/>
                            </div>
                        </div>

                         <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <NDQIQ />
                        </div>

                        <div className="col-lg-5 col-md-5 review-align" style={{marginLeft: "5%", marginTop: "5%"}}>
                            <RevenueBar
                                labels={["2016", "2017", "2018", "2019"]}
                                revenueData={[3700000000, 4000000000, 4300000000, 4300000000]}
                                netIncomeData={[108000000, 734000000, 458000000,774000000]}
                                gpmData={[9, 7, 8, 8]}
                            />
                            <SalaryBar
                                labels={["Administrative", "Finance", "HR", "Legal", "Marketing & PR", "Operations", "Other", "Sales & BD", "Support", "Technology"]}
                                salaryData={[122000, 75000, 113000, 145000, 64110, 92000, 49946, 78583, 86000, 92000]}
                            />
                        </div>

                        <div className="col-lg-10 col-md-10 review-align"style={{marginLeft: "auto", marginRight:'auto', marginTop: "5%"}}>
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

export default NDQInfo;