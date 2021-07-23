import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer26 from './BlogDetailsContentEmployer26';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer26 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – 5 Things You Need To Know About Applicant Tracking System',
            description: "Companies can use applicant tracking system tools to help in recruitment and hiring. Applicant tracking systems gather and save resumes in a database accessible to hiring managers. The 5 key benefits of the ATS system: Screening of Candidates more effective. Save time and decrease the probability of talent losing. Integrate job postings on multiple platforms. Increase brand appealing. Improve the Quality of Hiring.",
            canonical: 'https://hirebeat.co/employer_blog-5-things-you-need-to-know-about-applicant-tracking-system',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: "Applicant Tracking System"
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
                <BlogDetailsContentEmployer26 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer26;