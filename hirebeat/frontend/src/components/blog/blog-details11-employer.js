import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer11 from './BlogDetailsContentEmployer11';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer11 extends Component {
    render() {
        let title = "HireBeat Blog – How Covid Has Changed the Recruitment Process";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Virtual interview and virtual onboarding have become the main trend during the pandemic. This article explained how covid has changed the hiring process in 3 ways.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'recruitment, campus recruiting, job, interview, strategy, millennials. Virtual, onboard, candidate, job fair, New York, NYC, California, Texas'
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
                <BlogDetailsContentEmployer11 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer11;