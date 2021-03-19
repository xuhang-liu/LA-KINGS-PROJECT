import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import PricingStyleOne from './PricingStyleOne';
import FaqContent from '../Faq/FaqContent';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Footer from "../layout/Footer";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 280);
  }, []);

  return null;
}

class Pricing extends Component {
    componentDidUpdate
    
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Pricing & Plans" 
                    pageDescription="Get unlimited interview analytics with any HireBeat plan" 
                />
                <PricingStyleOne />
                <FaqContent />
                <FreeTrialArea />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Pricing;