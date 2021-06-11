import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import PricingStyleOne from './PricingStyleOne';
import FaqContent from '../Faq/FaqContent';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 280);
  }, []);

  return null;
}

class Pricing extends Component {
    componentDidUpdate
    
    render() {
        const meta = {
            title: 'HireBeat – The Best Video Interview Prep Tool For Jobseekers',
            description: 'Prepare your interview with 1000+ interview questions and AI & Expert feedback – sign up for free today!',
            canonical: 'https://hirebeat.co/pricing',
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
                <PageTitleArea 
                    pageTitle="Pricing & Plans" 
                    pageDescription="Get unlimited interview analytics with any HireBeat plan" 
                />
                <PricingStyleOne />
                <FaqContent />
                <FreeTrialArea />
                <Footer />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default Pricing;