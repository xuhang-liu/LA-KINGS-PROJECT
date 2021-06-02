import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer1 from './BlogDetailsContentEmployer1';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – How does a one-way interview help a company in its hiring?',
            description: 'One-way interviews are convenient for employers in various ways. A recruiter can invite a large number of applicants to participate. Completed interviews are in-boxed to the recruiter for review and evaluation by the hiring team',
            canonical: 'https://hirebeat.co/employer_blog-how-does-a-one-way-interview-help-a-company-in-its-hiring',
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
                <BlogDetailsContentEmployer1 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer;