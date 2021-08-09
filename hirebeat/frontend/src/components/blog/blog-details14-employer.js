import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer14 from './BlogDetailsContentEmployer14';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer14 extends Component {
    render() {
        let title = "HireBeat Blog – Five Questions You Need to Ask to Hire the Best Intern";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "Interview questions for internships are different from full-time candidates. This article provides five key questions to assess intern candidates during job interviews.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'internship, campus recruitment, campus recruiting, job, interview, strategy, millennials. candidate, job fair, New York, NYC, California, Texas'
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
                <BlogDetailsContentEmployer14 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer14;