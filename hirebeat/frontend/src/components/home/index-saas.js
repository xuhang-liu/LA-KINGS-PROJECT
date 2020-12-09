import React, { Component } from 'react';
import MainBanner from '../HomeSaas/MainBanner';
import Features from '../HomeSaas/Features';
//import FeaturedFeature from '../HomeSaas/FeaturedFeature';
import ClientsFeedbackSlider from '../HomeSaas/ClientsFeedbackSlider';
import MoreToDiscover from '../HomeSaas/MoreToDiscover';
//import WhyChooseUs from '../Common/WhyChooseUs';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import Loader from '../shared/Loader';
import { useEffect } from "react";

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
                <ScrollToTopOnMount />
                <MainBanner />
                <Features />
                <MoreToDiscover />
                <ClientsFeedbackSlider/>
                <FreeTrialArea />
                      {/* Preloader */}
                <Loader loading={this.state.loading} />
            </React.Fragment>
        );
    }
}

export default IndexSaas;