import React, { Component } from 'react';
import Loader from '../shared/Loader';
import { useEffect } from "react";
import MainBanner from "../HomeEmployer/MainBanner";
//import LeverageHireBeat from "../HomeEmployer/LeverageHireBeat";
import HowHirebeatWork from "../HomeEmployer/HowHirebeatWork";
import FreeTrialArea from "../HomeEmployer/FreeTrialArea";
import MediaQuery from 'react-responsive';
import Footer from "../layout/Footer";
import {Helmet} from "react-helmet";

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
        return (
            <React.Fragment>
              <Helmet>
                <meta charSet="utf-8" />
                <title>HireBeat – Your First Step to A Better Recruiting Journey</title>
                <meta name="description" CONTENT="Join the world’s fastest-growing hiring trend with our automated interviewing platform."></meta>
                <link rel="canonical" href="https://hirebeat.co/"/>
                <meta property="og:title" content="HireBeat – Your First Step to A Better Recruiting Journey" />
                <meta property="og:description" content="Join the world’s fastest-growing hiring trend with our automated interviewing platform." />
                <meta property="og:image" content="https://hirebeat-assets.s3.amazonaws.com/seo/b-home.png" />
                <meta property="og:url" content="https://hirebeat.co/" />
              </Helmet>
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
        );
    }
}

export default IndexEmployer;