import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer7 from './BlogDetailsContentEmployer7';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer7 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – Millennials? We Want You!',
            description: 'Employers need to work better to attract more millennials to their workplaces. This article explores the key qualities and problems to look out for in the hiring progress.',
            canonical: 'https://hirebeat.co/employer_blog-millennials-we-want-you',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'interview, millennials, hiring, creativity, loyalty, workplace, career, job, HireBeat'
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
                <BlogDetailsContentEmployer7 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer7;