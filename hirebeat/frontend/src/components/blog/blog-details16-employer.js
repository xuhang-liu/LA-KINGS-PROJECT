import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer16 from './BlogDetailsContentEmployer16';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer16 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – Red Flags You Should Look Out In Candidates During The Interview',
            description: 'The price of hiring the wrong candidate is huge for businesses. Therefore, it would be helpful for the company to identify the red flags of the candidate during the interview to save time and money. This article provides some critical red flags and tips to avoid them.',
            canonical: 'https://hirebeat.co/employer_blog-red-flags-you-should-look-out-in-candidates-during-the-interview',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'campus recruitment, campus recruiting, job, interview, strategy, millennials. candidate, job fair, New York, NYC, California, Texas, red flags, hr, candidate acquisition'
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
                <BlogDetailsContentEmployer16 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer16;