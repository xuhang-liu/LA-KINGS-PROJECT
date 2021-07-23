import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer13 from './BlogDetailsContentEmployer13';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer13 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – How to Write A Termination Letter Right?',
            description: 'Writing a termination letter could be annoying. This article provides a few tips that helps the employers write the right termination letter.',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'termination, job, interview, strategy, millennials. candidate, job fair, New York, NYC, California, Texas'
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
                <BlogDetailsContentEmployer13 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer13;