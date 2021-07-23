import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer10 from './BlogDetailsContentEmployer10';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer10 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – Four Tips to Build a Successful Campus Recruiting Strategy',
            description: 'Universities are the go-to options for the business to attract new candidates. In this article, you will know four tips about campus recruitment strategy.',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'campus recruitment, campus recruiting, job, interview, strategy, millennials. candidate, job fair, New York, NYC, California, Texas'
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
                <BlogDetailsContentEmployer10 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer10;