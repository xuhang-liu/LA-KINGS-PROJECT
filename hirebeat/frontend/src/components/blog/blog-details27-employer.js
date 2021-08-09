import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer27 from './BlogDetailsContentEmployer27';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer27 extends Component {
    render() {
        let title = "HireBeat Blog – Five ways Applicant tracking systems up";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Applicant Tracking System (the HR software that processes job applications) is increasingly being used by campus recruiters to sift through a sea of resumes, boost their company's image, and hire the top prospects ahead of their competition. Learn how ATS impacts your business and campus recruitment.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
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
                <BlogDetailsContentEmployer27 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer27;