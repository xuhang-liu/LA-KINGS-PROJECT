import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer20 from './BlogDetailsContentEmployer20';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer20 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – 8 Tips to Increase Resume Screening Effectiveness',
            description: 'Resume screening is one of the traditional methods of candidate screening. The process can be tedious when you have hundreds of applications to review. But not if you know how to make it effective—here are the 8 tips to consider.',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'tips for Resume Screening for hiring'
              }
            }
          };
        return (
            <DocumentMeta {...meta}>
            <React.Fragment>
                <ScrollToTopOnMount />
                <PageTitleArea 
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContentEmployer20 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer20;