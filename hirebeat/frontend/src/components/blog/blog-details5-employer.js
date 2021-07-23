import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer5 from './BlogDetailsContentEmployer5';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer5 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – How the Pandemic Sparked A New Way of Interviewing',
            description: 'Preparing interview question is an important part to ensure a company to find the right candidates. With proper preparation, hiring team and the company can compare one potential hire to the other and make accurate judgments.',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'hiring, internship, recruitment, interview question, human resources, entry level job'
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
                <BlogDetailsContentEmployer5 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer5;