import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer19 from './BlogDetailsContentEmployer19';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer19 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – Employer Branding vs Recruitment Marketing',
            description: 'Employer branding and recruitment marketing are two terms that are used relatively interchangeably by a lot of people although there is a clear distinction between the two.',
            canonical: 'https://hirebeat.co/employer_blog-employer-branding-vs-recruitment-marketing',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'ats, hiring, recruiting, talent acquisition, hr, hrtech, job, interview, candidate, sort'
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
                <BlogDetailsContentEmployer19 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer19;