import React, { Component } from 'react';
import Loader from '../shared/Loader';
import { useEffect } from "react";
import MainBanner from "../HomeEmployer/MainBanner";
import LeverageHireBeat from "../HomeEmployer/LeverageHireBeat";
import HowHirebeatWork from "../HomeEmployer/HowHirebeatWork";
import FreeTrialArea from "../HomeEmployer/FreeTrialArea";

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
                <ScrollToTopOnMount />
                <MainBanner/>
                <LeverageHireBeat/>
                <HowHirebeatWork/>
                <FreeTrialArea/>
                      {/* Preloader */}
                <Loader loading={this.state.loading} />
            </React.Fragment>
        );
    }
}

export default IndexEmployer;