import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContentEmployer12 from './BlogDetailsContentEmployer12';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail1_Employer12 extends Component {
    render() {
        const meta = {
            title: 'HireBeat Blog – Workplace Camaraderie: Your Powerful Tool For Success',
            description: 'Camaraderie helps build a high-level teamwork and a more harmonious workplace. This article digs deeper into Camaraderie and aids you to build a workplace camaraderie.',
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'campus recruitment, recruit, job, interview, strategy, camaraderie. candidate, job fair, workplace, diversity, New York, NYC, California, Texas'
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
                <BlogDetailsContentEmployer12 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail1_Employer12;