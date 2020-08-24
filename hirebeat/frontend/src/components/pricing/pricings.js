import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import PricingStyleOne from './PricingStyleOne';
import FaqContent from '../Faq/FaqContent';
import OurLovingClients from '../Common/OurLovingClients';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';

class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <PageTitleArea 
                    pageTitle="Transparent Pricing" 
                    pageDescription="Border-less account pricing" 
                />
                <PricingStyleOne />
                <FaqContent />
                <FreeTrialArea />
            </React.Fragment>
        );
    }
}

export default Pricing;