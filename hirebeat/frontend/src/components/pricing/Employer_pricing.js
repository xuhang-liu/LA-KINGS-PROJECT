import React, { Component } from 'react';
import PageTitleArea1 from '../Common/PageTitleArea1';
import Employer_PricingStyleOne from './Employer_PricingStyleOne';
//import FaqContent from '../Faq/FaqContent';
//import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 280);
  }, []);

  return null;
}

class Employer_pricing extends Component {
    componentDidUpdate
    
    render() {
        return (
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea1
                    pageTitle="Pricing & Plans" 
                    pageDescription="Hiring superheroes, take back your time. We cost a lot less than spending 30% of your work day on screening calls" 
                />
                <Employer_PricingStyleOne />
            </React.Fragment>
        );
    }
}

export default Employer_pricing;