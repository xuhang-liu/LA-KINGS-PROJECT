import React, { Component } from 'react';
import Loader from '../shared/Loader';
import { useEffect } from "react";
import MainBanner from "../HomeEmployer/MainBanner";
import LeverageHireBeat from "../HomeEmployer/LeverageHireBeat";
import HowHirebeatWork from "../HomeEmployer/HowHirebeatWork";
import FreeTrialArea from "../HomeEmployer/FreeTrialArea";
import MediaQuery from 'react-responsive';

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
              <MediaQuery minDeviceWidth={1224}>
              <div className="min-width-1290">
                <ScrollToTopOnMount />
                <MainBanner/>
                <HowHirebeatWork/>
                <LeverageHireBeat/>
                <FreeTrialArea/>
                      {/* Preloader */}
                <Loader loading={this.state.loading} />
              </div>
              </MediaQuery>
              <MediaQuery maxDeviceWidth={1223}>
                <ScrollToTopOnMount />
                <MainBanner/>
                <HowHirebeatWork/>
                <LeverageHireBeat/>
                <FreeTrialArea/>
                      {/* Preloader */}
                <Loader loading={this.state.loading} />
              </MediaQuery>
            </React.Fragment>
        );
    }
}

export default IndexEmployer;