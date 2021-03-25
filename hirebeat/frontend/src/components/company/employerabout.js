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
            title: 'HireBeat – Your first step to a better recruiting journey',
            description: 'Join the world’s fastest-growing hiring trend with our automated interviewing platform.',
            canonical: 'https://hirebeat.co/employer_company',
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