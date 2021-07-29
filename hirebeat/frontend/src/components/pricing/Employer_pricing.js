import React, { Component } from 'react';
import PageTitleArea2 from '../Common/PageTitleArea2';
import Employer_PricingStyleOne from './Employer_PricingStyleOne';
import FaqContentEmployer from "../Faq/FaqContentEmployer";
//import ROICalculator from '../Common/ROICalculator';
//import FaqContent from '../Faq/FaqContent';
//import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 280);
  }, []);

  return null;
}

class Employer_pricing extends Component {
    
    render() {
        const meta = {
            title: 'HireBeat – Your First Step to A Better Recruiting Journey',
            description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'hiring tool return on investment, hiring tool roi, hr applicant tracking, roi recruitment process'
              }
            }
          };
        return (
            <DocumentMeta {...meta}>
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea2
                    pageTitle="Pricing & Plans" 
                    pageDescription="Hiring talents, and take back your time. We are here to help you save 50% of your workday on screening calls." 
                />
                {/*<ROICalculator/>*/}
                <Employer_PricingStyleOne />
                <FaqContentEmployer />
                <Footer />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default Employer_pricing;