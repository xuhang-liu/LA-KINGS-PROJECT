import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent28 from './BlogDetailsContent28';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail28 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – What Is Your Expected Salary?',
            description: "What is your expected salary? This article provides a few do’s and dont's of answering this tactical question with confidence and integrity.",
            canonical: 'https://hirebeat.co/blog-wha-is-your-expected-salary',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'salary, job seekers, interview, pay, intern, recruit, company, human resources, competitiveness, candidate'
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
                <BlogDetailsContent28 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail28;