import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer3 from './BlogDetailsContentEmployer3';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer3 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – Writing a Good Job Posting that Will Attract Employees',
            description: 'Creating a thorough job description enables employers to showcase the accurate details about the job and the positions available, reducing the chances of hiring the wrong candidate.',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'hiring, recruitment, job, interview, human resources'
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
                <BlogDetailsContentEmployer3 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer3;