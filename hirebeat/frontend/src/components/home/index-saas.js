import React, { Component } from 'react';
import MainBanner from '../HomeSaas/MainBanner';
import Features from '../HomeSaas/Features';
import FeaturedFeature from '../HomeSaas/FeaturedFeature';
import MoreToDiscover from '../HomeSaas/MoreToDiscover';
import WhyChooseUs from '../Common/WhyChooseUs';
import BuildYourApplication from '../HomeSaas/BuildYourApplication';
import ClientsFeedbackSlider from '../Common/ClientsFeedbackSlider';
import PricingStyleOne from '../pricing/PricingStyleOne';
import FaqContent from '../Faq/FaqContent';
import OurLovingClients from '../Common/OurLovingClients';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import Loader from '../shared/Loader';

class IndexSaas extends Component {
        // Preloader
        state = {
            loading: true
        };
      componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
      }
    render() {
        return (
            <React.Fragment>
                <MainBanner />
                <Features />
                <FeaturedFeature />
                <MoreToDiscover />
                <WhyChooseUs />
                <ClientsFeedbackSlider />
                <FaqContent />
                <FreeTrialArea />
                      {/* Preloader */}
      <Loader loading={this.state.loading} />

            </React.Fragment>
        );
    }
}

export default IndexSaas;