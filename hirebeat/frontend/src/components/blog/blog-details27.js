import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent27 from './BlogDetailsContent27';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail27 extends Component {
    render() {
        let title = "HireBeat Blog – Ace Your Zoom Job Interview";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "In this write-up, we will share some of the most essential points that an interviewee should focus on to ace the ZOOM job interview. Read till the end if you are thinking of ace your ZOOM virtual interview.";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'Interview, question, job, intern, recruit, company, human resources, competitiveness, candidate, zoom, talent acquisition, virtual'
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
                <BlogDetailsContent27 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail27;