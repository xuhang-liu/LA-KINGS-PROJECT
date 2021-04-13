import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent25 from './BlogDetailsContent25';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail25 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – 4 Most Commonly Asked Questions in an Interview',
            description: 'This article shares the four most commonly asked questions in an interview and how they can benefit the interviewer.',
            canonical: 'https://hirebeat.co/blog-4-most-commonly-asked-questions-in-an-interview',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'Interview, question, job, intern, recruit, company, human resources'
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
                <BlogDetailsContent25 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail25;