import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer18 from './BlogDetailsContentEmployer18';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer18 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – How ATS works in the recruitment process',
            description: 'If you are a business owner yourself, you will want to obtain a good understanding of what exactly an ATS is and how you can use them. Read this article and learn about how ATS could help your business.',
            canonical: 'https://hirebeat.co/employer_blog-how-ATS-works-in-the-recruitment-process',
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
                <BlogDetailsContentEmployer18 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer18;