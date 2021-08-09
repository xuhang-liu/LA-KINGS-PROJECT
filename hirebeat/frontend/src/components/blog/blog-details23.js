import React, { Component } from 'react';
import PageTitleArea from '../Common/PageTitleArea';
import BlogDetailsContent23 from './BlogDetailsContent23';
import FreeTrialArea from '../HomeSaas/FreeTrialArea';
import { useEffect } from "react";
import DocumentMeta from 'react-document-meta';

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

class BlogDetail23 extends Component {
    render() {
        let title = "HireBeat Blog – Good Questions to Ask the Employer at the End of The Interview";
        title = title.length > 70 ? title.substring(0, 67) + "..." : title;
        let description = "If you want to ace this question of “Where do you see yourself in 5 years?”, this article is something that you can’t miss. In this article, you will find a detailed breakdown of how to structure your responses base on different situation";
        description = description.length > 155 ? description.substring(0, 152) + "..." : description;
        const meta = {
            title: title,
            description: description,
            meta: {
              charset: 'utf-8',
              name: {
                keywords: 'interview, jobs, job interview, recruiting, hiring, interview tips'
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
                <BlogDetailsContent23 />
                <FreeTrialArea />
            </React.Fragment>
            </DocumentMeta>
        );
    }
}

export default BlogDetail23;