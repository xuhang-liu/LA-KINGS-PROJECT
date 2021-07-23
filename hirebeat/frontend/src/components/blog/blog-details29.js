import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent29 from './BlogDetailsContent29';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail29 extends Component {
    render() {
        const meta = {
            title: "HireBeat Blog – The 4C's That You Need for Your Resume",
            description: "According to the experts, you need 4C's to stand out of the competition and become a primary choice for the hiring committee: Creativity, Communication, Collaboration, and Critical Thinking.",
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'Resume Optimization, ATS resume checker, how to write a resume'
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
                <BlogDetailsContent29 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail29;