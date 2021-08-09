import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogGridHomeEmployer from './BlogGridHomeEmployer';
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

class bloggridEmployer extends Component {
    render() {
        const meta = {
            title: 'HireBeat – Employer Blog Home',
            description: 'Employer Blog Home',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'hr, ats, applicant tracking system blog'
              }
            }
          };
        return (
            <DocumentMeta {...meta}>
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog" 
                    pageDescription="News and Insights" 
                />
                <BlogGridHomeEmployer />
                <FreeTrialArea />
                <Footer />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default bloggridEmployer;