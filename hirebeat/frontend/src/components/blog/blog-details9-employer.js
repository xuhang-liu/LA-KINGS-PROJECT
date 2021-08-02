import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer9 from './BlogDetailsContentEmployer9';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer9 extends Component {
    render() {
        let title = "HireBeat Blog – Boost Up Your ROI Using Video Interviews";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Video interviews have gone viral these days because it provides an efficient and easy way for the business to achieve high performance. This article helps illustrate how video interviews could help in four ways.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'hiring, recruitment, job, interview, human resources, ROI, video, business'
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
                <BlogDetailsContentEmployer9 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer9;