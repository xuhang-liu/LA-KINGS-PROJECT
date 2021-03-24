import React, { Component } from 'react';
import PageTitleArea1 from '../Common/PageTitleArea1';
import Employer_PricingStyleOne from './Employer_PricingStyleOne';
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
            title: 'HireBeat – Your first step to a better recruiting journey',
            description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
            canonical: 'https://hirebeat.co/bloghome_employer',
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
                    pageDescription="Hiring talents, take back your time. We are here to help you save 50% of your work day on screening calls." 
                />
                <Employer_PricingStyleOne />
                <Footer />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default Employer_pricing;