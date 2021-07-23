import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer25 from './BlogDetailsContentEmployer25';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer25 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – 4 Challenges Campus Recruiters Could Meet',
            description: "Every company wants to attract top talent, and this led to fierce competition among them. But attracting the top talent while dealing with competitors isn't the only challenge recruiters face during campus recruitment — 4 Challenges Campus Recruiters Could Meet.",
            meta: {
              charset: 'utf-8',
              name: {
                keywords: "Campus recruit"
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
                <BlogDetailsContentEmployer25 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer25;