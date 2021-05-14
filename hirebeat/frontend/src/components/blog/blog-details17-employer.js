import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer17 from './BlogDetailsContentEmployer17';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer17 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – Personality Assessment Tools Employers Must Know About',
            description: 'Personality assessment is a great tool that allows you to unravel various personality-related traits of the candidates that you are about to hire. This article helps you understand various personality assessment tests that you can come around and reduces your chances of failure recruiting.',
            canonical: 'https://hirebeat.co/employer_blog-personality-assessment-tools-employers-must-know-about',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'recruiting, personality assessment, talent acquisition, employer, job, interview, virtual, New York'
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
                <BlogDetailsContentEmployer17 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer17;