import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer8 from './BlogDetailsContentEmployer8';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer8 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – How to Get Your Job Postings Noticed',
            description: 'It is important for employers to find ways to optimize job postings. This article offers various tactics to help companies stand out and get noticed.',
            canonical: 'https://hirebeat.co/employer_blog-how-to-get-your-job-postings-noticed',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'job, interview, recruit, google, schema, internship, internet, optimization'
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
                <BlogDetailsContentEmployer8 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer8;