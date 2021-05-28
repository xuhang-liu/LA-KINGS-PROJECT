import React, { Component } from 'react';
import MainBanner from '../HomeSaas/MainBanner';
import HighlitedFeatures from "../HomeSaas/HighlitedFeatures";
import ClientsFeedbackSlider from '../HomeSaas/ClientsFeedbackSlider';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import Loader from '../shared/Loader';
import { useEffect } from "react";
import AmazingFeatures from "../HomeSaas/AmazingFeatures"
import Progress from '../HomeSaas/Progress';
import MediaQuery from 'react-responsive';
import Footer from "../layout/Footer";
//import {connect} from "react-redux";
import {Helmet} from "react-helmet";
//import WhyUs from '../HomeSaas/WhyUs';
//import CompanyProfile from '../HomeSaas/CompanyProfile';


function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

class IndexSaas extends Component {
        // Preloader
        state = {
            loading: true
        };
      componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 666);
      }
    render() {
        return (
            <React.Fragment>
              <Helmet>
                <meta charSet="utf-8" />
                <title>HireBeat – The Best Video Interview Prep Tool For Jobseekers</title>
                <meta name="description" CONTENT="Prepare your interview with 1000+ interview questions and AI & Expert feedback – sign up for free today!"></meta>
                <link rel="canonical" href="https://hirebeat.co/job-seekers"/>
                <meta property="og:title" content="HireBeat – The Best Video Interview Prep Tool For Jobseekers" />
                <meta property="og:description" content="Prepare your interview with 1000+ interview questions and AI & Expert feedback – sign up for free today!" />
                <meta property="og:image" content="https://hirebeat-assets.s3.amazonaws.com/seo/c-home.png" />
                <meta property="og:url" content="https://hirebeat.co/job-seekers" />
              </Helmet>
              <MediaQuery minDeviceWidth={1224}>
              <div className="min-width-1290">
                <ScrollToTopOnMount />
                <MainBanner />
                <HighlitedFeatures />
                <AmazingFeatures />
                <Progress />
                {/*<MoreToDiscover />*/}
                <ClientsFeedbackSlider/>
                <FreeTrialArea />
                <Footer />
                      {/* Preloader */}
                <Loader loading={this.state.loading} />
              </div>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={1223}>
                <ScrollToTopOnMount />
                <MainBanner />
                <HighlitedFeatures />
                <AmazingFeatures />
                <Progress />
                {/*<MoreToDiscover />*/}
                <ClientsFeedbackSlider/>
                <FreeTrialArea />
                <Footer />
                      {/* Preloader */}
                <Loader loading={this.state.loading} />
              </MediaQuery>
            </React.Fragment>
        );
    }
}

export default IndexSaas;