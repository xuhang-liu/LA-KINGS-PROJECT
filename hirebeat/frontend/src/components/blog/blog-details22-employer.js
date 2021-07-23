import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer22 from './BlogDetailsContentEmployer22';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer22 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – 8 Ways to Automate Recruiting Processes',
            description: "If you are wondering How to automate your recruitment process or looking for tips to Automate your Recruiting Processes, know 8 Ways to Automate Recruiting Processes.",
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'Ways to Automate Recruiting Processes'
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
                <BlogDetailsContentEmployer22 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer22;