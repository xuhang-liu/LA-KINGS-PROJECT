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
import DocumentMeta from 'react-document-meta';


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
      title: 'HireBeat – Jobseekers',
      description: 'Jobseekers Info',
      canonical: 'https://hirebeat.co/job-seekers',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Interview, resume screening, behabioral question, internship, career quiz'
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
              <ClientsFeedbackSlider />
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
            <ClientsFeedbackSlider />
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