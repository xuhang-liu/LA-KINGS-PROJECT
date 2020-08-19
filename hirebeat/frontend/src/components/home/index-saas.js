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

class IndexSaas extends Component {
    render() {
        return (
            <React.Fragment>
                <MainBanner />
                <Features />
                <FeaturedFeature />
                <MoreToDiscover />
                <WhyChooseUs />
                <BuildYourApplication />
                <ClientsFeedbackSlider />
                <PricingStyleOne />
                <FaqContent />
                <OurLovingClients />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default IndexSaas;