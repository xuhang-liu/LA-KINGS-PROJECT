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
import DocumentMeta from 'react-document-meta';
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
      const meta = {
        title: 'HireBeat – The Best Video Interview Prep Tool For Jobseekers',
        description: 'Prepare your interview with 1000+ interview questions and AI & Expert feedback – sign up for free today!',
        canonical: 'https://hirebeat.co/for_candidate',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'interview, jobs, job interview, recruiting, hiring, interview tips'
          }
        }
      };
        return (
          <DocumentMeta {...meta}>
            <React.Fragment>
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
          </DocumentMeta>
        );
    }
}

export default IndexSaas;