import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import AboutContentEmployer from './AboutContentEmployer';
import FreeTrialArea from '../HomeEmployer/FreeTrialArea';
import { useEffect } from "react";
import Footer from "../layout/Footer";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class Employerabout extends Component {
    render() {
        const meta = {
            title: 'HireBeat – Your First Step to A Better Recruiting Journey',
            description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'benefits of ats, benefits of applicant tracking systems, hr applicant tracking software'
              }
            }
          };
        return (
            <DocumentMeta {...meta}>
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="About Us"
                />
                <AboutContentEmployer />
                <FreeTrialArea />
                <Footer />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default Employerabout;