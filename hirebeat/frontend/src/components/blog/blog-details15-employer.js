import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer15 from './BlogDetailsContentEmployer15';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer15 extends Component {
    render() {
        let title = "HireBeat Blog – 4 Secrets That Improve Your LinkedIn Job Posting Today";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Social platforms are the key to recruitment right now. LinkedIn is one of the most popular and commonly used recruiting tools these days. This article provides a few tactics to help you and your business stand out on LinkedIn and attract compelling candidates.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'LinkedIn, Job Posting, HR, Tech, candidates, Job, talent acquisition, HireBeat, recruit, career'
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
                <BlogDetailsContentEmployer15 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer15;