import React, { Component } from 'react';
import Loader from '../shared/Loader';
import { useEffect } from "react";
import MainBanner from "../HomeEmployer/MainBanner";
//import LeverageHireBeat from "../HomeEmployer/LeverageHireBeat";
import HowHirebeatWork from "../HomeEmployer/HowHirebeatWork";
import FreeTrialArea from "../HomeEmployer/FreeTrialArea";
import MediaQuery from 'react-responsive';
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

class IndexEmployer extends Component {
        // Preloader
        state = {
            loading: true
        };
      componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 666); 
      }
    render() {
      const meta = {
        title: 'HireBeat – Your First Step to A Better Recruiting Journey',
        description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
        canonical: 'https://hirebeat.co/',
        meta: {
          charset: 'utf-8',
          name: {
            keywords: 'automatic resume parser, best video interview tool, what is ats in recruitment, resume screening, resume screening automation, applicant tracking system benefits, application tracking system in hr,application tracking system keywords, applicant tracking system benefits, applicant tracking system advantages， video interview'
          }
        }
      };
        return (
          <DocumentMeta {...meta}>
            <React.Fragment>
              <MediaQuery minDeviceWidth={1224}>
              <div className="min-width-1290">
                <ScrollToTopOnMount />
                <MainBanner/>
                <HowHirebeatWork/>
                <FreeTrialArea/>
                <Footer />
                      {/* Preloader */}
                <Loader loading={this.state.loading} />
              </div>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={1223}>
                <ScrollToTopOnMount />
                <MainBanner/>
                <HowHirebeatWork/>
                <FreeTrialArea/>
                <Footer />
                      {/* Preloader */}
                <Loader loading={this.state.loading} />
              </MediaQuery>
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default IndexEmployer;