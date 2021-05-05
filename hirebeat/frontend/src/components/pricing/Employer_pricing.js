import React, { Component } from 'react';
import PageTitleArea1 from '../Common/PageTitleArea1';
import Employer_PricingStyleOne from './Employer_PricingStyleOne';
import FaqContentEmployer from "../Faq/FaqContentEmployer";
import ROICalculator from '../Common/ROICalculator';
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
    componentDidUpdate
    
    render() {
        const meta = {
            title: 'HireBeat – Your First Step to A Better Recruiting Journey',
            description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
            canonical: 'https://hirebeat.co/employer-pricing',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'interview, jobs, job interview, recruiting, hiring, interview tips'
              }
            }
          };
        return (
            <DocumentMeta {...meta}>
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea1
                    pageTitle="Pricing & Plans" 
                    pageDescription="Hiring talents, and take back your time. We are here to help you save 50% of your workday on screening calls." 
                />
                <ROICalculator/>
                <Employer_PricingStyleOne />
                <FaqContentEmployer />
                <Footer />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default Employer_pricing;