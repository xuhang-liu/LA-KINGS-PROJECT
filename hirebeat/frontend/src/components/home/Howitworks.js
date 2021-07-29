import React, { Component } from 'react';
import MoreToDiscover from '../HomeSaas/MoreToDiscover';
import PageTitleArea from '../Common/PageTitleArea';
import Features from '../HomeSaas/Features';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

class Howitworks extends Component {
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
                <PageTitleArea 
                    pageTitle="How HireBeat Works" 
                    pageDescription="Optimize your interview and resume easier than ever and stay on top of your job search progresss."
                />
                <Features />
                <MoreToDiscover />
                <FreeTrialArea />
                <Footer />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default Howitworks;