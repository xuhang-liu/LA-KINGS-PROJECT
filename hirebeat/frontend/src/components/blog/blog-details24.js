import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent24 from './BlogDetailsContent24';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail24 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – How to Answer the Question “What Makes You Stand Out from Other Candidates?”',
            description: 'Keep in mind that the question is an opportunity to explain to the interviewer how special you are as a potential employee.',
            canonical: 'https://hirebeat.co/blog-how-to-answer-the-question-what-makes-you-stand-out-from-other-candidates',
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
                    pageTitle="Blog Details" 
                    pageDescription="News and Insights" 
                />
                <BlogDetailsContent24 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail24;