import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer23 from './BlogDetailsContentEmployer23';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer23 extends Component {
    render() {
        let title = "HireBeat Blog – What’s Broken in the Talent Acquisition Process: Employers & Candidates Viewpoints";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Indeed, an employer faces many challenges when hiring, but the candidates' journey isn't smooth either. It's no secret that the process of talent acquisition is broken. Consider, What's Broken in the Talent Acquisition Process: Employers and Candidates Viewpoints.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
            meta: {
              charset: 'utf-8',
              name: {
                keywords: "What's Broken in the Talent Acquisition Process: Employers and Candidates Viewpoints"
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
                <BlogDetailsContentEmployer23 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer23;