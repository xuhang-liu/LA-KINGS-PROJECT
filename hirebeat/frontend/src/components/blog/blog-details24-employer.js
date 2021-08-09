import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer24 from './BlogDetailsContentEmployer24';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer24 extends Component {
    render() {
        let title = "HireBeat Blog – Three Steps to Fix Your Broken Talent Acquisition Process";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "When a company has a broken talent acquisition process, it is losing money. This blog post shares three steps you can take to fix your broken and complex talent acquisition process!";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
            meta: {
              charset: 'utf-8',
              name: {
                keywords: "hr, ats, applicant tracking system blog, Talent Acquisition Process"
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
                <BlogDetailsContentEmployer24 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer24;